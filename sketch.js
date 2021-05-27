const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var backgroundImage;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getbackgroundImage();
}

function setup(){
    var canvas = createCanvas(1366,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1531,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(760,160,40, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    pig3 = new Pig(810,140);
    pig4 = new Pig(50,50);
    pig5 = new Pig(60,60);
    pig6 = new Pig(70,70);
    pig7 = new Pig(80,80);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    box6 = new Box(780,140,70,70);
    box7 = new Box(840,140,70,70);
    box8 = new Box(810,160,70,70);
    box9 = new Box(810,160,70,70);
    box10 = new Box(810,160,70,70);
    log4 = new Log(740,160,40, PI/2);
    log5 = new Log(1200,200,150, PI/2);

    bird = new Bird(200,50);
    bird1 = new Bird(150,100);
    bird2 = new Bird(100,100);
    bird3 = new Bird(50,100);

    log6 = new Log(1230,300,80, PI/2);
    log7 = new Log(1230,300,80, PI/2);
    log8 = new Log(1230,300,80, PI/2);
    log9 = new Log(1230,300,80, PI/2);
    log10 = new Log(230,300,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}


function draw(){
        if(backgroundImage){
            background(backgroundImage);
        }
    
    else{
        background("white");
    }
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();

    box3.display();
    box4.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    log4.display();
    log5.display();

    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    platform.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}

 function keyPressed(){
     if(keyCode === UP_ARROW){
         slingshot.attach(bird1.body);
     }
 }

 function keyPressed(){
     if(keyCode === LEFT_ARROW){
         slingshot.attach(bird2.body);
     }
 }

 function keyPressed(){
     if(keyCode === RIGHT_ARROW){
         slingshot.attach(bird3.body);
     }
 }

async function getbackgroundImage(){
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log(responce);
var responceJSON = await responce.json(); 
console.log(responceJSON);
var date_time = responceJSON.datetime;
console.log(date_time);
var hour = date_time.slice(11,13);
console.log(hour);
 if(hour >= 05 && hour < 07){
        bg = "sunrise1.png";
}
else if(hour >= 07 && hour < 09){
     bg = "sunrise2.png";
}
else if(hour >= 09 && hour < 11){
     bg = "sunrise3.png";
}
else if(hour >= 11 && hour < 12){
     bg = "sunrise4.png";
}
else if(hour >= 12 && hour < 13){
    bg = "bg.png";
}
else if(hour >= 13 && hour < 15){
     bg = "sunrise5.png";
}
else if(hour >= 15 && hour < 17){
     bg = "sunset6.png";
}
else if(hour >= 17 && hour < 19){
     bg = "sunset7.png";
}
else if(hour >= 19 && hour < 21){
     bg = "sunset8.png";
    }
else if(hour >= 21 && hour < 23){
     bg = "sunset9.png";
    }
else if(hour >= 23 && hour < 24){
     bg = "bg2.jpg";
    }
else if(hour >= 24 && hour < 01){
     bg = "sunset10.png";
    }
else if(hour >= 01 && hour < 03){
     bg = "sunset11.png";
    }
else if(hour >= 03 && hour < 05){
     bg = "sunset12.png";
    }

    backgroundImage = loadImage(bg);
}