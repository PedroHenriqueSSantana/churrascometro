
let numAdultos = document.getElementById("adultos")
let numCriancas = document.getElementById("criancas")
let numHoras = document.getElementById("duracao")

let result = document.getElementById("inputResult") 


function calcular(){

   let Adultos = numAdultos.value;
   let  Criancas = numCriancas.value;
   let duracao = numHoras.value

   let qtdCarne = carnePP(duracao) * Adultos + (carnePP(duracao) / 2 * Criancas)

   //não implementado 
   let qtdCerveja = 1200 * Adultos + (0 * Criancas)
   //não implementado
   let qtdRefri = 1000 * Adultos + (1000 / 2 * Criancas)

  console.log(qtdCarne)

}

function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400
    }
    
}