//mobile menu icon

const menuIcon = document.querySelector(".menu-icon"); //Select menu icon 'button'

menuIcon.addEventListener("click", onClick); //listen for click


function onClick(){

    if ($(menuIcon).hasClass('on-click')) { //if menu is already open...

        $(menuIcon).removeClass('on-click'); //remove class that adds X icon, defaults back to menu icon
    } else {
        $(menuIcon).addClass('on-click'); //if menu is closed, add class that replaces icon
    }

}