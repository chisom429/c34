const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    box1 = new box(280,275,30,40);  
    box2 = new box(310,275,30,40);
    box3 = new box(340,275,30,40);
    box4 = new box(370,275,30,40);
    box5 = new box(400,275,30,40);
    box6 = new box(430,275,30,40);
    box7 = new box(460,275,30,40);
    box8 = new box(490,275,30,40);
    //level two
    box9 = new box(310,235,30,40);
    box10 = new box(340,235,30,40);
    box11 = new box(370,235,30,40);
    box12 = new box(400,235,30,40);
    box13 = new box(430,235,30,40);
    box14 = new box(460,235,30,40);
    //level three
    box15 = new box(340,195,30,40);
    box16 = new box(370,195,30,40);
    box17 = new box(400,195,30,40);
    box18 = new box(430,195,30,40);
    //level four
    box19 = new box(370,155,30,40);
    box20 = new box(400,155,30,40);
    ball = new ball(200,200,80,80)
    rope = new rope(ball.body,{x:500,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
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
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   ball.display();
   rope.display();
}
