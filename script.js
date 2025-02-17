document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fotos-img');
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const imageGroups = {
        "grupo1": [
            "img/fotos/delia/002234_002234-R1-E001_1.jpg",
            "img/fotos/delia/002234_002234-R1-E002_1.jpg",
            "img/fotos/delia/002234_002234-R1-E003_1.jpg"
        ],
        "grupo2": [
            "img/fotos/viola-poggio/IMG_2207-Aprimorado-NR.jpg",
            "img/fotos/viola-poggio/IMG_2108.jpg"
        ],
        "grupo3": [
            "img/fotos/fabrica-maria/IMG_1772.jpg",
            "img/fotos/fabrica-maria/IMG_1773.jpg",
            "img/fotos/fabrica-maria/IMG_1774.jpg",
            "img/fotos/fabrica-maria/IMG_1775.jpg",
            "img/fotos/fabrica-maria/IMG_1776.jpg"

        ],
        
        "grupo4": [
            "img/fotos/festival-england/IMG_0257.jpg",
            "img/fotos/festival-england/IMG_0334.jpg",
            "img/fotos/festival-england/IMG_0286.jpg",
            "img/fotos/festival-england/IMG_0354.jpg",
            "img/fotos/festival-england/IMG_0361.jpg",
            "img/fotos/festival-england/IMG_0362.jpg"

        ],

        "grupo5": [
            "img/fotos/rua-bro/IMG_4669.jpg",
            "img/fotos/rua-bro/IMG_4678.jpg",
            "img/fotos/rua-bro/IMG_4679.jpg",
            "img/fotos/rua-bro/IMG_4681.jpg",
            "img/fotos/rua-bro/IMG_4686.jpg",
            "img/fotos/rua-bro/IMG_4689.jpg",
            "img/fotos/rua-bro/IMG_4690.jpg",
            "img/fotos/rua-bro/IMG_4695.webp"

        ],
       
        "grupo6": [
            "img/fotos/analogica/002234_002234-R1-E005_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E007_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E008_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E009_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E010_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E011_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E013_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E014_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E015_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E021_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E025_1.jpg"

        ],
       
        "grupo7": [
            "img/fotos/festa-india/IMG_0676.jpg",
            "img/fotos/festa-india/IMG_0688.jpg",
            "img/fotos/festa-india/IMG_0695.jpg",
            "img/fotos/festa-india/IMG_0697.jpg",
            "img/fotos/festa-india/IMG_0704.jpg",
            "img/fotos/festa-india/IMG_0716.jpg",
            "img/fotos/festa-india/IMG_0717.jpg",
            "img/fotos/festa-india/IMG_0732.jpg",
            "img/fotos/festa-india/IMG_0750.jpg",
            "img/fotos/festa-india/IMG_0769.jpg"

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
