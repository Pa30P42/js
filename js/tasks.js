// const x = 12;

// const y = 122;

// let a = "1212129372189312989";

// let result = console.log(a.length);

// const position = a.indexOf("9");

// console.log(position);
// console.log(a.slice(0, 3));

// const password = prompt("enter num");

// if (password) {
//   if (password === "123456") {
//     console.log("hello brat");
//   } else console.log("wrong pass");
// } else if (password === "") {
//   console.log(" not a pass");
// } else console.log("Cancelled");

// switch (password) {
//   case "123456":
//     console.log("hello brat");
//     break;

//   case "":
//     console.log("not a pass");
//     break;

//   case null:
//     console.log("not a pass");
//     break;

//   default:
//     console.log("wrong pass");
//     break;
// }

let password;

while (password !== null && password !== "") {
  password = prompt("enter password");

  switch (password) {
    case "123456":
      console.log("hello brat");
      password = null;
      break;

    case "":
      console.log("not a pass");
      break;

    case null:
      console.log("not a pass");

      password = "";
      break;

    default:
      console.log("wrong pass");
      break;
  }
}
