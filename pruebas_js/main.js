
/*Se trata de escribir un script que diga si un número es par o es impar.
Recordemos que un número es par si al dividirlo por 2 da como resto 0.
Si el número es 17, el programa debe decir que es impar.

let numero1 = parseInt(prompt("Ingresa un numero"));
let resultado = numero1 / 2;

if (resultado = 0) {
    document.write(numero1 + " Es un numero par")

} else {
    document.write(numero1 + " Es un numero impar")
}
*/


/*Un programa que pida un número y diga si es positivo o negativo. 
El cero se considera positivo
Si num1 es 2 debe decir que num1 es positivo

let numero = parseInt (prompt( "Ingrese un numero"));

if (numero >=0){
    document.write ( numero + " es un numero positivo")

} else {
    document.write ( numero + " es un numero negativo")
}
*/

/*En este ejercicio debes pedir dos números enteros y 
devolver el cociente de dividir el primero entre el segundo, 
pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
Si se entran el número 8 y 2, debe resultar 4
Si se entran 4 y 0, dbe resultar en un mensaje de error.


let dividendo = parseInt (prompt( "Ingrese un primer numero"));
let divisor = parseInt (prompt( "Ingrese un segundo numero"));
let cociente = dividendo / divisor;

if (divisor == 0) {
    document.write ("ERROR! No se puede dividir entre cero")
} 
else {
    document.write ("el cociente es " + cociente)
}


/*Este script pide al usuario que teclee una letra entre A, B, C, D. 
Si pulsa la letra A en mayúscula o en minúscula le dará el mensaje de 
que ha acertado, en caso contrario le dirá que se equivocó...
Si pulsa C le dará mensaj de error.


let letra = String (prompt("Ingresa una letra (opciones A, B, C o D"));

if (letra === "A" || letra === "a") {
    alert ("ACERTO!");
}else {
    alert ("te equivocaste");
}*/


/*En este ejemplo el usuario entrará dos números. 
Debe devolver la diferencia entre el mayor y el menor
Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)
 


let numero1 = parseInt (prompt( "Ingrese un numero"));
let numero2 = parseInt (prompt( "Ingrese un numero"));

if (numero1 > numero2) {
    
     let resultado = numero1 - numero2;
    document.write (" la diferencia es " + resultado)    
     
}else {
        let resultado = numero2 - numero1;
    document.write (" la diferencia es " + resultado)
    }

    
/*
 Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
 para ello el cliente puede pedir vino, cerveza, refresco, agua. 
 Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige 
 a la tienda.
Un cliente ellige vino, aparecerá el mensaje vaya a la barra, 
en caso contrarío dirá que vaya a la tienda.


let bebida = (prompt("Que bebida solicitará: (vino, cerveza, refresco o agua)"));

switch (bebida) {
    case "vino":
        alert("Solicitar en la barra");
        break;
    case "cerveza":
        alert("Solicitar en la barra");
        break;
    case "refresco":
        alert("Solicitar en la tienda");
        break;
    case "agua":
        alert("Solicitar en la tienda");
        break;
        default:
            alert ("Bebida incorrecta");

}
*/

/*Este programa te ayuda a viajar. El programa pide al usuario si va a viajar 
con coche, tren, bicicleta o autobús. 
Si va en tren o autobus le recordará que lleve dinero para el billete.
El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"


let ticket = prompt("Cual es el medio de viaje? coche, tren, bicicleta o autobus?");

if (ticket == "tren" || ticket == "autobus") {

    alert("Lleva dinero para el ticket?");
} else if (ticket == "coche" || ticket == "bicicleta") {
    alert("No necesita comprar tickets");
} else {
    alert("Transporte mal ingresado");
}

*/

/*En un tramo de un rally los conductores no deben ir ni demasiado rápido 
ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilometros 
y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor 
pasa la prueba en caso contrario es descalificado.
Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 
que son 25km/h. Estaría descalificado.

let kilometros = parseInt (prompt ("ingrese los kilometros recorridos"));
let tiempo = prompt ("ingrese las horas trancurridas");

velocidad = kilometros / tiempo;

if (velocidad >= 40 && velocidad <= 60 ) {
    alert ("Aprobo la prueba");
} else {
    alert ("esta descalificado");
}

*/

/*Una tienda aplica un descuento del 15% para las compras que 
incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. 
Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número 
de artículos y el precio de cada uno.
Por ejemplo si compras 20 artículos de 10 euros se te descuenta un 15% del 
total pagarías 20*10 - 20*10*0.15 = 170 eruos.


let articulos = parseInt (prompt ("Cantidad de articulos comprados"));
let precio = parseInt (prompt ("precio unitario del rticulo"));


if (articulos > 10) {
    resultado = (articulos * precio) - (articulos * precio * 0.15);
    alert ("Precio final con descuento " + resultado);
}else {
    resultado = articulos * precio;
    alert("precio final " + resultado + " no corresponde descuento")

}*/

