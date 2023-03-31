let API = "https://63c66f314ebaa8028545abad.mockapi.io/device/"



let products = [];
function fetchdata() {


    fetch(API)
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            products = data;
            showdata(data)
            console.log(data);
        })

}
fetchdata()





let cartdata = JSON.parse(localStorage.getItem("cart")) || []

function showdata(data) {
    document.querySelector(".products").innerHTML = "";

    data.forEach(element => {

        let div = document.createElement("div")
        div.classList.add("divclass")

        let img = document.createElement("img")
        img.src = element.image
        img.style.height = "200px"

        let price = document.createElement("p")
        price.innerText = "Rs. " + element.price
        price.style.color = "#003380"

        let name = document.createElement("p")
        name.textContent = element.name
        name.classList.add("name")

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart";
        btn.classList.add("addtocart")


        div.append(img, name, price, btn)

        document.querySelector(".products").append(div)
    });

}
// <------sorting------->

document.querySelector(".high").addEventListener("click", () => {
    document.querySelector(".high").style.backgroundColor = "#003380"
    document.querySelector(".high").style.color = "white"
    document.querySelector(".high").style.borderColor = "#003380"
    document.querySelector(".low").style.backgroundColor = "white"
    document.querySelector(".low").style.color = "black"
    sortlowtohigh();
});

function sortlowtohigh() {
    products.sort((a, b) => a.price - b.price);
    showdata(products);
}

document.querySelector(".low").addEventListener("click", () => {
    document.querySelector(".low").style.backgroundColor = "#003380"
    document.querySelector(".low").style.color = "white"
    document.querySelector(".low").style.borderColor = "#003380"
    document.querySelector(".high").style.backgroundColor = "white"
    document.querySelector(".high").style.color = "black"
    hightolow();
});

function hightolow() {
    products.sort((a, b) => b.price - a.price);
    showdata(products);
}


// <----filter by category----->

let cate = document.querySelectorAll(".categoryinp input")

for (let i = 0; i < cate.length; i++) {
    cate[i].addEventListener("change", () => {

        if(cate[i].checked){
            for (let j = 0; j < cate.length; j++) {
                if (j !== i) {
                    cate[j].checked = false;
                }
            }
        }

        document.querySelector(".products").innerHTML = "";

        let catefilter = products.filter((element) => {
            if (element.category == cate[i].value) {
                return element
            }
        })
        showdata(catefilter)
        if (cate[i].value == "all") {
            showdata(products)
        }
    })
}




