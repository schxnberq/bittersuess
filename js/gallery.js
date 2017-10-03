document.addEventListener("DOMContentLoaded", function (e) {


    var thmb_links = document.querySelectorAll(".gallery__list__item a");
    var main = document.querySelector("main");


    var gallery = function (event) {

        event.preventDefault();//hindert weiterleiten
        var idx = parseInt(event.target.dataset.index);
        console.log(idx);


        var lightbox_cnt = document.createElement("div");
        lightbox_cnt.setAttribute("class", "lightbox-cnt");//erstelle lightbox

        TweenLite.fromTo(lightbox_cnt, 0.5, {alpha: 0}, {alpha: 1});
        main.appendChild(lightbox_cnt);

        var lightbox = document.createElement("div");
        lightbox.setAttribute("class", "lightbox");//erstelle lightbox__cnt
        lightbox_cnt.appendChild(lightbox);


        var prev_cnt = document.createElement("div");
        prev_cnt.setAttribute("class", "lightbox__prev slide-nav");
        var prev_arr = document.createElement("span");
        prev_cnt.appendChild(prev_arr);

        var next_cnt = document.createElement("div");
        next_cnt.setAttribute("class", "lightbox__next slide-nav");
        var next_arr = document.createElement("span");
        next_cnt.appendChild(next_arr);

        var exitCnt = document.createElement("div");
        exitCnt.setAttribute("class", "lightbox__exit");

        var galeryX1 = document.createElement("span");
        var galeryX2 = document.createElement("span");
        exitCnt.appendChild(galeryX1);
        exitCnt.appendChild(galeryX2);

        var lightbox_img = document.createElement("div");
        lightbox_img.setAttribute("class", "lightbox__img");//erstelle lightbox___img

        var get_link = event.target.parentNode;
        var link_src = get_link.getAttribute("href");

        var new_img = document.createElement("img");

        lightbox.appendChild(prev_cnt);

        new_img.setAttribute("src", link_src);
        lightbox_img.appendChild(new_img);


        lightbox.appendChild(exitCnt);

        lightbox.appendChild(lightbox_img);
        lightbox.appendChild(next_cnt);


        var idx_more = idx + 1;
        var idx_less = idx - 1;


        var click_off = window.innerWidth / 5;


        /*    TweenLite.to(document.querySelector('.lightbox__img'), 1, {
                scrollTo: new_img,
                ease: Expo.easeOut
            })*/


        new_img.classList.add("active");

        for (var i = 0; i < idx; i++) {

            var prev_links = document.querySelector("[data-index='" + i + "']").parentNode;
            var prev_links_src = prev_links.getAttribute("href");

            var get_prev_imgs = document.createElement("img");
            get_prev_imgs.setAttribute("src", prev_links_src);

            lightbox_img.prepend(get_prev_imgs);

            new_img.before(get_prev_imgs);


        }

        for (var z = 0; z < thmb_links.length - idx_more; z++) {

            var new_idx = idx_more + z;

            var next_links = document.querySelector("[data-index='" + new_idx + "']").parentNode;
            var next_links_src = next_links.getAttribute("href");


            var get_next_imgs = document.createElement("img");
            get_next_imgs.setAttribute("src", next_links_src);

            lightbox_img.append(get_next_imgs);


        }

        var all_imgs = document.querySelectorAll(".lightbox__img img");

        var clicked_nav = false;
        var direction;

        function slide(dir, arr) {

            var active_img = document.querySelector(".lightbox__img img.active");

            var direction = dir;
            var array_pos = arr;
            /*console.log(active_img[direction]);
            console.log(all_imgs[array_pos]);*/

            var prev_img = active_img[direction];

            var slide_in;
            var slide_out;

            if(dir.indexOf("previous") !== - 1) {
                console.log("prev");
                slide_in = "30%";
                slide_out = "70%";
            } else {
                console.log("next");
                slide_in = "70%";
                slide_out = "30%";
            }

            console.log("In" + slide_in, "Out" + slide_out);

            function tween() {
                if (!active_img[direction]) {
                    active_img.classList.remove("active");
                    all_imgs[array_pos].classList.add("active");
                    TweenLite.fromTo(all_imgs[array_pos], 0.25, {
                        alpha: 0,
                        left: slide_in
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: slide_out,
                        ease: Power2.easeOut
                    });

                } else {
                    active_img.classList.remove("active");
                    active_img[direction].classList.add("active");
                    TweenLite.fromTo(prev_img, 0.25, {
                        alpha: 0,
                        left: slide_in
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: slide_out,
                        ease: Power2.easeOut
                    });
                }
            }

            window.requestAnimationFrame(tween);

        }

        // CLEAN FUNCTION FOR TWEENING
        prev_cnt.addEventListener("click", function () {
            slide("previousElementSibling", all_imgs.length - 1);

        });

        next_cnt.addEventListener("click", function () {
            slide("nextElementSibling", 0)
        });

        // EXTRA FUNCTION FOR TWEENING
        /*prev_cnt.addEventListener("click", function () {

            var active_img = document.querySelector(".lightbox__img img.active");
            var prev_img = active_img.previousElementSibling;

            function tween() {

                if (!active_img.previousElementSibling) {
                    active_img.classList.remove("active");
                    all_imgs[all_imgs.length - 1].classList.add("active");
                    TweenLite.fromTo(all_imgs[all_imgs.length - 1], 0.25, {
                        alpha: 0,
                        left: "25%"
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: "75%",
                        ease: Power4.easeOut
                    });

                } else {
                    active_img.classList.remove("active");
                    prev_img.classList.add("active");
                    TweenLite.fromTo(prev_img, 0.25, {
                        alpha: 0,
                        left: "25%"
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: "75%",
                        ease: Power4.easeOut
                    });
                }
            }
            window.requestAnimationFrame(tween);
        });

        next_cnt.addEventListener("click", function () {

            var active_img = document.querySelector(".lightbox__img img.active");
            var next_img = active_img.nextElementSibling;

            function tween() {

                if (!active_img.nextElementSibling) {
                    active_img.classList.remove("active");
                    all_imgs[0].classList.add("active");
                    TweenLite.fromTo(all_imgs[0], 0.25, {
                        alpha: 0,
                        left: "75%"
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: "25%",
                        ease: Power4.easeOut
                    });

                } else {
                    active_img.classList.remove("active");
                    next_img.classList.add("active");
                    TweenLite.fromTo(next_img, 0.25, {
                        alpha: 0,
                        left: "75%"
                    }, {
                        delay: 0.35,
                        alpha: 1,
                        left: "50%",
                        zIndex: 99,
                        ease: Power2.easeOut
                    });

                    TweenLite.fromTo(active_img, 0.25, {
                        alpha: 1,
                        left: "50%"
                    }, {
                        zIndex: 0,
                        alpha: 0,
                        left: "25%",
                        ease: Power4.easeOut
                    });
                }

            }

            window.requestAnimationFrame(tween);


        });*/


        exitCnt.addEventListener("click", function () {
            TweenLite.fromTo(lightbox_cnt, 0.35, {alpha: 1}, {alpha: 0});
            TweenLite.fromTo(exitCnt, 0.35, {alpha: 1}, {alpha: 0});
            setTimeout(function () {
                main.removeChild(lightbox_cnt);
            }, 300)


        });

        /*next_cnt.addEventListener("click", function () {

            console.log(next_link);
        })*/

        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                exitCnt.click()
            }
        })


    }


    for (var i = 0; i < thmb_links.length; i++) {
        thmb_links[i].addEventListener("click", gallery);

    }


});