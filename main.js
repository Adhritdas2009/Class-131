function preload(){
    img=loadImage('dog_cat.jpg')
}

function setup(){
    canvas=createCanvas(700, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, canvas.width, canvas.height)
    fill('red')
    text('Dog', 45, 70);
    noFill();
    stroke('red');
    rect(40, 40, 400, 400);
}