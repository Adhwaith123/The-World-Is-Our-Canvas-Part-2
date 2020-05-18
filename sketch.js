var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
   ball = createSprite(250,250,10,10);

  ball.shapeColor = "red";

  var location = database.ref("ball/position");
  location.on("value",readon,showerror);
}
function draw(){
    //background("white");
ball.position.x = mouseX;
ball.position.y = mouseY;
    
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x +x,
         y:ball.y +y

    })
}
function showerror(){
    console.log(error);
}


function mousePressed(){
    if(mousePressed){
    stroke("red");
    strokeWeight(04);
}

}

function mouseReleased(){
    strokeWeight(0);
}

function readon(data){
    position = data.val()
    ball.x = position.x ;
    ball.y = position.y ;
    
    }
