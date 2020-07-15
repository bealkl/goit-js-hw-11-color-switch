const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStartStop = document.querySelectorAll('button');
let idInterval;

btnStartStop.forEach(item => item.addEventListener('click', changeColorStartStop));

function changeColorStartStop(e) {
  switch (e.target.dataset.action) {
    case 'start':
      e.target.disabled = true;
      idInterval = setInterval(selectAndColor, 1000);
      break;
    case 'stop':
      btnStartStop.forEach(btn => (btn.disabled = false));
      if (idInterval) clearInterval(idInterval);
      document.body.style.backgroundColor = '#fff';
      break;
    default:
      return;
  }
}

function selectAndColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}
