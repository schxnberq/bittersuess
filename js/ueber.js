document.addEventListener("DOMContentLoaded", function () {

    //image galerie
    var galerieelements = document.querySelectorAll(".gallery__list__item a");
    var galerieelementsATag = document.querySelectorAll(".gallery__list__item a");
    var galerieelementsImgTags = document.querySelectorAll(".gallery__list__item a img");
    var documentmain = document.querySelector("main");
    var galeryactivator = function (event) {
        event.preventDefault();//hindert weiterleiten

        var actualvalue = event.target.dataset.index;


        var galerylightbox = document.createElement("div");
        galerylightbox.setAttribute("class", "galerylightbox");//erstelle lightbox


        TweenLite.fromTo(galerylightbox, 0.3, {alpha: 0}, {alpha: 1});
        documentmain.appendChild(galerylightbox);
        /*var escapelightbox = document.createElement("div");//button zum escapen
        escapelightbox.setAttribute("class", "escapebutton");
        galerylightbox.appendChild(escapelightbox);*/
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
        var galeryorganizer = document.createElement("div");//zum platzieren einzelner objekte in css
        galeryorganizer.setAttribute("class", "inner-lightbox");

        var galeryactiveimg = document.createElement("img");//hauptimage
        activeImgAttributes = event.target.parentElement.getAttribute("href");//hole mir link von geklicktem img

        galeryactiveimg.setAttribute("src", activeImgAttributes);//set img
        galeryactiveimg.setAttribute("class", "activegaleryimg");//set css for active img

        var buttonCntBack = document.createElement("div");
        buttonCntBack.setAttribute("class", "buttonCnt-Back");

        var galeryButtonBack = document.createElement("i");//backbutton
        galeryButtonBack.setAttribute("class", "galerybackbutton left-i");

        buttonCntBack.appendChild(galeryButtonBack);


        var buttonCntForw = document.createElement("div");
        buttonCntForw.setAttribute("class", "buttonCnt-Forw");

        var galeryButtonForward = document.createElement("i");//forw-button
        galeryButtonForward.setAttribute("class", "galeryforwardbutton right-i");

        buttonCntForw.appendChild(galeryButtonForward);




        //platzieren der erstellten objekte
        galerylightbox.appendChild(exitCnt);
        galerylightbox.appendChild(galeryorganizer);//div for flex items
        galeryorganizer.appendChild(buttonCntBack);
        /*galeryorganizer.appendChild(galeryButtonBack);//setze img mit buttons*/
        galeryorganizer.appendChild(galeryactiveimg);//--
        galeryorganizer.appendChild(buttonCntForw);
        /*galeryorganizer.appendChild(galeryButtonForward);//--*/




        var galerypicturenavigation = document.createElement("ul");//zum platzieren einzelner objekte in css
        galerypicturenavigation.setAttribute("class", "selected-lightbox-imgs");//
        galerylightbox.appendChild(galerypicturenavigation);//setze ul für  bilder

        var activeImgChanger = document.querySelector(".activegaleryimg");

        var lightboxChanger = function (event) {


            event.preventDefault();//verhindert weiterleiten
            activeImgAttributes = event.target.parentElement.getAttribute("href");//hole mir link von geklicktem img
            galeryactiveimg.setAttribute("src", activeImgAttributes);//set img
            var newLightBoxImgList = document.querySelectorAll(".newLightboxImg");
            actualvalue = event.target.dataset.index;


            for (var i = 0; i < newLightBoxImgList.length; i++) {
                newLightBoxImgList[i].className = "newLightboxImg";
            }
            event.target.className = "newLightboxImg activeGalerieImgNavigation";


        };

        var touchStartCoords =  {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
            touchEndCoords = {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
            direction = 'undefined',// Swipe direction
            minDistanceXAxis = 30,// Min distance on mousemove or touchmove on the X axis
            maxDistanceYAxis = 30,// Max distance on mousemove or touchmove on the Y axis
            maxAllowedTime = 1000,// Max allowed time between swipeStart and swipeEnd
            startTime = 0,// Time on swipeStart
            elapsedTime = 0,// Elapsed time between swipeStart and swipeEnd
            targetElement = document.querySelector('.activegaleryimg');// Element to delegate

        function swipeStart(e) {
            e = e ? e : window.event;
            e = ('changedTouches' in e)?e.changedTouches[0] : e;
            touchStartCoords = {'x':e.pageX, 'y':e.pageY};
            startTime = new Date().getTime();
            targetElement.textContent = " ";
        }

        function swipeMove(e){
            e = e ? e : window.event;
            e.preventDefault();
        }

        function swipeEnd(e) {
            e = e ? e : window.event;
            e = ('changedTouches' in e)?e.changedTouches[0] : e;
            touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= maxAllowedTime){
                if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
                    direction = (touchEndCoords.x < 0)? 'left' : 'right';
                    switch(direction){
                        /*targetElement.textContent = "Left swipe detected";*/
                        case 'left':
                            lastImg();
                            break;
                            /*targetElement.textContent = "Right swipe detected";*/
                        case 'right':
                            nextImg();
                            break;
                    }
                }
            }
        }

        function addMultipleListeners(el, s, fn) {
            var evts = s.split(' ');
            for (var i=0, iLen=evts.length; i<iLen; i++) {
                el.addEventListener(evts[i], fn, false);
            }
        }

        addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
        addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
        addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);


        var lastImg = function () {
            actualvalue = parseInt(actualvalue);
            if (actualvalue == 0 || actualvalue == -1) {
                actualvalue = 6;
            }

            for (var i = 0; i < newLightBoxImgList.length; i++) {
                newLightBoxImgList[i].className = "newLightboxImg";
            }


            var prevValue = parseInt(actualvalue) - 1;
            newLightBoxImgList[prevValue].className = "newLightboxImg activeGalerieImgNavigation";

            actualvalue = prevValue;


            TweenLite.to(activeImgChanger, 0.3, {x: "1000", alpha: 0});

            setTimeout(function () {
                activeImgAttributes = newLightBoxImgList[prevValue].parentElement.getAttribute("href");//hole mir link von
                // geklicktem img
                galeryactiveimg.setAttribute("src", activeImgAttributes);//set img*/
                TweenLite.fromTo(activeImgChanger, 0.3, {x: "-1000"}, {x: "0", alpha: 1});
            }, 300);


        }

        buttonCntBack.addEventListener("click", lastImg);


        var nextImg = function () {

            if (actualvalue == 7) {
                actualvalue = -1;
            }

            for (var i = 0; i < newLightBoxImgList.length - 1; i++) {
                newLightBoxImgList[i].className = "newLightboxImg";
            }


            var nextValue = parseInt(actualvalue) + 1;
            actualvalue = nextValue;


            newLightBoxImgList[nextValue].className = "newLightboxImg activeGalerieImgNavigation";


            TweenLite.to(activeImgChanger, 0.3, {x: "-1000", alpha: 0});

            setTimeout(function () {
                activeImgAttributes = newLightBoxImgList[nextValue].parentElement.getAttribute("href");//hole mir link von
                // geklicktem img
                galeryactiveimg.setAttribute("src", activeImgAttributes);//set img
                TweenLite.fromTo(activeImgChanger, 0.3, {x: "1000"}, {x: "0", alpha: 1});
            }, 300);


        }


        buttonCntForw.addEventListener("click", nextImg);

        for (var i = 0; i < galerieelements.length; i++) {//erstelle elemente

            var newLightboxLi = document.createElement("li");//neue li
            newLightboxLi.setAttribute("class", "newLightboxLi");
            galerypicturenavigation.appendChild(newLightboxLi);

            var newLightboxATag = document.createElement("a");//neue a tags
            newLightboxATag.setAttribute("class", "newLightboxATag");
            var galerieelementsATagHrefAttr = galerieelementsATag[i].getAttribute("href");
            newLightboxATag.setAttribute("href", galerieelementsATagHrefAttr);
            newLightboxLi.appendChild(newLightboxATag);
            newLightboxATag.addEventListener("click", lightboxChanger);

            var newLightboxImg = document.createElement("img");//neue imgs
            var galerieelementsImgSrcAttr = galerieelementsImgTags[i].getAttribute("src");
            newLightboxImg.setAttribute("src", galerieelementsImgSrcAttr);
            newLightboxImg.setAttribute("class", "newLightboxImg");
            newLightboxImg.setAttribute("alt", "js-bildergalerie-element");
            newLightboxATag.appendChild(newLightboxImg);
            newLightboxImg.setAttribute("data-index", i.toString());


        }
        var newLightBoxImgList = document.querySelectorAll(".newLightboxImg");

        newLightBoxImgList[actualvalue].className = "newLightboxImg activeGalerieImgNavigation";


    };


    for (var i = 0; i < galerieelements.length; i++) {
        galerieelements[i].addEventListener("click", galeryactivator);


    }


});
