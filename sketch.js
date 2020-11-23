var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1300,400);

thickness=random(22, 83);
speed = random(55, 90);
weight = random(400,1500);

  bullet = createSprite(50,200,30,10);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor= color(80,80,80);

}

function draw() {
  background("black");  

  HasCollided(bullet, wall);

  if(HasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }

    if(damage<10){
     wall.shapeColor=color(0,255,0);

    }

  }
  drawSprites();
}

function HasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {

    return true

  }
  return false;

}