const panel_menu = document.querySelector(".panel-menu")
const menu_icon = document.querySelector(".menu_icon");

menu_icon.addEventListener("click", menu_controll)

function menu_controll (){
    panel_menu.classList.remove("left")
    panel_menu.classList.add("right")
    menu_opacity_panel.classList.add("opacity-true")
    menu_opacity_panel.classList.remove("panel_display-none")
    menu_opacity_panel.classList.remove("opacity-false")



    close_menu_btn.classList.remove("close_opacity-false")
    close_menu_btn.classList.add("close_opacity-true")
}

// *******************  PANEL BACKGROUND OPACITY  **
const menu_opacity_panel = document.querySelector(".menu_opacity-panel")
const close_menu_btn = document.querySelector(".close_menu-btn")
menu_opacity_panel.addEventListener("click", menu_controll_bye)






function menu_controll_opacity(){
    menu_opacity_panel.classList.add("panel_display-none")
}

function menu_controll_bye(){
    panel_menu.classList.remove("right")
    panel_menu.classList.add("left")
    menu_opacity_panel.classList.remove("opacity-true")
    menu_opacity_panel.classList.add("opacity-false")

    close_menu_btn.classList.remove("close_opacity-true")
    close_menu_btn.classList.add("close_opacity-false")
    

    //Llamando a función desaparecer objetos después de opacarlos (1segundo)
    setTimeout(()=> {menu_controll_opacity()}, 500)
}


