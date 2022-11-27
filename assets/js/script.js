var menuButton = document.querySelector('.menuToggle');
var navLinks = document.querySelectorAll('.navlink');

menuButton.addEventListener('click',()=>{
    document.body.classList.toggle('nav_open');
});

navLinks.forEach(link => {
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav_open');
    });
});


