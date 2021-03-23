let n1 = parseInt(-5);
let n2 = parseInt(4);
let n3 = parseInt(10);
let n4 = parseInt(-3);
let n5 = parseInt(2);
let n6 = parseInt(7.8);
valor = [];
if(n1 % 2 == 0){
    valor.push(n1)
}
if(n2 % 2 == 0){
    valor.push(n2)
}
if(n3 % 2 == 0){
    valor.push(n3)
}
if(n4 % 2 == 0){
    valor.push(n4)
}
if(n5 % 2 == 0){
    valor.push(n5)
}
if(n6 % 2 == 0){
    valor.push(n6)
}
console.log(valor)
console.log(valor.length + " valores positivos")