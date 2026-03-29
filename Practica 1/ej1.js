console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 1")
function contarVocales(texto) {
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let letra of texto.toLowerCase()) {
    if (resultado.hasOwnProperty(letra)) {
      resultado[letra]++;
    }
  }
  return resultado;
}
console.log("RESULTADO:")
console.log(contarVocales("euforia")); // { a: 1, e: 1, i: 1, o: 1, u: 1 }