const power_switch = document.querySelector(".power_switch");
const power_indicator = document.querySelector(".power_indicator");
const display = document.querySelector(".display");
const viscocity = document.querySelector(".viscocity");
const viscometer_input = document.querySelector(".viscometer_input");

const auto_range = document.querySelector(".auto_button");
const percent = document.querySelector(".percent");
const max_viscocity = document.querySelector(".max_viscocity");
const spindle_select_number = document.querySelector(".spindle_select_number");

// power supply handlers
power_switch.addEventListener("click", (e) => {
  if (e.target.checked) {
    power_indicator.style.background = "red";
    power_indicator.style.boxShadow = "0px 0px 20px 10px red";
    display.style.background = "#32CD32";
    viscocity.style.opacity = "100%";
    viscometer_input.style.opacity = "100%";
  } else {
    power_indicator.style.background = "#e5e5e5";
    power_indicator.style.boxShadow = "0px 0px 7px 7px #9f9f9f inset";
    display.style.background = "#1E6A1C";
    viscocity.style.opacity = "0%";
    viscometer_input.style.opacity = "0%";
  }
});

// auto range button function
function auto_range_vis() {
  switch (Number(spindle_select_number.innerHTML)) {
    case 61:
      max_viscocity.innerHTML = 20000;
      max_viscocity.classList.remove("transparent");
      percent.classList.remove("transparent");
      break;
    case 62:
      max_viscocity.innerHTML = 100000;
      max_viscocity.classList.remove("transparent");
      percent.classList.remove("transparent");
      break;
    case 63:
      max_viscocity.innerHTML = 400000;
      max_viscocity.classList.remove("transparent");
      percent.classList.remove("transparent");
      break;
    case 64:
      max_viscocity.innerHTML = 2000000;
      max_viscocity.classList.remove("transparent");
      percent.classList.remove("transparent");
      break;
    default:
      max_viscocity.innerHTML = 2000;
      max_viscocity.classList.remove("transparent");
      percent.classList.remove("transparent");
      break;
  }
}

const valid_spindle_numbers = [00, 61, 62, 63, 64];

auto_range.addEventListener("mousedown", () => {
  const cur_spindle_number = Number(spindle_select_number.innerHTML);
  if (!valid_spindle_numbers.includes(cur_spindle_number)) {
    alert("Choose a spindle number between 61 and 64");
    return;
  }

  const interval = setInterval(auto_range_vis, 100);
  auto_range.addEventListener("mouseup", () => {
    clearInterval(interval);
    max_viscocity.classList.add("transparent");
    percent.classList.add("transparent");
  });
});
