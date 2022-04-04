/** @format */

// Header
const $menuNav = document.querySelector('.menu-nav');
const $subMenu = document.querySelectorAll('.sub-menu-wrapper');

let preSubMenu;

// Section
const $fixedBox = document.querySelector('.fixed-box');
const $fixedBox_delBtn = document.querySelector('.del-btn');

function mouseOverHandler(e) {
  if (e.target.textContent === 'Cafe') {
    $subMenu[0].style.display = 'block';
    subMenuChange(0);
  } else if (e.target.textContent === 'Coffee&Goods') {
    $subMenu[1].style.display = 'block';
    subMenuChange(1);
  } else if (e.target.textContent === 'Company') {
    $subMenu[2].style.display = 'block';
    subMenuChange(2);
  } else if (e.target.textContent === 'Service') {
    $subMenu[3].style.display = 'block';
    subMenuChange(3);
  } else if (e.target.textContent === 'Store') {
    $subMenu[4].style.display = 'block';
    subMenuChange(4);
  }

  function subMenuChange(num) {
    if (!preSubMenu) {
      preSubMenu = $subMenu[num];
    } else {
      preSubMenu.style.display = 'none';
      preSubMenu = $subMenu[num];
    }
  }
}

function clickDeleteHandler(e) {
  e.target.parentNode.style.display = 'none';
}

// Header Event
$menuNav.addEventListener('mouseover', mouseOverHandler);
$subMenu[0].addEventListener('mouseleave', (e) => {
  $subMenu[0].style.display = 'none';
});
$subMenu[1].addEventListener('mouseleave', (e) => {
  $subMenu[1].style.display = 'none';
});
$subMenu[2].addEventListener('mouseleave', (e) => {
  $subMenu[2].style.display = 'none';
});
$subMenu[3].addEventListener('mouseleave', (e) => {
  $subMenu[3].style.display = 'none';
});
$subMenu[4].addEventListener('mouseleave', (e) => {
  $subMenu[4].style.display = 'none';
});

// Section Event
$fixedBox_delBtn.addEventListener('click', clickDeleteHandler);
