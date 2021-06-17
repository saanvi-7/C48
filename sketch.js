var forest, forest_jpg,snake,snake_jpg,cricket,cricket_png,apple,apple_png,redleaf,redleaf_png,orangeleaf_png,orangeleaf;
var score=0,gameOver,gameOverimg,gameState="play",scoreSound,gameEndSound;

function preload(){
forest_jpg=loadImage("forest3.jpg");
snake_jpg=loadImage("snake 3.png");
cricket_png=loadImage("cricket2.png")
redleaf_png=loadImage("redImage.png");
orangeleaf_png=loadImage("orangeLeaf.png");
apple_png=loadImage("apple.png");
gameOverimg=loadImage("Game-Over-PNG.png");
scoreSound=loadSound("iphone-ding-sound.mp3");
gameEndSound=loadSound("gameOverSound.wav");

}


function setup(){
createCanvas(1200,700);
forest=createSprite(0,250);
//forest.velocityX=5;
forest.addImage(forest_jpg);
//snakeGroup=new Group();
 snake=createSprite(350,550,100,100);
    snake.x=Math.round(random(350,800))
    snake.addImage(snake_jpg);
    snake.scale=0.4;
snake.setCollider("rectangle",0,0,900,150);
snake.debug=false;

appleGroup=new Group();
redGroup=new Group();
orangeGroup=new Group();
cricketGroup=new Group();
}

function draw(){
background("grey");
if(gameState=="play"){
if(keyDown(RIGHT_ARROW)){
    snake.x=snake.x+4;
}
if(keyDown(LEFT_ARROW)){
    snake.x=snake.x-4;
}
//snakes();

var selectNumbers=Math.round(random(1,4));
if(frameCount%80==0){
    if(selectNumbers==1){
        createApple();
    }
    else if(selectNumbers==2){
        createRedLeaf();
    }
    else if(selectNumbers==3){
        createOrangeLeaf();
    }
    else if(selectNumbers==4){
        createCricket();
    }

}
if(snake.isTouching(appleGroup)){
    score=score+1;
    scoreSound.play();
    appleGroup.destroyEach();
}
 else if(snake.isTouching(orangeGroup)){
    score=score+1;
    scoreSound.play();
    orangeGroup.destroyEach();
}
 else if(snake.isTouching(redGroup)){
    score=score+1;
    scoreSound.play();
    redGroup.destroyEach();
}
 else if(snake.isTouching(cricketGroup)){
     gameState="end";
     gameEndSound.play();
    gameEnd();
    
}
}



drawSprites();
textSize(20);
fill("white");
text("SCORE: " +score,350,100);

}
function createApple(){
    apple=createSprite(random(200,1000),40,10,10);
    apple.addImage(apple_png);
    apple.scale=0.05;
    apple.velocityY=4;
    apple.lifetime=800;
    appleGroup.add(apple)
}

function createRedLeaf(){
    redleaf=createSprite(random(200,1000),40,10,10);
    redleaf.addImage(redleaf_png);
    redleaf.scale=0.05;
    redleaf.velocityY=4;
    redleaf.lifetime=800;
redGroup.add(redleaf)
}

function createOrangeLeaf(){
    orangeleaf=createSprite(random(200,1000),40,10,10);
    orangeleaf.addImage(orangeleaf_png);
    orangeleaf.scale=0.05;
    orangeleaf.velocityY=4;
    orangeleaf.lifetime=800;
orangeGroup.add(orangeleaf)
}

function createCricket(){
    cricket=createSprite(random(200,1000),40,10,10);
    cricket.addImage(cricket_png);
    cricket.scale=0.3;
    cricket.velocityY=4;
    cricket.lifetime=800;
cricketGroup.add(cricket)
}

function gameEnd(){
    gameOver=createSprite(600,350,100,100);
    gameOver.addImage(gameOverimg);
    gameOver.scale=0.5;
    cricketGroup.destroyEach();
    orangeGroup.destroyEach();
    redGroup.destroyEach();
    appleGroup.destroyEach();

    cricketGroup.setVelocityYEach(0);
    appleGroup.setVelocityYEach(0);
    redGroup.setVelocityYEach(0);
    orangeGroup.setVelocityYEach(0);


}