/*
Crea un programa que pida la nota de un estudiante en los tres trimestres 
del curso y calcule la nota promedio. El resultado que dará será suspenso 
si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable


let nota1 = parseInt (prompt("ingrese la primera nota"));
let nota2 = parseInt (prompt("ingrese la segunda nota"));
let nota3 = parseInt (prompt("ingrese la tercera nota"));

promedio = (nota1 + nota2 + nota3) / 3;

if (promedio < 5)  {
    alert ("Resultado: Suspenso");
} else if (promedio >= 5 && promedio <= 7) {
    alert ("Resultado: Aprobado");
}else {
    alert ("Resultado: Notable");
}
*/

/*
El usuario debe introducir dos valores numéricos por teclado y 
la aplicación deberá indicar cual es el mayor, el primero o el segundo.
La idea es usar las sentencias if reducidas (cond ? ture:false)
Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.


let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

if (numero1 != numero2) {
    numero1 > numero2
        ? document.write("El primer numero (" +numero1 + ") es mayor al segundo numero " + "(" + numero2 + ")")
        : document.write("El segundo numero (" +numero2 + ") es mayor al primer numero " + "(" + numero1 + ")");
} else {
    document.write(" ambos numeros son iguales")
}
*/

/*
El usuario debe entrar un número y su cuadrado. 
Si es correcto el script enviará un mensja ede acierto en caso 
contrario dirá que se produjo un error.
Se trata de usar el if resumido (cond?true:false)
Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, 
el resultado será Error


let numero = parseInt (prompt("Ingrese un numero"));
let cuadrado = parseInt (prompt("Ingrese su valor al cuadrado"));

resultado = numero * numero;

resultado == cuadrado 
? alert ("EL resultado es CORRECTO!")
: alert ("ERROR");
*/

/*
En ste caso, también suando el perador ternario o if reducido, 
un visitante a la página deberá teclear su edad, si es igual o 
mayor de 18 recibirá el mensaje de "Entra" en caso contario 
deberá decirle los años que tiene que estperar para entrar
Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo 
que tengo 14 años me dirá "Espera 4 años"


let edad = parseInt(prompt("Ingresa tu edad"));

edad >= 18
? alert ("Puedes ingresar")
: alert ("Debes esperar " + (18 - edad) + " años para poder ingresar");
*/

/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. 
Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se 
le ofrecerá vino blanco y si pide verdura se le ofrecerá agua
Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"




let menu = prompt("Elija el Menú - carne - pescado - verdura");

switch (menu) {
    case "carne":
        alert ("Desea beber vino tinto?");
        break;
    case "pescado":
        alert ("Desea beber vino blanco?");
        break;
    case "verdura":
        alert ("Desea beber agua?");
        break;
        default:
            alert ("Elija de las opciones")
       
}*/


/*
En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, 
Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, 
si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras 
y si paga 1 solo a la primera sala.
Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas 
de consola y juegos 2D.


let creditos = parseInt (prompt("Cantidad de creditos: (1 , 2, 3 o 4)"));

switch (creditos){
    case 4: 
    alert ("Puede acceder a todas las salas. Consolas, Juegos 2D, Juegos 3D y Realidad Virtual");
    break;
    case 3: 
    alert ("Puede acceder solo a las salas de Consolas, Juegos 2D y Juegos 3D");
    break;
    case 2: 
    alert ("Puede acceder solo a las salas de Consolas y Juegos 2D");
    break;
    case 1: 
    alert ("Puede acceder solo a la sala de Consolas");
    break;
    default: 
    alert ("No puede acceder a las salas");
    
}*/

/*
Aprtir de un número de mes tecleado por un usuario el programa debe indicar 
la estación del año.
Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano 
y 9,100,11 otoño.
Si tecleo el 3 el script me responderá que estamos en Primavera



let mes, estacion;
mes = parseInt (prompt("Ingrese el numero del mes"));

switch (mes) {
    case 12:
        estacion = "Invierno";
        break;
    case 11:
        estacion = "Otoño";
        break;
    case 10:
        estacion = "Otoño";
        break;
    case 9:
        estacion = "Otoño";
        break;
    case 8:
        estacion = "Verano";
        break;
    case 7:
        estacion = "Verano";
        break;
    case 6:
        estacion = "Verano";
        break;
    case 5:
        estacion = "Primavera";
        break;
    case 4:
        estacion = "Primavera";
        break;
    case 3:
        estacion = "Primavera";
        break;
    case 2:
        estacion = "Invierno";
        break;
    case 1:
        estacion = "Invierno";
        break;
    default:
        estacion = ("desconocida. Mal ingresado el numero del mes")
}
alert ("La estacion del año es " + estacion);

*/


/*

En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado.
Si la base y el alto son idénticos la respuesta será "Es un cuadrado", 
si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario 
dirá "Rectángulo vertical".
Si entro base es 10, alto es 5. Resultado rectángulo


let base, alto, resultado;

base = parseInt(prompt("Ingrese cm de base"));
alto = parseInt(prompt("Ingrese cm de alto"));



if (base == alto) {
    resultado = "cuadrado"
} else if (base > alto) {
    resultado = "rectangulo horizontal"
}else {
    resultado = "rectangulo vertical"
}

alert ("Es un " + resultado);
*/


