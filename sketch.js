var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg
var invisibleGround
var bullet,bulletImg
var bulletGroup
var zombieGroup
var zombie
var gameState= "play"
var playerDie



function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg=loadImage("assets/zombie.png")
bulletImg=loadImage("bullet1.png")
  bgImg = loadImage("assets/bg.jpeg")
playerDie=loadAnimation("assets/shooter_1.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
invisibleGround= createSprite(width/2,height-10,width,10)
invisibleGround.visible=false
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
 player.addAnimation("playerDie",playerDie)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)
bulletGroup=new Group()
zombieGroup=new Group()

}

function draw() {
  background(0); 
  if(gameState="play"){
console.log(player.y)
  
  
  



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")&&player.y>=700){
  player.velocityY=-10
}
player.velocityY=player.velocityY+0.5



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 bullet= createSprite(player.x,player.y,10,10)
bullet.addImage(bulletImg)
bullet.velocityX=4
bullet.scale=0.5
bulletGroup.add(bullet)
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)
}

if(bulletGroup.isTouching(zombieGroup)){
  zombieGroup[0].destroy()
  bulletGroup[0].destroy()
}

if(zombieGroup.isTouching(player)){
  player.destroy()
  text("GAMEOVER" ,zombie.x,zombie.y)
}

spawnZombies()
  }
  if(gameState="end") {
player.changeAnimation(playerDie)


  }
  player.collide(invisibleGround)

drawSprites();

}

function spawnZombies(){
if (frameCount % 110 === 0){
   zombie= createSprite(width,height/2,20,20)
  zombie.addImage(zombieImg)
  zombie.velocityX = -5
  zombie.scale=0.2
  zombie.y=random(440,850)
  zombieGroup.add(zombie)
}

}








