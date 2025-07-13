    // sticky header and menu toggle functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() { ;
    header.classList.toggle('sticky', window.scrollY > 100);
    });
// Mobile menu toggle functionality
    let menuIcon = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menuIcon.onclick = () => {
    navlist.classList.toggle('open');
    const icon = menuIcon.querySelector('i');
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    };



