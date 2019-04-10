

// Crear arreglos con elementos tres formas
var arreglo = new Array('elemento1', 'elemento2');
console.log(arreglo);

var arreglo2 = Array('elemento A', 'elemento B');
console.log(arreglo2);

var arreglo3 = ['elemento x', 'elemento y'];
console.log(arreglo3);

// Crear arreglos sin elementos

/*
var arrayLenght=5;
var arreglo4 = new Array[arrayLenght];
var arreglo5 = Array[arrayLenght];
*/


// resultados similares
var arreglo4= [];
//var arreglo4_lenght= arrayLenght;

var miArreglo=[];
miArreglo=[
    1,
    'Daniel',
    ];
console.log(miArreglo);
miArreglo.push('marco');
console.log(miArreglo);

miArreglo.pop(); //Sirve para sacar el ultimo elemnto del arreglo
console.log(miArreglo);

var numero= [1,2,3,4];
console.log(numero);

numero.splice(1,3,5,6);
console.log(numero);

numero.splice(2,3);
console.log(numero);

numero= [1,2,3,4];
var indice= numero.indexOf(2);
console.log(indice);
var indiceCuatroUno= numero.indexOf(1,4);

var mascotas = ['perro','gato','loro'];
console.log(mascotas);
for(var i=0;i <= mascotas.length;i++){
    console.log(mascotas[i]);
}
mascotas.forEach(function (element) {
    console.log(element)
});

var lista= mascotas.join('-');
console.log(lista);

var vocales=['a','e','i','o','u'];
console.log(vocales);

vocales=vocales.concat('1','2','3','4');
console.log(vocales);

var inicio= vocales.shift();
console.log(inicio);

var removerInicio = vocales.unshift();
console.log(removerInicio);

var reverseVocales = vocales.reverse();
console.log(reverseVocales);

var ordenarMascotas = mascotas.sort();
console.log(ordenarMascotas);

//var mascotasMap= mascotas.map();

var arreglo_10=['a',3,'Daniel',5];
var arreglo_11= arreglo_10.filter(function (item) {
    return typeof item=='number';
});
console.log(arreglo_11);

var arreglo_12=[1,2,3];
var arreglo_13=[1,2,3,4];

function esNumero(value){
    return typeof value=='number';
}

console.log(arreglo_12.every(esNumero));
console.log(arreglo_13.every(esNumero));

console.log(arreglo_12.some(esNumero));
console.log(arreglo_13.some(esNumero));

var arreglo_14=['1','2','3'];
console.log(arreglo_14.some(esNumero)); //Alguien de los arrglos es numero

var datos= {
    nombre: 'marco',
    cedula: '177777777',
    edad: 23
}
var cuenta= {
    numero:21333,
    valor:455,
    tipo:"ahorros"
};
 var datosCuenta={
     ...datos,
     ...cuenta
 };

 console.log(datosCuenta);

 var atributosdatosCuenta= Object.keys(datosCuenta);
 console.log(atributosdatosCuenta);
console.log(atributosdatosCuenta[0]);