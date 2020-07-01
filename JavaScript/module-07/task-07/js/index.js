const sizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const textStyle = () => {
  let counter = sizeRef.value;
  textRef.style.fontSize = counter + "px";
};

sizeRef.addEventListener("input", textStyle);
