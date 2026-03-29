console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 15")
function conCallback(cb){
    setTimeout(()=>cb("Exito!"),1000);
}

const conPromesa = () => new Promise(res => {
    conCallback(res);
});
console.log("RESULTADO:")
conPromesa().then(console.log);