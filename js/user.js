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