console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 5")
function palindromo(cad){
  let inv = cad.split("").reverse().join("")
  return cad==inv
}
console.log("RESULTADO:")
console.log(palindromo("oruro"))
console.log(palindromo("hola"))
