const siteBody = document.body;
const getMenuIcon = document.querySelector("#menu-icon");
const getDropMenu = document.querySelector(".drop-menu");
const colorButtons = document.querySelectorAll(".drop-btns")


let menuToggle = function () {

    getMenuIcon.addEventListener('click', function () {
        getDropMenu.classList.toggle("menu-visi")
    })

    Array.from(colorButtons).forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            currentColor = document.body.classList[1];
            chosenColor = event.target.classList[1];
            siteBody.classList.remove(currentColor)
            siteBody.classList.add(chosenColor)
            getDropMenu.classList.toggle("menu-visi")
        })
    });

}

menuToggle();
