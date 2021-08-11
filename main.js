/* Navbar Toggler */
const menuToggle = document.querySelector(".navbar-toggler");
const menuBtn = document.querySelector("#menu-btn");
let menuOpen = false;
menuToggle.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});