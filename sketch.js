let image1_up, image2_over;
let snd1, city_snd, elevator, fortnite, trap;
var mgr;
var bob;
var JBL;
var laptop;
var chad
let help1, title, ceo,CEO, city_closeup, messanger1,memphis1,ceo_2,homer,windows;
let elevator_cover, fortnite_cover, trap_cover, classical_cover, newyork;
let splash;
let names = ["Secretary", "Wife", "Upset Employee", "Mom" ]
let firstNames = [
  "Ava", "Liam", "Sophia", "Noah", "Isabella",
  "Elijah", "Mia", "Lucas", "Amelia", "Oliver",
  "Charlotte", "Ethan", "Harper", "Benjamin", "Emma"
];
let lastNames = [
  "Thompson", "Reynolds", "Bennett", "Carter", "Morgan",
  "Hayes", "Sullivan", "Brooks", "Price", "James",
  "Gray", "Cooper", "Lewis", "Scott", "Walker"
];
let ages = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55
];
let coolness = [
0,1,2,3,4,5,6,7,8,9,10
];
let workEthic = [
0,1,2,3,4,5,6,7,8,9,10
];

let currentSong = "";

function preload() {


snd1 = loadSound("assets/burpsnd.m4a");
city_snd = loadSound("assets/city_snd.m4a")
title_snd = loadSound("assets/title_snd.mp3")
elevator = loadSound("assets/Elevator Music.m4a")
fortnite = loadSound("assets/fortnite.m4a")
trap_snd = loadSound("assets/trap_snd.mp3")
classical = loadSound("assets/classical.m4a")
lofi = loadSound("assets/lofi.mp3")
pixel = loadSound("assets/pixel.m4a")





ceo = loadImage("assets/ceo_blank.png")
CEO = loadImage("assets/CEO.png")
ceo_2 = loadImage("assets/ceo_2.png")
title = loadImage("assets/title.png")
help1 = loadImage("assets/help.webp")
city_closeup = loadImage("assets/city_view.jpg")
messanger1 = loadImage("assets/messanger1.png")
memphis1 = loadImage("assets/memphis.jpg")
homer = loadImage("assets/homer.gif")
windows = loadImage("assets/windows.jpeg")
files = loadImage("assets/files.png")
fortnite_cover = loadImage("assets/fortnite_cover.jpeg")
trap_cover = loadImage("assets/trap_cover.jpeg")
elevator_cover = loadImage("assets/elevator_cover.jpeg")
classical_cover = loadImage("assets/classical_cover.jpg")
pixel_cover = loadImage("assets/pixel_cover.png")
lofi_cover = loadImage("assets/lofi_cover.jpeg")
newyork = loadImage("assets/newyork.jpg")
}

function setup() {
  createCanvas(1000, 700);
  mgr = new SceneManager();

  phone = createSprite(0, 0);
  phone.addAnimation("normal", "assets/phone_1.png");  // Normal animation frames
  phone.addAnimation("stand", "assets/phone_2.png"); // Stand animation frames
  phone.visible = false;

  JBL = createSprite(0, 0);
  JBL.addAnimation("normal", "assets/JBL.png");  // Normal animation frames
  JBL.addAnimation("stand", "assets/JBLL.png"); // Stand animation frames
  JBL.visible = false;

  laptop = createSprite(0, 0);
  laptop.addAnimation("normal", "assets/laptop_1.png");  // Normal animation frames
  laptop.addAnimation("stand", "assets/laptop_2.png"); 
  laptop.visible = false;

  bob = createSprite(0, 0);
  bob.addAnimation("normal", "assets/watch.png");  // Normal animation frames
  bob.addAnimation("stand", "assets/shiny.png"); // Stand animation frames
  bob.visible = false;

  chad = createSprite(0, 0);
  chad.addAnimation("normal", "assets/001.png","assets/004.png");  // Normal animation frames
  chad.addAnimation("stand", "assets/Burp001.png", "assets/Burp004.png"); // Stand animation frames
  chad.visible = false;

  mgr.addScene(start);
  mgr.addScene(office);
  mgr.addScene(help);
  mgr.addScene(mc_city_view);
  mgr.addScene(mc_laptop);
  mgr.addScene(mc_phone);
  mgr.addScene(mc_play);
  mgr.addScene(mc_JBL);


  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

function keyPressed() {
  switch(key) {
    case '1':
          mgr.showScene(start);
          break;
    case '2':
          mgr.showScene(office);
          break;
    case '3':
          mgr.showScene(mc_city_view);
          break;
    case '4':
          mgr.showScene(mc_laptop);
          break;
    case '5':
         mgr.showScene(mc_phone);
         break;
    case '6':
          mgr.showScene(mc_file);
          break;
    case '7':
            mgr.showScene(mc_play);
            break;
    case '8':
              mgr.showScene(mc_JBL);
              break;
    case 'h':
          mgr.showScene(help);
          break;
    case 'm':
          fortnite.pause()
          trap_snd.pause()
          elevator.pause()
          city_snd.pause()
          classical.pause()
          pixel.pause()
          lofi.pause()
          
          break;
  }
  mgr.keyPressed();
}
