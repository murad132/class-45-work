var tilesGroup;
var player
function setup(){
  createCanvas(1240, 740);
  player =createSprite(101, 101, 20, 20);
  player.shapeColor = "red";
  player.depth = 2;
  

}
function draw() {
  background(0);

  if (keyIsDown(RIGHT_ARROW)){
 player.position.x += 50;
   console.log("write");
   }
 
  drawSprites();
  createTiles();

}

function createTiles(){
  for(var j =0; j<10; j++){
    // j --> column
    for(var i =0; i<20; i++){
      // i -->  row
      var tile = createSprite(100+(i*52), 100+(j*52), 50, 50);
      tile.depth =1;

    }
  }
}

