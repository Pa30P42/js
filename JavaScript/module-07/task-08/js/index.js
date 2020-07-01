const mainBoxRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls").firstElementChild;
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}

const createBoxes = () => {
  const boxes = Number(inputRef.value);

  let markup = "";
  let x = 30;
  for (let i = 1; i <= boxes; i += 1) {
    x += 10;

    markup += `<div class="newBox"  style= "width: ${x}px; height: ${x}px; border: 1px solid red; background-color: ${random_bg_color()};"></div>`;
  }

  mainBoxRef.innerHTML = markup;
};

createBtn.addEventListener("click", createBoxes);
inputRef.addEventListener("change", createBoxes);
destroyBtn.addEventListener("click", () => {
  mainBoxRef.innerHTML = "";
});
