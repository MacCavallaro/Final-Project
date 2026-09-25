

////////////////////////////// 1 /////////////////
function start()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  let btnevent1 =false;
  let btnevent2 =false;
  let btnevent3 =false;
  let btnevent4 =false;
  let btnevent5 =false;
  

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for start");
    outputVolume(.15);  // turn down the volume.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering start");
      textAlign(CENTER);
      textSize(30);
      noStroke();


   
      bob.visible = false;
      chad.visible = false;

  }

  this.draw = function() {
      background(title);
push();

      // btnevent1 = checkButtonPress("Help", width-150, height-70, 100, 40, color(220, 100, 100), color(100), color(250));  
      // if (btnevent1) { // help
      //     btnevent1 = false;
      //     this.sceneManager.showScene(help);
      // }
      
      btnevent2 = checkButtonPress("MAKE SOME MONEY", width/2 - 90, height -150, 220, 40, color(120, 180, 100), color(100), color(250));
      if (btnevent2) {   // main or next scene
          btnevent2 = false;
          this.sceneManager.showNextScene();
      }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);
      if (textY > height)  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {
        if (!title_snd.isPlaying()) {
      title_snd.play();
  }
  }
}

///////////////////////  2  ////////////////////////

function office()  {
  let btnevent1 = false;

  this.setup = function() {
      console.log("We are at setup for office");
  }

  this.enter = function() {
      console.log("We are at entering office");

      chad.visible = false;

      phone.scale = 0.3;
      phone.position.x = 890;
      phone.position.y = 550;
      phone.visible = true;

      laptop.scale = .5;
      laptop.position.x = width/2 + 80;
      laptop.position.y = 500;
      laptop.rotation = 0
      laptop.visible = true;

      JBL.scale = 0.27;
      JBL.position.x = 300-170;
      JBL.position.y = 500+50;
      JBL.visible = true;

      bob.scale = 0.2;
      bob.position.x = 300;
      bob.position.y = 500+80;
      bob.visible = true;


    title_snd.pause();
    city_snd.pause();

  }

  this.draw = function() {
      background(ceo);
fill(255)

      if (mouseX >= 150 && mouseX <= 900 && mouseY >= 0 && mouseY <= 300) {
        background(ceo_2);
    } else{
        background(ceo);
    }


    //////------------------DESK OBJECTS-----------------------------
    

    //Watch
      if (mouseX >= 240 && mouseX <= 360 && mouseY >= 550 && mouseY <= 625) {
          bob.changeAnimation("stand");
          bob.scale = 0.12;
      } else {
          bob.changeAnimation("normal");
          bob.scale = 0.2;
      }


      //JBL
      if (mouseX >= 50 && mouseX <= 240 && mouseY >= 500 && mouseY <= 625) {
        JBL.changeAnimation("stand");
        JBL.scale = 0.23;
    } else {
        JBL.changeAnimation("normal");
        JBL.scale = 0.27;
    }


    //Laptop
    if (mouseX >= 430 && mouseX <= 750 && mouseY >= 370 && mouseY <= 625) {
        laptop.changeAnimation("stand");
        laptop.scale = .48;
    } else {
        laptop.changeAnimation("normal");
        laptop.scale = .5;
    }




    //Phone
    if (mouseX >= 820 && mouseX <= 980 && mouseY >= 500 && mouseY <= 625) {
        phone.changeAnimation("stand");
        phone.scale = 0.35
    } else {
        phone.changeAnimation("normal");
        phone.scale = 0.3
    }

      btnevent1 = checkButtonPress("Help", width-150, height-70, 100, 40, color(220, 100, 100), color(100), color(250));  
      if (btnevent1) { 
          btnevent1 = false;
          this.sceneManager.showScene(help);
      }


  }

  this.mousePressed = function() {

    
      if (mouseX >= 50 && mouseX <= 240 && mouseY >= 500 && mouseY <= 625) {
        this.sceneManager.showScene(mc_JBL);
      }
    
      if (mouseX >= 430 && mouseX <= 750 && mouseY >= 370 && mouseY <= 625) {
        this.sceneManager.showScene(mc_laptop);
      }
    
      if (mouseX >= 820 && mouseX <= 980 && mouseY >= 500 && mouseY <= 625) {
        this.sceneManager.showScene(mc_phone);
      }

      if (mouseX >= 150 && mouseX <= 900 && mouseY >= 0 && mouseY <= 300) {
        this.sceneManager.showScene(mc_city_view);
      }
  }
}

