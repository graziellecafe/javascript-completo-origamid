# 👩🏻‍🏫 React Completo: Origamid 
Repositório para estudos e resolução de exercícios sobre React 

## 📌 React Completo
Componentes funcionais, Hooks, Ciclo de Vida, Formulários, Propriedades, Router e Mais. 

**Pré Requisitos**: HTML / CSS / Javascript

**Ferramentas**: Visual Studio Code, Node.js, NPM. 

## 📌 Grade do Curso 
**React Completo**: Ferramentas e Javascript

**React para Iniciantes**: React básico, Vite, JSX, Eventos, Componentes, Propriedades

**React Hooks**: useState, useEffect, useRef, userMemo, useContext, Custom Hooks, Regras

**Formulários**: Input, Select, Radio, Checkbox, useForm, Validação

**CSS**: CSS Import, CSS Modules, Styled Components, Frameworks, Imagens 

**React Router**: Router, Link, useParams, Nested Routes, head

**Mais React**: PropTypes, Lazy e Suspense, Memo, UseReducer, Classes

**Projeto Final**: API, Autenticação JWT, Scroll Infinito, Biblioteca Externa, Build, Loading. 

## 📚 Tópico 1: Revisão Javascript
**Conteúdo**: Arrow Function, Destructuring, Rest e Spread, Module (Export, Import), Fetch, Async/Await, Arrays (map, reduce e filter), Expressões.  

### 📌 1. Tudo é objeto 
Tudo é objeto: objeto tem propriedades e métodos.

```js
const menu = {
  class: '.principal',
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
};

menu.ativar();

// Outros exemplos
console.log('Grazielle'.length);
console.log('Grazielle'.toUpperCase());
console.log([10, 15, 20].length);
````

### 📌 2. Funções e Arrow Functions
**2.1 Estilo de escrita da função normal**
```js
function upperName(name) {
  return name.toUpperCase();
}

console.log(upperName('Grazielle Amanda do Carmo Café'));
```

**2.2. Formato em expressão**: iniciar uma constante como função
```js
// expressão: colocar uma função dentro de uma variável
const upperNameConst = function (name) {
  return name.toUpperCase();
};

console.log(upperNameConst('Kátia Aparecida do Carmo Café'));
```

**2.3 Arrow Function**
```js
const upperNameArrowFunction = (name) => {
  return name.toUpperCase();
};

console.log(upperNameArrowFunction('José Geraldo Café'));
```
**Outro exemplo para Arrow Function**
```js
const countLetters = (word) => word.length;
console.log(countLetters('Grazielle'));
```

### 📌 3. Desestruturação
```js
function handleMouseMove(event){ 
    const { clientX, clientY, target } = event; 
    console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove); 
```

```js
const frutas = ["Banana", "Uva", "Mamão"]; 
const [fruta1, fruta2] = frutas
console.log(fruta1); 
```

No React iremos aprender sobre useState, que pode ser exemplificado desta maneira: 
```js
// valor e função
```js
const useState = ["blue", function(color){ 
    useState[0] = color; 
  }
];


// desestruturação: 
const [color, setColor] = useState 

// vai setar a nova cor para red. 
```

### 📌 4. Spread e Rest
**Rest**
```js
function showList(empresa, ...client) {
  console.log(empresa);
  console.log(client);
}

showList('Origamid', 'João', 'Maria', 'Grazielle');
```

**Saída**: 
- **Empresa**: Origamid
- **Client**: ['João', 'Maria', 'Grazielle'];

**Spread**
```js
const numeros = [1, 2, 4, 29, 2, 45, 67, 32, 89, 32]; 
console.log(Math.max(...numeros));
```

### 📌 6. Module
```js
export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}
```

```js
//script
import { areaQuadrado, perimetroQuadrado } from './quadrado.js';

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(5));
```

### 📌 7. Fetch
Envia requisições assíncronas para o servidor. Serve para acessarmos / escrevermos dados em apis externas.

A função do fetch é retornar uma promessa (Promise). No then a gente passa uma função, faz o código resolver. Função de callback depois que o Promise realizar.

```js
const requisicao = fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML.jsonBody[0].nome;
    console.log(jsonBody);
  });

console.log(requisicao);
```


### 📌 8. Async / Await
Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

Podemos colocar try {} catch(e) {} para lidarmos com erros.

```js
async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  console.log(jsonBody);
  return jsonBody;
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
```

### 📌 9. Map, Filter e REduce 
#### 9.1 Filter
Métodos para iterarmos entre os valores de arrays 
```js
const precos = [
  "Crédito", 
  "R$ 200", 
  "R$ 400", 
  "Contas a Pagar", 
  "R$ 300", 
  "R$ 400", 
  "Meus dados"
], 
```

Retorna uma array nova, que contem os items em que o retorno da função for verdadeiro.

```js
const precosFiltro = precos.filter(preco => preco.includes("R$")); 
```
#### 9.2 Map
```js
const precoNumeros = precosFiltro.map(function(preco) {
  console.log(preco); 
  return preco.replace("R$ ", ""); 
})
```

#### 9.3 Reduce
```js
const total = precoNumeros.reduce(function(){ 
  return 1200; 
})

console.log(total); 
```

### 10. Expressões 
```js
const grupoA = 100; 
const grupoB = 200; 

const vencedor = grupoA > grupoB ? "Grupo A ganhou" : "Grupo B ganhou"; 

console.log(vencedor); 
```

