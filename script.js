const lists = document.querySelectorAll(".navUl > li");
const list5Span = document.querySelector(
  ".navUl > li:nth-child(5) > span:nth-child(2)"
);
const titleName = document.querySelector(".titleName");

if (window.innerWidth <= 830) {
  for (const list of lists) {
    if (list.innerText === "ROOT") {
      list.style.display = "none";
    } else if (list.innerText === "WHITEPAPER") {
      list.style.display = "none";
    } else if (list.innerText === "ROOT NETWORK BRIDGE") {
      list.innerText = "BRIDGE";
    }
  }

  list5Span.style.display = "none";
  titleName.style.display = "none";
}

// Gsap Animations

// Load Animation

let loadTl = gsap
  .timeline()
  .to(".loadBlackDiv", {
    opacity: 0,
    duration: 1,
  })
  .from(
    ".titleDiv",
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    "0.9"
  )
  .from(
    ".navDiv",
    {
      x: 100,
      opacity: 0,
      duration: 1,
    },
    "<"
  )
  .from(".section1P", {
    y: 50,
    opacity: 0,
    duration: 1,
  });

// Video Change Animation

gsap.to(".bottomVideo", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    start: "59% 50%",
    end: "59% 30%",
    scrub: true,
  },
});

// Video Blur Animation

gsap.to(".topVideo", {
  filter: "blur(23px)",
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    start: "top -10%",
    end: "top -130%",
    scrub: 1,
  },
});

// Video Black Animation

gsap.to(".videoBlackDiv", {
  backgroundColor: "black",
  opacity: 0.4,
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    start: "top -30%",
    end: "top -150%",
    scrub: 1,
  },
});

// Bottom Video Blur and black tint Remove

let removeTl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      scroller: "body",
      start: "90% 55%",
      end: "90% 10%",
      scrub: 1,
    },
  })
  .to(".bottomVideo", {
    filter: "blur(0px)",
  })
  .to(
    ".videoBlackDiv",
    {
      opacity: 0,
    },
    "<"
  );

// Section 1 word pin

const section1Tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      pin: true,
      start: "center 30%",
      end: "top -130%",
      scrub: 1,
    },
  })
  .to(".section1P span:nth-child(1)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(2)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(3)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(4)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(5)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(6)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(7)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(8)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(9)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(10)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(11)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(12)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(13)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(14)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(15)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(16)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(17)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(18)", {
    opacity: 1,
  })
  .to(".section1P span:nth-child(19)", {
    opacity: 1,
  });

//   Section 2 animation

let section2Tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 40%",
    },
  })
  .from(".box1", {
    y: 150,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".box2",
    {
      y: 150,
      opacity: 0,
      duration: 1,
    },
    "0.3"
  )
  .from(
    ".box3",
    {
      y: 150,
      opacity: 0,
      duration: 1,
    },
    "0.6"
  );

//   Section 3 animation

let section3Tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 40%",
    },
  })
  .from(".section3 > h2", {
    y: 150,
    opacity: 0,
    duration: 1,
  })
  .from(".section3Bt1", {
    y: 50,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".section3Bt2",
    {
      y: 50,
      opacity: 0,
      duration: 1,
    },
    "1.3"
  )
  .to(".section3Bt2", {
    transition: "300ms linear",
  });
