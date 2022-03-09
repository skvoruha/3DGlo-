const menu = () =>{
  // само меню
  const menu = document.querySelector('menu')

  const handleMenu = (e) => {
    e.preventDefault()
    menu.classList.toggle('active-menu')
    if (e.target.matches('ul > li > a')) {
      // присваиванием href то есть ссылку к какому id перейти экрану
      let elmnt = document.querySelector(e.target.hash)
      // экран с настройками переходт к элементу по id
      elmnt.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  }

  document.addEventListener('click',(e)=>{
    // в e -> target  ищем classList -> conatins (проверяем есть ли во вложенномти элемент с таким классом )
    if( e.target.closest('.close-btn') || !e.target.matches('menu') ||
        e.target.matches('ul > li > a') || (!e.target.closest('.active-menu') && menu.classList.contains('active-menu'))) {
      handleMenu(e)
      // проверяем matches вложеннные теги и классы,
    }
  })
}

export default menu