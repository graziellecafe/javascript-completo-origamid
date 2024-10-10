// Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

// podemos colocar try {} catch(e) {}
// para lidarmos com erros

async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  console.log(jsonBody);
  return jsonBody;
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
