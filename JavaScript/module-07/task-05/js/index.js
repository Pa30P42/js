const titleRef = document.querySelector("#name-output");

const inputRef = document.querySelector("#name-input");
console.dir(inputRef);

inputRef.addEventListener("input", (event) => {
  titleRef.textContent = event.target.value;
  if (event.target.value.length === 0) {
    titleRef.textContent = "Незнакомец";
  }
});
