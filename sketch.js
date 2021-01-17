const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,polyImg,ball,ground1,ground2,SlingShot,block1,block2,block3,block4,block5,block6,block7;

function preload(){

   polyImg=loadImage("polygon.png");

}


function setup(){
createCanvas(2000,1000);
        engine=Engine.create();
        world=engine.world;

        Engine.run(engine);
    
        
      

    ground1=new Ground(700,400,250,10);
    ground2=new Ground(1150,250,250,10);
  
  
    block1=new Block(600,370,30,40);
    block2=new Block(630,370,30,40);
    block3=new Block(660,370,30,40);
    block4=new Block(690,370,30,40);
    block5=new Block(720,370,30,40);

    block6=new Block(750,370,30,40);
    block7=new Block(780,370,30,40);

    block8=new Block(630,330,30,40);
    block9=new Block(660,330,30,40);
    block10=new Block(690,330,30,40);
    block11=new Block(720,330,30,40);
    block12=new Block(750,330,30,40);

    block13=new Block(660,290,30,40);
    block14=new Block(690,290,30,40);
    block15=new Block(720,290,30,40);

    block16=new Block(690,260,30,40);

    blocke1=new Block(1059,220,30,40);
    blocke2=new Block(1089,220,30,40);
    blocke3=new Block(1117,220,30,40);
    blocke4=new Block(1147,220,30,40);
    blocke5=new Block(1177,220,30,40);
    blocke6=new Block(1207,220,30,40);
    blocke7=new Block(1237,220,30,40);

    blocke8=new Block(1090,180,30,40);
    blocke9=new Block(1120,180,30,40);
    blocke10=new Block(1150,180,30,40);
    blocke11=new Block(1180,180,30,40);
    blocke12=new Block(1210,180,30,40);

    blocke13=new Block(1120,140,30,40);
    blocke14=new Block(1150,140,30,40);
    blocke15=new Block(1180,140,30,40);

    blocke16=new Block(1149,100,30,40);
   
    ball=Bodies.circle(50,300,20)
    World.add(world,ball);

    
    SlingShot=new Slingshot(ball,({x:200,y:200}))

}
function draw(){
background(0);
    imageMode(CENTER);
    image(polyImg,ball.position.x,ball.position.y,30,30);
    ground1.display();
    ground2.display();
    SlingShot.display();
    
    fill("green")
    stroke(0)
    block1.display();
    block2.display();
    block11.display();
    block15.display();
    blocke7.display();
    blocke10.display();
    blocke15.display();
    fill("red")
    stroke(0)
    block3.display();
    block4.display();
    block12.display();
    block16.display();
    blocke4.display();
    blocke12.display();
    blocke13.display();
    fill("yellow")
    stroke(0)
    block5.display();
    block6.display();
    block7.display();
    block14.display();
    blocke3.display();
    blocke14.display();
    fill("pink")
    block8.display();
    blocke9.display();
    blocke5.display();
    fill("blue")
    block9.display();
    blocke11.display();
    blocke16.display();
    fill("grey")
    blocke2.display();
    block10.display();
    blocke6.display();
   
    fill("brown")
    block13.display();
          fill("blue")
    blocke1.display();
    blocke8.display();
    
  //  block9.display();
   // block10.display();
   // block11.display();
   // block12.display();
    //block13.display();
    //block14.display();
    //block15.display();
    //block16.display();
    //block17.display();
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
        SlingShot.fly();
}

function keyPressed(){

        if(keyCode === 32){

         SlingShot.attach(ball);
        
        }
}
