let score = 0;
let count = document.querySelector(".score");
let mult = 1;
let chain = 0
let bonus = document.querySelector(".bonus");
let carte = document.getElementsByClassName("carte");
const cartes = [...carte];
const deck = document.getElementById("deck-carte");
let sameCartes = document.getElementsByClassName("same");
let closeIcon = document.querySelector(".close");
var choice = [];

function randCartes(array) {
    var index = array.length;
    var temp;
    var randIndex;

    while (index !== 0) {
        randIndex = Math.floor(Math.random() * index);
        index -= 1;
        temp = array[index];
        array[index] = array[randIndex];
        array[randIndex] = temp;
    }
    return array;
}

window.onload = start();

function start() {
    var cartesRand = randCartes(cartes);
    for (var i = 0; i < cartesRand.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cartes, function(item) {
            deck.appendChild(item);
        });
        cartes[i].classList.remove("show", "open", "match", "disabled");
    }
    score = 0;
    count.innerHTML = score;
    mult = 1;
    bonus.innerHTML = 'x' + mult;


    seconde = 0;
    minute = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0:00";
    clearInterval(intervale);
}

function countScoreBonus() {
    if (chain == 1) {
        mult++;
    }
    score += (1 * mult);
    count.innerHTML = score;
    bonus.innerHTML = 'x' + mult;
    if (score == 1) {
        seconde = 0;
        minute = 0;
        timerStart();
    }
}

var seconde = 0;
var minute = 0;
var timer = document.querySelector(".timer");
var intervale;

function timerStart() {
    intervale = setInterval(clock(), 1000);
}

function clock() {
    timer.innerHTML = minute + ':' + seconde;
    seconde++;;
    if (seconde == 60) {
        minute++;
        seconde = 0;
    }
}

var dispCarte = function() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

function flipCarte() {
    choice.push(this);
    var flips = choice.length;

    if (flips === 2) {
        if (choice[0].type === choice[1].type) {
            countScoreBonus();
            chain = 1;
            same();
        } else {
            chain = 0;
            notSame();
        }
    }
}

function same() {
    choice[0].classList.add("match", "disabled");
    choice[1].classList.add("match", "disabled");
    choice[0].classList.remove("show", "open", "no-event");
    choice[1].classList.remove("show", "open", "no-event");
    choice = [];
}

function notSame() {
    choice[0].classList.add("unmatched");
    choice[1].classList.add("unmatched");
    disabled();
    setTimeout(function() {
        choice[0].classList.remove("show", "open", "no-event", "unmatched");
        choice[1].classList.remove("show", "open", "no-event", "unmatched");
        enable();
        choice = [];
        }, 1100);

}

function disabled() {
    Array.prototype.filter.call(cartes, function(carte) {
        carte.classList.add("disabled");
    });
}

function enable() {
    Array.prototype.filter.call(cartes, function(carte) {
        carte.classList.remove("disabled");
        for (var i = 0; i < sameCartes.length; i++) {
            sameCartes[i].classList.add("disabled");
        }
    });
}

for (var i = 0; i < cartes.length; i++) {
    carte = cartes[i];
    carte.addEventListener("click", dispCarte);
    carte.addEventListener("click", flipCarte);
};