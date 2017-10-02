document.addEventListener("DOMContentLoaded", function (e) {

    var ueber_menu = document.querySelector(".ueber-menu__list");
    var ueber_menuH = ueber_menu.offsetHeight;

    console.log(ueber_menuH);

    var clicked = false;
    document.querySelector(".ueber-h1").addEventListener("click", function () {


        /*TweenLite.to(document.querySelector(".ueber-menu"), .5, {
            opacity: 0,
            visibility: "hidden",
            height: "0",
            ease: Expo.easeOut
        });*/
        if(!document.querySelector(".ueber-clicked")) {
            TweenLite.to(document.querySelector(".ueber-menu"), .7, {
                opacity: 1,
                visibility: "visible",
                height: ueber_menuH,
                classList: "ueber-menu ueber-clicked",
                ease: Power4.easeOut
            });
        } else {
            TweenLite.to(document.querySelector(".ueber-menu"), .7, {
                opacity: 0,
                visibility: "hidden",
                height: 0,
                classList: "ueber-menu ",
                ease: Power4.easeOut
            });
        }



        console.log("fin");


    })


})