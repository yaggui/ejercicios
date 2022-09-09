//DESARROLLO DEL EJERCICIO 01
const MONTHS=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log("Los meses del año son:")
for(let i=0; i<12; i++){
  console.log(`${MONTHS[i]}`);
}
//generando un string de un array y separado por un salto de linea
alert(MONTHS.join("\n"));