////////////////////////////// 3 /////////////////

function help() {

    this.setup = function() {
      console.log("We are at setup for help");
    }
  
    this.enter = function() {
      console.log("We are at entering for help");
      bob.visible = false;
    }
  
    this.draw = function() {
      background(newyork);
      bob.visible = false;
      laptop.visible = false;
      JBL.visible = false;
      phone.visible = false;
  
      fill(255);
      rect(75, 25, 850, 600, 35); 
      fill("black");
      textAlign(LEFT);
      textSize(22);
      text("Hello, and welcome to the help screen for CEO Interactive Interface!", 110, 65);
      text("Here's how things work:", 110, 100);
      text("- Click on the JBL speaker to choose from different music genres.", 110, 135);
      text("- Click on the laptop to access employee files and make decisions.", 110, 165);
      text("- Click 'Play' in the files scene to begin evaluating employees.", 110, 195);
      text("- Click on the window to take in the scenic city view.", 110, 225);
      text("- Click on the phone to handle conversations with key people.", 110, 255);
      text("- Use the 'Help' button for guidance, and 'Go Back' to return.", 110, 285);
      text("Key Bindings:", 110+30, 315);
      text("- 1: Start", 110+30, 315 + 30);
      text("- 2: Office", 110+30, 315 +60);
      text("- 3: City View", 110+30, 315+90);
      text("- 4: Laptop", 110+30, 315+120);
      text("- 5: Phone", 110+30, 315+150);
      text("- 6: Files", 110+30, 315+180);
      text("- 7: Fire or Promote", 110+30, 315+210);
      text("- 8: Music Selection", 110+30, 315+240);
      text("- h: Help", 110+30, 315+270);
      text("- m: Mute", 110+30, 315+300);


      btnevent2 = checkButtonPress("Go Back", 50, height-70, 100, 40, color(100, 255, 100), color(100), color(250));  
      if (btnevent2) { // help
          btnevent2 = false;
          this.sceneManager.showScene(office);
      }
    }
    
  }
  
function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
  let btnc = "";
  let btnstate = false;

  if (mouseX > bx - boxW &&
      mouseX < bx + boxW &&
      mouseY > by - boxH &&
      mouseY < by + boxH) {
      overBox = true;

      if (!mouseIsPressed) {
          stroke(255);
          btnc = ovcolor;
          btnstate = false;
      } else {
          console.log(str + " pressed");
          stroke(255);
          btnc = dncolor;
          btnstate = true;
      }
  } else {
      stroke(255);
      btnc = upcolor;
      overBox = false;
  }

  push();
  translate(bx, by);
  fill(btnc);
  rect(0, 0, boxW, boxH, 10); // draw the box
  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text(str, boxW / 2, 28);
  pop();

  return btnstate;
}

// function playshortsound() {
// if (!snd2.isPlaying()) {
//   snd2.play();
// } else {
//    snd2.stop();
// }
// }

function mc_city_view()  {


  this.setup = function() {
      console.log("We are at setup for city view");


  }

  this.enter = function() {
      console.log("We are at entering city view");

      if (!city_snd.isPlaying()) {
        city_snd.play();
    }
  }

  this.draw = function() {
      background(city_closeup);
      fill(255)
      bob.visible = false;
      laptop.visible = false;
      JBL.visible = false;
      phone.visible = false;

      btnevent1 = checkButtonPress("Help", width-150, height-70, 100, 40, color(220, 100, 100), color(100), color(250));  
      if (btnevent1) { // help
          btnevent1 = false;
          this.sceneManager.showScene(help);
      }

      btnevent2 = checkButtonPress("Go Back", 50, height-70, 100, 40, color(100, 255, 100), color(100), color(250));  
      if (btnevent2) { // help
          btnevent2 = false;
          this.sceneManager.showScene(office);
      }



  }

  this.mousePressed = function() {}
}

