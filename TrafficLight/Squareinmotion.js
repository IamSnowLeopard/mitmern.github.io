
/* set the initial state*/
let currentLight = "green";

/*make defaults to grey */
function lightBlink() {
    document.getElementById("redLight").style.backgroundColor = "grey";
    document.getElementById("yellowLight").style.backgroundColor = "grey";
    document.getElementById("greenLight").style.backgroundColor = "grey";

    /* turn on the current light and toggle next light */
    if (currentLight === "red") {
        document.getElementById("redLight").style.backgroundColor = "red";
        currentLight = "green";    
    }
    else if (currentLight === "green") {
        document.getElementById("greenLight").style.backgroundColor = "green";
        currentLight = "yellow";
    }
    else if (currentLight === "yellow") {
        document.getElementById("yellowLight").style.backgroundColor = "yellow";
        currentLight = "red";
    };
}

lightBlink();
setInterval(lightBlink,3000); //blink every 3 seconds

/* make the car move */
let carSpeed = 2;
let carPosition = 0;
let carDirection = 0; //0 = move left to right, 1 = move right to left neg

function carMove() {
    carDirection = checkPageBounds(carDirection, carWidth);
    if (carDirection === 0) {
        carPosition += carSpeed;
        car.style.left = carPosition + 'px';
    }   
    else {
        carPosition -= carSpeed;
        car.style.left = carPosition + 'px';
    }
}

/* define the page bounds */
let screenWidth = window.innerWidth;
let carWidth = 50;

function checkPageBounds(carDirection, carWidth) {
    if (carPosition + carWidth > screenWidth && carDirection === 0 ) {
        carDirection = 1;
    }
    else if (carPosition <0 && carDirection === 1) {
        carDirection = 0;
    }
        return carDirection; 
}

/* detect collision */

/* smooth out the car's movement and have it react to the light*/
function animateCar() {
    if (currentLight !== "green") {
    carMove();
    }
    requestAnimationFrame (animateCar);
}

/* call the animation */
animateCar();