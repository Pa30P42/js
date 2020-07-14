// const timerRef = document.querySelector("#timer-1");

// const daysRef = document.querySelector('[data-value="days"]');
// const hoursRef = document.querySelector('[data-value="hours"]');
// const minsRef = document.querySelector('[data-value="mins"]');
// const secsRef = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    setInterval(this.timerFn, 1000);
  }

  timerFn = () => {
    const date = this.targetDate;
    const currentDate = Date.now();

    const delta = date - currentDate;
    // console.log(delta);
    // if (time > 0) {
    this.timeCountdown(delta);
    // } else {
    //   this.viewError();
    // }
  };

  timeCountdown = (time) => {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.innerHTML = days;
    this.refs.hours.innerHTML = hours;
    this.refs.mins.innerHTML = mins;
    this.refs.secs.innerHTML = secs;
  };

  pad = (value) => {
    return String(value).padStart(2, "0");
  };

  viewError() {
    document.querySelector(this.selector).innerHTML = "time is over";
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 15, 2020"),
});

//======
// const timerRef = document.querySelector("#timer-1");

// const daysRef = document.querySelector('[data-value="days"]');
// const hoursRef = document.querySelector('[data-value="hours"]');
// const minsRef = document.querySelector('[data-value="mins"]');
// const secsRef = document.querySelector('[data-value="secs"]');

// const date = new Date("Augost 4, 2020");

// setInterval(() => {
//   const currentDate = Date.now();

//   const delta = date - currentDate;

//   timeCountdown(delta);
// }, 1000);

// function timeCountdown(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   daysRef.innerHTML = days;
//   hoursRef.innerHTML = hours;
//   minsRef.innerHTML = mins;
//   secsRef.innerHTML = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }
