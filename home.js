// script.js
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.querySelector('a[href^="https://wa.me/"]');

    whatsappLink.addEventListener('click', function(event) {
        console.log('Iniciando conversa no WhatsApp...');
    });
});
