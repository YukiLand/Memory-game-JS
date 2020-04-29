$("#volume").slider({
    // ...
    slide: function(event, ui) {
      changeSlider(ui.value);
    }
});

// ...

function changeSlider(myVolume) {
	let volumeThreshold = [15, 30, 45, 60, 70, 80, 96, 101]
	let volumeClasses = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7"]
	let classIndex = volumeThreshold.findIndex((threshold) => {return myVolume < threshold});
	changeClassTo(volumeClasses[classIndex]);
	setVolume(myVolume / 100);
}

function changeClassTo(className) {
      $('#volume').removeClass();
      $('#volume').addClass(className);
}