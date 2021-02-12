const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
  };

  const timer = {
    intervalId: null,
    isActive: false,
    start() {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.intervalId = setInterval(() => {
        randomIntegerFromInterval(0, [colors.length - 1]);
        refs.body.setAttribute(
          'style',
          `background: ${
            colors[randomIntegerFromInterval(0, [colors.length - 1])]
          }`,
        );
      }, 1000);
    },
  
    stop() {
      this.isActive = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  };
  
  refs.startBtn.addEventListener('click', timer.start.bind(timer));
  refs.stopBtn.addEventListener('click', timer.stop.bind(timer));


  
//  Вариант с функцией:

//   let intervalId= null;
  
//   function startChanging() {
//     if (!intervalId) {
//       intervalId = setInterval(() => {
//         randomIntegerFromInterval(0, [colors.length - 1]);
//         refs.body.setAttribute(
//           'style',
//           `background: ${
//             colors[randomIntegerFromInterval(0, [colors.length - 1])]
//           }`,
//         );
//       }, 1000);
//     }
//   }
  
//   function stopChanging() {
//     clearInterval(intervalId);
//     intervalId = null;
//   }

//   refs.startBtn.addEventListener('click', startChanging);
//   refs.stopBtn.addEventListener('click', stopChanging);

//   const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };