(function () {
  var WHATSAPP_NUMBER = '5565992920478';
  var WHATSAPP_MESSAGE = 'Olá, estou vindo através do seu site!!!';
  var link = 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMBER + '&text=' + encodeURIComponent(WHATSAPP_MESSAGE);

  document.querySelectorAll('[data-whatsapp-link]').forEach(function (el) {
    el.href = link;
  });
})();
