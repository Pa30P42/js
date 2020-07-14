// setTimeout(() => {
//   console.log("hello");
// }, 3000);

//===

// const log = () => {
//   console.log("hello daaa");
// };

// setTimeout(log, 3000);
//====

// const logger = (time) => {
//   console.log(`Every ${time}ms - ${Date.now}`);
// };

// setInterval(logger, 3000, 2000);

//=====

// let subscriptionCounter = 0;
// let hasSubscribed = false;

// const setIntervalId = setInterval(() => {
//   if (subscriptionCounter === 3 || hasSubscribed) {
//     console.log("stopping intervarl");
//     clearInterval(setIntervalId);
//     return;
//   }

//   console.log("Follow us bitch");
// //   hasSubscribed = true;
//   subscriptionCounter += 1;
// }, 2000);

//===

// const refs = {
//   notifications: document.querySelector(".js-notification"),
// };

// refs.notifications.addEventListener("click", notificationClickHandler);

// showNotification();

// function notificationClickHandler() {
//   console.log("okda");
// }

// function showNotification() {
//   refs.notifications.classList.add("is-visible");

//   setTimeout(hideNotifications, 3000);
// }

// function hideNotifications() {
//   refs.notifications.classList.remove("is-visible");
// }

//====
// const date = new Date();
// console.log(date);

// console.log(date.getMinutes());

// console.log(Date.now());

// const date = new Date(500000)
// const currentDate = Date.now()

//===

// setInterval(() => {
//   console.log(new Date());
// }, 2000);
// ===

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();

//       //   console.log("startTime :>> ", startTime);
//       //   console.log("currentTime :>> ", currentTime);

//       const deltaTime = currentTime - startTime;
//       //   console.log(Math.round(deltaTime / 1000));
//       updateClockFace(deltaTime);
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockFace(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   console.log(`${hours}: ${mins}: ${secs}`);
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }
//====

// let isLoading = false;

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;

//   setTimeout(() => {
//     if (success) {
//       resolve("success");
//     }
//     reject("faultyh");
//   }, 2000);
// });

// isLoading = true;

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     isLoading = false;
//     console.log(isLoading);
//   });
//======

// const fetchToDao = (id) => {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   ).then((response) => response.json());
// };

// fetchToDao(121).then(console.log).catch(console.log);

//=======

const horses = ["Buler", "Shmalen", "Gamberini", "Osturashvili", "Genberzade"];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = (horse) => {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

const promises = horses.map(run);

Promise.race(promises).then((winner) => {
  console.log(winner);
});

console.log(promises);

Promise.all(promises).then((results) => {
  console.table(results);
});
