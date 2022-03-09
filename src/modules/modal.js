import {animate} from './helpers'

const modal = () =>{
  const width = document.documentElement.clientWidth
  if (width > 768) {

    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    // функция анимации
    // перебор кнопок nodelist
    buttons.forEach(btn => {
      btn.addEventListener('click', ()=>{
        if (window.innerWidth > 767) {
            animate({
              duration: 500,
              timing(timeFraction) {
                return Math.pow(timeFraction, 3)
              },
              draw(progress) {
                let num = (1 - +progress) * 100
                console.log(num);
                modal.style.display = 'block'
                // elem.style.width = progress * 100 + '%';
                modal.style.transform = 'translateX('+ num +'%)'
              }
            });
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