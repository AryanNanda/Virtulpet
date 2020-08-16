var dog,happyDog,database,foodS,foodStock,dogImg,happyDogImg
function preload()
{
dogImg = loadImage("images/Dog.png");
happyDogImg = loadImage("images/HappyDog.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addImage(dogImg);
  dog.scale = 0.4
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  fill("White")
  text("Press Up Arrow to feed Drago",180,20)
 
}
//functionto read values from DB
function readStock(data){
  foodS=data.val();
}
//function to write values from the DB
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
