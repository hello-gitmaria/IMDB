import {Professional} from "./professional"

import {Imdb} from "./imdb"
const fs = require("fs");



// Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades
// de la clase Profesional e inserte un nuevo profesional a una película del fichero
// “imdbBBDD.json”
// - PISTA: Buscar readLineSync


var readlineSync = require("readline-sync");

let finalName: string = readlineSync.question(`Nombre: `);
let finalAge: number = readlineSync.question(`Edad: `);
let finalWeight: number = readlineSync.question(`Peso: `);
let finalHeight: number = readlineSync.question(`Altura: `);
let finalIsRetired: boolean = readlineSync.question(`Retirado: `);
let finalNationality: string= readlineSync.question(`Nacionalidad: `);
let finalOscarsNumber: number = readlineSync.question(`Oscars ganados: `);
let finalProfession: string = readlineSync.question(`Profesion: `);

 let profesionalFinal:Professional= new Professional(finalName,finalAge,finalWeight, finalHeight, finalIsRetired, finalNationality, finalOscarsNumber, finalProfession);
//console.log(profesionalFinal)

let otroObjetoImdb: Imdb=new Imdb([]);
let otroObjetoImdbConProfessional:Imdb=new Imdb([])
otroObjetoImdbConProfessional.peliculas=otroObjetoImdb.obtenerInstanciaIMDB("imdbBBDD.json").peliculas;
console.log(otroObjetoImdbConProfessional);
otroObjetoImdbConProfessional.peliculas[0].actors.push(profesionalFinal);

otroObjetoImdbConProfessional.escribirEnFicheroJSON("imdbBBDD.json");
