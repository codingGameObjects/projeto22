var starImg,bgImg;
var star, starBody;
var som;
//criar variável para sprite de fada e imgFada
var fada, imgFada;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    som = loadSound("sound/JoyMusic.mp3");
    imgFada = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
    cenario = loadImage("images/starryNight.jpg");

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    som.play

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100, 470, 50, 50);
    fada.addAnimation("fada", imgFada);
    fada.scale = 0.2;


    star = createSprite(650,30, 50, 50, starBody);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

    star_options = {
        restitution:0.5,
        isStatic:true
    }
    
	starBody = Bodies.circle(650 , 30 , 5, star_options);
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(cenario);
    console.log(fada.x);
    drawSprites();

    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if (keyDown("RIGHT_ARROW")){
        fada.x = fada.x + 5;
    } else if (keyWentDown("LEFT_ARROW")){
        fada.x = fada.x - 5;
    }

    if (keyWentDown("DOWN_ARROW") || keyWentDown("space")){
        Matter.Body.setStatic(starBody, false);
    }

    if (fada.x >= 520 && fada.x <= 550 && star.y >= 470){
        Matter.Body.setStatic(starBody, true);
    }
    
}
