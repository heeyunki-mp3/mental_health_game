const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 350,
    y: 225,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
    place: 0
};

const playerNPC = new Image();
playerNPC.src = "images/chewie.png";
const background = new Image();
background.src = "images/background/intro2.png";

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
    if (keys[38] && player.y > 0) { // up 
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
    boundaries = [[11,183,146,291],[317,327,551,417],[569,21,740,192],[200,12,353,120]]
    enterButton = document.getElementById('enterButton');
    // updating place depending on where the NPC is
    if (boundaries[0][0] < player.x && player.x < boundaries[0][2] && boundaries[0][1] < player.y && player.y < boundaries[0][3]) {
        player.place = 9; // moody moon
        enterButton.style.visibility = 'visible';
    }
    else if (boundaries[1][0] < player.x && player.x < boundaries[1][2] && boundaries[1][1] < player.y && player.y < boundaries[1][3]) {
        player.place = 24; // time thing
        enterButton.style.visibility = 'visible';
    }
    else if (boundaries[2][0] < player.x && player.x < boundaries[2][2] && boundaries[2][1] < player.y && player.y < boundaries[2][3]) {
        player.place = 1; // tree place
        enterButton.style.visibility = 'visible';
    }
    else if (boundaries[3][0] < player.x && player.x < boundaries[3][2] && boundaries[3][1] < player.y && player.y < boundaries[3][3]) {
        player.place = 30; // blue earth
        enterButton.style.visibility = 'visible';
    }
    else {
        player.place = 0;
        enterButton.style.visibility = 'hidden';
    }
    playerPosition = player.place;
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
        console.log(player.place);
        handlePlayerFrame();
    }
}

function displayMap() {
    startAnimating(30);
}