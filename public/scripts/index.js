$(document).ready(function() {
  window.addEventListener("scroll", function() {

    const slideInAt = window.scrollY + window.innerHeight;
    console.log(slideInAt);
    const writer = document.querySelector("#writer");
    const writerDistanceToTop = window.pageYOffset + writer.getBoundingClientRect().top;
    if (slideInAt > writerDistanceToTop + 60) {
      writer.classList.add("showing");
    } else {
      writer.classList.remove("showing");
    }

    const developerSection = document.querySelector("#developer");
    const developerDistanceToTop = window.pageYOffset + developerSection.getBoundingClientRect().top;
    if (slideInAt > developerDistanceToTop + 60) {
      developerSection.classList.add("showing");
    } else {
      developerSection.classList.remove("showing");
    }

  });
  $('#contact').click((event)=>{
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#contactContainer').offset().top},'slow')
  })
})

