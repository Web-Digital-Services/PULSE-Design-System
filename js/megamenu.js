$("ul.dropdown.menu > li").on('mouseenter', function () {
    $("ul.dropdown.menu > li").removeClass('active-menu-item'); //remove from other elements
    $(this).addClass('active-menu-item');

});

$("ul.dropdown.menu > li").on('mouseleave', function () {

    console.log("Menu item unhovered, mega menu hidden");

    $("li.megamenu-parent").removeClass('active-menu-item'); //remove from other elements
});

//const element = document.querySelector()

//let currentElem = null;