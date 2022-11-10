
import {Professional} from "./professional"

let objProf1 : Professional = new Professional (`Carmen`, 72, 76, 160,true,`Colombian`, 8, `actress`)
let objProf2 : Professional = new Professional (`Antonio`, 26,80,180,false,`Cuban`, 2, `director`)

objProf1.printAll();
objProf2.printAll();