// A message banner that helps you notice when there's errors
const errorBubble = document.createElement("div");
errorBubble.classList.add("error-bubble");
document.body.appendChild(errorBubble);

window.onerror = function (message, source, lineno, colno, error) {
  // Handle the error here
  if (message) {
    errorBubble.style.display = "block";
    errorBubble.innerText = `${message}\nLine: ${lineno}, Column: ${colno}`;
  } else {
    errorBubble.style.display = "none";
  }
};

const errorBubbleCss = document.createElement("style");
errorBubbleCss.innerText = `
    .error-bubble {
      display: none;
      position: fixed;
      left: 8px;
      right: 8px;
      top: 8px;
      background: #ffc9da;
      color: #bd023d;
      padding: 8px;
      border-radius: 4px;
      font-family: "Comic Sans MS", cursive, sans-serif;
      z-index: 1;
      opacity: 0.88;
    }
`;
document.body.appendChild(errorBubbleCss);
