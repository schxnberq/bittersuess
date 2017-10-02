document.addEventListener("DOMContentLoaded", function () {

    //image galerie
    var galerieelements = document.querySelectorAll(".gallery__list__item a");
    var galerieelementsATag = document.querySelectorAll(".gallery__list__item a");
    var galerieelementsImgTags = document.querySelectorAll(".gallery__list__item a img");
    var documentmain = document.querySelector("main");
    var galeryactivator = function (event) {
        event.preventDefault();//hindert weiterleiten
        var actualvalue = parseInt(event.target.dataset.index);
        var galerylightbox = document.createElement("div");
        galerylightbox.setAttribute("class", "galerylightbox");//erstelle lightbox
        TweenLite.fromTo(galerylightbox, 0.3, {alpha: 0}, {alpha: 1});
        documentmain.appendChild(galerylightbox);
        var exitCnt = document.createElement("div");
        exitCnt.setAttribute("class", "exit-cnt");
        var galeryX1 = document.createElement("span");
        galeryX1.setAttribute("class", "galeryX x-one");

        var galeryX2 = document.createElement("span");
        galeryX2.setAttribute("class", "galeryX x-two");
        exitCnt.appendChild(galeryX1);
        exitCnt.appendChild(galeryX2);

        exitCnt.addEventListener("click", function () {
            setTimeout(function () {
                documentmain.removeChild(galerylightbox);
            }, 300);

        });
        console.log(event.target);



        var galeryorganizer = document.createElement("div");//zum platzieren einzelner objekte in css
        galeryorganizer.setAttribute("class", "inner-lightbox");




        var testCode = '<div class="slider js_slider"><div class="frame js_frame"><ul class="slides js_slides"><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big1.jpg" alt="" data-index="0"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big2.jpg" alt="" data-index="1"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big3.jpg" alt="" data-index="2"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big4.jpg" alt="" data-index="3"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big5.jpg" alt="" data-index="4"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big6.jpg" alt="" data-index="5"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big7.jpg" alt="" data-index="6"></li><li' +
            ' class="js_slide"><img src="../imgs/ueber-gallery/big/big8.jpg" alt="" data-index="7"></li></ul>' +
            '</div>' +
            '<div class="js_prev prev">' +
            '<span></span>' +
            '</div>' +
            '<div class="js_next next">' +
            '<span></span>' +
            '</div>';



        galerylightbox.appendChild(galeryorganizer);
        galerylightbox.appendChild(exitCnt);
        galeryorganizer.insertAdjacentHTML("beforeend", testCode);

        var click_idx = event.target.getAttribute("data-index");
        var click_img = document.querySelector(".js_slide img[data-index='" + click_idx + "']");
        console.log(click_idx);
        console.log(click_img);
        var click_li = click_img.parentNode;
        console.log(click_li);
        click_li.classList.add("active");

        var simple = document.querySelector('.js_slider');

        lory(simple, {
            infinite: 1,
            slideSpeed: 700,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
        });


    };


    for (var i = 0; i < galerieelements.length; i++) {
        galerieelements[i].addEventListener("click", galeryactivator);

    }


});