const sliser = (str, num) =>{
    return str.trim().length > num ?
    str.trim().substring(0,num).trim() + '...' :
    str.trim()
}

const animate = ({timing, draw, duration}) => {
  // duration длительнсоть анимации - функция виполнит за это
  // переид премени duration: 1000
  // timing - линейность анимации - грубо говоря - как график то есть икс квадаарат икс в кубе
  // draw - то то мы будем делать с эти эелментос
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(1, timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

export { sliser, animate }