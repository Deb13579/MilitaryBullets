var testshoot, testwall
var testspeed, testthick, testweight
var damage 
function setup() {
  createCanvas(1600,400);
 testspeed = random(220,323)
   testthick = random(22,83)
  testweight = random(30,52)
 testshoot = createSprite(50, 200, 50, 10);
 testwall = createSprite(1200,200,testthick,height/2)
 testshoot.velocityX = testspeed; 
 testshoot.shapeColor = "white"
 testshoot.velocityX = testspeed
}

function draw() {
  background("black");  
  
  if (testwall.x-testshoot.x < (testshoot.width/testwall.width)/2){
damage = 0.5*testweight*testspeed*testspeed/(testthick*testthick*testthick)
testshoot.velocityX = 0
console.log("HI")
if(damage > 10){
  testwall.shapeColor = "red"
}
if(damage < 10){
  testwall.shapeColor = "lime"
}
  }
    
  drawSprites();
}
