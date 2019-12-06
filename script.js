//footer current year
const currYear = new Date().getFullYear();
const currYearEl = document.querySelector(".current-year");
currYearEl.innerHTML = currYear;

// scroll
const arrow = document.querySelector(".arrow-icon");
const secondSection = document.querySelector("#second");
const handleScroll = () => {
  //smooth scroll into secondSection
  secondSection.scrollIntoView({ behavior: "smooth", block: "start" });
};
arrow.addEventListener("click", () => {
  handleScroll();
});

// scroll up
const arrowUp = document.querySelector(".arrow-up");

//show arrowUp on navLink click
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((el) => {
    el.addEventListener("click", () => {
        arrowUp.classList.remove("hidden");
      });
});
arrowUp.addEventListener("click", () => {
  document
    .getElementById("first")
    .scrollIntoView({ behavior: "smooth", block: "start" });
    arrowUp.classList.add('hidden')
});