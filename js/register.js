let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let regBtn=document.querySelector("#sign_up")

regBtn.addEventListener("click", function(e){
    e.preventDefault()

    if(username.value ==="" || email.value===""|| password.value==="" ){
        alert("please enter your data")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="login.html"
        },2000)
    }
})