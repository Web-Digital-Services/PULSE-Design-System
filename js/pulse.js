//This is the default file for any js

//May split if required

$(document).foundation();

const clickElms = document.querySelectorAll(".before-click");

clickElms.forEach(clickElm => {
    clickElm.addEventListener('click', () => {
        if ($(clickElm).hasClass('after-click')) { //if menu is already open...

            $(clickElm).removeClass('after-click'); //remove class that adds X icon, defaults back to menu icon
        } else {
            $(clickElm).addClass('after-click'); //if menu is closed, add class that replaces icon
        }
    });
});

// Scrolling card panel controls
const scrollingCardOrbits = document.querySelectorAll(".scrolling-card-orbit");

const updateScrollingCardPanel = orbit => {
    const slides = orbit.querySelectorAll(".orbit-slide");
    const activeSlide = orbit.querySelector(".orbit-slide.is-active");
    const progressFill = orbit.querySelector(".scrolling-card-progress-fill");
    const previousButton = orbit.querySelector(".orbit-previous");
    const nextButton = orbit.querySelector(".orbit-next");
    const orbitContainer = orbit.querySelector(".orbit-container");
    const orbitWrapper = orbit.querySelector(".orbit-wrapper");

    if (!slides.length || !activeSlide) {
        return;
    }

    const activeIndex = Array.prototype.indexOf.call(slides, activeSlide);

    if (progressFill) {
        const progressWidth = ((activeIndex + 1) / slides.length) * 100;
        progressFill.style.width = `${progressWidth}%`;
    }

    if (previousButton) {
        previousButton.classList.toggle("disabled", activeIndex === 0);
    }

    if (nextButton) {
        nextButton.classList.toggle("disabled", activeIndex === slides.length - 1);
    }

    if (orbitContainer && orbitWrapper) {
        const activeHeight = activeSlide.offsetHeight;

        if (activeHeight) {
            orbitContainer.style.height = `${activeHeight}px`;
            orbitWrapper.style.height = `${activeHeight}px`;
        }
    }
};

scrollingCardOrbits.forEach(orbit => {
    updateScrollingCardPanel(orbit);
});

$(document).on("slidechange.zf.orbit", ".scrolling-card-orbit", function () {
    updateScrollingCardPanel(this);
});

window.addEventListener("resize", () => {
    scrollingCardOrbits.forEach(orbit => {
        updateScrollingCardPanel(orbit);
    });
});;$("ul.dropdown.menu > li").on('mouseenter', function () {
    $("ul.dropdown.menu > li").removeClass('active-menu-item'); //remove from other elements
    $(this).addClass('active-menu-item');

});

$("ul.dropdown.menu > li").on('mouseleave', function () {

    console.log("Menu item unhovered, mega menu hidden");

    $("li.megamenu-parent").removeClass('active-menu-item'); //remove from other elements
});

//const element = document.querySelector()

//let currentElem = null;;//mobile menu icon

const menuIcons = document.querySelectorAll(".menu-icon"); //Select menu icon 'button'

menuIcons.forEach(menuIcon => {

    menuIcon.addEventListener('click', () => {
        if ($(menuIcon).hasClass('menu-open')) { //if menu is already open...

            $(menuIcon).removeClass('menu-open'); //remove class that adds X icon, defaults back to menu icon
        } else {
            $(menuIcon).addClass('menu-open'); //if menu is closed, add class that replaces icon
        }
    });
});;const searchItem = document.querySelector("#searchNav");
//const searchBar = document.querySelector(".desktop-search");
const navItems = document.querySelectorAll("#header-nav-item");
const closeButton = document.getElementById("search-close");

searchItem.addEventListener("click", function () {


    $(searchItem).addClass('hide');
    navItems.forEach(navItem => {

        $(navItem).addClass('hide');

    })

});

closeButton.addEventListener("click", function () {

    $(searchItem).removeClass('hide');
    $(searchItem).removeClass('after-click');

    navItems.forEach(navItem => {

        $(navItem).removeClass('hide');

    })

});