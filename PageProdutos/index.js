 let imgCamisa = document.createElement('img');
 let imgCopo = document.createElement('img');
 let imgBone = document.createElement('img');
 let imgUniforme = document.createElement('img');

 imgCamisa.src = '/PageProdutos/imagensProdutos/camisaFutebol02.png';
 
 const produtos = [];

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function atualizarCarrinho() {
      document.getElementById("cartCount").innerText = carrinho.length;
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    function adicionarAoCarrinho(id) {
      const produto = produtos.find(p => p.id === id);
      carrinho.push(produto);
      atualizarCarrinho();
      alert(produto.nome + " adicionado ao carrinho!");
    }

    function irParaPagamento() {
      window.location.href = "pagamento.html";
    }

    function comprarDireto(id) {
      const produto = produtos.find(p => p.id === id);
      localStorage.setItem("carrinho", JSON.stringify([produto]));
      irParaPagamento();
    }

    const container = document.getElementById("produtos");
    produtos.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      container.appendChild(card);
    });

    atualizarCarrinho();