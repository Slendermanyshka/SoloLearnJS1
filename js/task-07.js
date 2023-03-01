const sliderEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
sliderEl.addEventListener("input", handleFontSize);
textEl.style.fontSize = `${sliderEl.value}px`;

function handleFontSize(event){
  textEl.style.fontSize = `${sliderEl.value}px`;
};