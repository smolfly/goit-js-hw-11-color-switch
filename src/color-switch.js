const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
  };


  let intervalId= null;

  
  
  function startChanging() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        randomIntegerFromInterval(0, [colors.length - 1]);
        refs.body.setAttribute(
          'style',
          `background: ${
            colors[randomIntegerFromInterval(0, [colors.length - 1])]
          }`,
        );
      }, 1000);
    }
  }
  
  function stopChanging() {
    clearInterval(intervalId);
    intervalId = null;
  }

  refs.startBtn.addEventListener('click', startChanging);
  refs.stopBtn.addEventListener('click', stopChanging);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };