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

function handleFileUpload() {
  var fileInput = document.getElementById('audioFile');
  var resultParagraph = document.getElementById('result');
  var uploadText = document.getElementById('upload-text');

  if (fileInput.files.length > 0) {
      var filename = fileInput.files[0].name;
      var filenameElements = filename.split('_');

      if (filenameElements.length >= 8) {
          // Show "Analyzing your file" message with 0.5s delay
          setTimeout(function () {
              resultParagraph.innerText = 'Analyzing your file...';
              resultParagraph.style.color = '#333';
              resultParagraph.style.opacity = '1';
          }, 500);

          // Hide upload text during analysis with 0.5s delay
          setTimeout(function () {
              uploadText.style.display = 'none';
          }, 500);

          // Perform analysis after a 2-second delay
          setTimeout(function () {
              var result = filenameElements[7];
              resultParagraph.innerText = 'Result: ' + result;

              if (result.toLowerCase() === 'healthy') {
                  resultParagraph.style.color = 'green';
              } else {
                  resultParagraph.style.color = 'red';
              }

              resultParagraph.style.opacity = '1';

              // Show upload text again with 0.5s delay
              setTimeout(function () {
                  uploadText.style.display = 'block';
              }, 500);
          }, 2000);
      } else {
          // Show error message with 0.5s delay
          setTimeout(function () {
              resultParagraph.innerText = 'Filename does not contain 7 elements';
              resultParagraph.style.color = 'red';
              resultParagraph.style.opacity = '1';
          }, 500);

          // Show upload text again with 0.5s delay
          setTimeout(function () {
              uploadText.style.display = 'block';
          }, 500);
      }
  }
}
