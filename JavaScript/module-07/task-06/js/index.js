// inputRef.addEventListener("input", (event) => {
//   titleRef.textContent = event.target.value;

// });

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  if (inputRef.value.length >= 6) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});
