const sendForm = ({formId, someElem = []}) =>{
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')

  const loadText = 'Загрузка...'
  const errorText = 'Ошибка'
  const successText = 'Спасибо! Наш менеджер с вами свяжеться!'



  const validate = (list) =>{
    let success = true
    // провреям в списке еси там не ни одного класа success то success равняем false
    list.forEach(input =>{
      if (input.name == 'user_name' && input.value.length < 2) {
          success = false
      }
      if (input.name == 'user_phone' && input.value.length < 6) {
          success = false
      }
    })

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

    statusBlock.textContent = loadText

    // Меняем цвет для модального окна
    if (formId === 'form3') {
      statusBlock.style.color ='#fff'
    }

    form.append(statusBlock)

    formData.forEach((val , key) =>{
      formBody[key] = val
    })

    someElem.forEach(elem =>{
      const element = document.getElementById(elem.id)
      if (element && parseInt(element.textContent) > 0) {
        console.log(element.textContent);
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
          statusBlock.textContent = successText

          formElements.forEach(input =>{
            input.value = ''
          })
        })
        .catch(error =>{
          statusBlock.textContent = errorText
        })
        .finally(()=>{
          setTimeout(() => statusBlock.textContent = '', 2000);
        })
    } else {
      alert('Данные не валидны')
      statusBlock.textContent = ''
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