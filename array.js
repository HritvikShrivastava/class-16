var line1

var line2

var line3

var line4

var line5

var line6

var line7

var line8

var btn

var player

var line9

var line10

var line11

var line12

var line13

var line14

var line15

var line16

var line17

var line18

var line19

var line20

var gameState = "stop";

function setup () {

  createCanvas (900,400)  
    
  line1 = createSprite(50, 220, 1, 150)
  line2 = createSprite(210, 145, 320, 1)
  line3 = createSprite(370, 220, 1, 150)
  line4 = createSprite(210, 295, 320, 1)
  line5 = createSprite(70, 240, 40, 1)
  line6 = createSprite(100, 185, 30, 1)







  player = createSprite (60, 155, 7, 7)

  secretLine9 = createSprite(125, 200, 1, 40)
  secretLine9.visible = false

  


}

function draw() {
  background("white") //added

drawSprites ()


  if (gameState === "stop") {

    textSize(20)
    text ("WORLD'S HARDEST GAME", 70, 70)
    textSize(10)
    text ("PRESS 'PLAY' TO CONTINUE", 125, 90)
    btn = createButton("PLAY")
    btn.position(165, 110)
    btn.mousePressed(btn1) //added and changed name

  
  }
else if(gameState==="play"){
  if (keyDown("left")) {
      player.x = player.x-3 //changed spellings of velocity
    }

  if (keyDown("right")) {
      player.x = player.x+3
  }

  if (keyDown("up")) {
      player.y = player.y-3
  }

  if (keyDown("down")) {
      player.y = player.y+3
  }

  removeElements(btn)
}


}

function btn1 () {
    
  gameState = "play"
 
}