/*
En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo 
al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a 
la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y 
si elige electrico o 3 se le enviará a la ofician 300.
Por ejemplo tecleo el número 2, el mesnaje me dirá que vaya a la oficina 200


let numero, oficina, mensaje;

numero = prompt("Elija opcion de automovil / 1 o gasolina - 2 o diesel / 3 o electrico ");

switch (numero){
    case "1":
    case "gasolina":
        oficina = "100";
        break;
    case "2":
    case "diesel":
        oficina = "200";
        break;
    case "3":
    case "electrico":
        oficina = "300";
        break;
        default:
           oficina = "x";

}

mensaje = (oficina == "x") 
? ("Opcion mal seleccionada")
: ("Dirijase a la oficina " + oficina);

alert (mensaje);
*/

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 400 euros le descuenta un 15%

Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros.


let compra, descuento;

compra = prompt(" ingrese el monto comprado");

switch (true) {
    
    case (compra >= 100 && compra <= 300):
        descuento = 5;
        break;
    case (compra > 300 && compra <= 500):
        descuento = 10;
        break;
    case (compra > 500):
        descuento = 15;
        break;
        default:
            descuento = 0;
}



alert ("Usted compro " + compra + " Le corresponde un descuento " 
+ descuento + "%. Debe abonar " + (compra * (1 - descuento/100)));

*/

/*
En este ejercicio el script convertirá las notas numéricas de un examen en paabras:
 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
Si tecleo 8 me dirá "Tu calificación es  notable"


let nota, resultado;

nota = parseInt(prompt ("Ingrese la nota del examen"));

switch (true) {
    case (nota >= 0 && nota <= 4):
        resultado = "Suspenso";
        break;
    case (nota >= 5 && nota <= 6):
        resultado = "Aprobado";
        break;
    case (nota >= 7 && nota <= 8):
        resultado = "Notable";
        break;
    case (nota >= 9 && nota <= 10):
        resultado = "Sobresaliente";
        break;
    default:
        resultado = "x"

}

(resultado == "x") 
? alert ("ERROR en ingreso")
: alert ("Su calificacion es " + resultado);
*/

/*
Crear una lista de artículos para el supermercado de mínimo 5 items. 
Con el método prompt() pedile al usuario que ingrese un artículo para 
agregar a la lista.
Si el artículo ya está en la lista (método: array.includes()) avisarle al usuario 
que el artículo ya está.
Si no, agregar el artículo a la lista y mostrarle al usuario la lista de todo lo 
que tiene que comprar

            ****    SIN TERMINAR    ****
            ****    SIN TERMINAR    ****
            ****    SIN TERMINAR    ****

let lista =[];

document.write (lista.length);

let nuevo = prompt("Ingrese un producto a la lista");

let verifico = lista.includes(nuevo);
document.write (verifico);

(verifico == true) 
? alert ("El producto ya esta en la lista")
: lista.push (nuevo) + alert ("Producto ingresado a la lista");


document.write (lista.legth);
ducument.write (lista);

            ****    SIN TERMINAR    ****
            ****    SIN TERMINAR    ****
            ****    SIN TERMINAR    ****

*/

/*
Para llegar a destino tenemos que caminar 100 pasos. 
Usando el bucle while y el método document.write() mostrá por 
línea cuántos pasos que quedan por caminar, partiendo del paso 100 hasta 
llegar al paso 1. 




let i = 100;

while (i > 0) {

    document.write ("Solo faltan  " + i + "  pasos por caminar" + "<br>" );
    i = i - 1;
}
*/


//let i = 0;

//do {
//    document.write ("Solo faltan  " + i + "  pasos por caminar" + "<br>" );
//    i = i + 1;
//}while (i < 10);

/* Este ejercicio solo te pide que crees un array de nombre diasSemana 
para contener 7 elementos. Luego rellena el array con los nombres de 
los días comenzando por Lunes hasta Domingo.
Muestra el array en la consola del inspector de código (F12) 
con console.table(diasSemana) 

let diasSemana = [];

diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

console.table (diasSemana);*/


/* 
Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza 
un método del objeto para recorrer el array y convertir cada elemento de ese array 
a mayúsculas. sa console.table para ver el resultado.
No se trata de usar un bucle, debes usar un método del objeto Array.
No debes copiar el array en otro nuevo.
Los objetos string tienen el método toUpperCase para cambiar a mayúsculas 


let diaLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes"];

diaLaborales.forEach((elemento, i, lista) => {
    lista[i] = elemento.toUpperCase();
});
console.table(diaLaborales);*/

/* 
Crea un array para albergar al menos 10 números enteros cualesquiera, 
luego rellena el array (o crealo ya con los valores). 
El ejercicio trata de crear a partir de este array otros dos uno con los números pares 
y otro con los impares. No debes usar bucles, usa el método del array qe creas más apropiado.
No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.

Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)
 */

var numeros = new Array(10);
numeros = [2,4,3,7,1,21,9,25,10,12];
var pares = numeros.filter( (val) => val%2==0);
var impares = numeros.filter( (val) => val%2!=0);
document.write("Los numeros pares son: " + pares + "<br>");
document.write("Los numeros impares son: " + impares);


