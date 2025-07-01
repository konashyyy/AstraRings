// Função para abrir/fechar carrinho e atualizar conteúdo
    function toggleCart() {
      const cartSidebar = document.getElementById("cart-sidebar");
      cartSidebar.classList.toggle("active");
      updateCartSidebar();
    }

    // Função para abrir/fechar perfil
    function toggleProfile() {
      const profileSidebar = document.getElementById("profile-sidebar");
      profileSidebar.classList.toggle("active");
    }

    // Atualiza a lista de itens do carrinho
    function updateCartSidebar() {
      const cartItems = document.getElementById("cart-items");
      const cartStatus = document.getElementById("cart-status");
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cartItems.innerHTML = "";

      if (cart.length === 0) {
        cartStatus.textContent = "Você não tem produtos no carrinho.";
        return;
      }

      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("cart-item");

        li.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <div class="cart-item-info">
            <strong>${item.title}</strong><br />
            Tamanho ${item.size}<br />
            Quantidade: ${item.quantity}
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${index})">🗑️</button>
        `;

        cartItems.appendChild(li);
      });

      cartStatus.textContent = "";
    }

    // Remove item do carrinho pelo índice
    function removeFromCart(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartSidebar();
    }

    // Atualiza o carrinho ao carregar a página
    window.onload = () => {
      updateCartSidebar();
    };

    // (Opcional) Código para scroll suave nas marcas - mantive o seu original

    document.getElementById("cartierup").addEventListener("click", function () {
      const alvo = document.getElementById("cartierdown");
      const deslocamento = 80;
      const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

      window.scrollTo({
        top: posicao,
        behavior: "smooth",
      });
    });

    document.getElementById("pandoraup").addEventListener("click", function () {
      const alvo = document.getElementById("pandoradown");
      const deslocamento = 80;
      const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

      window.scrollTo({
        top: posicao,
        behavior: "smooth",
      });
    });

    document.getElementById("tiffanyup").addEventListener("click", function () {
      const alvo = document.getElementById("tiffanydown");
      const deslocamento = 80;
      const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

      window.scrollTo({
        top: posicao,
        behavior: "smooth",
      });
    });

    document.getElementById("vancleefup").addEventListener("click", function () {
      const alvo = document.getElementById("vancleefdown");
      const deslocamento = 80;
      const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

      window.scrollTo({
        top: posicao,
        behavior: "smooth",
      });
    });

    document.getElementById("piagetup").addEventListener("click", function () {
      const alvo = document.getElementById("piagetdown");
      const deslocamento = 80;
      const posicao = alvo.getBoundingClientRect().top + window.scrollY - deslocamento;

      window.scrollTo({
        top: posicao,
        behavior: "smooth",
      });
    });


    class InfiniteCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.container = this.carousel.querySelector(".products-container");
    this.prevBtn = this.carousel.querySelector(".prev");
    this.nextBtn = this.carousel.querySelector(".next");
    this.cards = Array.from(this.container.children);
    this.cardWidth = 240;
    this.currentIndex = 0;
    this.maxIndex = this.cards.length - Math.floor(this.carousel.offsetWidth / this.cardWidth);

    this.updateCarousel();
    this.setupEventListeners();
    window.addEventListener("resize", () => this.handleResize());
  }

  handleResize() {
    this.maxIndex = this.cards.length - Math.floor(this.carousel.offsetWidth / this.cardWidth);
    this.updateCarousel();
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());
  }

  updateCarousel() {
    const translateX = -this.currentIndex * this.cardWidth;
    this.container.style.transform = `translateX(${translateX}px)`;
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    } else {
      alert("Você chegou ao fim do carrossel.");
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".products-carousel");
  carousels.forEach((carousel) => new InfiniteCarousel(carousel));
});

   const searchWrapper = document.getElementById('search-wrapper');
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');

  searchIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // impede fechar imediatamente
    searchWrapper.classList.toggle('active');
    if (searchWrapper.classList.contains('active')) {
      searchInput.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchWrapper.contains(e.target)) {
      searchWrapper.classList.remove('active');
    }
  });

