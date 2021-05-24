var boy,boy_img;
var ghost,ghost_img;
var bg,bg_img;

function preload(){
boy_img=loadimage("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png");
ghost_img=loadimage("ghost.jpg");
bg_img=loadimage("behind.png");
}

function setup(){
createCanvas(1000,800);

boy=createSprite(30,750,10,10);
boy.addImage("hero",boy_img);

}
function draw(){
background(0);
drawSprites();
}