function mc_laptop()  {

  this.setup = function() {
      console.log("We are at setup for laptop");
  }

  this.enter = function() {
      console.log("We are at entering laptop");
  


  }

  this.draw = function() {
      background(windows);
      fill(255)
      image(files,120,120,60,60)
      bob.visible = false;
      laptop.visible = false;
      JBL.visible = false;
      phone.visible = false;
      chad.visible = false;


      checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250));
      checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));

  }

  this.mousePressed = function() {

if( mouseX >= 120 && mouseX <= 120 + 60 && mouseY >= 120 && mouseY <= 120 + 60 )
    this.sceneManager.showScene(mc_files);
  console.log("files opened");
  
  if (checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250))) {
    this.sceneManager.showScene(office);
  }
  if (checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250))) {
    this.sceneManager.showScene(help);
  }
  }
}

function mc_files()  {


    this.setup = function() {
        console.log("We are at setup for files");
    }
  
    this.enter = function() {
        console.log("We are at entering files");
    
  
  
    }
  
    this.draw = function() {
        background(windows);
        fill(255)
        rect(100,100,700,400)
        bob.visible = false;
        laptop.visible = false;
        JBL.visible = false;
        phone.visible = false;
 
        chad.scale = .2;
        chad.position.x = 200;
        chad.position.y = 300;
        chad.rotation = 0
        chad.visible = true;
        
        stroke(0)
        strokeWeight(2)
        rect(300,120,480,200)
        noStroke(0)
        strokeWeight(0)
        textSize(20)
        textAlign(LEFT)
        fill(0)
        text("Hello! my name is chad and we are going to play a", 310,150)
        text("little game today...", 310,180)
        text("I'm going to give you a name of an employee at", 310,250)
        text("your company, and you will decide their fate", 310,280)
        textAlign(CENTER)



        if (mouseIsPressed && mouseX >= 150 && mouseX <= 220 && mouseY >= 200 && mouseY <= 400) {
            chad.changeAnimation("stand");

            if (!snd1.isPlaying()) {
                snd1.play();  // Play sound only if it's not already playing
            }
        } else {
            chad.changeAnimation("normal");
        }

        checkButtonPress("Play", 480, 350, 100, 40, color(100, 255, 100), color(100), color(250));
        checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250));
        checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));
  
    }
  
    this.mousePressed = function() {
        if (checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250))) {
            this.sceneManager.showScene(office);
          }
          if (checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(help);
          }
          
          if (checkButtonPress("Play", 480, 350, 100, 40, color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(mc_play);
          }
          



    }

  }

function mc_play()  {
let activeFirst;
let activeLast;
let activeAge;
let activeCool;
let activeWork;

    this.setup = function() {
        console.log("We are at setup for play");
    }
  
    this.enter = function() {
        console.log("We are at entering play");
    
        activeFirst = random(firstNames);
        activeLast = random(lastNames);
        activeAge = random(ages);
        activeCool = random(coolness);
        activeWork = random(workEthic);
  
    }
  
    this.draw = function() {
        background(windows);
        fill(255)
        rect(100,100,700,400)
        bob.visible = false;
        laptop.visible = false;
        JBL.visible = false;
        phone.visible = false;
 
        chad.scale = .2;
        chad.position.x = 200;
        chad.position.y = 300;
        chad.rotation = 0
        chad.visible = true;
        
        stroke(0)
        strokeWeight(2)
        rect(300,120,480,200)
        noStroke(0)
        strokeWeight(0)
        textSize(20)
        textAlign(LEFT)
        fill(0)
        text(activeFirst + " " + activeLast ,320,170)
        text("Age: " + activeAge,320,170 + 30)
        text("Coolness: " + activeCool,320,170 + 60)
        text("Work Ethic: " + activeWork,320,170 + 90)
        fill(255)
  





        if (mouseIsPressed && mouseX >= 150 && mouseX <= 220 && mouseY >= 200 && mouseY <= 400) {
            chad.changeAnimation("stand");

            if (!snd1.isPlaying()) {
                snd1.play();  // Play sound only if it's not already playing
            }
        } else {
            chad.changeAnimation("normal");
        }

        checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250));
        checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));
        checkButtonPress("Fire", 500 - 70, 350, 100, 40, color(100, 220, 100), color(100), color(250));
        checkButtonPress("Promote", 700 - 70, 350, 100, 40, color(220, 100, 100), color(100), color(250));

    }
  
    this.mousePressed = function() {
        if (checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250))) {
            this.sceneManager.showScene(office);
          }
          if (checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(help);
          }

          if (checkButtonPress("Fire", 500 - 70, 350, 100, 40, color(100, 255, 100), color(100), color(250))) {
            this.sceneManager.showScene(mc_play); 
        }
          if (checkButtonPress("Promote",  700 - 70, 350, 100, 40, color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(mc_play);
        }



    }

  }

