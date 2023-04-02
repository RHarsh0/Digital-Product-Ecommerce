# squeamish-territory-6213



code for cart
<script>
    let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
    let cardcont = document.getElementById("card_list_render")
    console.log(cartdata);
// cartdata.forEach((el)=>{console.log(el)})

    function cards(data){
        cartdata.forEach(element => {
            let c = 0;
            let cntcont = document.createElement("div");
            let card = document.createElement("div");
            let name = document.createElement("h3");
            name.innerText = element.name;
            let img = document.createElement("img");
            img.src = element.image;
            let price = document.createElement("p");
            price.innerText = element.price;
            let desc = document.createElement("p");
            desc.innerText = element.desc;
            let brand = document.createElement("p");
            brand.innerText = element.brand;
            let count = document.createElement("p");
            count.innerText = c;
            let addbtn = document.createElement("button");
            addbtn.innerText = "+";
            let subbtn = document.createElement("button");
            subbtn.innerText = "-";
            addbtn.addEventListener("click",function(){
                c++;
                count.innerText = c;
            })
            subbtn.addEventListener("click",function(){
                c--;
                count.innerText = c;
            })
            // console.log(img,name,price,desc,brand);
            cntcont.append(subbtn,count,addbtn)
            card.append(img,name,brand,price,desc,cntcont);
            cardcont.append(card);
        });
        console.log(cardcont);
    }
    cards(cartdata)
//     function cardlist(cartdata){
//         let lists = `<span>
//             ${cartdata.map((el)=>cards(el.image,el.name,el.price,el.desc,el.brand)).join(" ")}
//             </span>`
//      cardcont.innerHTML = lists
//     }

// cardlist(cartdata)

//     function cards(img,name,price,desc,brand){
//         let card = `<div>
//             <img src="${img}">
//             <h3>${name}</h3>
//             <p>${desc}</p>
//             <p>${price}</p>
//             <p>${brand}</p>
//             </div>`
//             return card
//     }
</script>
