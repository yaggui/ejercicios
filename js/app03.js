//DESARROLLO DEL EJERCICIO03
let cubeOne;
let cubeTwo;
const additionCube=[0,0,0,0,0,0,0,0,0,0,0];
for(let i=1;i<=50;i++){
  cubeOne=Math.floor(Math.random()*7);
  cubeTwo=Math.floor(Math.random()*7);
  if(cubeOne!=0 && cubeTwo!=0){
    additionCube[cubeOne+cubeTwo-2]=additionCube[cubeOne+cubeTwo-2]+1;
  }else{
    i--;
  }
}
alert("las sumas son: \n"+`${additionCube.join("--")}`);