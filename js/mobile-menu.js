(function () {
  var toggleButton = document.getElementById('mobile-menu-button');
  var menu = document.getElementById('mobile-menu');
  if (!toggleButton || !menu) return;

  var icon = toggleButton.querySelector('i');
  var links = menu.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    menu.classList.remove('hidden');
    toggleButton.setAttribute('aria-expanded', 'true');
    toggleButton.setAttribute('aria-label', 'Fechar menu');
    icon.classList.replace('bi-list', 'bi-x-lg');
  }

  function closeMenu() {
    menu.classList.add('hidden');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Abrir menu');
    icon.classList.replace('bi-x-lg', 'bi-list');
  }

  toggleButton.addEventListener('click', function () {
    var isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });
})();
