import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calcField from './modules/calcField'
import form from './modules/form'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
import maskPhone from './modules/phoneMask'


// в идеале пеередаваемый аргумент должна быть в вызове
// timer('28 february 2022')
timer('25 march 2022')
menu()
modal()
calcField()
form()
tabs()
// передаём id и классы в slider all-progect, - где находится сладер, .portfolio-item - ссами слайды,
// .portfolio-dots - точки для переключения слайдов
slider('all-progects','.portfolio-item','.portfolio-dots'  )
calc(100)
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id:'total'
    }
  ]
})
sendForm({formId: 'form2',
  someElem: [
    {
      type: 'block',
      id:'total'
    }
  ]})
sendForm({ formId: 'form3',
  someElem: [
    {
      type: 'block',
      id:'total'
    }
]})
maskPhone('input[type=tel]')