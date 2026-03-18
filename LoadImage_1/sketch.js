let cat;
let dog;
let currentAnimal;
let x;
let y;

function preload(){
  cat = loadImage('images/cat.jpg');
 // dog = loadImage('images/dog.jpg');
}


function setup() {
  createCanvas(600, 400);
background(220);
x = random(width);
y = random(height);
currentAnimal = cat;
}

function draw() {
  background(100);
  image(currentAnimal, x,y);

}
