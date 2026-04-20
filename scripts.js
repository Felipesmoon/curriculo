// Resume JavaScript functionality

function printResume() {
    window.print();
}

function openWhatsApp() {
    // Número no formato internacional: 55 (Brasil) + 85 (DDD) + 987728843 (sem espaços)
    // O número original é (85) 98772-8843 → 5585987728843
    const phoneNumber = "5585987728843";
    // Mensagem opcional para já enviar junto com o contato
    const message = "Olá! Vi seu currículo e gostaria de conversar.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Detecta se é dispositivo móvel (smartphone/tablet)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Em celulares, usa o link nativo do WhatsApp
        window.location.href = whatsappUrl;
    } else {
        // Em desktop, abre o WhatsApp Web em nova aba (fallback)
        window.open(whatsappUrl, '_blank');
    }
}

// Add smooth scrolling for anchor links (if any)
document.addEventListener('DOMContentLoaded', function() {
    // Set current year dynamically
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    // Add any initialization code here
    console.log('Resume loaded successfully');
});
