
let numAdultos = document.getElementById("adultos")
let numCriancas = document.getElementById("criancas")
let numHoras = document.getElementById("duracao")

let result = document.getElementById("resultado")


function calcular(){

   let Adultos = numAdultos.value;
   let  Criancas = numCriancas.value;
   let duracao = numHoras.value

   let qtdCarne = carnePP(duracao) * Adultos + (carnePP(duracao) / 2 * Criancas)

   //não implementado 
   let qtdCerveja = bebidaPP(duracao) * Adultos + (bebidaPP(duracao) * 0 )
   //não implementado
   let qtdRefri = refriPP(duracao) * Adultos + (refriPP(duracao) / 2 * Criancas)

    result.innerHTML = `<p>${qtdCarne}g de carne`
    result.innerHTML += `<p>${qtdCerveja}ml de bebida`
    result.innerHTML += `<p>${qtdRefri}ml de refri`
}

function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400
    }
    
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200
    }
}

function refriPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000
    }
}

