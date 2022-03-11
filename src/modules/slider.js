// all-progects


const slider = (allProgects,portfolioItem,portfolioDots) =>{
  // проверка передаваемых значений
  // подключить
  if (!(allProgects && portfolioItem && portfolioDots)) return;

  const sliderBlock = document.getElementById(allProgects)
  const slides = document.querySelectorAll(portfolioItem)
  const dotsWrapper = document.querySelector(portfolioDots)
  //  проверяем элементы на пустые элементы и где nodelist проверям длину массива
  if (!(sliderBlock && slides.length > 0 && dotsWrapper)) return;
  // делаем значение по умолчнию для первого элемента
  slides[0].classList = 'portfolio-item portfolio-item-active'

  const timeInterval = 2000
  // dot-active
  let dots = document.querySelectorAll('.dot')
  let currentSlide = 0
  let interval

  const addDot = () =>{
    for (let i = 0; i < slides.length; i++) {
      let elem = document.createElement('li')
      // даём значение по умолчнию 0 по индексу элементу
      if (i == 0) {
         elem.classList = 'dot dot-active'
      } else {
        elem.classList = 'dot'
      }
      dotsWrapper.append(elem)
    }
    dots = document.querySelectorAll('.dot')
  }
  // вызов функцции добавления dot
  addDot()


  const prevSlide = (elems, index, strClass) =>{
    elems[index].classList.remove(strClass)
  }

  const nextSlide = (elems, index, strClass) =>{
    elems[index].classList.add(strClass)
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')
    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  }

  const startSlide = (timer = 1500) =>{
    interval = setInterval(autoSlide,timer)
  }

  const stopSlide = () =>{
    clearInterval(interval)
  }

  sliderBlock.addEventListener('click', (e)=>{
    e.preventDefault()

    // ОБРАБОТКА СОБЫТИЙ ПОЛ КЛИК ПО Методу ДЕЛеГИРОВАНИЯ
    // ЗАППРЕТИТИТ БЕЗ .dot, .portfolio-btn')) "MN КЛАССОВ обрабатывать"
    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if(e.target.matches('#arrow-left')){
      currentSlide--

    } else if (e.target.classList.contains('dot')){
      dots.forEach((dot, index) =>{
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')

  })

  sliderBlock.addEventListener('mouseenter',(e) =>{
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide()
    }
    // параметр true активирование вспытия
    // чтобы события обрабатыались на дчернем желменте
  }, true)
  sliderBlock.addEventListener('mouseleave',(e) =>{
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval)
    }
  }, true)

  startSlide(timeInterval)
 }

export default slider