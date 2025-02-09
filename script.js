document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fotos-img');
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(img => {
        img.addEventListener('click', function() {
            console.log("Clicou na imagem:", this.src); // Verifique no console
            expandedImg.src = this.src;
            overlay.style.display = 'flex';
            setTimeout(() => overlay.classList.add('active'), 10); // Adiciona transição suave
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300); // Aguarda a transição antes de esconder
    });

    // Fechar ao clicar fora da imagem
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    });
});
