
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, tree, stone
var mango1, mango2, mango3, mango4, mango5
var chain

function preload()
{
	boyimage = loadImage ("sprites/boy.png")
	treeimage = loadImage ("sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground = Bodies.rectangle(400,685,800,20, {isStatic:true} );
	World.add(world, ground)

	stone = Bodies.rectangle(60,580,20,20, {isStatic:false} );
	World.add(world, stone)

	// boy = Bodies.rectangle(150,665,20,20, {isStatic:true} );
	// World.add(world, boy)

	// tree = Bodies.rectangle(650,665,20,20, {isStatic:true} );
	// World.add(world, tree)

	mango1= new Mango (500,400,45,45)
	mango2= new Mango (550,350,45,45)
	mango3= new Mango (600,375,45,45)
	mango4= new Mango (650,325,45,45)
	mango5= new Mango (450,300,45,45)
	
	chain = new Chain(stone,{x:60, y:580});
}


function draw() {
  rectMode(CENTER);
  background("white");
  rect(ground.position.x,ground.position.y,800,20)
  image(boyimage,25,525,200,200)
  image(treeimage,300,200,500,500)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();
  rect(stone.position.x,stone.position.y,20,20)
}

function mouseDragged(){
    // Matter.Body.setPosition(stone, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	chain.fly();
	
}

