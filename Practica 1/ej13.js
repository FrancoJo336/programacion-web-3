console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 13")
const prom = new Promise(res => setTimeout(()=>res("Exito"),1000));

async function run(){
    const r = await prom;
    console.log(r);
}
console.log("RESULTADO:")
run();