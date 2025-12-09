const { useReducer } = require("react");

// EXERCÍCIO 1: FILTRAR PRODUTOS POR CATEGORIA
const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];
// Sua solução aqui:
/*function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}

// Testes:
console.log("=== EXERCÍCIO 1 ===");
const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);
console.log(eletronicos.map(p => p.nome)); 


// EXERCÍCIO 2: PRODUTOS EM ESTOQUE

// Sua solução aqui:
function produtosDisponiveis(produtos) {
    return produtos.filter(produto => produto.estoque > 0);
}



// Testes:
console.log("\n=== EXERCÍCIO 2 ===");
const disponiveis = produtosDisponiveis(produtos);
console.log(`Produtos disponíveis: ${disponiveis.length}`);
console.log("Produtos em falta:");
const emFalta = produtos.filter(p => p.estoque === 0);
console.log(emFalta.map(p => p.nome));


// EXERCÍCIO 3: CALCULAR VALOR TOTAL DO ESTOQUE

// Sua solução aqui:

function valorTotalEstoque(produtos) {
    return produtos.reduce((total, produto) => {
        const precoComDesconto = produto.preco * (1 - produto.desconto / 100);
        return total + precoComDesconto * produto.estoque;
    }, 0);
}


// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
const total = valorTotalEstoque(produtos);
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);



// EXERCÍCIO 4: APLICAR DESCONTO

// Sua solução aqui:

function aplicarDescontos(produtos) {
    return produtos.map(produto => {
        const precoFinal = produto.preco * (1 - produto.desconto / 100);
        return { ...produto, precoFinal };
    });
}


// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log("Produtos com desconto:");
comDescontos
  .filter(p => p.desconto > 0)
  .forEach(p => {
    console.log(`${p.nome}: R$ ${p.preco} → R$ ${p.precoFinal.toFixed(2)} (${p.desconto}% off)`);
  });



// EXERCÍCIO 5: ENCONTRAR PRODUTO MAIS CARO

// Sua solução aqui:

function produtoMaisCaro(produtos) {
    return produtos.reduce((maisCaro, produtoAtual) => {
        return (produtoAtual.preco > maisCaro.preco) ? produtoAtual : maisCaro;
    }, produtos[0]);
}


// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);


// EXERCÍCIO 6: LISTAR NOMES DOS PRODUTOS

// Sua solução aqui:

function listarNomes(produtos) {
    return produtos.map(produto => produto.nome);
}


// Testes:
console.log("\n=== EXERCÍCIO 6 ===");
const nomes = listarNomes(produtos);
console.log("Lista de produtos:");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));



// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE

// Sua solução aqui:

function produtosCarosDisponiveis(produtos) {
    return produtos.filter(produto => produto.preco > 300 && produto.estoque > 0);
}


// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));



// EXERCÍCIO 8: MÉDIA DE PREÇOS POR CATEGORIA

// Sua solução aqui:

function mediaPrecoPorCategoria(produtos) {
    const categorias = {};
    produtos.forEach(produto => {
        if (!categorias[produto.categoria]) {
            categorias[produto.categoria] = { total: 0, count: 0 };
        }
        categorias[produto.categoria].total += produto.preco;
        categorias[produto.categoria].count += 1;
    });
    const medias = {};
    for (const categoria in categorias) {
        medias[categoria] = categorias[categoria].total / categorias[categoria].count;
    }
    return medias;
}


// Testes:
console.log("\n=== EXERCÍCIO 8 ===");
const medias = mediaPrecoPorCategoria(produtos);
Object.entries(medias).forEach(([categoria, media]) => {
  console.log(`Preço médio - ${categoria}: R$ ${media.toFixed(2)}`);
});


// EXERCÍCIO 9: TOP 3 PRODUTOS MAIS CAROS

// Sua solução aqui:

function top3MaisCaros(produtos) {
    const ordenados = [...produtos].sort((a, b) => b.preco - a.preco);
    return ordenados.slice(0, 3);
} 


// Testes:
console.log("\n=== EXERCÍCIO 9 ===");
const top3 = top3MaisCaros(produtos);
console.log("Top 3 produtos mais caros:");
top3.forEach((p, i) => {
  console.log(`${i + 1}º - ${p.nome}: R$ ${p.preco}`);
});


// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE (DESAFIO)

// Sua solução aqui:

function estatisticasEstoque(produtos) {
    const totalProdutos = produtos.length;
    const totalEmEstoque = produtos.filter(p => p.estoque > 0).length;
    const totalEmFalta = produtos.filter(p => p.estoque === 0).length;
    const valorTotal = produtos.reduce((total, produto) => {
        const precoComDesconto = produto.preco * (1 - produto.desconto / 100);
        return total + precoComDesconto * produto.estoque;
    }, 0);
    const precoMedio = valorTotal / totalProdutos;
    const produtoMaisCaro = produtos.reduce((maisCaro, produtoAtual) => {
        return (produtoAtual.preco > maisCaro.preco) ? produtoAtual : maisCaro;
    }, produtos[0]);
    const produtoMaisBarato = produtos.reduce((maisBarato, produtoAtual) => {
        return (produtoAtual.preco < maisBarato.preco) ? produtoAtual : maisBarato;
    }, produtos[0]);
    const categorias = [...new Set(produtos.map(p => p.categoria))];
    return {
        totalProdutos,
        totalEmEstoque,
        totalEmFalta,
        valorTotal,
        precoMedio,
        produtoMaisCaro,
        produtoMaisBarato,
        categorias
    };
}


// Testes:
console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);


// EXERCÍCIO 11: BUSCAR PRODUTO POR NOME (BÔNUS)

// Sua solução aqui:

function buscarProduto(produtos, termo) {
    const termoLower = termo.toLowerCase();
    return produtos.filter(produto => produto.nome.toLowerCase().includes(termoLower));
}


// Testes:
console.log("\n=== EXERCÍCIO 11 (BÔNUS) ===");
console.log("Buscar 'gamer':");
console.log(buscarProduto(produtos, "gamer").map(p => p.nome));

console.log("\nBuscar 'monitor':");
console.log(buscarProduto(produtos, "monitor").map(p => p.nome));



// EXERCÍCIO 12: AGRUPAR POR CATEGORIA (BÔNUS)

// Sua solução aqui:

function agruparPorCategoria(produtos) {
    return produtos.reduce((agrupados, produto) => {
        if (!agrupados[produto.categoria]) {
            agrupados[produto.categoria] = [];
        }
        agrupados[produto.categoria].push(produto);
        return agrupados;
    }
, {});
}


// Testes:
console.log("\n=== EXERCÍCIO 12 (BÔNUS) ===");
const agrupados = agruparPorCategoria(produtos);
Object.entries(agrupados).forEach(([categoria, prods]) => {
  console.log(`\n${categoria.toUpperCase()} (${prods.length} produtos):`);
  prods.forEach(p => console.log(`  - ${p.nome}`));
});

*/
const carrinho = {
  itens: [],

  adicionar(produto, quantidade) {
    const itemExistente = this.itens.find(item => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itens.push({ ...produto, quantidade });
    }
  },

  remover(produtoId) {
    const indice = this.itens.findIndex(item => item.id === produtoId);
    
    if (indice !== -1) {
      this.itens.splice(indice, 1);
    }
  },

  calcularTotal() {
    return this.itens.reduce((acumulador, item) => {
      const desconto = item.desconto || 0; 
      const precoComDesconto = item.preco * (1 - desconto);
      return acumulador + (precoComDesconto * item.quantidade);
    }, 0);
  },

  listarItens() {
    this.itens.forEach(item => {
      console.log(`${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2)}`);
    });
  },

  limpar() {
    this.itens = [];
  }


};
// Testes:
const mouse = { id: 1, nome: "Mouse", preco: 50.00 };
const monitor = { id: 2, nome: "Monitor", preco: 800.00, desconto: 0.1 };

carrinho.adicionar(mouse, 2);
carrinho.adicionar(monitor, 1);

carrinho.listarItens();

console.log(`Total: R$ ${carrinho.calcularTotal().toFixed(2)}`);

carrinho.remover(1);
carrinho.limpar();