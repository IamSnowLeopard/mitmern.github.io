//initialize fly counter
let flyCount = 0;

    //add flies into the container
    function addFlies(){
        let fly = document.createElement("img"); //get handle of the fly
        fly.src = "ladybug.png"
        fly.style.position = "absolute";
        fly.id = "fly" + flyCount++;
        fly.width = 50;
        fly.height = 50;

        let container = document.getElementById('flyContainer');
        fly.style.left = Math.floor(Math.random() * (container.clientWidth - fly.width)) + 'px'; //restrict left and right mvmt
        fly.style.top = Math.floor(Math.random() * (container.clientHeight - fly.height)) + 'px'; //restrict top and bottom mvtm

        //define velocity of bug movement
        fly.velocity = {
        x: Math.random() * 4 - 2,
        y: Math.random() * 4 - 2
        };

        container.appendChild(fly);

        //remove a fly on click
        fly.addEventListener('click', function(){
            this.remove();
        });

    }

    //define how the flies should move
    function moveFly(fly) {
        let container = document.getElementById('flyContainer'); //get handle of all the flies in the container
        let interval = setInterval(function() {
            if (!document.body.contains(fly)) {
                clearInterval(interval); // Stop interval if fly is removed
            return;
        }

        let x = parseInt(fly.style.left, 10); //convert the string x position into integer 
        let y = parseInt(fly.style.top, 10);

        x += fly.velocity.x; //updates x position based on velocity
        y += fly.velocity.y;

        //reverse direction when fly hits container edges 
        if (x <= 0 || x >= container.clientWidth - fly.width) {
            fly.velocity.x *= -1;
        }
        if (y <= 0 || y >= container.clientHeight - fly.height) {
            fly.velocity.y *= -1;
        }

        fly.style.left = x + 'px'; //update fly position
        fly.style.top = y + 'px';
    }, 20);
}

//callback function to actually move the flies
function catchFlies() {
    for (let i = 0; i < flyCount; i++) {
        var fly = document.getElementById('fly' + i);
        if (fly) {
            moveFly(fly);
        }
    }
}

//move eyes according to cursor position
let balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    };