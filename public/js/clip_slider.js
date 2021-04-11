(function () {
    var $slides = document.querySelectorAll(".slide");
    var $slideContainer = document.querySelector(".slider__slides");
    var $controls = document.querySelectorAll(".slider__control");
    var $controlRight = document.querySelector(".slider__control.m--right");
    var numOfSlides = $slides.length;
    var slidingAT = 1300; // sync this with scss variable
    var autoSliding = 10000; // sync this with scss variable
    var slidingBlocked = false;

    [].slice.call($slides).forEach(function ($el, index) {
        var i = index + 1;
        $el.classList.add("slide-" + i);
        $el.dataset.slide = i;
    });

    [].slice.call($controls).forEach(function ($el) {
        $el.addEventListener("click", controlClickHandler);
    });

    function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;

        var $control = this;
        var isRight = $control.classList.contains("m--right");
        var $curActive = document.querySelector(".slide.s--active");
        var $curActiveIframe = document.querySelector(
            ".slide.s--active iframe"
        );
        if ($curActiveIframe) {
            $curActiveIframe.classList.remove("show_iframe");
            $curActiveIframe.classList.add("hide_iframe");
        }
        var index = +$curActive.dataset.slide;
        isRight ? index++ : index--;
        if (index < 1) index = numOfSlides;
        if (index > numOfSlides) index = 1;
        var $newActive = document.querySelector(".slide-" + index);
        var $newActiveIframe = document.querySelector(
            ".slide-" + index + " iframe"
        );
        if ($newActiveIframe) {
            $newActiveIframe.classList.remove("hide_iframe");
            $newActiveIframe.classList.add("show_iframe");
        }

        $control.classList.add("a--rotation");
        $curActive.classList.remove("s--active", "s--active-prev");
        document.querySelector(".slide.s--prev").classList.remove("s--prev");

        $newActive.classList.add("s--active");
        if (!isRight) $newActive.classList.add("s--active-prev");

        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = numOfSlides;

        document.querySelector(".slide-" + prevIndex).classList.add("s--prev");

        setTimeout(function () {
            $control.classList.remove("a--rotation");
            slidingBlocked = false;
        }, slidingAT * 0.75);
    }

    function autoClick() {
        $controlRight.click();
    }

    var $eventAuto = setInterval(autoClick, autoSliding);
    $slideContainer.addEventListener("click", function () {
        clearInterval($eventAuto);
    });
})();
