
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground, invisibleGround, groundImage;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,215,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX= -4;
  ground.x=ground.width/2;
  console.log(ground.x)
}
 function Bannana(){
      
      if(frameCount%80===0) {
     bannana=createSprite(400,200,20,20);
     bannana.y=Math.round(random(120,200))
    bannana.velocityX= -5;
     
  Ground.visible = false;
  
        
        
    
      }
 }
function Obstacles(){
   if(frameCount%300===0) {
     bannana=createSprite(400,200,20,20);
     bannana.y=Math.round(random(120,200))
    bannana.velocityX= -5;
  
}
 
 }


function draw() {
var survivalTime=0;
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:  "+ score, 500,50);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text(" Survival Time: "+ survivalTime, 100,50)

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
 
    monkey.velocityY = monkey.velocityY + 0.8
  
     ground.x = ground.width /2;
    
   
    
}
  }
  