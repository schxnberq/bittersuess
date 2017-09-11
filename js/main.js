document.addEventListener("DOMContentLoaded", function () {

    var overlayMenu = document.querySelector(".overlayMenu");
    var burger = document.querySelector(".nav__burger");
    var spanLine1 = document.querySelector(".span-line1");
    var spanLine2 = document.querySelector(".span-line2");
    var spanLine3 = document.querySelector(".span-line3");

    var changeZIndex = document.querySelectorAll(".overview__list__item");


    document.querySelector(".nav__burger").addEventListener("click", function () {

        overlayMenu.classList.toggle("overlayHide");
        var burgers = burger.children;
        spanLine1.classList.toggle("open");
        spanLine2.classList.toggle("open");
        spanLine3.classList.toggle("open");
        //changeZIndex.style.zIndex="-1";

       /* changeZIndex.forEach(function (p, idx) {
            console.log("fin");

            console.log(p.style.zIndex,idx);

            if(p.style.zIndex === "") {
                p.style.zIndex = "-1"
            } else {
                setTimeout(function () {
                    p.style.zIndex = ""
                }, 300)

            }


        });*/

    });

});