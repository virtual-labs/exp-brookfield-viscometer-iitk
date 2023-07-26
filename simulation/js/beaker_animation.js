const obj = document.querySelector(".beaker");
const root = document.querySelector(":root");
const animatedObject = document.querySelector(".animated");

function animate() {
  // root.style.setProperty("--anime", "fill 7s ease-in-out");
  root.style.setProperty("--play", "running");
}
obj.addEventListener("mousedown", () => {
  animate();

  obj.addEventListener("mouseup", () => {
    root.style.setProperty("--play", "paused");
  });

  obj.addEventListener("mouseleave", () => {
    root.style.setProperty("--play", "pasued");
  });
});

animatedObject.addEventListener("animationend", () => {
  alert("Beaker is filled upto 60 ml");
  obj.setAttribute("draggable", "true");
  root.style.setProperty("--anime", "none");
  animatedObject.style.top = "110px";
});
