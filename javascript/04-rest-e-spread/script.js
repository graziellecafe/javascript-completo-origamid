// Rest
function showList(empresa, ...client) {
  console.log(empresa);
  console.log(client);
}

showList('Origamid', 'João', 'Maria', 'Grazielle');

// Spread
const numeros = [1, 2, 4, 29, 2, 45, 67, 32, 89, 32];
console.log(Math.max(...numeros));

// Clone de objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
};

const cloneCarros = { ...carro };
console.log(cloneCarros);
