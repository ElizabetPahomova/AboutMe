// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav');
// const footerLinks = document.querySelectorAll('.footer .links li');
// const headerLinks = document.querySelectorAll('.header .links li');
//
// burger.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     nav.classList.toggle('active');
// });
//
// footerLinks.forEach((link, index) => {
//     const headerLink = headerLinks[index];
//     const clone = link.cloneNode(true);
//     headerLink.appendChild(clone);
// });

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const footerLinks = document.querySelectorAll('.footer .links li');
const headerLinks = document.querySelectorAll('.header .links li');

if (window.matchMedia('(max-width: 768px)').matches) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    const lastHeaderLink = headerLinks[headerLinks.length - 1]
    footerLinks.forEach((link, index) => {
        lastHeaderLink.appendChild(link);
    });
}
