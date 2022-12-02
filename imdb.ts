import { Professional } from "./professional"
import { Movie } from "./movie"
const fs = require("fs");

export class Imdb {

    public peliculas: Movie[];

    constructor(peliculas: Movie[]) {

        this.peliculas = peliculas;
        console.log(this);

    }

    public escribirEnFicheroJSON(nombreFichero: string): void {

        fs.writeFileSync(nombreFichero, JSON.stringify(this));

    }

    //Esta funcion crea un fichero nombrado con el string (nombre) que recible, si ya existe este fichero lo reescribe.
    //A su vez, rellena el archivo json creado con el objeto de esta clase (imdb), pero lo convierte a string porque el metodo write... () recibe 
    //1º el nombre del fichero, 2º lo que va a contener el fichero que es un string (por eso convierte el json al string)

    public obtenerInstanciaIMDB(nombreFichero: string): Imdb {

        let objetoImdb: Imdb = new Imdb ([]);
        objetoImdb = JSON.parse(fs.readFileSync(nombreFichero, "utf8"));
        return objetoImdb

    }
    //devuelve un objeto de esta clase, leyendo lo que hay dentro
}



