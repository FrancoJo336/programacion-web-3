console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 12")

setTimeout(()=>{console.log("RESULTADO CALLBACK: 1")
  setTimeout(()=>console.log("RESULTADO CALLBACK: 2"),2000)
},2000)

async function ejemplo(){
  await new Promise(r=>setTimeout(r,1000))
  console.log("RESULTADO ASYNC/AWAIT: 1")
  await new Promise(r=>setTimeout(r,1000))
  console.log("RESULTADO ASYNC/AWAIT: 2")
}
ejemplo()