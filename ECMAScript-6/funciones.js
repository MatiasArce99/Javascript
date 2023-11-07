//Funciones
// Bloques de instrucciones que trabajan sobre un scope interno.

/** Defino función saludarPorTerminal()
 * @param {string} nombre
 * Tiene un String como parámetro.
 */
function saludoPorTerminal(nombre) {
    console.log('Buen día ' + nombre);
}

saludoPorTerminal('Matías');

function suma(n1, n2) {
    let resultado;
    resultado = n1 + n2;
    return resultado;
}

let total = suma(5, 6);
console.log(total);