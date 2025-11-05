function finalizarCompra() {
      const rua = document.getElementById("rua").value;
      const numero = document.getElementById("numero").value;
      const cidade = document.getElementById("cidade").value;

      if (!rua || !numero || !cidade) {
        alert("Por favor, preencha todos os campos de endereço.");
        return;
      }

      alert("Compra finalizada com sucesso! Obrigado por apoiar o Carmo Country Clube! 💚");
      localStorage.removeItem("/PageProdutos/Carrinho");
      window.location.href = "/PageProdutos/index.html";
    }