function mc_phone() {
    let showButtons = true;
    let selectedOption = "";
    let activeName;
  
    const names = ["Secretary", "Wife", "Upset Employee", "Mom"];
  
    this.setup = function () {
      console.log("We are at setup for phone");
    };
  
    this.enter = function () {
      console.log("We are at entering phone");
      showButtons = true;
      selectedOption = "";
      activeName = random(names);
    };
  
    this.draw = function () {
      background(CEO);
      fill(255)
  
      bob.visible = false;
      laptop.visible = false;
      JBL.visible = false;
      phone.visible = false;
      chad.visible = false;
  
      let x = 120;
  
      textAlign(LEFT);
      fill(255);
      rect(100, 50, 800, 600);
      fill(0);
      textSize(20);
      text("PHONE CONVERSATION", x, 100);
      text("With: " + activeName, x, 125);
      text("Subject: Nothing Important", x, 150);
  
      // SECRETARY
      if (activeName === "Secretary") {
        fill("red"); text("Secretary", x, 200);
        fill(0); text("Can I go home so I can finally see my 5 children again?", x, 225);
  
        if (selectedOption === "sec_1") {
          fill("blue"); text("You", x, 290);
          fill(0); text("ummmmmm no lol", x, 315);
          text("* Secretary has left the call *", x, 500);
        } else if (selectedOption === "sec_2") {
          fill("blue"); text("You", x, 290);
          fill(0); text("bring me coffee.", x, 315);
          text("* Secretary has left the call *", x, 500);
        } else if (selectedOption === "sec_3") {
          fill("blue"); text("You", x, 290);
          fill(0); text("ummmmmm no lol", x, 315);
          text("bring me coffee.", x, 340);
          text("* Secretary has left the chat *", x, 500);
        }
  
        if (showButtons) {
          checkButtonPress("Mean Response", 650, 330, 200, 40, color(220, 100, 100), color(100), color(250));
          checkButtonPress("Change the Subject", 650, 390, 180, 40, color(100, 220, 100), color(100), color(250));
          checkButtonPress("Both Options", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250));
        }
      }
  
      // WIFE
      if (activeName === "Wife") {
        fill("red"); text("Wife", x, 200);
        fill(0); text("Where are you? I haven't seen you in weeks.", x, 225);
  
        if (selectedOption === "wife_1") {
          fill("blue"); text("You", x, 290);
          fill(0); text("I've been so busy with work and taking care", x, 315);
          text("of my bankroll 💸💸💸💸💸💸💸", x, 340);
          fill("red"); text("Wife", x, 500);
          fill(0); text("I'm taking the kids", x, 525);
        } else if (selectedOption === "wife_2") {
          fill("blue"); text("You", x, 290);
          fill(0); text("I bought you a car", x, 315);
          fill("red"); text("Wife", x, 450);
          fill(0); text("bet we coo", x, 475);
        } else if (selectedOption === "wife_3") {
          fill("blue"); text("You", x, 290);
          image(homer, x, 300, 200, 200);
          fill("red"); text("Wife", x, 530);
          fill(0); text("* wife has left the chat *", x, 560);
        }
  
        if (showButtons) {
          checkButtonPress("Make up excuse", 650, 330, 200, 40, color(220, 100, 100), color(100), color(250));
          checkButtonPress("Buy her a new car", 650, 390, 170, 40, color(100, 220, 100), color(100), color(250));
          checkButtonPress("Send a gif", 650, 450, 130, 40, color(100, 100, 220), color(100), color(250));
        }
      }
  
      // UPSET EMPLOYEE
      if (activeName === "Upset Employee") {
        fill("red"); text("Upset Employee", x, 200);
        fill(0); text("You haven't responded to any of my emails.", x, 225);
  
        if (selectedOption === "emp_1") {
          fill("blue"); text("You", x, 290);
          fill(0); text("Ur fired", x, 315);
          text("* Employee kicked from the chat *", x, 400);
        } else if (selectedOption === "emp_2") {
          fill("blue"); text("You", x, 290);
          fill(0); text("Sorry, you're fired.", x, 315);
          text("* Employee kicked from chat *", x, 400);
        } else if (selectedOption === "emp_3") {
          fill("blue"); text("You", x, 290);
          fill(0); text("talk to my secretary lil bro.", x, 315);
          text("* Employee kicked from chat *", x, 400);
        }
  
        if (showButtons) {
          checkButtonPress("Blow them off", 650, 330, 180, 40, color(220, 100, 100), color(100), color(250));
          checkButtonPress("Apologize", 650, 390, 130, 40, color(100, 220, 100), color(100), color(250));
          checkButtonPress("Offer meeting", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250));
        }
      }
  
      // MOM
      if (activeName === "Mom") {
        fill("red"); text("Mom", x, 200);
        fill(0); text("Honey, you forgot my birthday again...", x, 225);
  
        if (selectedOption === "mom_1") {
          fill("blue"); text("You", x, 290);
          fill(0); text("I swear you just had one a year ago", x, 315);
          fill("red"); text("Mom", x, 400);
          fill(0); text("* Apple Pay Request: $50,000 *", x, 425);
          fill("blue"); text("You", x, 460);
          fill(0); text("Sorry in a meeting", x, 485);
        } else if (selectedOption === "mom_2") {
          fill("blue"); text("You", x, 290);
          fill(0); text("Sorry you're one more step in the grave", x, 315);
          text("this ain't my problem lol", x, 340);
          fill("red"); text("Mom", x, 400);
          fill(0); text("Aw you're just like your father.", x, 425);
        } else if (selectedOption === "mom_3") {
          fill("blue"); text("You", x, 290);
          fill(0); text("I bought you a new car.", x, 315);
          fill("red"); text("Mom", x, 400);
          fill(0); text("bet we coo", x, 425);
        }
  
        if (showButtons) {
          checkButtonPress("Deny it", 650, 330, 120, 40, color(220, 100, 100), color(100), color(250));
          checkButtonPress("Apologize", 650, 390, 130, 40, color(100, 220, 100), color(100), color(250));
          checkButtonPress("Surprise gift", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250));
        }
      }
  
      // Navigation buttons
      checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250));
      checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));
      checkButtonPress("Next Chat", 450, height - 70, 100, 40, color(255), color(100), color(250));
    };
  
    this.mousePressed = function () {
      if (showButtons && activeName === "Secretary") {
        if (checkButtonPress("Mean Response", 650, 330, 200, 40, color(220, 100, 100), color(100), color(250))) selectedOption = "sec_1";
        if (checkButtonPress("Change the Subject", 650, 390, 180, 40, color(100, 220, 100), color(100), color(250))) selectedOption = "sec_2";
        if (checkButtonPress("Both Options", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250))) selectedOption = "sec_3";
      }
      if (showButtons && activeName === "Wife") {
        if (checkButtonPress("Make up excuse", 650, 330, 200, 40, color(220, 100, 100), color(100), color(250))) selectedOption = "wife_1";
        if (checkButtonPress("Buy her a new car", 650, 390, 170, 40, color(100, 220, 100), color(100), color(250))) selectedOption = "wife_2";
        if (checkButtonPress("Send a gif", 650, 450, 130, 40, color(100, 100, 220), color(100), color(250))) selectedOption = "wife_3";
      }
      if (showButtons && activeName === "Upset Employee") {
        if (checkButtonPress("Blow them off", 650, 330, 180, 40, color(220, 100, 100), color(100), color(250))) selectedOption = "emp_1";
        if (checkButtonPress("Apologize", 650, 390, 130, 40, color(100, 220, 100), color(100), color(250))) selectedOption = "emp_2";
        if (checkButtonPress("Offer meeting", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250))) selectedOption = "emp_3";
      }
      if (showButtons && activeName === "Mom") {
        if (checkButtonPress("Deny it", 650, 330, 120, 40, color(220, 100, 100), color(100), color(250))) selectedOption = "mom_1";
        if (checkButtonPress("Apologize", 650, 390, 130, 40, color(100, 220, 100), color(100), color(250))) selectedOption = "mom_2";
        if (checkButtonPress("Surprise gift", 650, 450, 150, 40, color(100, 100, 220), color(100), color(250))) selectedOption = "mom_3";
      }
  
      if (selectedOption) showButtons = false;
  
      if (checkButtonPress("Go Back", 50, height - 70, 100, 40, color(100, 255, 100), color(100), color(250))) {
        this.sceneManager.showScene(office);
      }
      if (checkButtonPress("Next Chat", 450, height - 70, 100, 40, color(255), color(100), color(250))) {
        this.sceneManager.showScene(mc_phone);
      }
      if (checkButtonPress("Help", width - 185, height - 70, 100, 40, color(220, 100, 100), color(100), color(250))) {
        this.sceneManager.showScene(help);
      }
    };
  }
  

