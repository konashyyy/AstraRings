let quantity = 1;

        function increaseQuantity() {
            quantity++;
            document.getElementById('quantity').textContent = quantity;
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').textContent = quantity;
            }
        }

        const products = {
  cartier01: {
    image: "IMG/Cartier-20250603T230532Z-1-001/Cartier/ALIANÇA LOVE 8 DIAMANTES.png",
    category: "CARTIER",
    name: "ANEL LOVE 8 DIAMANTES",
    description: "Anel icônico da Cartier com 8 diamantes em ouro 18k. Símbolo eterno de amor e compromisso.",
    material: "Ouro 18k",
    pedra: "8 Diamantes naturais",
    garantia: "2 anos",
    entrega: "5-7 dias úteis"
  },
  cartier02: {
    image: "IMG/Cartier-20250603T230532Z-1-001/Cartier/ANEL CLASH DE CARTIER MODELO MÉDIO.png",
    category: "CARTIER",
    name: "ANEL CLASH DE CARTIER",
    description: "Anel de design ousado da linha Clash de Cartier. Combina rebeldia e sofisticação em uma peça única.",
    material: "Ouro 18k",
    pedra: "Sem pedras",
    garantia: "1 ano",
    entrega: "5-7 dias úteis"
  },
  cartier03: {
    image: "IMG/Cartier-20250603T230532Z-1-001/Cartier/ANEL ECROU DE CARTIER.png",
    category: "CARTIER",
    name: "ANEL ECROU DE CARTIER",
    description: "Anel contemporâneo inspirado em elementos industriais. Luxo com atitude moderna.",
    material: "Ouro branco",
    pedra: "Sem pedras",
    garantia: "1 ano",
    entrega: "5-7 dias úteis"
  },
  cartier04: {
    image: "IMG/Cartier-20250603T230532Z-1-001/Cartier/ANEL ETINCELLE DE CARTIER.png",
    category: "CARTIER",
    name: "ANEL ETINCELLE DE CARTIER",
    description: "Um anel delicado e cheio de brilho. Cravado com diamantes cintilantes para momentos inesquecíveis.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "7-10 dias úteis"
  },
  cartier05: {
    image: "IMG/Cartier-20250603T230532Z-1-001/Cartier/ANEL JUSTE UN CLOU MP DIA.png",
    category: "CARTIER",
    name: "ANEL JUSTE UN CLOU MP DIA",
    description: "Anel em forma de prego, símbolo de ousadia e liberdade. Edição com diamantes para um toque de brilho.",
    material: "Ouro amarelo",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "5-7 dias úteis"
  },
  pandora01: {
    image: "IMG/Pandora-20250603T230542Z-1-001/Pandora/1/343783-1200-1200-removebg-preview (1).png",
    category: "PANDORA",
    name: "ANEL DE DIMA 2 QUILATES",
    description: "Anel elegante com diamante central de 2 quilates. Ideal para pedidos de noivado inesquecíveis.",
    material: "Prata de lei",
    pedra: "Diamante sintético 2ct",
    garantia: "1 ano",
    entrega: "5-7 dias úteis"
  },
  pandora02: {
    image: "IMG/Pandora-20250603T230542Z-1-001/Pandora/2/343777-1200-1200-removebg-preview.png",
    category: "PANDORA",
    name: "ANEL DE PRINCESA ROSA ENCANTADA",
    description: "Anel encantador com pedra rosa inspirado nas princesas. Romântico e delicado.",
    material: "Prata de lei",
    pedra: "Zircônia rosa",
    garantia: "1 ano",
    entrega: "7 dias úteis"
  },
  pandora03: {
    image: "IMG/Pandora-20250603T230542Z-1-001/Pandora/3/180830-1200-1200-removebg-preview.png",
    category: "PANDORA",
    name: "ANEL DE FADAS MÁGICO",
    description: "Com pedras brilhantes e detalhes mágicos, esse anel encanta com sua beleza de contos de fadas.",
    material: "Prata de lei",
    pedra: "Zircônia cintilante",
    garantia: "1 ano",
    entrega: "6 dias úteis"
  },
  pandora04: {
    image: "IMG/Pandora-20250603T230542Z-1-001/Pandora/4/180964-1200-1200-removebg-preview.png",
    category: "PANDORA",
    name: "ANEL DA ALICE COLLECTION",
    description: "Inspirado em Alice no País das Maravilhas, com pedras coloridas e estilo encantado.",
    material: "Prata de lei",
    pedra: "Cristal azul",
    garantia: "1 ano",
    entrega: "5-7 dias úteis"
  },
  pandora05: {
    image: "IMG/Pandora-20250603T230542Z-1-001/Pandora/5/354231-1200-1200-removebg-preview.png",
    category: "PANDORA",
    name: "ANEL CORAÇÕES ROMÂNTICO",
    description: "Design delicado com corações interligados, símbolo de amor eterno.",
    material: "Prata de lei",
    pedra: "Sem pedras",
    garantia: "1 ano",
    entrega: "7 dias úteis"
  },
  tiffany01: {
    image: "IMG/Tiffany & Co.-20250603T230547Z-1-001/Tiffany & Co_/1.png",
    category: "TIFFANY & CO.",
    name: "ANEL SOLITÁRIO TIFFANY SETTING",
    description: "O clássico solitário da Tiffany com design icônico e atemporal, perfeito para pedidos de casamento.",
    material: "Platina",
    pedra: "Diamante central",
    garantia: "3 anos",
    entrega: "10 dias úteis"
  },
  tiffany02: {
    image: "IMG/Tiffany & Co.-20250603T230547Z-1-001/Tiffany & Co_/2.png",
    category: "TIFFANY & CO.",
    name: "ANEL TIFFANY T COLLECTION",
    description: "Design moderno da linha T com linhas limpas e ousadas. Sofisticação urbana.",
    material: "Ouro branco",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "7 dias úteis"
  },
  tiffany03: {
    image: "IMG/Tiffany & Co.-20250603T230547Z-1-001/Tiffany & Co_/3.png",
    category: "TIFFANY & CO.",
    name: "ANEL TIFFANY LOVE COLLECTION",
    description: "Representa o amor em sua forma mais moderna e pura, com design exclusivo.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  tiffany04: {
    image: "IMG/Tiffany & Co.-20250603T230547Z-1-001/Tiffany & Co_/4.png",
    category: "TIFFANY & CO.",
    name: "ANEL TB SOLITAIRE PLATINUM",
    description: "Elegância refinada com diamante central, lapidação perfeita.",
    material: "Platina",
    pedra: "Diamante",
    garantia: "3 anos",
    entrega: "7-10 dias úteis"
  },
  tiffany05: {
    image: "IMG/Tiffany & Co.-20250603T230547Z-1-001/Tiffany & Co_/5.png",
    category: "TIFFANY & CO.",
    name: "ANEL ELSA PERETTI DIAMONDS",
    description: "Design fluido e moderno de Elsa Peretti, com diamantes delicadamente inseridos.",
    material: "Ouro branco",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  vancleef01: {
    image: "IMG/Van Cleef & Arpels-20250603T230707Z-1-001/Van Cleef & Arpels/01.png",
    category: "VAN CLEEF AND ARPELS",
    name: "ANEL SWEET ALHAMBRA GOLD",
    description: "Peça delicada da linha Alhambra com acabamento em ouro amarelo.",
    material: "Ouro amarelo",
    pedra: "Sem pedras",
    garantia: "2 anos",
    entrega: "7 dias úteis"
  },
  vancleef02: {
    image: "IMG/Van Cleef & Arpels-20250603T230707Z-1-001/Van Cleef & Arpels/02.png",
    category: "VAN CLEEF AND ARPELS",
    name: "ANEL ALHAMBRA COLLECTION",
    description: "Design icônico de Alhambra com detalhes em ouro branco.",
    material: "Ouro branco",
    pedra: "Sem pedras",
    garantia: "2 anos",
    entrega: "7 dias úteis"
  },
  vancleef03: {
    image: "IMG/Van Cleef & Arpels-20250603T230707Z-1-001/Van Cleef & Arpels/03.png",
    category: "VAN CLEEF AND ARPELS",
    name: "ANEL FRIVOLE DIAMONDS",
    description: "Pétalas cintilantes de diamantes que capturam a luz com cada movimento.",
    material: "Ouro amarelo",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  vancleef04: {
    image: "IMG/Van Cleef & Arpels-20250603T230707Z-1-001/Van Cleef & Arpels/04.png",
    category: "VAN CLEEF AND ARPELS",
    name: "ANEL LOTUS COLLECTION",
    description: "Inspirado na flor de lótus, com camadas elegantes e detalhamento impecável.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "3 anos",
    entrega: "10 dias úteis"
  },
  vancleef05: {
    image: "IMG/Van Cleef & Arpels-20250603T230707Z-1-001/Van Cleef & Arpels/05.png",
    category: "VAN CLEEF AND ARPELS",
    name: "ANEL PERLÉE GOLD",
    description: "Design com esferas douradas polidas, refinamento absoluto da coleção Perlée.",
    material: "Ouro amarelo",
    pedra: "Sem pedras",
    garantia: "2 anos",
    entrega: "8 dias úteis"
  },
  piaget01: {
    image: "IMG/Piaget-20250603T230544Z-1-001/01-removebg-preview.png",
    category: "PIAGET",
    name: "POSSESSION RING ROSE GOLD",
    description: "Anel com design giratório exclusivo da linha Possession. Elegância interativa.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  piaget02: {
    image: "IMG/Piaget-20250603T230544Z-1-001/02-removebg-preview.png",
    category: "PIAGET",
    name: "PIAGET ROSE COLLECTION",
    description: "Inspirado nas rosas, esse anel celebra o romantismo com elegância.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  piaget03: {
    image: "IMG/Piaget-20250603T230544Z-1-001/03-removebg-preview.png",
    category: "PIAGET",
    name: "PIAGET SUNLIGHT DIAMONDS",
    description: "Radiante como o sol, esse anel traz brilho intenso com design refinado.",
    material: "Ouro branco",
    pedra: "Diamantes",
    garantia: "2 anos",
    entrega: "10 dias úteis"
  },
  piaget04: {
    image: "IMG/Piaget-20250603T230544Z-1-001/04flo-removebg-preview.png",
    category: "PIAGET",
    name: "EXTREMELY PIAGET COLLECTION",
    description: "Design arrojado e exclusivo da alta joalheria Piaget. Luxo em sua forma máxima.",
    material: "Ouro rosa",
    pedra: "Diamantes",
    garantia: "3 anos",
    entrega: "12 dias úteis"
  },
  piaget05: {
    image: "IMG/Piaget-20250603T230544Z-1-001/05-removebg-preview.png",
    category: "PIAGET",
    name: "GOLDEN OASIS LUXURY",
    description: "Joia deslumbrante da coleção Golden Oasis. Inspiração na natureza e requinte absoluto.",
    material: "Ouro amarelo",
    pedra: "Diamantes",
    garantia: "3 anos",
    entrega: "12 dias úteis"
  }
};

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProduct(product) {
  const imgElement = document.querySelector(".product-image img");
  const titleElement = document.querySelector(".product-title");
  const categoryElement = document.querySelector(".product-category");
  const descriptionElement = document.querySelector(".product-description");
  const detailsElement = document.querySelector(".product-details");

  if (imgElement && titleElement && categoryElement && descriptionElement && detailsElement) {
    imgElement.src = product.image;
    titleElement.textContent = product.name;
    categoryElement.textContent = product.category;
    descriptionElement.textContent = product.description;

    detailsElement.innerHTML = `
      <p>Material: ${product.material}</p>
      <p>Pedra: ${product.pedra}</p>
      <p>Garantia: ${product.garantia}</p>
      <p>Entrega: ${product.entrega}</p>
    `;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const id = getProductId();
  if (id && products[id]) {
    renderProduct(products[id]);
  } else {
    const titleElement = document.querySelector(".product-title");
    if (titleElement) {
      titleElement.textContent = "Produto não encontrado.";
    }
  }
});

function increaseQuantity() {
  const qty = document.getElementById("quantity");
  qty.textContent = parseInt(qty.textContent) + 1;
}

function decreaseQuantity() {
  const qty = document.getElementById("quantity");
  const value = parseInt(qty.textContent);
  if (value > 1) qty.textContent = value - 1;
}

 function toggleCart() {
      const cartSidebar = document.getElementById("cart-sidebar");
      cartSidebar.classList.toggle("active");

      // Simulação: produto no carrinho
      const temProduto = false; // troque para true para simular carrinho com item
      const texto = temProduto 
        ? "Você tem 1 produto no carrinho." 
        : "Você não tem produtos no carrinho.";

      document.getElementById("cart-status").textContent = texto;
    }

    function toggleProfile() {
  const profileSidebar = document.getElementById("profile-sidebar");
  profileSidebar.classList.toggle("active");
}

