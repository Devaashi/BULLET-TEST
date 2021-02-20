var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,60);
  thickness=random(20,90);

  bullet=createSprite(50,200,70,10);
  bullet.velocityX=speed;
  bullet.shapeColor=("white");
  

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("black");  

  if(isCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor=color(0,225,0);
    }

    if(damage<10){
      wall.shapeColor=color(225,0,0);
    }
  }

  drawSprites();
}
