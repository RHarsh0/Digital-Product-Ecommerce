let API = "https://63c66f314ebaa8028545abad.mockapi.io/device/"



fetch(API)
	.then((response)=>{
        return response.json()
    })   
	.then((data) =>{
         console.log(data)
        showdata(data)
       
        
    })
	// .catch(err => console.log(err));

let cartdata = JSON.parse(localStorage.getItem("cart")) || []    

function showdata(data){
    document.querySelector(".products").innerHTML="";  

    data.forEach(element => {

     let div = document.createElement("div")
     div.classList.add("divclass")

     let img = document.createElement("img")
     img.src = element.image
     img.style.height="200px"

     let price = document.createElement("p")
     price.innerText = "Rs. " + element.price
     price.style.color="#003380"

     let name = document.createElement("p")
     name.textContent = element.name
     name.classList.add("name")

     let btn = document.createElement("button")
     btn.innerText = "Add to Cart";
     btn.classList.add("addtocart")


     div.append(img,name,price,btn)

     document.querySelector(".products").append(div)
     });
    
    }

