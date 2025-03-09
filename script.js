document.addEventListener('DOMContentLoaded', function () {
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
            "img/fotos/analogica/002234_002234-R1-E010_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E005_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E007_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E008_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E009_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E011_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E013_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E014_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E015_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E021_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E024_1.jpg",
            "img/fotos/analogica/002234_002234-R1-E025_1.jpg"

        ]
    };

    let currentIndex = 0;
    let currentGroup = [];
    let touchStartX = 0;
    let touchEndX = 0;
    let leftArrow;
    let rightArrow;

    images.forEach(img => {
        img.addEventListener('click', function () {
            const groupKey = this.dataset.group;
            currentGroup = imageGroups[groupKey] || [this.src];
            currentIndex = 0;

            expandedImg.src = currentGroup[currentIndex];
            overlay.style.display = 'flex';

            setTimeout(() => {
                overlay.classList.add('active');

                if (window.innerWidth <= 768 && !leftArrow) {
                    leftArrow = document.createElement('div');
                    leftArrow.id = 'left-arrow';
                    leftArrow.innerHTML = '❮';
                    overlay.appendChild(leftArrow);
                    leftArrow.addEventListener('click', prevImage);

                    rightArrow = document.createElement('div');
                    rightArrow.id = 'right-arrow';
                    rightArrow.innerHTML = '❯';
                    overlay.appendChild(rightArrow);
                    rightArrow.addEventListener('click', nextImage);
                }

                updateArrows();
            }, 10);
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 300);
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.style.display = 'none', 300);
        }
    });

    function prevImage() {
        currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
        updateExpandedImage();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % currentGroup.length;
        updateExpandedImage();
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    expandedImg.addEventListener('touchstart', function (event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    expandedImg.addEventListener('touchend', function (event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextImage();
        } else if (touchEndX > touchStartX) {
            prevImage();
        }
    }

    function updateExpandedImage() {
        expandedImg.src = currentGroup[currentIndex];
        updateArrows();
    }

    function updateArrows() {
        if (!leftArrow || !rightArrow) return;

        if (window.innerWidth <= 768) {
            if (currentGroup.length > 1) {
                leftArrow.style.display = currentIndex > 0 ? 'block' : 'none';
                rightArrow.style.display = currentIndex < currentGroup.length - 1 ? 'block' : 'none';
            } else {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            }
        }
    }
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}