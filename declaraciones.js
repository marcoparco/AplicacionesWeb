

/* sirve para nombrar una variable se distingue mayusculas/minusculas
se denomina sentencias
*/

// comentario

/*
comentario
comentario
no se puede anidar comentarios

*/

//Declaraciones

/*
 var -> declara una variable con o sin valor puede ser inicializado
 let -> es una variable de tipo local
 const -> constante de solo lectura

*/

var nombre;
nombre= 'Daniel';

console.log(nombre);

//alert(nombre);

let y=12;

console.log(y);
var a;  // constante undifined
console.log(a);

console.log(b);

var b;
var edad = 15; //number
var sueldo=118.11; // number
var apellido='Salas'; //string
var soltero=true; // boolean
var hijos= null;
var extremidades; //undefined
var fecha = new Date(); // Object

console.log(soltero);
console.log(hijos);
console.log('Fecha',fecha);
console.log(typeof fecha);

var estudiante = {
    'nombre':'andres',
    edad: 18,
    sueldo: 180,
    apellido: 'salas',
    soltero:false,
    materias:{
        basica:'Algebra',
        notaBas:15,
        carrera:"Progra",
        notaCa:15
    }
}


console.log(estudiante.nombre);

if(true){
    console.log("verdad")
}else{
    console.log("falso")
}

if(false){
    console.log("verdad")
}else{
    console.log("falso")
}
 //falsy
if(undefined){
    console.log("verdad")
}else{
    console.log("falso")
}
//truthy
if(new Date()){
    console.log("verdad")
}else{
    console.log("falso")
}

// las variables en sentencias pueden jugar al truthy o falsy // Strings son considerados verdad
// undifened falsy
//
