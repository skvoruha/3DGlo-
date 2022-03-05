const menu = () =>{
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul > li > a')

  const handleMenu = (e) => {
    e.preventDefault()
    menu.classList.toggle('active-menu')
    if (e.target.matches('ul > li > a')) {
      let elmnt = document.querySelector(e.target.hash)
      // elmnt.scrollIntoView();
      elmnt.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
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