/**
 * Callback es una función que se usa como argumento de otra función.
 */
let miArray = [1, 2, 3, 4, 5];
let valores = miArray.map((x) => x * 2);

console.log(valores);

/**
 * Toma un número por parámetro y si es par lo eleva al cubo.
 * Caso contrario le suma 3 y eleva al cuadrado.
 * @param {number} x Número a elevar.
 * @returns El resultado del cálculo.
 */
const miFuncion = (x) => {
    
    if (x % 2 === 0) {
        return x ** 3;
    } else {
        return (x + 3) ** 2;
    }

}

console.log(miFuncion(8));
console.log(miFuncion(3));

let valores2 = miArray.map(miFuncion); //Callback
console.log(valores2);