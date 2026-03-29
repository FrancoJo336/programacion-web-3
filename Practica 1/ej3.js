console.log("Nombre: Franco Quispe Jose Manuel")
console.log("CI:8334055")
console.log("Carrera:Informatica")
console.log("Materia:INF-133")
console.log("Fecha:29/03/2026")
console.log("EJERCICIO 3")
function separarParesImpares(arr) {
  let resultado = { pares: [], impares: [] };
  for (let num of arr) {
    if (num % 2 === 0) resultado.pares.push(num);
    else resultado.impares.push(num);
  }
  return resultado;
}
console.log("RESULTADO:")
console.log(separarParesImpares([1,2,3,4,5])); 