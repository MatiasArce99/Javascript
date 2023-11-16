class Contador {
    static contadorGlobal = 0;
    
    constructor(nombre) {
        this.responsable = nombre;
        this.contadorIndividual = 0;
    }
    
    contar() {
        this.contadorIndividual += 1;
        Contador.contadorGlobal += 1;
    }

    getResponsable() {
        return this.responsable;
    }

    getCuentaIndividual() {
        return this.contadorIndividual;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }

}

const contador1 = new Contador('Matías');
const contador2 = new Contador('Daniel');
console.log(contador1.getCuentaGlobal());
console.log(contador1.getCuentaIndividual());

contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();

console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
console.log(contador2.getCuentaIndividual());
console.log(contador2.getCuentaGlobal());