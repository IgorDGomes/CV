function responsivePage() {
    const menu = document.getElementById('menu');
    const menuList = document.querySelector('nav');
    const closeMenu = document.getElementById('closemenu');
    const navLink = document.querySelectorAll('.nav-link');
    const toTop = document.getElementById('top');
    const setYear = document.getElementById('copyright');


    function toggleMenu() {
        menuList.classList.toggle('notshow');
    } 

    menu.addEventListener('click', toggleMenu);

    closeMenu.addEventListener('click', toggleMenu);

    toTop.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    setYear.innerHTML = `Copyright ©${new Date().getFullYear()}`;

    function initialState() {
        if (window.innerWidth >= 650) {
            menuList.classList.remove('notshow');
            closeMenu.classList.add('notshow');
            menu.classList.add('notshow');
            navLink.forEach(link => {
                link.removeEventListener('click', toggleMenu);
            });
        } else {
            menu.classList.remove('notshow');
            navLink.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });
        }
    }

    initialState();

    window.addEventListener('resize', initialState);
    
}

responsivePage();
    















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
