/** @format */

const $toggleMenu = document.getElementById('toggle-btn');
const $menuNav = document.querySelector('.menu-nav');
const $fixedBox = document.querySelector('.fixed-box');

function clickEventHandler(e) {
  console.log(e.target);
}

$toggleMenu.addEventListener('click', clickEventHandler);
$menuNav.addEventListener('click', clickEventHandler);
$fixedBox.addEventListener('click', clickEventHandler);
