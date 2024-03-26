
document.addEventListener('DOMContentLoaded', function() {
    var content = document.querySelector('.content');
    
    setTimeout(function() {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 500); 
});


document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 100
    });

    ScrollReveal().reveal('.content', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.iframe', { delay: 300, origin: 'right' });
});


document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1000, 
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.celestial-body:nth-child(1)', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.celestial-body:nth-child(2)', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.celestial-body:nth-child(3)', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.celestial-body:nth-child(4)', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.celestial-body:nth-child(5)', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.celestial-body:nth-child(6)', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.celestial-body:nth-child(7)', { delay: 500, origin: 'right' });
    ScrollReveal().reveal('.celestial-body:nth-child(8)', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.celestial-body:nth-child(9)', { delay: 500, origin: 'left' });
});

