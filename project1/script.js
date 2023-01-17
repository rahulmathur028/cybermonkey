const right = document.querySelector(".ri-arrow-right-s-line");
const left = document.querySelector(".ri-arrow-left-s-line");
// const section5 = document.querySelector(".section5");

right.addEventListener("click", function () {
    section5.style.transform = "translateX(0)";
});

close.addEventListener("click", function () {
    section5.style.transform = "translateX(100%)";
});
