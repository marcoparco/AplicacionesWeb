
function holaMundo() {
    console.log("Hola Mundo")
}
holaMundo();
console.log(holaMundo());

function sumar(num1,num2) {
    var esNumeroNum1= typeof num1=="number";
    var esNumeroNum2= typeof num2=="number";
    if(esNumeroNum1&& esNumeroNum2){
        return num1+num2
    }else{
        console.log("Erroooooor")
    }
}
sumar(3,4);
console.log(sumar(2,1));

function sumarNumerosArreglos(numeros) {
 var parametroDistintoDeNumber=false;
 var resultado=0;
 for(var i=0;i<numeros.length;i++){
     var esNumeroNumber=typeof numeros[i]=="number";
     if(!esNumeroNumber){
         parametroDistintoDeNumber=true;
     }else{
         resultado= resultado+numeros[i];
     }
 }
 var respuesta={
     noEsNumber:parametroDistintoDeNumber,
     resultado:resultado
    };
 return respuesta;
}

console.log(sumarNumerosArreglos([1,2,3,4,5]));

function cambiarMayusculas(nombre,funcion) {
    return `Hola ${(funcion(nombre))}`;
}

console.log(cambiarMayusculas("Marco", convertirMayusculas));
function convertirMayusculas(texto){
    return texto.toUpperCase();
}
function convertirMinuscula(texto){
    return texto.toLowerCase();
}

function agregarPuntoFinal(texto) {
    return texto + ".";
}

console.log(convertirMayusculas("un execelente dia "
, agregarPuntoFinal));

function letraInicioPalabraMayuscula(texto) {
    var letraInicioMayuscula=texto[0].toUpperCase();
    var restoPalabra=texto.slice(1,texto.length);
    return letraInicioMayuscula + restoPalabra;
}

console.log(cambiarMayusculas("marco",letraInicioPalabraMayuscula));