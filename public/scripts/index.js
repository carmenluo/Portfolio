$(document).ready(function() {
  window.addEventListener("scroll", function() {

    const slideInAt = window.scrollY + window.innerHeight;
    console.log(slideInAt);
    // const section2 = document.querySelector("#section2");
    // const section1DistanceToTop = window.pageYOffset + section2.getBoundingClientRect().top;
    // if (slideInAt > section1DistanceToTop + 60) {
    //   section2.classList.add("showing");
    // } else {
    //   section2.classList.remove("showing");
    // }

    const developerSection = document.querySelector("#developer");
    const developerDistanceToTop = window.pageYOffset + developerSection.getBoundingClientRect().top;
    if (slideInAt > developerDistanceToTop + 60) {
      developerSection.classList.add("showing");
    } else {
      developerSection.classList.remove("showing");
    }

  });
})

