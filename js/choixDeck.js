/*function popoverNone() {
    var div = document.getElementsByClassName("img");
      div.style.display = "none";
  }                 
                permet quand on clique sur l'image du deck de faire disparaitre le popover */


function choixDeck() {
    if (choixDeck1()) {
    var windowObjectReference;
    windowObjectReference = window.open("https://www.youtube.com/?gl=FR&hl=fr");
    }
    else if (choixDeck2()) {
    var windowObjectReferenc;
    windowObjectReference = window.open("https://www.youtube.com/?gl=FR&hl=fr");
    }
}