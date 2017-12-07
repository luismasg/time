setInterval(function() {
  tick();
}, 1000);

function tick() {
  if (increase(3, 59))
    if (increase(2, 59)) if (increase(1, 24)) increase(1, 24);
}

function increase(unit, max) {
  var time = document.querySelectorAll('.time')[unit];
  var timeValue = parseInt(time.innerHTML, 10);
  if (timeValue > 0) {
    time.innerHTML = timeValue - 1;
    return false;
  }
  time.innerHTML = max;
  return true;
}
