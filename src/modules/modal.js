import {animate} from './helpers'

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
    // перебор кнопок nodelist
    buttons.forEach(btn => {
      btn.addEventListener('click', ()=>{
        if (window.innerWidth > 767) {
          modalAnimation()
        }
      })
    })
    // закрытия анимациии
    modal.addEventListener('click', (e)=>{
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        modal.style.display = 'none'
      }
    })
  }
}

export default modal