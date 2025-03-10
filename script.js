let nb1 = "";
let nb2 = "";
let res = "";
let resModulo = "";
let operateur = "";

const inputNb1 = document.getElementById("nb1");
const inputNb2 = document.getElementById("nb2");
const inputOperateur = document.getElementById("operateur");
const inputRes = document.getElementById("res");

const buttons = {
    plus: document.getElementById("plus"),
    moins: document.getElementById("moins"),
    mult: document.getElementById("mult"),
    div: document.getElementById("div"),
    egal: document.getElementById("egal"),
    c: document.getElementById("c")
};

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

Object.keys(buttons).forEach(id => {
    if (id !== "egal" && id !== "c") {
        buttons[id].addEventListener('click', () => {
            setOperateur(buttons[id].value);
        });
    }
});


buttons.egal.addEventListener('click', function () {
    calculer();
});


buttons.c.addEventListener('click', function () {
    reset();
});

function setOperateur(value) {
    operateur = value;
    inputOperateur.value = value;
}

function reset() {
    inputNb1.value = "";
    inputNb2.value = "";
    inputOperateur.value = "";
    inputRes.value = "";
    nb1 = "";
    nb2 = "";
    operateur = "";
}

function calculer() {
    nb1 = inputNb1.value;
    nb2 = inputNb2.value;
    
    if (isNaN(nb1) || isNaN(nb2)) {
        alert("Veuillez entrer des nombres valides");
        return;
    }

    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2);

    switch (operateur) {
        case "+":
            res = nb1 + nb2;
            break;
        case "-":
            res = nb1 - nb2;
            break;
        case "x":
            res = nb1 * nb2;
            break;
        case "/":
            if (nb2 !== 0) {
                res = nb1 / nb2;
                resModulo = nb1 % nb2;
                res = `${res} reste ${resModulo}`;
            } else {
                alert("Division par 0 impossible");
                return;
            }
            break;
        default:
            alert("Opérateur inconnu");
            return;
    }
    
    inputRes.value = res;
}
