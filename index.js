var seconds = document.querySelectorAll('.time')[3];
var minutes = document.querySelectorAll('.time')[2];
var hours = document.querySelectorAll('.time')[1];
var hours = document.querySelectorAll('.time')[0];
setInterval(() => {
  tick();
}, 1000);

function tick() {
  if (increase(3, 59))
    if (increase(2, 59)) if (increase(1, 24)) increase(1, 24);
}

function increase(unit, max) {
  var time = document.querySelectorAll('.time')[unit];
  var timeValue = parseInt(time.innerHTML, 10);
  if (timeValue <= max - 1) {
    time.innerHTML = timeValue + 1;
    return false;
  }
  time.innerHTML = 0;
  return true;
}
