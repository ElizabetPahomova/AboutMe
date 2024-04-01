const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav .links');
const footerLinks = document.querySelectorAll('.footer .links li');
const headerLinks = document.querySelectorAll('.header .links li');
console.log(headerLinks)
if (window.matchMedia('(max-width: 768px)').matches) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });
  footerLinks.forEach((link, index) => {
    const clone = link.cloneNode(true);
    navLinks.appendChild(clone);
  });
  const img = document.getElementById("myImg");
  img.style.maxWidth = "40%";

}

