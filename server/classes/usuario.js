class Usuarios {

        constructor() {
            this.personas = [];
        }

        agregarPersona(id, nombre, sala){

            let persona = {id,nombre,sala};

            this.personas.push(persona);
            console.log(this.personas);
            return this.personas;

        }

        getPersona(id){
            let persona = this.personas.filter( item => {
                return item.id === id;
            })[0];

            return persona;
        }

        getPersonas(){
            return this.personas;
        }

        getPersonasPorSala( sala ){
            let personasEnSala = this.personas.filter( item => {
                return item.sala === sala
            })
            return personasEnSala;
        }

        borrarPersona(id){

            let personaBorrada = this.getPersona(id);
            
            this.personas = this.personas.filter( (item) => {
                return item.id !== id
            });

            return personaBorrada;
        }

}

module.exports = {
    Usuarios
}