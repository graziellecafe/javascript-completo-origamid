// // fetch: requisiões assíncronas normalmente quando vamos utilizar uma api
// exemplo: puxar informação do servidor com a qtde de produtos que está ne

fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });
// ----
const data = {
  id: 'graziellecafe',
  nome: 'Grazielle',
  email: 'graziellecafe@gmail.com',
  senha: '12345',
  cep: '45783428032',
  rua: 'Ali Perto',
  numero: '230',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'Rio de Janeiro',
};

fetch('https://ranekapi.origamid.dev/json/api/produto'),
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), //corpo sempre mandado em string
  };
