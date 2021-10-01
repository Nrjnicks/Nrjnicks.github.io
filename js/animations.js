// StartAnimation();
var backgroundAnimation;
function StartAnimation() {
    backgroundAnimation = document.getElementById("background-animation");
    Explosions();
}

function Explosions() {
    StartExplosions();
    
    function StartExplosions() {
        explosionElem = backgroundAnimation.firstElementChild;
        var numberOfParticles = 5;
        backgroundAnimation.removeChild(explosionElem);
        for (let index = 0; index < numberOfParticles; index++) {
            explosionElem = explosionElem.cloneNode (true);
            backgroundAnimation.appendChild(explosionElem);
            console.log(index * 1000);
            
            
            setTimeout(function(){Explode(explosionElem)},3000 + Math.random()* 1000);
        }
    }
    
    function Explode(explosion) {
        MoveToRandom(explosion);
        window.setTimeout(function(){Explode(explosion)}, 3000 + Math.random()* 1000);//explosions randomly between 3-4 seconds
    }


    function MoveToRandom(element) {
        element.style.position = "absolute"

        var top = window.scrollY + Math.random() * window.outerHeight;
        element.style.top = `${top}px`;

        var left = Math.random() * 100;
        element.style.left = `${left}%`;
    }
}