// Mobile menu toggle
const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("active");
});
