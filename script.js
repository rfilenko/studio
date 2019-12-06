//footer current year
let currYear = new Date().getFullYear();
let currYearEl = document.querySelector(".current-year");
currYearEl.innerHTML = currYear;

// scroll

let arrow = document.querySelector(".arrow-icon");
const handleScroll = () => {
  let secondSection = document.querySelector("#second");
  //smooth scroll into secondSection
  secondSection.scrollIntoView({ behavior: "smooth", block: "start" });
};
arrow.addEventListener("click", () => {
  handleScroll();
});
