// Menu Mobile 
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if(buttonMenuMobile){
  const menu = document.querySelector(".header .inner-menu");
  const overlay = menu.querySelector(".inner-overlay");

  buttonMenuMobile.addEventListener("click", () => {
    menu.classList.add('active');
  })

  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
  })

  const listButtonSubMenu = menu.querySelectorAll("ul > li > i");
  console.log(listButtonSubMenu);
  listButtonSubMenu.forEach(button => {
    button.addEventListener("click", () => {
      button.closest("li").classList.toggle("active");
    })
  })

}