var seconds = document.querySelectorAll('.time')[3];
var minutes = document.querySelectorAll('.time')[2];
var hours = document.querySelectorAll('.time')[1];
var hours = document.querySelectorAll('.time')[0];
setInterval(() => {
  tick();
}, 1000);

function tick() {
  var seconds = document.querySelectorAll('.time')[3];
  var secondsValue = parseInt(seconds.innerHTML, 10);
  if (secondsValue <= 58) {
    seconds.innerHTML = secondsValue + 1;
    return;
  }

  seconds.innerHTML = 0;
  increaseMinutes();
}
function increaseMinutes() {
  var minutes = document.querySelectorAll('.time')[2];
  var minutesValue = parseInt(minutes.innerHTML, 10);
  if (minutesValue <= 58) {
    minutes.innerHTML = minutesValue + 1;
    return;
  }

  minutes.innerHTML = 0;
  increaseHours();
}

function increaseHours() {
  var hours = document.querySelectorAll('.time')[1];
  var hoursValue = parseInt(hours.innerHTML, 10);
  if (hoursValue <= 23) {
    hours.innerHTML = hoursValue + 1;
    return;
  }

  hours.innerHTML = 0;
  increaseDays();
}

function increaseDays() {
  var days = document.querySelectorAll('.time')[0];
  var daysValue = parseInt(days.innerHTML, 10);
  if (daysValue <= 23) {
    days.innerHTML = daysValue + 1;
    return;
  }

  days.innerHTML = 0;
}
