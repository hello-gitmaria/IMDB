import {Professional} from "./professional"
import {Movie} from "./movie"
import {Imdb} from "./imdb"

let movie1 : Movie = new Movie (`Manhattan`,2019, `USA`, `action`);
let movie2 : Movie = new Movie (`Tomorrow`,2001, `USA`, `love`);
let movie3 : Movie = new Movie (`Yesterday`,2014, `Germany`, `thriller`);
let movie4 : Movie = new Movie (`Pretty`,2021, `Angola`, `love`);

let objImdb1 : Imdb = new Imdb ([movie1, movie2, movie3, movie4])

console.log(objImdb1);