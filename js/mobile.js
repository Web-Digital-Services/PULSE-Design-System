//mobile menu icon

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