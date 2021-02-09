const Engine=Matter.Engine;
const Body=Matter.Body;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world
var division=[]
var plinko=[]
var particle=[]
var score=0;
function setup() {
  createCanvas(400,800);
  engine=Engine.create();
  world=engine.world
ground=new Ground(200,790,400,20);

for(var i=0;i<=400;i=i+80){
  division.push(new Division(i,700,10,200));

}
for(var i=75;i<400;i=i+50){
  plinko.push(new Plinko(i,75,10,10))

}
for(var i=50;i<400;i=i+50){
  plinko.push(new Plinko(i,175,10,10))

}
for(var i=75;i<400;i=i+50){
  plinko.push(new Plinko(i,275,10,10))

}
for(var i=50;i<400;i=i+50){
  plinko.push(new Plinko(i,375,10,10))

}
}

function draw() {

  background("yellow");
  text("score"+score,200,100) 
  Engine.update(engine);
  ground.display();
  for(var i=0;i<division.length;i++){
    division[i].display();
  }
  for(var i=0;i<plinko.length;i++){
    plinko[i].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(50,350),0,10,10));
    score++;
  }
  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }
  drawSprites();
}