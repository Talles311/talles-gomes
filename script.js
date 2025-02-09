document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fotos-img');
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(img => {
        img.addEventListener('click', function() {
            console.log("Clicou na imagem:", this.src); // Verifique no console
            overlay.style.display = 'flex';
            expandedImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});