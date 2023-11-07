/**
 * Variable estática no necesita instanciarse.
 */
class Persona {
    
    static especie = 'Humano';
    constructor(nombre){
        this.nombre = nombre;
    }

    mostrarNombre() {
        console.log(this.nombre);
    }

    mostrarEspecie(){
        console.log(Persona.especie);
    }

}

const persona1 = new Persona('Matías');
const persona2 = new Persona('Daniel');
persona1.mostrarNombre();
persona1.mostrarEspecie();
persona2.mostrarNombre();
persona2.mostrarEspecie();