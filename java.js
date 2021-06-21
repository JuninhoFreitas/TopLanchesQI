let n1
let n2
let n3
let n4
let n5
let n6
let n7
let n8
let n9

function addProduto(id) {
    let val = document.getElementById(`qunt${id}`).value; // Captura a quantidade do id atual

    if (val < 1) {
        document.getElementById(`qunt${id}`).value = 1; //SE FOR MENOR Q 1, ele define como 1
    }
    else {
        //se maior que 1, ele acrescenta ao que já há
        document.getElementById(`qunt${id}`).value = parseInt(val) + 1;
    }
    definirVariaveis();  //Aqui ele atualiza as variaveis globaism n1...n9

}


function definirVariaveis() {
    n1 = document.getElementById("qunt1").value;
    n2 = document.getElementById("qunt2").value;
    n3 = document.getElementById("qunt3").value;
    n4 = document.getElementById("qunt4").value;
    n5 = document.getElementById("qunt5").value;
    n6 = document.getElementById("qunt6").value;
    n7 = document.getElementById("qunt7").value;
    n8 = document.getElementById("qunt8").value;
    n9 = document.getElementById("qunt9").value;
    //Atualiza variaveis globais de acordo com o campo.
}

function resultado() {
    let valor1 = parseInt(n1) * 18; //Calculo com o valor de cada pedido * quantidade
    let valor2 = parseInt(n2) * 20;
    let valor3 = parseInt(n3) * 22;
    let valor4 = parseInt(n4) * 30;
    let valor5 = parseInt(n5) * 50;
    let valor6 = parseInt(n6) * 80;
    let valor7 = parseInt(n7) * 5;
    let valor8 = parseInt(n8) * 8;
    let valor9 = parseInt(n9) * 10;
    let result = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9; //SOMA TUDO
    document.getElementById('resultado').value = result;//seta no campo o resultado
}

