//Función para buscar existencia de elemento dentro de una lista.
/**
 * @param {Array} list Lista
 * @param {any} objet Elemento a buscar en la lista
 * @returns {boolean} True si el elemento está en la lista
 */
function checkList(list, objet) {
    //Declaro una variable bandera en falso para empezar a operar
    let bandera = false;
    //Recorrer elementos de una lista o array
    //Método forEach() ejecuta una función indicada a cada elemento de la lista
    list.forEach((elem) => {
        bandera = bandera || elem === objet;
    });
    return bandera;
}
console.log(checkList([6,1,3,0,7,5], 10));
console.log(checkList([2,7,3,9,6,5], 6));