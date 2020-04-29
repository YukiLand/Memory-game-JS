const input = document.querySelector("input");
const label = document.querySelector("label");
let valeurSon;

input.addEventListener("input", (event) => {
  const value = Number(input.value) / 100;
  input.style.setProperty("--thumb-rotate", `${value * 720}deg`);
  label.innerHTML = Math.round(value * 50);
  valeurSon = Math.round(value * 50);
});

    let x = document.getElementById("myAudio");


    function play() {
        x.play();
}

    function setVolume() {
        if (valeurSon >= 40 && valeurSon < 50) {
            x.volume = 0.8;
        }
        else if (valeurSon >= 30 && valeurSon < 40) {
            x.volume = 0.6;
        }
        else if (valeurSon >= 20 && valeurSon < 30) {
            x.volume = 0.4;
        }
        else if (valeurSon >= 10 && valeurSon < 20) {
            x.volume = 0.2;
        }
        else if (valeurSon > 0 && valeurSon < 10) {
            x.volume = 0.1;
        }
        else if (valeurSon < 1) {
            x.volume = 0;
        } 
        else if (valeurSon = 50) {
            x.volume = 1;
        }
    }