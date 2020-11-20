var ob1
var b1
var speed;
var weight;
var thickness;


function setup() {

  createCanvas(1600,400);
  ob1=createSprite(1200, 200,50, height/2);
 
   
  b1=createSprite(10,200,20,5)

 
   b1.shapeColor="white"
 speed=random(223,321)
  b1.velocityX=speed

 weight=random(30,52)
   thickness=random(22,83)
 ob1.width=thickness
}

function draw() {
  background(0);  


if(touching(b1,ob1)){
 b1.velocityX=0
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
b1.depth=ob1.depth
 if(damage>10){
     ob1.shapeColor=color(225,0,0)
 }
 if(damage<10){
     ob1.shapeColor=color(0,225,0)

 }


}





  drawSprites();
}

function touching(object1,object2){

b1RightEdge=object1.x+object1.width
ob1LeftEdge=object2.x
if(b1RightEdge>=ob1LeftEdge){
return true;
}
return false;
}