const form = () => {


const allFormInput = document.querySelectorAll('input[type="text"]')
const inputPlaceMessage = document.querySelector('input[placeholder="Ваше сообщение"]')
const inputEmail = document.querySelectorAll('input[type=email]')
const inputTel = document.querySelectorAll('input[type=tel]')

  allFormInput.forEach(element => {
    element.addEventListener('input',() =>{
      element.value = element.value.replace(/[^а-яё]/ig,'');
      // console.log(element);
    })
  });

  inputPlaceMessage.addEventListener('input', ()=>{
    inputPlaceMessage.value = inputPlaceMessage.value.replace(/[^а-яё]/ig,'');
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
  console.log(allInput);
  allInput.forEach(element => {
    element.addEventListener('blur', ()=>{
      test(element.value)
    })
  });

  const test = (str) =>{
    let str1 = str.replace(/[^а-яА-ЯЁё\s\-]/gi, ''); // дефис не был экранирован: он - тоже спецсимвол
    let str2 = str.replace(/^[\s\-]+/g, '');
    let str3 = str.replace(/[\s\-]+$/g, '');
    let str4 = str.replace(/\s{2,}/g, ' '); // Заменялись все символы, а нужно от двух. Заменялось на пустую строку, а надо на пробел
    let str5 = str.replace(/\-{2,}/g, '-'); // И то же самое для дефисов
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
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