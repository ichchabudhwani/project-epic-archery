const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,Playerbase;
var Computerbase;
var PlayerBase;
var player;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new computerbase (900,random(450,height -300),180,150);
  PlayerBase = new playerbase (300,random(200,height-200),180,200);
 computerplayer=new computerplayer(5,computerbase. body. position.y -553,60,140);
 player=new Player(6,PlayerBase.body.position.x -400,60,140);
 
}
function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  
computerbase.display();
PlayerBase.display();
   //display Player and computerplayer

computerplayer.display();
player.display();
}
