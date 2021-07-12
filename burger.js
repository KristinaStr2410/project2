var showMenu = document.querySelector('.header_burger');
console.log(showMenu);
var showList = document.getElementsByClassName('header_menu');
console.log(showList);
showMenu.onclick = function () {
    showList[0].classList.toggle('min_menu')

}