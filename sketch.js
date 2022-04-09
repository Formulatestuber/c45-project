var bg,bgimg

function preload() {
    
    bgimg = loadImage("game background.png");
    boywalkimg=loadAnimation("run1.png","run2.png","run3.png","run4.png")
    enemyimg=loadAnimation("troll1.png","troll2.png","troll3.png","troll4.png","troll5.png","troll6.png","troll7.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)
    


play= createButton("PLAY")
play.position(100,50)
play.size(100,50)

player=createSprite(width/2,height-100)
player.debug=true
player.addAnimation("walk",boywalkimg)
player.scale=.4



enemy=createSprite(100,height-100)
enemy.addAnimation("walk",enemyimg)
enemy.scale=.4
    
}

function draw(){

    background(bgimg)




    if(keyDown("RIGHT_ARROW")){
        player.x  +=27.5
        
    }

    if(keyDown("LEFT_ARROW")){
        player.x  -=27.5
        
    }

    if(keyDown("UP_ARROW")){
        
    }

   // camera.x=player.x


    drawSprites()
}