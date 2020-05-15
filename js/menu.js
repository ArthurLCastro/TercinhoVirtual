function menuIcon(x) {
    x.classList.toggle("change");

    var menuBox = document.getElementsByClassName("menu-box")[0];
    var opcoesMenu = document.getElementById("opcoes-menu");

    if(menuBox.style.width != "300px"){
        menuBox.style.width = "300px";
        opcoesMenu.style.visibility = "visible";
    } else {
        menuBox.style.width = "0px";
        opcoesMenu.style.visibility = "hidden";
    }
}