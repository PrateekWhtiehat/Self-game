var Bg,backgroundImg;
var fighter,fighterImg;
var NPCImg,NPC;
var gameState = 0;
var lifeImage,lifeNPC,lifePC,life1 = 3,life2 = 3;
function preload()
{
backgroundImg = loadImage("assets/Bg.jpg");
fighterImg = loadAnimation("assets/PC.png");
NPCImg = loadImage("assets/NPC.png");
lifeImage = loadImage("assets/life.png")
}
function setup() 
{
createCanvas(windowWidth,windowHeight);

fighter = createSprite(270,500,20,60)
fighter.addAnimation('fight',fighterImg);

NPC = createSprite(1400,520,20,20)
NPC.addImage(NPCImg);

lifeNPC = new Lifetime();
lifePC = new Lifetime();
}

function draw() 
{
 background(backgroundImg);
 textSize(30);
 fill("red")
 stroke("black");

 if(keyCode == RIGHT_ARROW  && fighter.x <=1400)
  {
   fighter.x += 20;
  }
 if(keyCode == LEFT_ARROW && fighter.x >=270)
  {
   fighter.x -= 20;
  } 
 if(fighter.isTouching(NPC) && keyCode == UP_ARROW)
  {
  attack();
  if(life1>=0)
  {
    life1 -= 1;
  }
  if(life1<=0)
  {
    life1 =0;
    gameState = 2;
  }
  }
 if(fighter.isTouching(NPC) && keyCode == DOWN_ARROW)
  {
  defend();
  }
 if(gameState == 0)
 {
  choice();
  gameState = 1;
 }
 lifeNPC.showLifeNPC();
 lifePC.showLifePC();
 drawSprites();
}
function attack()
{

}
function defend()
{
  
}
function choice() 
{
  swal(
    {
      title: `Attack or Defend`,
      text: "Up to Attack or Down to Defend",
      imageUrl:"https://studio.code.org/api/v1/animation-library/spritelab/nxFokH_nQeojqyi67RB4lRZ9xa6Y2v4E/category_tools/pick.png",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    }
  );
}