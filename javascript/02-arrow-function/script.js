function upperName(name) {
  return name.toUpperCase();
}

console.log(upperName('Grazielle Amanda do Carmo Café'));

// expressão: colocar uma função dentro de uma variável
const upperNameConst = function (name) {
  return name.toUpperCase();
};

console.log(upperNameConst('Kátia Aparecida do Carmo Café'));

// arrow function
const upperNameArrowFunction = (name) => {
  return name.toUpperCase();
};

console.log(upperNameArrowFunction('José Geraldo Café'));

// ------ countLetters ------
const countLetters = (word) => word.length;
console.log(countLetters('Grazielle'));
