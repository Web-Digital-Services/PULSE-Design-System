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