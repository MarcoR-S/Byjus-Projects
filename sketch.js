var corredor, rua;
var corredorImg, ruaImg;

function preload(){
  //imagens pré-carregadas

  corredorImg =   loadAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png", "Runner-2.png");
  ruaImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  background("yellow");

  //crie sprite aqui
  corredor = createSprite("200,300,30,30");
  corredor.addAnimation("corredorMovendo, Runner-1.png");

  rua = createSprite(200,200,20,20);
  rua.addImage("path.png");
  rua.velocityY = -2;
  rua.scale = 0.8;


}

function draw() {
  background(0);

corredor.x = Worldmouse.x;

  if (rua.y <= 0){
    rua.y = rua.height/2;
  }
}
