var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    
    var divOverlay = document.getElementsByClassName("overlay")[0];
    var speed = 10;
    var eventTarget = e.target;
    
    if(eventTarget.className == "btn-open") {
        fadeIn(divOverlay, speed);
        eventTarget.classList = "btn-close";
        
    } 
    
    else if (eventTarget.className == "btn-close"){
        fadeOut(divOverlay,  speed);
        eventTarget.classList = "btn-open";
    }
    
}

function fadeIn(elem, speed) {
     
    var inInterval = setInterval(function(){
        elem.style.width = "175px";
        elem.style.opacity = Number(elem.style.opacity) + 0.02;
        if(elem.style.opacity >= 1) {
            elem.style.opacity = 1;
            clearInterval(inInterval);
        }
        
    }, speed);
}

function fadeOut(elem, speed) {
    elem.style.width = "0px";
    var outInterval = setInterval(function(){
        
        elem.style.opacity = Number(elem.style.opacity) - 0.02;
        if(elem.style.opacity <= 0) {
            elem.style.opacity = 0;
            clearInterval(outInterval);
        }
        
    }, speed);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}