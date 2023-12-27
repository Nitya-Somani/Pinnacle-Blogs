function randomColorGenerator() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

let setColor;
document.querySelector("#start").addEventListener("click", function () {
  if (!setColor) {
    setColor = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColorGenerator();
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(setColor);
  setColor = null;
});
