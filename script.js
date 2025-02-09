document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fotos-img');
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

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

    images.forEach(img => {
        img.addEventListener('click', function() {
            const groupKey = this.dataset.group;
            currentGroup = imageGroups[groupKey] || [this.src];
            currentIndex = 0;

            expandedImg.src = currentGroup[currentIndex];
            overlay.style.display = 'flex';
            setTimeout(() => overlay.classList.add('active'), 10);
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            expandedImg.src = currentGroup[currentIndex];
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < currentGroup.length - 1) {
            currentIndex++;
            expandedImg.src = currentGroup[currentIndex];
        }
    });
});
