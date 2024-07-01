//This is the default file for any js

//May split if required

$(document).foundation();

const clickElms = document.querySelectorAll(".before-click");

clickElms.forEach(clickElm => {
    clickElm.addEventListener('click', () => {
        clickElm.classList.add('after-click');
    });
});
;$("ul.dropdown.menu > li").on('mouseenter', function () {
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
});