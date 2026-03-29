console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 14")
function promesaACallback(cb){
    const prom = Promise.resolve("Funciona!");
    prom.then(cb);
}
console.log("RESULTADO:")
promesaACallback(console.log);