var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// skill bar
// handle scroll event on window
// check that skills sections container is visible or not
// ensure that initial width of coloured skill divs is Zero -> initialised/Reset to 0 width value at regular intervals
// start animation on every skills ->  increase skill width from 0 to skill level
// store skill level -> HTML with the help data attribute

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function initialiseBars() {
    for (let bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}
initialiseBars();
function fillBars() {

    for (let bar of progressBar) {
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 10);
    }
}
// function fillBar(bar) {

// }
function checkScroll() {

    // You have to check whether skill section container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        console.log('skills Section Visible');
        fillBars();
    }
    else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }


}