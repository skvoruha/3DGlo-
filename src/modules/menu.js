const menu = () =>{
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul > li > a')

  const handleMenu = (e) => {
    e.preventDefault()
    menu.classList.toggle('active-menu')
  }
  // передаём по клику нукцию handleMenu
  menuBtn.addEventListener('click', handleMenu)
  closeBtn.addEventListener('click', handleMenu)
  for (let i = 0; i < menuItems.length -1;i++){
    menuItems[i].addEventListener('click', handleMenu)
  }
  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
}

export default menu