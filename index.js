const menu = document.getElementById('menu');
const menuList = document.querySelector('nav');
const closeMenu = document.getElementById('closemenu');
const navLink = document.getElementsByClassName('nav-link');
const toTop = document.getElementById('top');

menu.addEventListener('click', () => {
    console.log('menu activated!!');
    menuList.classList.toggle('notshow');
});

closeMenu.addEventListener('click', () => {
    menuList.classList.toggle('notshow');
});

for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
    menuList.classList.toggle('notshow');
})};

toTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

















// if (window.innerWidth <= 550) {
//     console.log('working fine!');
//     menu.addEventListener('click', () => {
//         console.log('menu activated!!');
//         menuList.classList.toggle('notshow');
//     });
    
//     closeMenu.addEventListener('click', () => {
//         menuList.classList.toggle('notshow');
//     });
    
//     for (i = 0; i < navLink.length; i++) {
//         navLink[i].addEventListener('click', function () {
//         menuList.classList.toggle('notshow');
//     })};
    
//     toTop.addEventListener('click', () => {
//         window.scrollTo({top: 0, behavior: 'smooth'});
//     });
// } else {
//     menuList.classList.remove('hidden-list');
// }
