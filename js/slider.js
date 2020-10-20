//SCROLL

const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.trnsition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashOffcet = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashOffset = dashoffset;
};

window.addEventListener("scroll", () => {
  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

//click
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//END SCROLL

const wrapper = document.querySelector(".cards-wrapper");

const dots = document.querySelectorAll(".dot");
let activeDotNum = 0;

dots.forEach((dot, idx) => {
  dot.setAttribute("data-num", idx);

  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {
      return;
    } else {
      let displayArea = wrapper.parentElement.clientWidth;
      let pixels = -displayArea * clickedDotNum;
      wrapper.style.transform = "translateX(" + pixels + "px)";
      dots[activeDotNum].classList.remove("active");
      dots[clickedDotNum].classList.add("active");
      activeDotNum = clickedDotNum;
    }
  });
});

