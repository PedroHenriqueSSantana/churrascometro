
let numAdultos = document.getElementById("input1")
let numCriancas = document.getElementById("input2")
let numHoras = document.getElementById("input3")

let result = document.getElementById("result") 


function calcular(){

   let Adultos = numAdultos.value;
   let  Criancas = numCriancas.value;
   let duracao = numCriancas.value

   let qtdCarne = carnePP(duracao) * Adultos + (carnePP(duracao) / 2 * Criancas)

   let qtdCerveja = 1200 * Adultos + (0 * Criancas)

   let qtdRefri = 1000 * Adultos + (1000 / 2 * Criancas)

  console.log(qtdCarne)

}

function carnePP(input3){

    if(numHoras >= 6){
        return 650;
    }else{
        return 400
    }
    
}