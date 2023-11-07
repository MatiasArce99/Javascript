//let -> Una varible pertenece al ámbito global o al ámbito de la función.
let nombre = 'Matías';
let edad = 33;
let altura = 1.80;
let productos = ['Yerba Mate', 'Azúcar', 'Leche', 'Galletas'];

//Mostrando a través de terminal resultados
console.log(nombre);
console.log(edad);
console.log(altura);
console.log(productos);

//Agrego un producto con método push
/**
 * Push, método que agrega elemento al final del array.
 */
productos.push('Fideos');
console.log(productos);

//Ámbito de una variable
/**
 * Variable i es global.
 * Varibale j es local.
 */
let i = 0;
function funcion() {
    i = 1;
    let j = 2;
    console.log(i); //1
    console.log(j);
}
funcion();

//Const -> Igual que let, pero prohíbe reasignación de valores.
/**
 * Si el valor de una constante es un array o un objeto se puede cambiar.
 */
const usuario = {name: 'Matías'};
usuario.name = 'Daniel'; //Mutabilidad
console.log(usuario.name);