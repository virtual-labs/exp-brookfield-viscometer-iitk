// spindle drag drop controls
const spindle = document.querySelectorAll(".spindle");
const coupling_nut = document.querySelector(".dragSpindleTo");
const spindles = document.querySelector(".spindles");

// beaker drag drop controls
const beaker = document.querySelectorAll(".beaker");
const beaker_hold = document.querySelector(".dragBeakerTo");

let dragged = null;

// attaching an event listener for every spindle
spindle.forEach((spindle) => {
  spindle.addEventListener("dragstart", (e) => {
    dragged = e.target;
    coupling_nut.classList.add("hovered");
  });
});

beaker.forEach((beaker) => {
  beaker.addEventListener("dragstart", (e) => {
    dragged = e.target;
    e.dataTransfer.setDragImage(new Image(), 0, 0); // hides the dragging element
    beaker_hold.classList.add("hovered");
  });
});

coupling_nut.addEventListener("dragover", (e) => {
  e.preventDefault();
});

beaker_hold.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// spindle drag to event (dropped event)
coupling_nut.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.className === "dragSpindleTo z-index-top hovered") {
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    e.target.classList.add("spindle_added");
    e.target.classList.remove("hovered");
  }
});

// beaker drag to event (dropped event)
beaker_hold.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.className === "dragBeakerTo z-index-top hovered") {
    dragged.children[0].setAttribute("width", "170");
    dragged.children[1].style.top = "110px";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    e.target.classList.add("beaker_added");
    e.target.classList.remove("hovered");
  }
});

// spindles darg events
spindles.addEventListener("dragover", (e) => {
  e.preventDefault();
});

spindles.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.className === "spindles") {
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    coupling_nut.classList.remove("spindle_added", "hovered");
  }
});
