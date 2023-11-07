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

/**Función flecha es ANÓNIMA.
 * No posee nombre, pero se la puede asignar a una variable.
 * @param {String} nombre
 */
const saludaPorTerminal2 = (nombre) => {
    console.log('Hola '+nombre);
}
saludaPorTerminal2('Daniel');

/** Función mostrarLista()
 * @param {Array} list //lista a mostrar
 * @returns {String} cantidad de elementos
 */
function mostrarLista(list) {
    const cantidadElementos = list.length;
    if(cantidadElementos){
        //Recorro elementos de la lista.
        list.forEach((element) => {
            console.log(element);
        });
    } else {
        console.log('Lista vacía');
    }
    return `Cantidad de elementos: ${cantidadElementos}`;
}
console.log(mostrarLista([]));
console.log(mostrarLista([1, 'Matías']));
console.log(mostrarLista([1, 18.2, 'Daniel', false]));