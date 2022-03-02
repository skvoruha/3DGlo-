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
  });
}

export default form