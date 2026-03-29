console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 16")
function promesa(){
  return new Promise((resolve) => {
    setTimeout(() => resolve("Éxito!"), 2000)
  })
}

promesa().then(r => console.log("Con promesa:", r))

async function nuevo(){
  let r = await promesa()
  console.log("Con async/await:", r)
}
nuevo()