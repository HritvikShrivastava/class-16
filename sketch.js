var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var ground1

var clouds, cloudImage

var obstacle, cactusImage1, cactusImage2, cactusImage3, cactusImage4, cactusImage5, cactusImage6

var gameState = "play";

var score = 0

var gameOver, gameOverImage

var restart, restartImage

var dieSound

var jumpSound

var checkPointSound

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

    trex_collided = loadImage("trex_collided.png");

    groundImage = loadImage("ground2.png")

    cloudImage = loadImage("cloud.png")

    cactusImage1 = loadImage("obstacle1.png")

    cactusImage2 = loadImage("obstacle2.png")

    cactusImage3 = loadImage("obstacle3.png")

    cactusImage4 = loadImage("obstacle4.png")

    cactusImage5 = loadImage("obstacle6.png")

    cactusImage6 = loadImage("obstacle5.png")

    gameOverImage = loadImage("gameOver.png")
    
    restartImage=loadImage("restart.png")

    jumpSound = loadSound("jump.mp3")

    dieSound = loadSound("die.mp3")

    checkPointSound = loadSound("checkPoint.mp3")
}
function setup() {
    createCanvas(600, 200);

    //create a trex sprite

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.addAnimation("collided", trex_collided);
    trex.scale = 0.5;



    trex.setCollider("rectangle",0,0,200, 50)
    //trex.setCollider("circle",0,0,35)
    //trex.debug=true;
    //create a ground sprite

    ground = createSprite(200,190,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
 
    cactusGroup = createGroup () 
    cloudGroup = createGroup ()

    ground1 = createSprite(200,205,400,20)
    ground1.visible=false
}
function draw() {
    background(280);

    console.log(trex.y);

   



    text ("score: "+score, 500, 10)

if (gameState === "play") {
    score = score+Math.round (frameCount/240)
    ground.velocityX = -3-(score/100)
    if (ground.x < 0) {
        ground.x = ground.width / 2;
        } 
    spawnObstacle()  
    spawnCloud()
    if (keyDown("space") && trex.y>=100) {
        trex.velocityY = -15;

        jumpSound.play ()

    }
    trex.velocityY = trex.velocityY + 0.8
    if (cactusGroup.isTouching(trex)) {
        //gameState = "stop"        
        //trex.changeAnimation ("collided", trex_collided)
        //dieSound.play ()
        trex.velocityY=-12
    }
    if (score%100===0 && score > 0) {
        checkPointSound.play ()
    }

}

else if (gameState === "stop") {
    ground.velocityX = 0;
    trex.velocityY = 0;
    cactusGroup.setVelocityXEach(0)
    cloudGroup.setVelocityXEach(0)

    cloudGroup.setLifetimeEach(-1)

    trex.addImage (trex_collided);

    gameOver = createSprite(320, 80, 20, 20)
    gameOver.addImage(gameOverImage)
    gameOver.scale = 0.5

    restart = createSprite(320, 120, 20, 20)
    restart.addImage(restartImage)
    restart.scale = 0.5
    
}

    //jump when the space button is pressed

    
   




    trex.collide(ground1)

    drawSprites();
}

function spawnCloud () {

    if (frameCount%75===0) {
        clouds = createSprite(550, 50, 20, 20)
        clouds.velocityX=-5
        clouds.addImage(cloudImage)
        clouds.scale = 0.15
        clouds.y = Math.round(random(20,80))
        clouds.depth = trex.depth
        trex.depth = trex.depth+1
        clouds.lifetime = 125
        cloudGroup.add(clouds)
    }

    
}

function spawnObstacle () {

    if (frameCount%60===0) {

        obstacle = createSprite(600, 180, 20, 20)
        obstacle.velocityX=-4-(score/100)
        var rand = Math.round(random(1,6))
        switch(rand) {

            case 1:
            obstacle.addImage(cactusImage1)
            break;

            case 2:
            obstacle.addImage(cactusImage2)
            break;

            case 3:
            obstacle.addImage(cactusImage3)
            break;

            case 4:
            obstacle.addImage(cactusImage4)
            obstacle.scale = 0.7
            break;

            case 5:
            obstacle.addImage(cactusImage5)
            break;

            case 6:
            obstacle.addImage(cactusImage6)
            obstacle.scale = 0.7
            break;
            
            default:
            obstacle.addImage(cactusImage3)
            break;

        }

        obstacle.scale = 0.07
        cactusGroup.add(obstacle)

    }

}


