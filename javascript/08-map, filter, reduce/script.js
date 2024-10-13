const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));

console.log(precosFiltro);

// map
const precoNumeros = precosFiltro.map(function (precos) {
  console.log(precos);
  return precos.replace('R$ ', '');
});

console.log(precoNumeros);
