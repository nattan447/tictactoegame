let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let all = document.querySelectorAll(".cell");
let p1=document.querySelector(".p1")
let bot=document.querySelector(".bot")
let contador=0
let identificador = [];
let identy = [];
let arr = [
  "cell1",
  "cell2",
  "cell3",
  "cell4",
  "cell5",
  "cell6",
  "cell7",
  "cell8",
  "cell9",
];
for (let i = 1; i <= 9; i++) {
  let teste = document.getElementById("cell" + i);
  teste.addEventListener("click", () => {
    contador+=1
    let x = document.createElement("img");
    document.body.appendChild(x);
    teste.appendChild(x);
    x.src = "imgs/circulo-removebg-preview.png";
    let removex = arr.indexOf("cell" + i);
    arr.splice(removex, 1);
    identificador.push("cell" + i);
    if (
      (identificador.includes("cell1") &&
        identificador.includes("cell2") &&
        identificador.includes("cell3")) ||
      (identificador.includes("cell4") &&
        identificador.includes("cell5") &&
        identificador.includes("cell6")) ||
      (identificador.includes("cell7") &&
        identificador.includes("cell8") &&
        identificador.includes("cell9")) ||
      (identificador.includes("cell1") &&
        identificador.includes("cell4") &&
        identificador.includes("cell7")) ||
      (identificador.includes("cell2") &&
        identificador.includes("cell5") &&
        identificador.includes("cell8")) ||
      (identificador.includes("cell3") &&
        identificador.includes("cell6") &&
        identificador.includes("cell9")) ||
      (identificador.includes("cell1") &&
        identificador.includes("cell5") &&
        identificador.includes("cell9")) ||
      (identificador.includes("cell3") &&
        identificador.includes("cell5") &&
        identificador.includes("cell7"))
    ) {
      location.reload();
      alert("jogador venceu");
    }
  else  if(contador==5){
      alert("empate")
      location.reload()
    }
    console.log(contador)
    /*y parte*/
    let ramdom = Math.floor(Math.random() * arr.length);
    let teste2 = document.getElementById(arr[ramdom]);
  
    let y = document.createElement("img");
    document.body.appendChild(y);
    teste2.appendChild(y);
    y.src = "imgs/x-removebg-preview.png";
    identy.push(arr[ramdom]);
    let removey = arr.indexOf(arr[ramdom]);
    arr.splice(removey, 1);

    /*JOGADOR VENCE*/

    /*BOT VENCE*/ if (
      (identy.includes("cell1") &&
        identy.includes("cell2") &&
        identy.includes("cell3")) ||
      (identy.includes("cell4") &&
        identy.includes("cell5") &&
        identy.includes("cell6")) ||
      (identy.includes("cell7") &&
        identy.includes("cell8") &&
        identy.includes("cell9")) ||
      (identy.includes("cell1") &&
        identy.includes("cell4") &&
        identy.includes("cell7")) ||
      (identy.includes("cell2") &&
        identy.includes("cell5") &&
        identy.includes("cell8")) ||
      (identy.includes("cell3") &&
        identy.includes("cell5") &&
        identy.includes("cell9")) ||
      (identy.includes("cell1") &&
        identy.includes("cell5") &&
        identy.includes("cell9")) ||
      (identy.includes("cell3") &&
        identy.includes("cell5") &&
        identy.includes("cell7"))
    ) {
      location.reload();
      alert("bot venceu");
    }
  
  });
}
