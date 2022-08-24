let produtoA = { nome: "camiseta", valor: 100.0, internacional: true };
let produtoB = { nome: "perfume", valor: 200.0, internacional: true };
let produtoC = { nome: "sandália", valor: 120.0, internacional: false };

function ehMuamba(produto) {
  if (produto.internacional === true) {
    let custo = produto.valor * 1.2;
    console.log(`O produto ${produto.nome} tem o valor de R$${custo}`);
  } else {
    let custo = produto.valor * 1.12;
    console.log(`O produto ${produto.nome} tem o valor de R$${custo}`);
  }
}

ehMuamba(produtoA);
ehMuamba(produtoB);
ehMuamba(produtoC);
