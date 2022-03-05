import { sliser, animate } from "./helpers"

const one = () =>{
  // const text = "Это рыбрыйн текст прост так для проверки еще каке т-о ещей"
  // console.log(sliser(text,20));

  const block = document.querySelector('.block')

  setTimeout(() =>{
        animate({
      duration: 1000,
      timing(x, timeFraction){
        return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
      },
      draw(progress){
        block.style.left = (progress * 50) + "%"
        block.style.top = (progress * 25) + "%"
        block.style.opacity = progress
      }
    }, 1500)
  })
}

export default one