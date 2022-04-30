const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 200,
    y: 300,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerNPC = new Image();
playerNPC.src = "images/chewie.png";
const background = new Image();
background.src = "images/background.jpeg";

function drawNPC(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true; // add button to keys array when pressed
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode]; // remove button from keys array when released
    player.moving = false;
});

function movePlayer() {
    if (keys[38] && player.y > 100) { // up 
        player.y -= player.speed;
        player.frameY = 3;
    }
    if (keys[37] && player.x > 0) { // left
        player.x -= player.speed;
        player.frameY = 1;
    }
    if (keys[40] && player.y < canvas.height - player.height) { // down
        player.y += player.speed;
        player.frameY = 0;
    }
    if (keys[39] && player.x < canvas.width - player.width) { // right
        player.x += player.speed;
        player.frameY = 2;
    }
}

function handlePlayerFrame() {
    if(player.frameX < 3 && player.moving) player.frameX++
    else player.frameX=0;
}

/*function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background,0,0,canvas.width, canvas.height);
    drawNPC(playerNPC,player.width * player.frameX,player.height * player.frameY,player.width, player.height,player.x,player.y,player.width,player.height);
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}

animate();*/

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now-then;
    if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(background,0,0,canvas.width, canvas.height);
        drawNPC(playerNPC,player.width * player.frameX,player.height * player.frameY,player.width, player.height,player.x,player.y,player.width,player.height);
        movePlayer();
        handlePlayerFrame();
    }
}

startAnimating(10);