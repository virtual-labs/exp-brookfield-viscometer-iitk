"use-strict";

const knob = document.querySelector(".knob");
const power = document.querySelector(".power_switch");
const select = document.querySelector(".selection_switch");

// dispplay elements
const speed = document.querySelector(".speed");
const viscocity_value = document.querySelector("viscocity");
const spindle_select = document.querySelector(".spindle_select_number");
const motor_switch_status = document.querySelector(".motor_status");
const percentage = document.querySelector(".percentage");

const speeds = [
  0.3, 0.5, 0.6, 1.0, 1.5, 2.5, 3.0, 4.0, 5.0, 6.0, 10, 12, 20, 30, 50, 60, 100,
];

let deg_count = 0;
function rotate(e) {
  deg_count++;
  let deg = deg_count * 10;
  e.style.transform = `rotate(${deg}deg)`;
}

let anti_deg_count = 0;
function anti_rotate(e) {
  deg_count--;
  let deg = deg_count * 10;
  e.style.transform = `rotate(${deg}deg)`;
}

// const boundingBox = knob.getBoundingClientRect();
//
// const _h = (boundingBox.top + boundingBox.bottom) / 2;
// const _w = (boundingBox.left + boundingBox.right) / 2;
//
// function calculateDegrees(e) {
//   const _mouseX = e.clientX;
//   const _mouseY = e.clientY;
//
//   const rad = Math.atan2(_h - _mouseY, _w - _mouseX);
//
//   let deg = rad * (180 / Math.PI);
//
//   return deg;
// }
//
// function rotate(e) {
//   const degrees = Math.floor(calculateDegrees(e) - 90);
//   knob.style.transform = `rotate(${degrees}deg)`;
// }
//
// knob.addEventListener("mousedown", function () {
//   knob.addEventListener("mousemove", rotate);
//
//   knob.addEventListener("mouseleave", function () {
//     knob.removeEventListener("mousemove", rotate);
//   });
//
//   knob.addEventListener("mouseup", function () {
//     knob.removeEventListener("mousemove", rotate);
//   });
// });
//
// const autorange = document.querySelector(".auto_button");
//
// function somefunction() {
//   console.log("ok");
// }
//
// autorange.addEventListener("mousedown", () => {
//   const interval = setInterval(somefunction, 100);
//   autorange.addEventListener("mouseup", () => {
//     clearInterval(interval);
//   });
// });
//
function increase_speed_or_spindle() {
  if (select.checked) {
    let curr_speed = Number(speed.innerHTML);
    let curr_speed_index = speeds.indexOf(curr_speed);
    speed.innerHTML =
      curr_speed == 100
        ? speeds[curr_speed_index]
        : speeds[curr_speed_index + 1];
  } else {
    let spindle_number = parseInt(spindle_select.innerHTML);
    if (spindle_number !== 100) {
      spindle_select.innerHTML = `${(spindle_number + 1).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2, useGrouping: false }
      )}`;
    } else {
      return;
    }
  }
  rotate(knob);
}

function decrease_speed_or_spindle() {
  if (select.checked) {
    let curr_speed = Number(speed.innerHTML);
    let curr_speed_index = speeds.indexOf(curr_speed);
    speed.innerHTML =
      curr_speed == 0.3
        ? speeds[curr_speed_index]
        : speeds[curr_speed_index - 1];
  } else {
    let spindle_number = parseInt(spindle_select.innerHTML);
    if (spindle_number !== 0) {
      spindle_select.innerHTML = `${(spindle_number - 1).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2, useGrouping: false }
      )}`;
    } else {
      return;
    }
  }
  anti_rotate(knob);
}

knob.addEventListener("mousedown", (e) => {
  if (!power_switch.checked) {
    alert("Power supply is off, please turn on the power switch");
    return;
  }
  // let interval = setInterval(increase_speed_or_spindle, 100);

  // knob.addEventListener("mouseup", (e) => {
  //   switch (e.button) {
  //     case 0:
  //       clearInterval(interval);
  //       break;
  //     case 2:
  //       console.log("hmm");
  //       break;
  //     default:
  //       console.log("Unknown keycode");
  //   }
  // });

  switch (e.button) {
    case 0:
      let increase_interval = setInterval(increase_speed_or_spindle, 200);
      knob.addEventListener("mouseup", () => clearInterval(increase_interval));
      break;
    case 2:
      let decrease_interval = setInterval(decrease_speed_or_spindle, 500);
      knob.addEventListener("mouseup", () => clearInterval(decrease_interval));
      break;
    default:
      console.error("unknown mouse button");
  }
});
