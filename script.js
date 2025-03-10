let nb1 = "";
let nb2 = "";
let res = "";
let resModulo = "";
let operateur = "";

let inputNb1 = document.getElementById("nb1");
let inputNb2 = document.getElementById("nb2");
let inputOperateur = document.getElementById("operateur");
let inputRes = document.getElementById("res");

let un = document.getElementById("1");
let deux = document.getElementById("2");
let trois = document.getElementById("3");
let quatre = document.getElementById("4");
let cinq = document.getElementById("5");
let six = document.getElementById("6");
let sept = document.getElementById("7");
let huit = document.getElementById("8");
let neuf = document.getElementById("9");
let zero = document.getElementById("0");
let add = document.getElementById("plus");
let sous = document.getElementById("moins");
let mult = document.getElementById("mult");
let div = document.getElementById("div");

let egal = document.getElementById("egal");
let effacer = document.getElementById("c");

for (let i = 0; i <= 9; i++) {
    let button = document.getElementById(i.toString());
    button.addEventListener('click', function () {
        if (operateur !== "") {
            nb2 += button.value;
            console.log(nb2);
            inputNb2.value = nb2;
        } else {
            nb1 += button.value;
            console.log(nb1);
            inputNb1.value = nb1;
        }
    });
}



