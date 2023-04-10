//declaro variables con sus respectivos votantes en la ultima eleccion
/*let azul = 87306;
let bolivar = 72618;
let generalalvear = 20770;
let olavarria = 221993;
let roquePerez = 26340;
let saladillo = 65320;
let tapalque = 20599;
let veinticincodeMayo = 73682;
let total = 588628;
let distrito;
let nombre;
let consultaPorcentaje;
let porcentaje;

//interaciones con el usuario
nombre = prompt("Ingrese su nombre")
    if (nombre == ""){
        alert("No ingresaste ningun nombre")
}   else {
    alert("Bienvebido " + nombre)
}
let consulta = prompt("¿desea saber la cantidad de votantes de su distrito?")
    if (consulta == "si") {
            distrito = prompt("ingrese un distrito de la septima sin mayusculas ni espacios")
            switch (distrito){
            case "azul": 
                alert ("el numero de votantes de su distrito es " + azul)
                break
            case "bolivar": 
                alert  ("el numero de votantes de su distrito es " + bolivar)
                break
            case "generalalvear": 
                alert  ("el numero de votantes de su distrito es " + generalalvear)
                break
            case  "olavarria": 
                alert  ("el numero de votantes de su distrito es " + olavarria) 
                break 
            case "roquePerez": 
                alert  ("el numero de votantes de su distrito es " + roquePerez)
                break         
            case "saladillo": 
                alert  ("el numero de votantes de su distrito es " + saladillo)
                break
            case "tapalque": 
                alert  ("el numero de votantes de su distrito es " + tapalque)
             break
            case "veinticincodeMayo": 
                alert  ("el numero de votantes de su distrito es " + veinticincodeMayo)
                break
            
            }
            
}
       
 //calculadora que te devuelva el % del distrito en relacion al total    
consultaPorcentaje = prompt("¿desea saber cual es el % de votantes respecto al distrtito?")
    if (consultaPorcentaje == "si"){
        switch (distrito) {
            case "azul":
                porcentaje = (azul * 100) / total
                alert(porcentaje)
                break
            case "bolivar": 
                porcentaje = (bolivar * 100) / total
                alert(porcentaje)
                break
            case "generalalvear":
                porcentaje = (generalalvear * 100) / total
                alert(porcentaje)
                break
            case "olavarria": 
                porcentaje = (olavarria * 100) / total
                alert(porcentaje)
            case "roquePerez": 
                porcentaje = (roquePerez * 100) / total
                alert(porcentaje)
                break
            case "saladillo": 
                porcentaje = (saladillo* 100) / total
                alert(porcentaje)
                break
            case "tapalque": 
                porcentaje = (tapalque * 100) / total
                alert(porcentaje)
                break
            case "veinticincodeMayo": 
                porcentaje = (veinticincodeMayo * 100) / total
                alert(porcentaje)
                break
        
        }
    }
    else if (consultaPorcentaje == "no") {
        alert ("hasta luego")
    }
*/

//ultima votacion
const distritos = [
  {
    nombre: 'azul',
    poblacion: 75324,
    votantes: 41311,
    inscriptos: 58665,
  },
  {
    nombre: 'bolivar',
    poblacion: 26242,
    votantes: 23234,
    inscriptos: 31302,
  },
  {
    nombre: 'generalAlvear',
    poblacion: 9812,
    votantes: 6796,
    inscriptos: 8906,
  },
  {
    nombre: 'olavarria',
    poblacion: 126328,
    votantes: 70819,
    inscriptos: 98577,
  },
  {
    nombre: 'roquePerez',
    poblacion: 12513,
    votantes: 8666,
    inscriptos: 11233,
  },
  {
    nombre: 'saladillo',
    poblacion: 23313,
    votantes: 21079,
    inscriptos: 22577,
  },
  {
    nombre: 'tapalque',
    poblacion: 9178,
    votantes: 6782,
    inscriptos: 8724,
  },
  {
    nombre: 'veinticincodeMayo',
    poblacion: 35842,
    votantes: 23609,
    inscriptos: 31527,
  },
];

const distritoBuscado = distritos.filter((el) => votantes < 70000);
return distritoBuscado;
alert(distritoBuscado);
