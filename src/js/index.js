/*? no js js needed from me */
// Hamburger menu
const navUtama = document.querySelector('.nav-utama');

document.querySelector('#hamburger').onclick = (e) =>{
  navUtama.classList.toggle('active')
  e.preventDefault()
};


// searchform
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-icon').onclick = (e) =>{
  searchform.classList.toggle('active');
  searchbox.focus();
  e.preventDefault();
};


// Login form
const userIcon = document.querySelector('#user-icon');
const login = document.querySelector('#login-form');
const box = document.querySelector('#real-login')

userIcon.onclick = (e) => {
  login.style.display = 'flex';
  e.preventDefault();
}










// klik diluar elemen
const hm = document.querySelector('#hamburger');
const sb = document.querySelector('#search-icon');

document.addEventListener('click', function(e){
  if(!hm.contains(e.target) && !navUtama.contains(e.target)){
    navUtama.classList.remove('active');
  }
  if(!sb.contains(e.target) && !searchform.contains(e.target)){
    searchform.classList.remove('active');
  }
  if(!userIcon.contains(e.target) && !box.contains(e.target)){
    login.style.display = 'none';
  }

});


// Modal
const modal = document.querySelector('#modal1');
const btn = document.querySelector('.btn-cart');

btn.onclick = (e) => {
  modal.style.display ='flex';
  e.preventDefault();
}

const closeIcon = document.querySelector('.close-icon');

closeIcon.onclick = (e) =>{
  modal.style.display ='none';
  e.preventDefault();
}

