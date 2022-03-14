import {animate} from './helpers'

const modal = () =>{

  const btnScroll = document.getElementById('btn-scroll')
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  // индетификатор анимации
  let idScroll
  // функция анимации
  // перебор кнопок nodelist
  buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{

      if (window.innerWidth > 767) {
          // body делаем hidden чтобы не работала прокрутка
          animate({
            duration: 500,
            timing(timeFraction) {
              return Math.pow(timeFraction, 3)
            },
            draw(progress) {
              let num = (1 - +progress) * 100
              // elem.style.width = progress * 100 + '%';
              modal.style.transform = 'translateX('+ num +'%)'
            }
          });
        }
      modal.style.display = 'block'
      document.body.style.overflow = 'hidden'
    })
  })
  // закрытия анимациии
  modal.addEventListener('click', (e)=>{
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none'
      // убираем отмену прокрутки
      document.body.style.overflow = ''
    }
  })

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
}

export default modal