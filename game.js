// copy the code and put it somewhere else to test it out on replit since when I add the ball loading screen it says script error
//make button instead of click for laoding screeen
function changeColor(){
let color = document.getElementById('colorInputColor').value;
document.body.style.backgroundColor = color;

}
var price1;
var paint;
var nextTracker = -1;
var numbered = 1500
var cardWidth = 200
var cardWidthOne = 100
var cardHeight = 200
var darkBtnDarkBoxShadow = true;
const Dark = document.getElementById("Dark")
const myBtn = document.getElementById("myBtn");
const secB = document.getElementById("secB");
const drawede = document.getElementById("drew");
const thirdB = document.getElementById("thirdB");
const buyB = document.getElementById("buyB");
const fourthB = document.getElementById("fourthB");
const exitButton = document.getElementById("exitButton");
const better = document.getElementById("better");
const menud = document.getElementById("menud");
const menu = document.getElementById("menu");
const bod = document.getElementById("bod")
Dark.addEventListener("click",function(){
    var element = document.body;
   element.classList.toggle("dark-mode");
   if(darkBtnDarkBoxShadow){
       document.getElementById("Dark").innerHTML = "Light Mode"
       document.getElementById("hone").style.color = "gold";
       bod.classList.add("difCursor")
        myBtn.classList.add("dark");
        Dark.classList.add("dark");
        secB.classList.add("dark");
        drawede.classList.add("dark");
        thirdB.classList.add("dark");
        fourthB.classList.add("dark");
       exitButton.classList.add("dark");
       better.classList.add("dark");
       menu.classList.add("dark");
       menud.classList.add("dark");
   }else{
       document.getElementById("hone").style.color = "black";
       //change to dark box shadow
         document.getElementById("Dark").innerHTML = "Dark Mode"
        myBtn.classList.remove("dark");
        Dark.classList.remove("dark");
        secB.classList.remove("dark");
        drawede.classList.remove("dark");
        thirdB.classList.remove("dark");
        fourthB.classList.remove("dark");
       exitButton.classList.remove("dark");
       better.classList.remove("dark");
       menu.classList.remove("dark");
       menud.classList.remove("dark");
          bod.classList.remove("difCursor")
   }
    darkBtnDarkBoxShadow = !darkBtnDarkBoxShadow;
})
myBtn.addEventListener("click", function () {
    removeAll();
    backGround = new Rectangle(600, 600); // sets a new background
    backGround.setPosition(0, 0); // sets new background
    backGround.setColor(Color.white); //sets the new background white
    add(backGround); //adds background
    var song = shuffle(introMusic); // shuffles the music
    mySong = new Audio(song[0]); //picks the song in the front
    introImg = new WebImage("https://codehs.com/uploads/e7aa4e53d6e023757a35999f7a4d59a9"); // intro image cards
    introImg.setSize(300, 300); //  sets the size of intro image cards
    introImg.setPosition((getWidth() - 300) / 2, (getHeight() - 300) / 2); //sets the position of intro image cards
    add(introImg); //adds intro image cards
    mySong.play(); // plays the random song
    mySong.loop = true; //loops the song
    myBtn.classList.add("disabled");
    secB.classList.remove("disabled");
    thirdB.classList.remove("disabled");
    fourthB.classList.remove("disabled");
});
secB.addEventListener("click", function () {
    remove(backGround); //removes background
    var cover = new Rectangle(600, 600);
    cover.setPosition(0, 0); // sets new background
    cover.setColor(Color.white);
    add(cover); // show this to mr matt to find out why final load and other appear when cover is gone
    mySong.pause(); //pauses the song
    mony = new Text( gamblingMoney, "12pt Arial");
    mony.setPosition(505, 41);
    mony.setColor(Color.blue);
    add(mony);
    var goldenCoins = new WebImage("https://codehs.com/uploads/f5b8ea65e1b12599c32eaed9d4b47ecc");
    goldenCoins.setSize(40, 40);
    goldenCoins.setPosition(460, 20);
    add(goldenCoins);
    decider++
    secB.classList.add("disabled");
    thirdB.classList.add("disabled");
    fourthB.classList.add("disabled");
    drawede.classList.remove("disabled");
    better.classList.remove("disabled");
    menud.classList.remove("disabled");

});
thirdB.addEventListener("click", function () {
  if(nextTracker==-1){
       mySong.pause();
    removeAll();
    remove(ball);
       document.getElementById("thirdB").innerHTML = "Next"
    exitButton.classList.remove("disabled")
      buyB.classList.remove("disabled")
    backk = new Rectangle(600, 600); // sets a new background
    backk.setPosition(0, 0); // sets new background
    backk.setColor(Color.white); //sets the new background white
    add(backk); //adds background
    goldPed = new WebImage("https://codehs.com/uploads/25defc673fdb4c388e85c6a280e8fed2");
    goldPed.setSize(200, 250);
    goldPed.setPosition((getWidth()-200)/2, getHeight()-242);
    add(goldPed);
    paint = new WebImage("https://codehs.com/uploads/471aec5d77c9b8dbfd7d2aeab204c67b");
paint.setSize(150,150);
paint.setPosition((getWidth()-150)/2, (getHeight()-225)/2);
add(paint);
    var coin = new WebImage("https://codehs.com/uploads/f56eb987f6922742fc312a32400f7eae");
coin.setSize(110,40);
coin.setPosition(168,10);
add(coin);
     price1 = new Text("$220000", "22pt Courier New");
price1.setPosition(240, 40);
price1.setColor(Color.black);
add(price1);
    secB.classList.add("disabled");
    fourthB.classList.add("disabled");
   nextTracker++
  }else if(nextTracker==0){
      remove(paint);
      remove(price1);
     
  }
   
})
buyB.addEventListener("click", function () {
  if(nextTracker==0){
var redX = new WebImage("https://codehs.com/uploads/8ac3ea08617909bec299913ae77fa172");
      redX.setSize(150, 150);
redX.setPosition((getWidth()-150)/2, (getHeight()-225)/2);
add(redX);
  }else if(nextTracker==1){

  }
   
})
exitButton.addEventListener("click", function () {
    exitButton.classList.add("disabled")
    secB.classList.remove("disabled");
    fourthB.classList.remove("disabled");
       document.getElementById("thirdB").innerHTML = "Shop";
    nextTracker = -1
    removeAll();
    backGround = new Rectangle(600, 600); // sets a new background
    backGround.setPosition(0, 0); // sets new background
    backGround.setColor(Color.white); //sets the new background white
    add(backGround); //adds background
    var song = shuffle(introMusic); // shuffles the music
    mySong = new Audio(song[0]); //picks the song in the front
    introImg = new WebImage("https://codehs.com/uploads/e7aa4e53d6e023757a35999f7a4d59a9"); // intro image cards
    introImg.setSize(300, 300); //  sets the size of intro image cards
    introImg.setPosition((getWidth() - 300) / 2, (getHeight() - 300) / 2); //sets the position of intro image cards
    add(introImg); //adds intro image cards
    mySong.play(); // plays the random song
    mySong.loop = true; //loops the song

})

