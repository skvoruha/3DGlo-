const modal = () =>{
  const width = document.documentElement.clientWidth

    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    // индетификатор анимации
    let idInterval
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

    buttons.forEach(btn => {
      btn.addEventListener('click', ()=>{
        if (window.innerWidth > 767) {
          modalAnimation()
        }
      })
    })

    closeBtn.addEventListener('click', modalAnimationClose)
  }

export default modal