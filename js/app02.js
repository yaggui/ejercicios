//DESARROLLO DEL EJERCICIO 02
const COUNTRY=[];
let lenghtCountry=0;
let newCountry=true;
while(newCountry){
  lenghtCountry= COUNTRY.push(prompt("Ingresa un pais:").toLowerCase().trim());
  newCountry=confirm("Desea ingresar otro Pais?");
}
alert(`La cantidad de paises: ${lenghtCountry}`);
alert(`Paises: ${COUNTRY.join("--")}`);
switch(true){
  case lenghtCountry==1:
    document.write(`Primera y Ultima Posición: ${COUNTRY[0]}`);
    break;
  case lenghtCountry==2:
    document.write(`Primera Posición: ${COUNTRY[0]} --- `);
    document.write(`Ultima Posición: ${COUNTRY[1]}`);
    break;
  case lenghtCountry==3:
    document.write(`Primera Posición: ${COUNTRY[0]} --- `);
    document.write(`Tercera y Ultima Posición: ${COUNTRY[2]}`);
    break;
  default:
    document.write(`Primera Posición: ${COUNTRY[0]} --- `);
    document.write(`Tercera Posición: ${COUNTRY[2]} --- `);
    document.write(`Ultima Posición: ${COUNTRY[lenghtCountry-1]}`);
}
COUNTRY.push("paris");
alert(`Se agrego al final Paris: ${COUNTRY.join("--")}`);
alert(`El segundo Pais: ${COUNTRY[1]}`);
COUNTRY[1]="barcelona";
alert("Se agrego Barcelona en la segunda posicion: \n"+`${COUNTRY.join("--")}`);