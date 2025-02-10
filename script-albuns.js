document.addEventListener('DOMContentLoaded', function() {
    const albumCards = document.querySelectorAll('.album-card');
    
    // Dados dos grupos de imagens
    const imageGroups = {
      "grupo1": [
        "img/fotos/002234_002234-R1-E001_1.jpg",
        "img/fotos/002234_002234-R1-E002_1.jpg",
        "img/fotos/002234_002234-R1-E003_1.jpg"
      ],
      "grupo2": [
        "img/IMG_2207-Aprimorado-NR.jpg",
        "img/IMG_4678.jpg",
        "img/IMG_0354.jpg"
      ],
      "grupo3": [
        "img/IMG_0676.jpg",
        "img/IMG_0750.jpg",
        "img/IMG_1652.jpg"
      ]
    };
  
    let currentIndex = 0;
    let currentGroup = [];
  
    // Função para mudar a imagem do slide no card
    function changeSlideImage(card, groupKey) {
      const images = imageGroups[groupKey];
      currentIndex++;
      
      if (currentIndex >= images.length) {
        currentIndex = 0; // Não há looping
      }
      
      const imgElement = card.querySelector('.album-img img');
      const nextImage = images[currentIndex];
  
      // Trocar imagem de forma suave
      imgElement.classList.add('fade-out');
      setTimeout(() => {
        imgElement.src = nextImage;
        imgElement.classList.remove('fade-out');
      }, 300);  // Delay para a transição de fade
    }
  
    // Funcionalidade de clique no card para mudar a imagem
    albumCards.forEach(card => {
      card.addEventListener('click', function() {
        const groupKey = card.dataset.group;
        currentGroup = imageGroups[groupKey];
        changeSlideImage(card, groupKey);
      });
    });
  });
  