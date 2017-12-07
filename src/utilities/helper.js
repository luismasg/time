const timeToUnits = time => {
  const days = ~~(time / 86400);
  time %= 86400;
  const hours = ~~(time / 3600);
  time %= 3600;
  const minutes = ~~(time / 60);
  time %= 60;
  const seconds = time;
  return { days, hours, minutes, seconds };
};

export default ({ days, hours, minutes, seconds }) =>
  timeToUnits(--seconds + minutes * 60 + hours * 3600 + days * 86400);
