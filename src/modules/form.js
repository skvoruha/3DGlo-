const form = () => {


const allFormInput = document.querySelectorAll('input[type="text"]')
const inputPlaceMessage = document.querySelector('input[placeholder="Ваше сообщение"]')
const inputEmail = document.querySelectorAll('input[type=email]')
const inputTel = document.querySelectorAll('input[type=tel]')

  allFormInput.forEach(element => {
    element.addEventListener('input',() =>{
      element.value = element.value.replace(/[^а-я-\s]/gi,'');
      // console.log(element);
    })
  });

  inputPlaceMessage.addEventListener('input', ()=>{
    inputPlaceMessage.value = inputPlaceMessage.value.replace(/[^а-яё]/gi,'');
  })


  inputEmail.forEach(element => {
    element.addEventListener('input',() =>{
      const replaceEmail = /[^a-z\_\-\@\.\!\~\*\']+/gi
      element.value = element.value.replace(replaceEmail, "")
    })
  });

  inputTel.forEach(element => {
    element.addEventListener('input',() =>{
      const replaceTel = /[^\d\-()']+/gi
      element.value = element.value.replace(replaceTel, "")
    })
  });

  const allInput = document.querySelectorAll('input')

  allInput.forEach(element => {
    element.addEventListener('blur', ()=>{
      element.value = test(element.value)
    })
  });

  const test = (str) =>{
    // Несколько идущих подряд пробелов или дефисов должны заменяться на один.
    const spacesВefines = /(\s{2,})|(\-{2,})/g
    // Пробелы и дефисы в начале и конце значения должны удаляться.
    const trimStartEnd = /(^[\s\-]+|^)(.*?)(?:([\s\-]+$)|$)/i
    // Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.
    const capitalizedWord = /((^|\s\-|\s|\-)[а-я])([а-я]*)/gi

    str = str.replace(spacesВefines,' ')
    str = str.replace(trimStartEnd,(str, $1, $2) =>`${$2}`)
    str = str.replace(capitalizedWord,(str, $1, $2,$3) =>`${$1.toUpperCase() + $3.toLowerCase()}`)
    return str
    // .toUpperCase() + other.toLowerCase());
  }


}

export default form

// // Реализовать проверку введенных данных в поля ввода с помощью события blur (при потере полем ввода фокуса)
// // и заменять их на корректные при необходимости по правилам:
// // Должны удаляться все символы, кроме допустимых
// // Несколько идущих подряд пробелов или дефисов должны заменяться на один.
// // Пробелы и дефисы в начале и конце значения должны удаляться.
// // Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.

// const inputText = document.getElementById('inputText')

// inputText.addEventListener('blur', ()=>{
//   console.log('Проверка');
// })