const sendForm = ({formId, someElem = []}) =>{
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = {
    text:'Загрузка...',
    color:'#ffff00'}
  const errorText = {
    text:'Ошибка',
    color:'#ff0000'}
  const successText = {
    text:'Спасибо! Наш менеджер с вами свяжеться!',
    color:'#19ff19'}

  const validate = (list) =>{
    let success = true
    // провреям в списке еси там не ни одного класа success то success равняем false
    // list.forEach(input =>{
    //   if (!input.classList.contains('success')) {
    //     success = false
    //   }
    // })

    return success
  }

  const sendData = (data) =>{
    return fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
      }).then(res => res.json())
  }

  const submitForm = () =>{
    const formElements = form.querySelectorAll('input')
    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText.text
    statusBlock.style.color = loadText.color

    form.append(statusBlock)

    formData.forEach((val , key) =>{
      formBody[key] = val
    })

    someElem.forEach(elem =>{
      const element = document.getElementById(elem.id)
      if (element) {
        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value
        }
      }

    })


    if (validate(formElements)) {
      sendData(formBody)
        .then(data =>{

          statusBlock.textContent = successText.text
          statusBlock.style.color = successText.color

          formElements.forEach(input =>{
            input.value = ''
          })
        })
        .catch(error =>{
          statusBlock.textContent = errorText.text
          statusBlock.style.color = errorText.color
        })
        .finally(final=>{
          setTimeout(() => statusBlock.textContent = '', 2000);
        })
    } else {
      alert('Данные не валидны')
    }


  }
  try {
    // проверяем наличие формы
    if (!form) {
      throw new Error(' Верните форму на место пожалуйста')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
    })
  } catch(error) {
    console.log(error.message);
  }

}

export default sendForm