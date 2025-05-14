export class Candidato {

    id: number;
    nombre: string;
    pais_origen: string;
    edad : number;
    vertiente_religiosa: string;
    foto : string;

    constructor(id: number, nombre: string, pais_origen: string, edad: number, vertiente_religiosa: string, foto: string) {
        this.id = id;
        this.nombre = nombre;
        this.pais_origen = pais_origen;
        this.edad = edad;
        this.vertiente_religiosa = vertiente_religiosa;
        this.foto = foto;
    }
}