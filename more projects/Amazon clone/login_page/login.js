const login_checkbox = document.getElementById("login_checkbox");
const sign_in_wrapper = document.querySelector(".sign_in-wrapper")
const login_form = document.querySelector(".login_form")
const login_container = document.querySelector(".login_container")
const sign_in_checkbox = document.getElementById("sign_in-checkbox")
const sign_in_container = document.querySelector(".sign_in_container")

login_checkbox.addEventListener("click", login_activate)

function login_activate(){
    
    sign_in_wrapper.classList.add("disappear")
    login_form.classList.remove("disappear")

    sign_in_container.classList.remove("background-white")
    login_container.classList.add("background-white")
}


sign_in_checkbox.addEventListener("click", sign_in_activate)
function sign_in_activate(){
    login_form.classList.add("disappear")
    sign_in_wrapper.classList.remove("disappear")

    sign_in_container.classList.add("background-white")
    login_container.classList.remove("background-white")
}