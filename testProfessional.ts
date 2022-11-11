
import {Professional} from "./professional"

let objProf1 : Professional = new Professional (`Carmen`, 72, 76, 160,true,`Colombian`, 8, `actress`)
let objProf2 : Professional = new Professional (`Antonio`, 26,80,180,false,`Cuban`, 2, `director`)
let objProf3 = new Professional("Luis", 34, 100, 1780, false, "Puertorican", 1, "writer");
let objProf4 = new Professional("Lorena", 22, 54, 165, false, "Spanish", 2, "actor");
let objProf5 = new Professional("Jimena", 40, 62, 170, false, "Mexican", 2, "actor");


objProf1.printAll();
objProf2.printAll();
objProf3.printAll();
objProf4.printAll();
objProf5.printAll();