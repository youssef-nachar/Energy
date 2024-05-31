var mixer = mixitup('.portfolio-gallery');

let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active")
}

activeMenu();
window.addEventListener("scroll", activeMenu);



const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)
});

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open")
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x")
    navList.classList.remove("open")
}
