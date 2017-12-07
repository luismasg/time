export default (unit, max) => {
  const time = document.querySelectorAll('.time')[unit];
  const timeValue = parseInt(time.innerHTML, 10);
  if (timeValue > 0) {
    time.innerHTML = timeValue - 1;
    return false;
  }
  time.innerHTML = max;
  return true;
};
