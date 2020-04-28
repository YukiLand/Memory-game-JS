let carte = document.getElementsByClassName("carte");
const cartes = [...card];
const deck = document.getElementById("deck-carte");

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

    }
}

var seconde = 0;
var minute = 0;
var heure = 0;
var timer = document.querySelector(".timer");
var intervale;

function timerStart() {
    intervale = setInterval(interval(), 1000);
}

function interval() {
    timer.innerHTML = minute + ':' + seconde;
    seconde++;
    if (seconde == 60) {
        minute++;
        seconde = 0;
    }
}