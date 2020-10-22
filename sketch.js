
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
var pendulem1,pendulem2,pendulem3,pendulem4,pendulem5;

var sling1,sling2,sling3,sling4,sling5;
var mConstraint
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);
  
	engine = Engine.create();
  world = engine.world;
  let canvasmouse=Mouse.create(canvas.elt)
  canvasmouse.pixelRatio=pixelDensity()
  let options={
    mouse:canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options)
  World.add(world,mConstraint)

	
	//Create the Bodies Here.
	pendulem1=new Pendulem(340,450,"white");
	pendulem2=new Pendulem(400,450,"red");
	pendulem3=new Pendulem(460,450,"purple");
	pendulem4=new Pendulem(520,450,"blue");
	pendulem5=new Pendulem(580,450,"green");
    
    
  sling1=new Sling(pendulem1.body,{x:340,y:200});
  sling2=new Sling(pendulem2.body,{x:400,y:200});
  sling3=new Sling(pendulem3.body,{x:460,y:200});
  sling4=new Sling(pendulem4.body,{x:520,y:200});
  sling5=new Sling(pendulem5.body,{x:580,y:200});

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  //drawSprites();
  pendulem1.display();
  pendulem2.display();
  pendulem3.display();
  pendulem4.display();
  pendulem5.display();
  //roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
}
/*function drawline(constrained){
bobBodyPosition=constrained.bodyA.position
roofBodyPosition=constrained.bodyB.position
roofBodyOffset=constrained.pointB
roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyx,roofBodyy)

}*/

 function mouseDragged(){
   
     Matter.Body.setPosition(pendulem1.body,{x:mouseX,y:mouseY})
   
 }


