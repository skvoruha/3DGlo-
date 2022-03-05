const modal = () =>{
  const width = document.documentElement.clientWidth
  if (width > 768) {

    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    // const closeBtn = modal.querySelector('.popup-close')
    const btnScroll = document.getElementById('btn-scroll')
    // индетификатор анимации
    let idInterval, idScroll
    let count = 100


    // функция анимации
    const modalAnimation = () =>{
      modal.style.display = 'block'
      count = count -4
      idInterval = requestAnimationFrame(modalAnimation)
      if (count >= 0) {
        // modal.style.left = count
        modal.style.transform = 'translateX('+ count +'%)'
      } else {
        count = 100
        cancelAnimationFrame(idInterval)
      }
    }
    // функция закрытия анимации
    const modalAnimationClose = () =>{
      modal.style.transform = 'translateX(100%)'
      modal.style.display = 'none'
    }
    // перебор кнопок nodelist
    buttons.forEach(btn => {
      btn.addEventListener('click', modalAnimation)
    })

    closeBtn.addEventListener('click', modalAnimationClose)
      btnScroll.addEventListener('click',(e)=>{
      e.preventDefault()
      // получаем высоту где находится наш экран
      let top = document.documentElement.scrollTop
      const scrollBottom = () =>{
        top = top + 20
        idScroll = requestAnimationFrame(scrollBottom)
        document.documentElement.scrollTop = top
        // если  top больше 850 то сбрасываем анимацию
        if(top > 850) {
          cancelAnimationFrame(idScroll)
        }
      }
      scrollBottom()
    })
    modal.addEventListener('click', (e)=>{
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        modal.style.display = 'none'
      }
    })
  }
}

export default modal