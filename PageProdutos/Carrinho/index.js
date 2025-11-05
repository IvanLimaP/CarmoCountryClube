let carrinho = JSON.parse(localStorage.getItem("/PageProdutos/Carrinho")) || [];

    
const container = document.getElementById("carrinhoContainer");

    function renderCarrinho() {
      container.innerHTML = "";
      if (carrinho.length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio 😢</p>";
        return;
      }
      carrinho.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
          <div class="info">
            <h4>${item.nome}</h4>
            <p>R$ ${item.preco.toFixed(2)}</p>
          </div>
          <span class="remove" onclick="remover(${index})">✖</span>
        `;
        container.appendChild(div);
      });

      const total = carrinho.reduce((s, p) => s + p.preco, 0);
      const totalDiv = document.createElement("div");
      totalDiv.classList.add("total");
      totalDiv.innerText = "Total: R$ " + total.toFixed(2);
      container.appendChild(totalDiv);
    }

    function remover(index) {
      carrinho.splice(index, 1);
      localStorage.setItem("/PageProdutos/Carrinho", JSON.stringify(carrinho));
      renderCarrinho();
    }

    function irParaPagamento() {
      if (carrinho.length === 0) {
        alert("Adicione produtos ao carrinho antes de continuar!");
        return;
      }
      window.location.href = "/pageProdutos/pagamento";
    }

    renderCarrinho();