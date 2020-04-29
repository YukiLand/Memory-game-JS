let score = 0;
let count = document.querySelector(".score");
let mult = 1;
let chain = 0
let bonus = document.querySelector(".bonus");
let carte = document.getElementsByClassName("carte");
const cartes = [...carte];
const deck = document.getElementById("deck-carte");
let sameCartes = document.getElementsByClassName("match");
let closeIcon = document.querySelector(".close");
let modal = document.getElementById("popup");
let endModal = document.getElementById('victory');
var choice = [];
let countCarte = 0;

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
}

var seconde = 0;
var minute = 0;
var time = true;
var timer = document.querySelector(".timer");
var intervale;

function timerStart() {
    intervale = setInterval(function(){
        if (seconde < 10) {
            timer.innerHTML = minute + ':' + '0' + seconde;
        } else {
            timer.innerHTML = minute + ':' + seconde;
        }
        
        seconde++;;
        if (seconde == 60) {
            minute++;
            seconde = 0;
        }
    }, 1000);
}

var dispCarte = function() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

function flipCarte() {
    choice.push(this);
    var flips = choice.length;

    if (time) {
        seconde = 0;
        minute = 0;
        time = false;
        timerStart();
    }
    if (flips === 2) {
        if (choice[0].type === choice[1].type) {
            countCarte++;
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

function menuPop() {
    modal.classList.add("show");
}

function closeEnd() {
    endModal.classList.remove("show-end");
    start();
}

function endGame() {
    if (countCarte == 9) {
        clearInterval(intervale);
        finalTime = timer.innerHTML;
        endModal.classList.add("show-end");
        document.getElementById("final-score").innerHTML = score;
        document.getElementById("final-time").innerHTML = finalTime;
    };
}

function restart() {
    modal.classList.remove("show");
    start();
}

for (var i = 0; i < cartes.length; i++) {
    carte = cartes[i];
    carte.addEventListener("click", dispCarte);
    carte.addEventListener("click", flipCarte);
    carte.addEventListener("click", endGame);
};