function mc_JBL()  {


    this.setup = function() {
        console.log("We are at setup for city view");
  
  
    }
  
    this.enter = function() {
        console.log("We are at entering city view");
  
    }
  
    this.draw = function() {
        background(CEO);
        fill(255)
        textAlign(LEFT)
        rect(100,100,800,500)
        fill(0)
        text("Now Playing: " + currentSong, 120,170)
        image(trap_cover,110+100,110 + 120,160,160)
        image(elevator_cover,110+300,110 + 120,160,160)
        image(fortnite_cover,110+500,110 + 120,160,160)

        image(lofi_cover,110+100,110 + 120 +170,160,160)
        image(classical_cover,110+300,110 + 120 +170,160,160)
        image(pixel_cover,110+500,110 + 120 +170,160,160)

    

        bob.visible = false;
        laptop.visible = false;
        JBL.visible = false;
        phone.visible = false;
  
        btnevent1 = checkButtonPress("Help", width-150, height-70, 100, 40, color(220, 100, 100), color(100), color(250));  
        if (btnevent1) { // help
            btnevent1 = false;
            this.sceneManager.showScene(help);
        }
  
        btnevent2 = checkButtonPress("Go Back", 50, height-70, 100, 40, color(100, 255, 100), color(100), color(250));  
        if (btnevent2) { // help
            btnevent2 = false;
            this.sceneManager.showScene(office);
        }
  
  
  
    }
  
    this.mousePressed = function() {
if (mouseX >= 110+100 && mouseX <= 270+100 && mouseY <= 390 && mouseY >= 230){
    currentSong = "Trap Music"
    if (!trap_snd.isPlaying()) {
        trap_snd.play();
        elevator.pause();
        fortnite.pause()
        lofi.pause()
        classical.pause()
        pixel.pause()
    }
}

if (mouseX >= 110+100 && mouseX <= 270+100 && mouseY <= 390 + 170 && mouseY >= 230 + 170){
    currentSong = "Lofi Music"
    if (!lofi.isPlaying()) {
        lofi.play()
        trap_snd.pause();
        elevator.pause();
        fortnite.pause()
        classical.pause()
        pixel.pause()
    }
}

if (mouseX >= 110+300 && mouseX <= 270+300 && mouseY <= 390 && mouseY >= 230){
    currentSong = "Elevator Music"
    if (!elevator.isPlaying()) {
        elevator.play();
        trap_snd.pause();
        fortnite.pause()
        lofi.pause()
        classical.pause()
        pixel.pause()
    }

}

if (mouseX >= 110+300 && mouseX <= 270+300 && mouseY <= 390 + 170 && mouseY >= 230 + 170){
    currentSong = "Classical Music"
    if (!classical.isPlaying()) {
        classical.play()
        elevator.pause();
        trap_snd.pause();
        fortnite.pause()
        lofi.pause()
        pixel.pause()
    }

}

if (mouseX >= 110+500 && mouseX <= 270+500 && mouseY <= 390 && mouseY >= 230){
    currentSong = "Fortnite Music"
    if (!fortnite.isPlaying()) {
        fortnite.play()
        elevator.pause();
        trap_snd.pause();
        lofi.pause()
        classical.pause()
        pixel.pause()
    }

}

if (mouseX >= 110+500 && mouseX <= 270+500 && mouseY <= 390 + 170 && mouseY >= 230 + 170){
    currentSong = "8-bit Music"
    if (!pixel.isPlaying()) {
        pixel.play()
        elevator.pause();
        trap_snd.pause();
        fortnite.pause()
        lofi.pause()
        classical.pause()

    }

}

    }
  }
  
  
