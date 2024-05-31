//This is the default file for any js

//May split if required

$(document).foundation();
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

const menuIcon = document.querySelector(".menu-icon"); //Select menu icon 'button'

menuIcon.addEventListener("click", onClick); //listen for click


function onClick(){

    if ($(menuIcon).hasClass('on-click')) { //if menu is already open...

        $(menuIcon).removeClass('on-click'); //remove class that adds X icon, defaults back to menu icon
    } else {
        $(menuIcon).addClass('on-click'); //if menu is closed, add class that replaces icon
    }

}