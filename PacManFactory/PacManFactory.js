
let imgCount = 0;

//add PacMan images into the container
function addPacMan(){
    let img = document.createElement("img"); //get handle of the img
    img.src = "PacMan1.png"
    img.style.position = "absolute";
    img.id = "img" + imgCount++;
    img.width = 100;
    img.height = 100;

    let container = document.getElementById('imgContainer');
    img.style.left = Math.floor(Math.random() * (container.clientWidth - img.width)) + 'px'; //restrict left and right mvmt
    img.style.top = Math.floor(Math.random() * (container.clientHeight - img.height)) + 'px'; //restrict top and bottom mvtm

    //define velocity of bug movement
    img.velocity = {
    x: (Math.random() * 4 - 2) * 1.5,
    y: (Math.random() * 4 - 2) * 1.5
    };

    container.appendChild(img);

    img.addEventListener('click', function(){
        this.remove();
    });

}

//define how the Images should move
function moveImg(img) {
    let container = document.getElementById('imgContainer'); //get handle of all the images in the container
    let interval = setInterval(function() {
        if (!document.body.contains(img)) {
            clearInterval(interval); // Stop interval if img is removed
        return;
    }

    let x = parseInt(img.style.left, 10); //convert the string x position into integer 
    let y = parseInt(img.style.top, 10);

    x += img.velocity.x; //updates x position based on velocity
    y += img.velocity.y;

    //reverse direction when img hits container edges 
    if (x <= 0 || x >= container.clientWidth - img.width) {
        img.velocity.x *= -1;
    }
    if (y <= 0 || y >= container.clientHeight - img.height) {
        img.velocity.y *= -1;
    }

    img.style.left = x + 'px'; //update img position
    img.style.top = y + 'px';
}, 20);
}

//callback function to actually move the images
function launchPacMan() {
    for (let i = 0; i < imgCount; i++) {
        var img = document.getElementById('img' + i);
        if (img) {
            moveImg(img);
        }
    }
}