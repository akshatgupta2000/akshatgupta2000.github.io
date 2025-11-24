// assets/js/main.js
document.addEventListener('DOMContentLoaded', function(){
  // highlight current nav based on filename
  const links = document.querySelectorAll('.topnav .navlink');
  const path = window.location.pathname.split('/').pop();
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (href==='about.html' && path==='')) {
      a.setAttribute('aria-current','page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
});
