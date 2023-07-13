let links=document.querySelector("#links")
let userinfo=document.querySelector("#user-info")
let user=document.querySelector("#user")

if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="flex"
    user.innerHTML=localStorage.getItem("username")

}
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html"
    },1500)
  
})
/****************************************** */

let allProducts=document.querySelector(".products")
let products=[
    {id:1, 
        title:"Soliter",
       color:"white",
       imageUrl:"images/Untitled.jpeg" 
    },

{id:2, 
    title:"Seliver Ring",
   color:"Seliver",
   imageUrl:"images/solitaire-ring.jpg" 
},
{id:3, 
    title:"Golden Ring",
   color:"golden",
   imageUrl:"images/images.jpeg"
},
{id:4, 
    title:"Roze Ring",
   color:"Pink",
   imageUrl:"images/2013_1373822293_619.jpg"
},

]
function drawitems(){
   let y=products.map((item)=>{
       return `<div class="product_item">
        <img src="${item.imageUrl}" class="img-product">
        <div class="description">
            <h2>${item.title}</h2>
            <p>It is Amazing! made in kanda</p>
            <span>${item.color}</span>
        </div>
        <div class="product_actions">
        <button class="add" onclick="additemtocarts(${item.id})">Add To Cart</button>
        <i class="far fa-heart heart1"></i>
        </div>
        
        </div>
        `
    })
    allProducts.innerHTML=y
    
}
drawitems()
let bag=document.querySelector(".bedge")
let productsDiv=document.querySelector(".cart_product div")
let additem=localStorage.getItem("addInCart") ? JSON.parse(localStorage.getItem("addInCart")):[]
if(additem){
    additem.map((item)=>{
        productsDiv.innerHTML+=`<P>${item.title}</p>`
    })
    bag.style.display="block"
            bag.innerHTML= additem.length
}



    if(localStorage.getItem="username"){
        function additemtocarts(id){
            let choosenitem=products.find((item)=>item.id===id)
            productsDiv.innerHTML+=`<P>${choosenitem.title}</p>`
            additem=[...additem,choosenitem]
            localStorage.setItem("addInCart",JSON.stringify(additem))

            bag.style.display="block"
            bag.innerHTML=document.querySelectorAll(".cart_product div p").length
        
        }
    }else{
        window.location="login.html"
    }



let productCart=document.querySelector(".cart_product")
let iconShoopingCart=document.querySelector(".shop")
iconShoopingCart.addEventListener("click",shopping)
function shopping(){
    if( productsDiv.innerHTML!=""){
        if(productCart.style.display=="block"){
            productCart.style.display="none" 
        }else{
            productCart.style.display="block"
        }

    }

}


