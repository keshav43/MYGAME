var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var brokencarGroup;
var invisibleGround1,invisibleGround2;

var form, player, game;
var brokencar,brokencarImage;
var brokencar1,brokencar2,brokencar3,brokencar4,brokencar5,brokencar6;
var cars, car1, car2, car3, car4;
var car1Image,car2Image,car3Image,car4Image,trackImage,groundImage;

function preload(){
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  car4Image=loadImage("images/car4.png");
  trackImage=loadImage("images/track.jpg");
  groundImage=loadImage("images/ground.png");
  brokencarImage=loadImage("images/carbroken.png");


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  brokencarGroup=new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.endWin();
  }
  if (gameState===3){
    game.endLoose();
  }
}

