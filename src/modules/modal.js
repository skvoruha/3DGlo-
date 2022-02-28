const modal = () =>{
  const width = document.documentElement.clientWidth
  if (width > 768) {

    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const btnScroll = document.getElementById('btn-scroll')
    // индетификатор анимации
    let idInterval,idScroll
    let count = 100

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.style.display = 'block'

        const modalAnimation = () =>{
          count = count -2
          idInterval = requestAnimationFrame(modalAnimation)
          if (count >= 0) {
            // modal.style.left = count
            modal.style.transform = 'translateX('+ count +'%)'
          } else {
            count = 100
            cancelAnimationFrame(idInterval)
          }
        }
        modalAnimation()

      })
    })

    closeBtn.addEventListener('click', ()=>{
      modal.style.transform = 'translateX(100%)'
      modal.style.display = 'none'
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
}

export default modal