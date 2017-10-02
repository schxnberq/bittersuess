document.addEventListener("DOMContentLoaded", function (e) {

    var ueber_menu = document.querySelector(".ueber-menu__list");
    var ueber_menu_rect = ueber_menu.getBoundingClientRect();
    var menu_height = ueber_menu_rect.height + 10;

    console.log(menu_height);


    document.querySelector(".ueber-h1").addEventListener("click", function (e) {


        if(!document.querySelector(".ueber-clicked")) {
            TweenLite.to(document.querySelector(".ueber-menu"), .7, {
                opacity: 1,
                visibility: "visible",
                height: menu_height,
                classList: "ueber-menu hiddenOnDesktop ueber-clicked",
                ease: Power4.easeOut
            });
            document.querySelector(".ueber-h1 span i").classList.add("clicked");
        } else {
            TweenLite.to(document.querySelector(".ueber-menu"), .7, {
                opacity: 0,
                visibility: "hidden",
                height: 0,
                classList: "ueber-menu hiddenOnDesktop ",
                ease: Power4.easeOut
            });
            document.querySelector(".ueber-h1 span i").classList.remove("clicked");
        }



        console.log("fin");


    })


})