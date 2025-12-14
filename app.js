
// HALLAR LOS PRIMEROS 10 NUMEROS PARES E IMPRIMIRLOS EN CONSOLA

console.log(" === EJERCICIO 1: PRIMEROS 10 NUMEROS PARES === ");
// 1. Creamos el array vacio
const array = [];

// 2. Aplicamos un ciclos para encontrar los numeros pares
for (let a = 1; a <= 20; a++) {
if (a % 2 === 0) {
    array.push(a);
} if (array.length == 10) {
    break;
}
}

// 3. Los imprimimos en consola
console.log(array);


// ===============================================================================


// IMPRIMIR LOS DIAS DE LAS SEMANA EN FORMATO LISTA HTML


console.log("\n === EJERCICIO 2: DIAS DE LA SEMANA EN FORMATO LISTA HTML === ");
// 1. Creamos el array con los dias de la semana
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// 2. Creamos una variable para almacenar la lista HTML
let semana = "";

// Le agregamos la etiqueta "ul" de apertura
semana += "<ul>\n";

// 3. Recorremos el array y agregamos cada dia como un elemento "li"
for (let i = 0; i < dias.length; i++) {
    semana += "  <li>" + dias[i] + "</li>\n";
}  

// 4. Agregamos la etiqueta "ul" de cierre
semana += "</ul>";

// 5. Imprimimos la lista HTML en consola
console.log(semana);


// a no, esto esta re easy
juis
// ===============================================================================