window.addEventListener('load', function () {


    var getUrl = window.location.href;

    var getID = getUrl.substring(getUrl.indexOf("#") + 1);


    if (getID.indexOf('to') === 0) {
        getID = getID.replace("to", "");
    }


    var getLink = document.querySelector(".main__menu__list__item a[data-type=" + '"' + getID + '"]');


    var links = document.querySelectorAll(".main__menu__list__item a");


    for (i = 0; i <= links.length - 1; i++) {


        links[i].addEventListener("click", function (e) {

                e.preventDefault();

                var href = e.target.getAttribute("href");

                var scroll = document.querySelector(href);

                var firstItem = document.querySelector("#tovanilla");
                var scrollRect = firstItem.getBoundingClientRect();

                var scrollOff = scrollRect.top + window.scrollY;


                TweenLite.to(window, 0.8, {
                    scrollTo: {y: scroll, offsetY: scrollOff},
                    ease: Expo.easeInOut
                })


                var active = document.querySelector("li.menu__active");

                var that = this.parentElement;

                that.classList.add("menu__active");

                if (active) {
                    active.classList.remove("menu__active");
                }

            }
        )
    }

    if (getLink) {
        setTimeout(function () {
            getLink.click()
        }, 250)

    }


})
;



