// Tudo é objeto: objeto temos propriedades e métodos.

const menu = {
  class: '.principal',
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
};

menu.ativar();

console.log('Grazielle'.length);
console.log('Grazielle'.toUpperCase());
console.log([10, 15, 20].length);
