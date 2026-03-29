console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 9")
function promesa(){
  return new Promise((res)=>setTimeout(()=>res("ok"),3000))
}
console.log("RESULTADO:")
promesa().then(m=>console.log(m))