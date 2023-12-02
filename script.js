document.addEventListener("DOMContentLoaded", function () {
  var animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach(function (element) {
    var delay = element.getAttribute("data-delay");
    element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    element.style.transitionDelay = delay;

    setTimeout(function () {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 10); // A small delay to ensure the styles are applied before the animation starts
  });
});
