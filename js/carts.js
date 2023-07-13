let addInCart=localStorage.getItem("addInCart")
let allProducts=document.querySelector(".products")
let productsDiv=document.querySelector(".cart_product div")

if(addInCart){
   let item= JSON.parse(addInCart)
    drawcartproduct(item)
}

function drawcartproduct(products) {
    let y=products.map((item)=>{
        return `<div class="product_item">
         <img src="${item.imageUrl}" class="img-product">
         <div class="description">
             <h2>${item.title}</h2>
             <p>It is Amazing! made in kanda</p>
             <span>${item.color}</span>
         </div>
         <div class="product_actions">
         <button class="add" onclick="removeFromCart(${item.id})">Remove from Cart</button>
         <i class="far fa-heart heart1"></i>
         </div>
         
         </div>
         `
     })
     allProducts.innerHTML=y
 }
 
