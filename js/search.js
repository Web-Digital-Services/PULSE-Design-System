const searchItem = document.querySelector("#searchNav");
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