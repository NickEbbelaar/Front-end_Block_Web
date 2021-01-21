// JavaScript Document

/* Het hamburger menu */
var menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',menuOpen);

function menuOpen() {
   var hetmenu = document.querySelector('body > header > nav');
   hetmenu.classList.toggle ('open');
}

/* De search button */
var searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click',searchopen);

function searchopen() {
   var demenu = document.querySelector('body > header > nav');
   demenu.classList.toggle ('open2');
}


/* Het filter menu pop up
var sortBtn = document.querySelector('.sort-btn');
sortBtn.addEventListener('click',sortby);

function sortby() {
   var sortmenu = document.querySelector('#body > main > section');
   sortmenu.classList.toggle ('open3');
}

*/







/*
let menuOpen = false;
menuBtn.addEventListener('click',() => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
*/
