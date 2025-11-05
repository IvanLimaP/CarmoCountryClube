const produtos = [
      { id: 1, nome: "Camisa Sócio Torcedor OFICIAL", preco: 99.99 },
      { id: 2, nome: "Uniforme Time Sócio Jogador OFICIAL", preco: 149.99 },
      { id: 3, nome: "Copo Personalizado Carmo Country Clube", preco: 99.99 },
      { id: 4, nome: "Boné Personalizado Carmo Country Clube", preco: 29.99 }
    ];

    let carrinho = JSON.parse(localStorage.getItem("/PageProdutos/Carrinho")) || [];

    function atualizarCarrinho() {
      document.getElementById("cartCount").innerText = carrinho.length;
      localStorage.setItem("/PageProdutos/Carrinho", JSON.stringify(carrinho));
    }

    function adicionarAoCarrinho(id) {
      const produto = produtos.find(p => p.id === id);
      carrinho.push(produto);
      atualizarCarrinho();
      alert(produto.nome + " adicionado ao carrinho!");
    }

    function irParaCarrinho() {
      window.location.href = "/PageProdutos/Carrinho/index.html";
    }

    function comprarDireto(id) {
      const produto = produtos.find(p => p.id === id);
      localStorage.setItem("carrinho", JSON.stringify([produto]));
      window.location.href = "/PageProdutos/Pagamento";
    }

    const container = document.getElementById("produtos");
    produtos.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${p.nome}</h3>
        <p class="price">R$ ${p.preco.toFixed(2)}</p>
        <div class="actions">
          <button onclick="comprarDireto(${p.id})">Comprar</button>
          <div class="cart-btn" onclick="adicionarAoCarrinho(${p.id})">🛒</div>
        </div>
      `;
      container.appendChild(card);
    });

    atualizarCarrinho();