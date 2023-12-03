const btn = document.getElementById("darkMode");

btn.addEventListener("click", () => {
  const rndBgCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const rndTextCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  document.body.style.backgroundColor = rndBgCol;
  document.body.style.color = rndTextCol;
});