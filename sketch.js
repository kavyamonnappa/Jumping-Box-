var canvas;
var music;
var block1, block2, block3, block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 //create 4 different surfaces
 
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(210, 235, 206); 

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(147, 184, 141);
    
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(75, 117, 68);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(29, 54, 25)
   
    box = createSprite(random(20,750),70,50,50);
    box.shapeColor = rgb(255, 255, 255);
    box.velocityX = 3;
    box.velocityY = 5; 
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    

  

    //add condition to check if box touching surface and make it box  
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = rgb(210, 235, 206);
        }

     if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = rgb(147, 184, 141);
        music.play();
         }

     if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = rgb(75, 117, 68);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
         }
        
     if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = rgb(29, 54, 25)
         }


    drawSprites();
}
