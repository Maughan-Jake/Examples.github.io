let sliderScreens = document.querySelectorAll('.slide');

// Clear all screens
function reset() {
    for (let i = 0; i < sliderScreens.length; i++) {
        sliderScreens[i].style.display = 'none';
    }
}

// Init the slider
function startSlide() {
    reset();
    sliderScreens[0].style.display = 'block';
}

// Show first slide
function restart() {
    reset();
    sliderScreens[0].style.display = 'block';
}

// Show next
function slideRight() {
    reset();
    sliderScreens[1].style.display = 'block';
    setTimeout(slideFinal, 2500);
}

function slideFinal() {
    reset();
    sliderScreens[2].style.display = 'block';
}

startSlide();
