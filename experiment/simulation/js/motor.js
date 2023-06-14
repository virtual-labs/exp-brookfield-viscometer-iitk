"use-strict";

const motorStatus = document.querySelector(".motor_status");
const motorSwitch = document.querySelector(".motorSwitchButton");
const power_supply = document.querySelector(".power_switch");
const draggedSpindle = document.querySelector(".dragSpindleTo");
const spindle_animation = document.querySelector(".spindle_animation");

motorSwitch.addEventListener("click", (e) => {
  if (!power_switch.checked) {
    alert(
      "Power supply is off, turn on the power switch to use the viscometer"
    );
    e.target.checked = false;
    return;
  }
  if (!draggedSpindle.hasChildNodes()) {
    alert("Please insert a spindle first");
    e.target.checked = false;
    return;
  }

  if (e.target.checked) {
    motorStatus.innerText = "ON";
    spindle_animation.style.opacity = "100%";
  } else {
    motorStatus.innerText = "OFF";
    spindle_animation.style.opacity = "0%";
  }
});
