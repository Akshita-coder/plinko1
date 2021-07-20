var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



  //create 1st row of plinko objects
  for (var j = 70; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,70));
  }

  //create 2nd row of plinko objects
  for (var j = 45; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,170));
  }

  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,270));
  }

  //create 3rd row of plinko objects
  for (var j = 5; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,370));
  }
  
  //create 4th row of plinko objects
  for (var j = -20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,475));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

 // for (var h = 0; h < plinkos.length; h++) {
   // plinkos[h].display();   
  //}
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  

  //display the paricles 

}