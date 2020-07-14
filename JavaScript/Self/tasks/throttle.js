const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;
const throttledCallback = _.throttle((event) => {
  mouseMoveCallbackCounter += 1;

  coordsOutputRef.textContent = `
    Quantity of callback functions : ${mouseMoveCallbackCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}, 200);

window.addEventListener("mousemove", throttledCallback);

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debouncedInputCallback = _.debounce((event) => {
  inputCallbackCounter += 1;

  outputRef.textContent = `
    Times fn was started: ${inputCallbackCounter},
    Value: ${event.target.value}`;
}, 300);

inputRef.addEventListener("input", debouncedInputCallback);
