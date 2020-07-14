const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} crosses the Root`);

      observer.disconnect();
    }
  });
};

const options = {
  //   rootMargin: "150px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);
