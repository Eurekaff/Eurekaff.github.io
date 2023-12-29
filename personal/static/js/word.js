var textElement = document.querySelector(".word");
var texts = ["Specific", "User-Friendly", "Deliverable","Sensitive","Equipment-Free","Affordable"];
var index = 0;

function changeText() {
  textElement.style.opacity = 0;

  setTimeout(function() {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;

    index = (index + 1) % texts.length;
  }, 300);
}

setInterval(changeText, 3000);