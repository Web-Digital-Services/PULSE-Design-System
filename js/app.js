//This is the default file for any js

//May split if required

$(document).foundation();

const clickElms = document.querySelectorAll(".before-click");

clickElms.forEach(clickElm => {
    clickElm.addEventListener('click', () => {
        clickElm.classList.add('after-click');
    });
});
