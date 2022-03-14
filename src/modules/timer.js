// передаём дедлайн в функцию
const timer = (deadline) => {
  // запишем в перменная элменты со временм
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')
  const timerDays = document.getElementById('timer-days')

  const getTimeRemaining = () =>{
    // получим в милисекундах время дедлайна
    let dateStop = new Date(deadline).getTime()
    // получим в милисекундах время сейчас
    let dateNow = new Date().getTime()
    // переменная с разницой во времени в милисек
    // let timeRemaining = dateStop - dateNow
    // Чтобы получить в секундах делм на 1000
    let timeRemaining = (dateStop - dateNow) / 1000
    // ПЕРЕМЕННАЯ КОЛИЧЕСВТВО ДНЕЙ возьмём расчёт часов
    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    // чтобы получить час ынжно раздалить на 60 и еще на 60
    // чтобы показывадло не 150 часов нужно разделить ещё на 24 и получить остаотк от деления
    let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    //  чтоы получить минуты нужно раздлеить на 60
    let minutes = Math.floor((timeRemaining / 60) % 60)
    // округление числа до целочисленного и птом получаем остаток от деления
    let seconds = Math.floor(timeRemaining % 60)

    // даная функция будет возвращать объект
    // если навзание ключа соответсвет названию переменной то можно убрать название ключа       days: days,
    return {timeRemaining, days, hours, minutes,seconds }
  }
  const updateClock = () =>{
    let getTime = getTimeRemaining()
    let nameDay = lastDigitToWord(getTime.days)
    timerHours.textContent = String(getTime.hours).padStart(2,'0')
    timerMinutes.textContent = String(getTime.minutes).padStart(2,'0')
    timerSeconds.textContent = String(getTime.seconds).padStart(2,'0')
    timerDays.textContent = `${getTime.days} ${nameDay}`

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000)
    } else {
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
      timerDays.textContent = 0
    }
  }
  // пишет правильны окончания к слову день
  const lastDigitToWord = (digit) => {
    const lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
    if (digit >= 11 && digit < 15) {
      return 'Дней';
    }
    else {
      if (lastFigure == 1) return 'день';
      if (lastFigure > 1 && lastFigure < 5) return 'дня';
      if (lastFigure == 0 || lastFigure >= 5) return 'дней';
    }
  }

  // дата по делайну которую передаем в функцию
  // getTime('27 February 2022')
  // третим параметрм будет аргумеент передаваемый в функцию  getTimeRemaining('27 February 2022')
  // setInterval(getTimeRemaining, 1000 , '27 February 2022')
  updateClock()
}
// экспортируем функцию
export default timer