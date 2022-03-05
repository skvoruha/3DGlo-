const menu = () =>{
  // кнопка для открытия меню
  const menuBtn = document.querySelector('.menu')
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
  // передаём по клику нукцию handleMenu
  menuBtn.addEventListener('click', handleMenu)
  // closeBtn.addEventListener('click', handleMenu)

  menu.addEventListener('click', (e)=>{
    // в e -> target  ищем classList -> conatins (проверяем есть ли во вложенномти элемент с таким классом )
    if(e.target.classList.contains('close-btn')) {
      handleMenu(e)
      // проверяем matches вложеннные теги и классы,
    } else if (e.target.matches('ul > li > a')){
      handleMenu(e)
    }
  })
}

export default menu