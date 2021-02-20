
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var END = 0
var PLAY = 1
var gameState = PLAY

function preload(){
 
  monkey_die = loadAnimation("sprite_1.png")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(75,300,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.07
 
  createCanvas(400,400)
  
  ground = createSprite(200,370,400,100)
  ground.shapeColor=("limegreen")
  
  rockGroup = createGroup();
bananaGroup = createGroup();
 
  //monkey.debug = true
  rockGroup.debugEach = true
  monkey.setCollider("rectangle",0,0,100,525);
  
  score = 0
 // text(score,200,75) 
}


function draw() {
background("lightcyan")  
 
  stroke("black")
  textSize(12.5)
  fill("darkcyan")
  text("Survival Time:  " + score,150,75) 
monkey.collide(ground)
  
  if(gameState === PLAY){
     bananaGroup.setVelocityX = -6;
    rockGroup.setVelocityX = -6;
     score = score + Math.round(getFrameRate()/60);
  }
  
  if(keyDown("space")&& monkey.y >= 295) {
        monkey.velocityY = -14;
    }

   monkey.velocityY = monkey.velocityY + 0.8
  
  if(rockGroup.isTouching(monkey)){
 //   bananaGroup.setVelocityX(0);
   // rockGroup.setVelocityX(0);
    gameState = END
  }
  
  if(gameState === END){
   bananaGroup.setVelocityXEach(0);
    rockGroup.setVelocityXEach(0);
    
     bananaGroup.setLifetimeEach(-1);
    rockGroup.setLifetimeEach(-1);
    
   death = createSprite(200,200,20,20)
   death.addAnimation("die",monkey_die) 
    death.y = monkey.y
    death.x = monkey.x
    death.scale = 0.07 
    monkey.destroy();
  }
  
  spawnBananas();
  spawnRocks();
 
  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the clouds
  var rand = Math.round(random(35,60));
  if (frameCount % rand === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(200,225));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}


function spawnRocks() {
  //write code here to spawn the clouds
  var rand2 = Math.round(random(75,100));
  if (frameCount % 85 === 25) {
    var rock = createSprite(600,305,40,10);
    //rock.y = Math.round(random(200,225));
    rock.addImage(obstaceImage);
    rock.scale = 0.1;
    rock.velocityX = -6;
    
   // rock.debug = true
    rock.setCollider("rectangle",0,0,285,235)
    
     //assign lifetime to the variable
    rock.lifetime = 200;
    
  
    
    //add each cloud to the group
    rockGroup.add(rock);
  }
}




