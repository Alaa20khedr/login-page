let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginBtn=document.querySelector("#sign")
getuser=localStorage.getItem("username")
getpass=localStorage.getItem("password")
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(username.value===""||password.value===""){
        alert("please fill data")
    }else{
        if(getuser && getuser.trim()===username.value.trim() && getpass && getpass.trim()===password.value){
            setTimeout(()=>{
                window.location="index.html"
            },3000)

        } else{
            alert("username or password is wrong")
        }
    }
})