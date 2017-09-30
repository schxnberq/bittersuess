window.addEventListener('load', function () {


    var getUrl = window.location.href;

    var getID = getUrl.substring(getUrl.indexOf("#") + 1);

    /*var get_id_el = document.querySelector("#" + getID);

    var getLink = document.querySelector(".main__menu__list__item a[data-type=" + '"' + getID + '"]');*/


    var links = document.querySelectorAll(".main__menu__list__item a");

    var firstItem = document.querySelector(".solo-cnt__item");
    var firstItemRect = firstItem.getBoundingClientRect();


    var scrollOff = firstItemRect.top + window.scrollY;

    function checkWidth() {
        if (window.innerWidth <= 768) {
            scrollOff = scrollOff / 2.85;
            console.log(">768px");
        }
    }


    /*TweenLite.to(window, 0.8, {
        scrollTo: {y: scroll, offsetY: scrollOff},
        ease: Expo.easeInOut
    });*/

    window.addEventListener("resize", checkWidth);


    var getCurrLink = document.querySelector("[data-type='" + getID + "']");

    var getCurrItem = getCurrLink.parentElement;




    getCurrItem.classList.add("menu__active");


    for (i = 0; i <= links.length - 1; i++) {

        links[i].addEventListener("click", function (e) {

                e.preventDefault();

                var href = e.target.getAttribute("href");

                var scroll = document.querySelector(href);


                TweenLite.to(window, 0.8, {
                    scrollTo: {y: scroll},
                    ease: Expo.easeInOut
                });


                var active = document.querySelector("li.menu__active");

                var that = this.parentElement;

                that.classList.add("menu__active");

                if (active) {
                    active.classList.remove("menu__active");
                }
            }
        )
    }
    var solo_cnt = document.querySelectorAll(".solo-cnt__item");
    var li_links = document.querySelectorAll(".main__menu__list__item");


    solo_cnt.forEach(function (t) {

        var waypoint = new Waypoint({
            element: t,
            handler: function (direction) {

                var that = this;
                var upOff;

                function calcOff() {
                    var newOff = that.options.offset = scrollOff * 50;
                    return newOff;
                }

                var old_active = document.querySelector(".menu__active");

                var solo_idx = t.getAttribute("data-idx");

                var li_idx = document.querySelector(".main__menu__list__item[data-idx='" + solo_idx + "']");

                if (direction === "down") {
                    old_active.classList.remove("menu__active");
                    li_idx.classList.add("menu__active");
                }

                if (direction === "up") {
                    this.options.offset = 0;
                    old_active.classList.remove("menu__active");
                    li_idx.previousElementSibling.classList.add("menu__active");
                }

            },
            offset: function () {
                return this.element.clientHeight / 2
            }
        });


    });


});