drawede.addEventListener("click", function () {
    if (resetTracker == 2) {
        remove(copter);
        remove(copters);
        resetTracker = 0 //reset tracker
    } else {
        if (resetTracker == 0) {
            cardOne = myDeck.pop();
            if (cardOne.rank == 1) {
                var ACE = shuffle(arrACE);
                copter = new WebImage(ACE.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter);
            } else if (cardOne.rank == 2) {
                var card2 = shuffle(arrCard2)
                copter = new WebImage(card2.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter);
            } else if (cardOne.rank == 3) {
                var card3 = shuffle(arrCard3)
                copter = new WebImage(card3.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 4) {
                var card4 = shuffle(arrCard4)
                copter = new WebImage(card4.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight)
                add(copter)
            } else if (cardOne.rank == 5) { // 5 clubs needs replacing
                var card5 = shuffle(arrCard5)
                copter = new WebImage(card5.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 6) { // 6 of hearts needs replacing
                var card6 = shuffle(arrCard6)
                copter = new WebImage(card6.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 7) {
                var card7 = shuffle(arrCard7)
                copter = new WebImage(card7.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 8) {
                var card8 = shuffle(arrCard8)
                copter = new WebImage(card8.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 9) {
                var card9 = shuffle(arrCard9)
                copter = new WebImage(card9.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 10) {
                var card10 = shuffle(arrCard10)
                copter = new WebImage(card10.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 11) {
                var jack = shuffle(arrJack)
                copter = new WebImage(jack.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 12) {
                var queen = shuffle(arrQueen)
                copter = new WebImage(queen.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            } else if (cardOne.rank == 13) {
                var king = shuffle(arrKing)
                copter = new WebImage(king.shift());
                copter.setSize(cardWidth, 300);
                copter.setPosition((getWidth() / 4) - cardWidthOne, (getHeight() / 2) - cardHeight);
                add(copter)
            }
        } else if (resetTracker == 1) {
            cardTwo = myDeck.pop();
            if (cardTwo.rank == 1) {
                var ACE = shuffle(arrACE);
                copters = new WebImage(ACE.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters);
            } else if (cardTwo.rank == 2) {
                var card2 = shuffle(arrCard2)
                copters = new WebImage(card2.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters);
            } else if (cardTwo.rank == 3) {
                var card3 = shuffle(arrCard3)
                copters = new WebImage(card3.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 4) {
                var card4 = shuffle(arrCard4)
                copters = new WebImage(card4.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 5) { // 5 clubs needs replacing
                var card5 = shuffle(arrCard5)
                copters = new WebImage(card5.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 6) { // 6 of hearts needs replacing
                var card6 = shuffle(arrCard6)
                copters = new WebImage(card6.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 7) {
                var card7 = shuffle(arrCard7)
                copters = new WebImage(card7.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 8) {
                var card8 = shuffle(arrCard8)
                copters = new WebImage(card8.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 9) {
                var card9 = shuffle(arrCard9)
                copters = new WebImage(card9.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 10) {
                var card10 = shuffle(arrCard10)
                copters = new WebImage(card10.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 11) {
                var jack = shuffle(arrJack)
                copters = new WebImage(jack.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 12) {
                var queen = shuffle(arrQueen)
                copters = new WebImage(queen.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            } else if (cardTwo.rank == 13) {
                var king = shuffle(arrKing)
                copters = new WebImage(king.shift());
                copters.setSize(cardWidth, 300);
                copters.setPosition((getWidth() / 4) + cardWidth, (getHeight() / 2) - cardHeight);
                add(copters)
            }
            setTimeout(lastQuestion, 1500);
            //draw card thing to make questions
        }
        resetTracker++
        answer = pull(cardOne.rank, cardTwo.rank);
    }
})
better.addEventListener("click", function () {
    //make a maximum amount you can bet
   
    var bet = prompt("How much would you like to bet?");
    betT = parseInt(bet);
    console.log(betT)
    if (bet > gamblingMoney) {
        noMoney = new Text("There is not enough money to bet.");
        noMoney.setPosition(90, 80)
        noMoney.setColor(Color.red);
        add(noMoney); //no money text
        setTimeout(remve,500 ) //timer to remove text
    } else if(bet>5000){
            noMoney = new Text("The limit is 5000");
        noMoney.setPosition(210, 80)
        noMoney.setColor(Color.red);
        add(noMoney);
         setTimeout(remve,500 )
    }else{
            
        remve();
        betTracker++
        console.log(betTracker)
    }

})

var backk
var myDeck; //the shuffled deck
var introImg; // intro Image cards
var mySong; // the intro songs
var backGround; //
var backG; //the black rectangle for the loading screen
var firstCard; // text for numbers
var secondCard; //text for number
var resetTracker = 0; // tracks when to reset the draws
var betTracker = 0; // tracks how many times the bet tracker has been pressed.
var gamblingMoney; 
var noMoney;
var copter;
var copters;
var question;
var answer;
var money;
var betT;
var ball;
var delay = 25;
var dy = 0;
var grav = 3;
var color;
var textLoading;
var delayArr = [3000, 4000, 5000, 6000];
var delayShuff;
var decider = 0;
var menuDecider = 0;
var answerHolder = [];
var previousAnswer;
var arrACE = ["https://codehs.com/uploads/031ea9a0257a2ebf09f9db3d7e218335", "https://codehs.com/uploads/dc79adb87f9db80503a1a7136d8b2ccb", "https://codehs.com/uploads/e5788359ea8842d10d521ac9e71478e6", "https://codehs.com/uploads/78dd419ac201d7400d0101142564d4b0"]
var arrCard2 = ["https://codehs.com/uploads/e97d11582f7ebdf0ab62692544cde3b5", "https://codehs.com/uploads/c0df033b563b901d0975b706ed198f40", "https://codehs.com/uploads/dd9a0cbfa19ba98b9028cf04b0ef57ad", "https://codehs.com/uploads/2141fdf27acda412f7bd29096aa1b45e"]
var arrCard3 = ["https://codehs.com/uploads/d3b579b935c83dbe9581153b29dab996", "https://codehs.com/uploads/d540a783a83b3c2d03f53fd1cda07b55", "https://codehs.com/uploads/ea27531cebfb50ef9e8c5780f2f8f3e0", "https://codehs.com/uploads/25dcefbce5881e5331fb7a4f3a0a1386"]
var arrCard4 = ["https://codehs.com/uploads/9e76d0b66ba9057b9daef878d309707e", "https://codehs.com/uploads/2c80342c5c26591d15692059b89028b3", "https://codehs.com/uploads/633910cbd57b9f79fe32b73208273cb0", "https://codehs.com/uploads/f3e80f79a4b7a9b7f49991f3bf9dccd1"]
var arrCard5 = ["https://codehs.com/uploads/6ac275ec06effdfdd0c0f3cb5bc55b9c", "https://codehs.com/uploads/3fdd589812f00918be551300ce4e574a", "https://codehs.com/uploads/a5a3018d4ebabcd1f45297986d306e34", "https://codehs.com/uploads/01dd5532379cbcb4b0a45acb1f2e68a2"]
var arrCard6 = ["https://codehs.com/uploads/2fc3682195ee78f57cdaed3e2bd6f8c2", "https://codehs.com/uploads/1be4ec70474de9d528b314acb43f3d0e", "https://codehs.com/uploads/3f78e45c2b5d48506bd87e734867413c", "https://codehs.com/uploads/3c75487f20c28213b8888392e3fa0cd5"]
var arrCard7 = ["https://codehs.com/uploads/9b0b6849270ddb6284666b2b136bc50c", "https://codehs.com/uploads/8e6069e30cb73284b0d0de46cac13f3f", "https://codehs.com/uploads/064570ae6182d94a6fe34911dff1ff0a", "https://codehs.com/uploads/1a2747308cb3de5bbfc3c61160e4f1f0"]
var arrCard8 = ["https://codehs.com/uploads/7248a87615b9f1dc8f52ffd7dec5157e", "https://codehs.com/uploads/295155804543c1cec1e55c157d3eaaac", "https://codehs.com/uploads/21fd18415a521ab24bad21eea6e8af30", "https://codehs.com/uploads/a2f1227c99a54c63585710ad6d32a43f"]
var arrCard9 = ["https://codehs.com/uploads/7e4645728115e6c7ad56d865e2ce762b", "https://codehs.com/uploads/902429814749eaa35a8925e3fb670c1a", "https://codehs.com/uploads/764048b62314dd5d684ee5cce59f3340", "https://codehs.com/uploads/fc81b186ff1b00ec5e619e0a5e7fbabf"]
var arrCard10 = ["https://codehs.com/uploads/03d34d5e2857a8455235aa2a44950daa", , "https://codehs.com/uploads/0f0d6f287d7c4e7783796baad5b79a14", "https://codehs.com/uploads/35726e9a86607b073c5fc909732e9671", "https://codehs.com/uploads/a10e8787908931ef5957b3d445d04ae9"]
var arrJack = ["https://codehs.com/uploads/484a05652f4282b7b654512e6986433e", "https://codehs.com/uploads/681f5b6ee09b5dac61910f2589932012", "https://codehs.com/uploads/a2b780a3bbc5673f166e0de4fc1ca390", "https://codehs.com/uploads/53377356c52dcdb0a6a576470eec76af"]
var arrQueen = ["https://codehs.com/uploads/d6d69cf08436b2ab8310251c4355f714", "https://codehs.com/uploads/1140a5ab7589c43d063e065959a59fc4", "https://codehs.com/uploads/89a8fd11107e3f8384b7a57eb721c617", "https://codehs.com/uploads/83093bd48aace11355be9799ab08ffb7"]
var arrKing = ["https://codehs.com/uploads/cc021f8c0e0ea6242fbde901df049746", "https://codehs.com/uploads/cc021f8c0e0ea6242fbde901df049746", "https://codehs.com/uploads/931f9fc4675b196d76b90689c5162c4f", "https://codehs.com/uploads/2fedb5ec036601783f3d48601322d7ba"]
var introMusic = ["https://codehs.com/uploads/fe3cb2aaf3ae93819193c055029ad946", "https://codehs.com/uploads/d8f4061be1c4a515dafb289a8d84dd6b", "https://codehs.com/uploads/ece8e9993ce931140e98099fc6698bf6", "https://codehs.com/uploads/c1f43207fcd0062ba22cc2bd46ce1a56", "https://codehs.com/uploads/0c2d5dc0981ee8fa9f70a668c3c50c94", "https://codehs.com/uploads/f677b20b048e330a6a2930272084e804"]; // the music selection
var imageForCards = ["https://codehs.com/uploads/5454f921aad9cb3841653a06b0fbe2e8", "https://codehs.com/uploads/c29e6c201f138d2b2e7ee5949b728742", "https://codehs.com/uploads/ca88d7199926eb4af28a8d2e2ff7e8d2", "https://codehs.com/uploads/bf20b3e2a2683ecbad8c9215ce7343e2"] //the symbols on the cards
var cardOne, cardTwo; // the cards
class Card {
    constructor(rank, name, suit) {
        this.rank = rank;
        this.name = name;
        this.suit = suit;
    }
}
//this makes the 52 cards in the deck by running a for loop on the suits length and a for loop iside on the ranks pushing into the cards arrray.
function deck() {
    var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var cards = [];
    for (var s = 0; s < suits.length; s++) {
        for (var r = 0; r < ranks.length; r++) {
            cards.push(new Card(r + 1, ranks[r], suits[s]));
        }
    }
    return cards;
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function start() {
     gamblingMoney= getCookieCoins();
    //add in loading screen if not loading please restart
    myDeck = shuffle(deck()); // shuffles deck
    cardOne = myDeck.pop(); //defines what cardOne is
    cardTwo = myDeck.pop(); //defines what cardTwo is
    backG = new Rectangle(600, 600); //the black rectangle for the loading screen
    backG.setPosition(0, 0); //sets position of background
    backG.setColor(Color.black); //sets the color of backG
    add(backG); //adds backG
    ball = new Circle(30);
    ball.setPosition(getWidth() / 2, getHeight() / 5);
    ball.setColor(Color.green)
    add(ball);
    setTimer(fall, delay);
    textLoading = new Text("Loading...", "30pt Arial")
    textLoading.setPosition(getWidth() / 4, 50);
    textLoading.setColor(Color.green);
    add(textLoading);
    delayShuff = shuffle(delayArr);
    setTimeout(die, delayShuff[0]);
    //change this to change  100 times  using a for loop and the loading form codeHs
    mouseClickMethod(musicLoad) // when clicked musicLoad activates
}
/* found what made the music not load in demo, the way it currently works is once you click anything in the game the music begins. Which is frustating, but something that can be 
fixed.

*/
function musicLoad(e) {
    var xPoint = e.x;
    var yPoint = e.y;
    var shup = getElementAt(xPoint, yPoint);
    if (shup == backG || shup == ball) {
        remove(backG);
        remove(ball);
        backGround = new Rectangle(600, 600); // sets a new background
        backGround.setPosition(0, 0); // sets new background
        backGround.setColor(Color.white); //sets the new background white
        add(backGround); //adds background
        var song = shuffle(introMusic); // shuffles the music
        mySong = new Audio(song[0]); //picks the song in the front
        introImg = new WebImage("https://codehs.com/uploads/e7aa4e53d6e023757a35999f7a4d59a9"); // intro image cards
        introImg.setSize(300, 300); //  sets the size of intro image cards
        introImg.setPosition((getWidth() - 300) / 2, (getHeight() - 300) / 2); //sets the position of intro image cards
        add(introImg); //adds intro image cards
        mySong.play(); // plays the random song
        mySong.loop = true; //loops the song
    } else {
        mouseClickMethod(draw); // when clicked draw activates
    }
}

function draw(e) {
    var xPoint = e.x; //gives the x coordinate
    var yPoint = e.y; //gives the y coordinate
    var shape = getElementAt(xPoint, yPoint);
    if (shape == backGround || shape == introImg) {
        remove(backGround); //removes background
        var cover = new Rectangle(600, 600);
        cover.setPosition(0, 0); // sets new background
        cover.setColor(Color.white);
        add(cover); // show this to mr matt to find out why final load and other appear when cover is gone
        mySong.pause(); //pauses the song
        var controlsTxt = new Text("Press C for controls", "12pt Arial");
        controlsTxt.setPosition(50, 41);
        controlsTxt.setColor(Color.blue);
        add(controlsTxt)
        mony = new Text(gamblingMoney, "12pt Arial");
        mony.setPosition(505, 41);
        mony.setColor(Color.blue);
        add(mony);
        var goldenCoins = new WebImage("https://codehs.com/uploads/f5b8ea65e1b12599c32eaed9d4b47ecc");
        goldenCoins.setSize(40, 40);
        goldenCoins.setPosition(460, 20);
        add(goldenCoins);
        decider++
    }
}

function lastQuestion() {
    var promptText = "What is the answer to " + cardOne.rank + " x " + cardTwo.rank + "? ";
    var questionAsked = prompt(promptText);
    console.log(promptText);
    question = parseInt(questionAsked);
    console.log(answer);
    var gambling = gamblingMoney - betT
    if (question == answer) {
        console.log("correct");
    } else {
        console.log("wrong")
    }
    if (betTracker == 1) {
        if (question == answer) {
            var doubled = double(betT);
            gamblingMoney = gambling + doubled
            setCookieCoins(gamblingMoney);
            remove(mony);
            remove(money);
            textWork(gamblingMoney);
            console.log(gamblingMoney);
        } else {
            var divided = divide(betT, 2);
            gamblingMoney = gambling + divided;
            setCookieCoins(gamblingMoney);
            remove(mony)
            remove(money);
            textWork(gamblingMoney);
            console.log(gamblingMoney);
        }
    }
    if (betTracker = 1) {
        betTracker = 0;
        console.log(betTracker);
    }
}

function pull(x, y) {
    var check = x * y; // checks the answer 
    return check;
}

function divide(x, y) {
    var div = x / y
    return div;
}

function remve() {
    remove(noMoney);
}

function double(x) {
    var doubled = x * 2;
    return doubled;
}

function textWork(x) {
    money = new Text(x, "12pt Arial");
    money.setPosition(505, 41);
    money.setColor(Color.blue);
    add(money);
}

function fall() {
    color = Randomizer.nextColor();
    bounceOfBalls();
    ball.move(0, dy);
    dy += grav;
}

function bounceOfBalls() {
    if (ball.getY() + ball.getRadius() >= getHeight()) {
        dy = -dy + grav;
        ball.setColor(color);
    }
}

function die() {
    remove(textLoading)
    stopTimer(fall)
    ball.setColor(Color.red);
}