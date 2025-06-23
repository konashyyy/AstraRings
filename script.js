class InfiniteCarousel {
            constructor(carouselElement) {
                this.carousel = carouselElement;
                this.container = this.carousel.querySelector('.products-container');
                this.prevBtn = this.carousel.querySelector('.prev');
                this.nextBtn = this.carousel.querySelector('.next');
                this.cards = Array.from(this.container.children);
                this.cardWidth = 240;
                this.visibleCards = this.getVisibleCards();
                this.currentIndex = 0;
                
                this.init();
            }

            getVisibleCards() {
                const containerWidth = this.carousel.offsetWidth;
                return Math.floor(containerWidth / this.cardWidth);
            }

            init() {
                this.cloneCards();
                this.setupEventListeners();
                this.updateCarousel();
                
                window.addEventListener('resize', () => {
                    this.visibleCards = this.getVisibleCards();
                    this.updateCarousel();
                });
            }

            cloneCards() {
                const originalCards = [...this.cards];
                
                originalCards.forEach(card => {
                    const cloneBefore = card.cloneNode(true);
                    const cloneAfter = card.cloneNode(true);
                    this.container.appendChild(cloneAfter);
                    this.container.insertBefore(cloneBefore, this.container.firstChild);
                });
                
                this.allCards = Array.from(this.container.children);
                this.totalCards = this.allCards.length;
                this.originalLength = originalCards.length;
                this.currentIndex = this.originalLength;
            }

            setupEventListeners() {
                this.prevBtn.addEventListener('click', () => this.prev());
                this.nextBtn.addEventListener('click', () => this.next());
                
                this.container.addEventListener('transitionend', () => {
                    if (this.currentIndex <= 0) {
                        this.container.style.transition = 'none';
                        this.currentIndex = this.originalLength;
                        this.updateCarousel();
                        requestAnimationFrame(() => {
                            this.container.style.transition = 'transform 0.5s ease';
                        });
                    } else if (this.currentIndex >= this.totalCards - this.originalLength) {
                        this.container.style.transition = 'none';
                        this.currentIndex = this.originalLength;
                        this.updateCarousel();
                        requestAnimationFrame(() => {
                            this.container.style.transition = 'transform 0.5s ease';
                        });
                    }
                });
            }

            updateCarousel() {
                const translateX = -this.currentIndex * this.cardWidth;
                this.container.style.transform = `translateX(${translateX}px)`;
            }

            next() {
                this.currentIndex++;
                this.updateCarousel();
            }

            prev() {
                this.currentIndex--;
                this.updateCarousel();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const carousels = document.querySelectorAll('.products-carousel');
            carousels.forEach(carousel => {
                new InfiniteCarousel(carousel);
            });
        });

        document.getElementById('cartierup').addEventListener('click', function() {
            const alvo = document.getElementById('cartierdown');
            const deslocamento = 80;
            const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
         });
        });

        document.getElementById('pandoraup').addEventListener('click', function() {
            const alvo = document.getElementById('pandoradown');
            const deslocamento = 80;
            const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
         });
        });

        document.getElementById('tiffanyup').addEventListener('click', function() {
            const alvo = document.getElementById('tiffanydown');
            const deslocamento = 80;
            const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
         });
        });


        document.getElementById('vancleefup').addEventListener('click', function() {
            const alvo = document.getElementById('vancleefdown');
            const deslocamento = 80;
            const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
         });
        });

        document.getElementById('piagetup').addEventListener('click', function() {
            const alvo = document.getElementById('piagetdown');
            const deslocamento = 80;
            const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
         });
        });90