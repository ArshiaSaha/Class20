var a,b;


function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 a.shapeColor = "orange" ;
 b = createSprite(100, 150, 100, 90);
 b.shapeColor = "orange" ;
}

function draw() {
  background("black"); 
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x-b.x < a.width/2 + b.width/2 && b.x-a.x < a.width/2 + b.width/2 && a.y-b.y < a.height/2 + b.height/2 && b.y-a.y < a.height/2 + b.height/2  ){
    a.shapeColor = "green";
    b.shapeColor = "green";
  }else{
    a.shapeColor = "orange";
    b.shapeColor = "orange";
  }
  drawSprites();
}