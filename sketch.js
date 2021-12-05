const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground1, box1,box2,box3,box4,
box5,box6,box7,box8,box9,box10, slingshot1;

function preload(){
    polygon_img=loadImage("polygon.png");
  }


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //polygon1 = new polygon(20, 10, 40);
    //slingshot1 = new Slingshot(polygon1.body, {x:200,y:100})

    polygon1 = Bodies.circle(50,200,20);
    World.add(world,polygon1);
    
    slingshot1 = new Slingshot(this.polygon1,{x:100,y:200});


    ground1= new ground(300,330,420,10);
    box1= new box(300,275,30,40, "red");
    box2= new box(330,275,30,40, "red");
    box3= new box(360,275,30,40, "red");
    box4= new box(390,275,30,40,"red");
    box5= new box(420,275,30,40,"red");
    box6= new box(450,275,30,40,"red");
    box7= new box(480,275,30,40,"red");
    box8= new box(330,235,30,40, "blue")
    box9= new box(360,235,30,40,"blue");
    box10=new box(390,235,30,40,"blue");
    box11= new box(420,235,30,40,"blue");
    box12= new box(450,235,30,40,"blue");
    box13= new box(360,195,30,40,"white");
    box14= new box(390,195,30,40,"white");
    box15= new box(420,195,30,40,"white");
    box16= new box(390,155,30,40, "orange");;
}

function draw(){
    Engine.update(engine); 
    background("black");
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   // polygon1.display();
    slingshot1.display();

    //img
    imageMode(CENTER)
    image(polygon_img ,polygon1.position.x,polygon1.position.y,40,40);
}
function mouseReleased() {
	slingshot1.free();
}
function mouseDragged(){
   // polygon1.body.position.x=mouseX
   //polygon1.body.position.y=mouseY
   Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY});
}