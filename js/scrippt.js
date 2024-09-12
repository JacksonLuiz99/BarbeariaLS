document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Fecha o menu se estiver aberto
        const nav = document.querySelector('nav');
        nav.classList.remove('show');
    }
});
