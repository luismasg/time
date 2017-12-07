import decrease from './helpers';

setInterval(() => {
  tick();
}, 1000);

const tick = () => {
  if (decrease(3, 59))
    if (decrease(2, 59)) if (decrease(1, 24)) decrease(0, 24);
};
