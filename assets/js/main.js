!function (e) {
    "use strict";

    $(document).ready(function () {

        // headerFixed
        function headerFixed() {
            var $scTop = $(window).scrollTop();
            if ($scTop > 0) {
                $(".header").addClass("fixdHeader");
            } else {
                $(".header").removeClass("fixdHeader");
            }
        }

        headerFixed();


        $(window).on('scroll', function () {
            var $scTop = $(window).scrollTop();
            if ($scTop < 120) {
                $('.gotop').hide(120);
            } else {
                $('.gotop').show(120);
            }

            headerFixed();
        });

        function bannerSlider() {
            $(".bannerSlider").owlCarousel({
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    480: {
                        items: 1,
                        nav: false,
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }

        // bannerSlider();



        function latestSlider() {
            $(".latestSlider").owlCarousel({
                items: 3,
                // margin: 30,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    480: {
                        items: 2,
                        nav: false,
                    },
                    768: {
                        items: 2
                    },
                    1920: {
                        items: 3
                    }
                },
            });
        }

        latestSlider();

        function footerLogoSlider() {
            $(".footerLogoSlider").owlCarousel({
                items: 5,
                margin: 30,
                // nav: true,
                freeDrag: true,
                loop: true,
                autoplay: true,
                slideBy: 1,
                responsive: {
                    0: {
                        items: 2,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3
                    },
                    1920 :{
                        items: 5
                    }
                }
            });
        }

        footerLogoSlider();

    });

}(jQuery);