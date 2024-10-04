function iniciarContagem() {
let numero = document.getElementById("numeroInicial").value;
let resultado = document.getElementById("resultado");
resultado.innerHTML = "";

do { //inicia est de repet
resultado.innerHTML += numero; //adiciona o sei la oq
numero--;
} while (numero >= 0); 
}

function mostrarMultiplos() {
    let limite = document.getElementById("numeroLimite").value;
    let resultado2 = document.getElementById("resultado2");
resultado.innerHTML = "";


let i = 1;
do {
    if(i % 5 === 0 ) {
        resultado2.innerHTML += i + " é multiplo de 5 <br>"
    }
    i++;
}while (i <= limite );
}