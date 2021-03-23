let valor = 8;
/*let contaNota100 = 0;
let contaNota50 = 0;
let contaNota20 = 0;
let contaNota10 = 0;
let contaNota5 = 0;
let contaNota2 = 0;
let contaNota1 = 0;
let guardaValor = valor;

if(valor >= 100){
    contaNota100 = Math.floor(valor/100);
    valor = valor - contaNota100 * 100;
}
if(valor >= 50){
    contaNota50 = Math.floor(valor/50);
    valor = valor - contaNota50 * 50;
}
if(valor >= 20){
    contaNota20 = Math.floor(valor/20);
    valor = valor - contaNota20 * 20;
}
if(valor >= 10){
    contaNota10 = Math.floor(valor/10);
    valor = valor - contaNota10 * 10;
}
if(valor >= 5){
    contaNota5 = Math.floor(valor/5);
    valor = valor - contaNota5 * 5;
}
if(valor >= 2){
    contaNota2 = Math.floor(valor/2);
    valor = valor - contaNota2 * 2;
}
if(valor >=1){
    contaNota1 = valor
}

console.log(guardaValor);
console.log(contaNota100 + " notas de R$ 100,00");
console.log(contaNota50 + " notas de R$ 50,00");
console.log(contaNota20 + " notas de R$ 20,00");
console.log(contaNota10 + " notas de R$ 10,00");
console.log(contaNota5 + " notas de R$ 5,00");
console.log(contaNota2 + " notas de R$ 2,00");
console.log(contaNota1 + " notas de R$ 1,00");
*/
let valor = parseInt(gets());
console.log(valor);
[100,50,20,10,5,2,1].forEach(x => {
  let qtd=Math.floor(valor/x)
  valor-=x*qtd
  console.log(qtd + " nota(s) de R$ " + x + ",00")
})