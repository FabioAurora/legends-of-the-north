"use strict";

// storing DOM elements
const userName = document.querySelector("#username");
const createName = document.querySelector("#btn-create");
const btnRandom = document.querySelector(".btn-random");
const championName = document.querySelector("#champion-name");
const championDialogue = document.querySelector("#champion-dialogue");
const opponentDialogue = document.querySelector("#opponent-dialogue");
const header = document.querySelector(".header");

const showIcons = document.querySelectorAll("figure");
const battleBTN = document.querySelector("#start-battle");
const battleCTN = document.querySelector(".battle-ctn");

const selectChampionAvatar = document.querySelectorAll("#champion-avatar");
const heroIMG = document.querySelector("#hero-img");

const selectOpponent = document.querySelectorAll("#barbarian-avatar");
const barbarianIMG = document.querySelector("#barbarian-img");

const barbarianName = document.querySelector("#barbarian-name");
const OpponentAction = document.querySelector("#opponent-action");
const championAction = document.querySelector("#champion-action");

const removeName = document.querySelector("#remove-name");

const playGame = document.querySelector("#play-game");
const startUI = document.querySelector(".start-ui");
const main = document.querySelector(".main");
const ambience = new Audio("assets/sounds/ambience.mp3");

/* *********************************************************************************** */
// listener for the create name button
createName.addEventListener("click", () => {
  championName.textContent = userName.value;
});

/* ************************************************************************************ */
// function to select a random name
function randomName() {
  const names = [
    "Gawyne the Keeper",
    "Rafe the Friend",
    "Umphrey the Traitor",
    "Rowley the Magnificent",
    "Thomas the Invincible",
    "Topaz the Bodyguard",
    "Reinfrid the Dragonheart",
    "Gilliame the Little",
    "Hanekin the Young",
    "Bat the Stubborn",
    "Aimery the Hero",
    "Harduinus the Tracker",
    "Geroldin the Messenger",
    "Ernoulet the Clever",
    "Bartrem the Shy",
    "Hildebrant the Talented",
    "Geofridus the Twisted",
    "Heudebrand the Paladin",
    "Ivone the Champ",
    "Nichol the Honorable",
    "Cristofre of the Dawn",
    "Gerbald the Selfish",
    "Aymon the Gorgeous",
    "Tancred the Dragon",
    "Peterkin the Clever",
    "Harry the Daring",
    "Thomelin the Gorgeous",
    "Hemart the Wild",
    "Arthur the Tough",
    "Rhovaom The Barbaric",
    "Dhavraan The Noxious",
    "Rorlak Spine Mutilator",
    "Rodrigo Díaz De Vivar",
    "Godfrey Of Bouillon",
    "William Marshal",
    "William Wallace",
    "Robert The Bruce",
    "Richard The LionHeart",
  ];

  const selectIndex = names[Math.floor(Math.random() * names.length)];
  return (championName.textContent = selectIndex);
}

btnRandom.addEventListener("click", randomName);

/* ************************************************************************************ */
const selection = document.querySelectorAll("select");
// removing the battle icon and header
function displayToggle() {
  showIcons.forEach((icon) => {
    icon.classList.remove("selection-icon-display");
    icon.classList.add("selection-icon");
  });

  battleCTN.setAttribute("style", "display: none");
  header.setAttribute("style", "visibility: hidden");
  selection.forEach((select) => (select.disabled = true));
}

/* ************************************************************************************ */

//king name validation and starting the battle
function startBattle() {
  if (championName.textContent === "Knight") {
    championAction.textContent = `\u2014 "Kindly ask's you."`;
    championDialogue.innerHTML = `Please give me a epic and glorious  name, so the world knows my story after this battle, against the <strong>${opponentClass.textContent}</strong>, <strong>${barbarianName.textContent}</strong>.`;
    OpponentAction.textContent = `\u2014 "Loudly asked"`;
    opponentDialogue.textContent = `What's your name Knight?, I need to know the name of the one I'm about to defeat.`;
  } else if (championName.textContent === "") {
    championDialogue.textContent =
      "I'm sure my parents gave me a name..., but I have Amnesia, can you please help me by creating one or just press Random";
    opponentDialogue.textContent = " HA HA HA HA, this will be fun!!!";
  } else {
    displayToggle();
  }
  ambience.pause();
  battleSound();
}

battleBTN.addEventListener("click", startBattle);

/* ************************************************************************************ */

// Select Warrior
const knightClass = document.querySelector("#knight-class");
selectChampionAvatar.forEach((king) =>
  king.addEventListener("change", choseAvatar)
);

function choseAvatar() {
  switch (this.value) {
    case "grand officer":
      heroIMG.setAttribute("src", "assets/images/king.jpg");
      knightClass.textContent = `Grand Officer`;
      championAction.textContent = `\u2014 "Says with low voice"`;
      championDialogue.textContent = `Most have been forgotten. Most deserve to be forgotten. The heroes will always be remembered. The best. The best and the worst. And a few who were a bit of both.`;
      break;
    case "holy knight 1":
      heroIMG.setAttribute("src", "assets/images/king1.jpg");
      knightClass.textContent = `Holy Knight`;
      championAction.textContent = `\u2014 "Prays on he's knees."`;
      championDialogue.textContent = `War seems like a fine adventure, the greatest most of them will ever know. Then they get a taste of battle.`;
      break;
    case "holy knight 2":
      heroIMG.setAttribute("src", "assets/images/king3.jpg");
      knightClass.textContent = `Holy Knight`;
      championAction.textContent = `\u2014 "Prays on he's knees."`;
      championDialogue.textContent = `I will fight until I die, but I will protect you`;
      break;
    case "templar":
      heroIMG.setAttribute("src", "assets/images/king4.jpg");
      knightClass.textContent = `Templar`;
      championAction.textContent = `\u2014 "Approaches opponent"`;
      championDialogue.textContent = `In times of war, as in life, surround yourself with people of value, virtue and high morals, because it's always better to lose, perish and vanish in glory than to live in shame.`;
      break;
    case "king5":
      heroIMG.setAttribute("src", "assets/images/king5.jpg");
      knightClass.textContent = `Jerusalem Knight`;
      break;
    case "king6":
      heroIMG.setAttribute("src", "assets/images/king6.png");
      knightClass.textContent = `White Knight`;
      championAction.textContent = `\u2014 "Chants"`;
      championDialogue.textContent = `Hail Holy Queen of mercy. Our life, our consolidation and our hope, hail!. To thee we cry, the banished sons of Eve. To thee we sigh groaning and weeping in this valley of tears.`;
      break;
    case "king7":
      heroIMG.setAttribute("src", "assets/images/king7.jpg");
      knightClass.textContent = `Teutonic Knight`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king8":
      heroIMG.setAttribute("src", "assets/images/king8.jpg");
      knightClass.textContent = `Companion`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king9":
      heroIMG.setAttribute("src", "assets/images/king9.jpg");
      knightClass.textContent = `Paladin`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king10":
      heroIMG.setAttribute("src", "assets/images/king10.jpg");
      knightClass.textContent = `Paladin Guardian`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king11":
      heroIMG.setAttribute("src", "assets/images/king11.jpg");
      knightClass.textContent = `Elven Knight`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king12":
      heroIMG.setAttribute("src", "assets/images/king12.jpg");
      knightClass.textContent = `Dragon Hunter`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king13":
      heroIMG.setAttribute("src", "assets/images/king13.jpg");
      knightClass.textContent = `Dragon Hunter`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king14":
      heroIMG.setAttribute("src", "assets/images/king14.jpg");
      knightClass.textContent = `Defender`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king15":
      heroIMG.setAttribute("src", "assets/images/king15.jpg");
      knightClass.textContent = `Dragon Hunter`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king16":
      heroIMG.setAttribute("src", "assets/images/king16.jpg");
      knightClass.textContent = `Grand Commander`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
    case "king17":
      heroIMG.setAttribute("src", "assets/images/king17.jpg");
      knightClass.textContent = `Northen Knight`;
      championAction.textContent = `\u2014 "To be added..."`;
      championDialogue.textContent = `To be added....`;
      break;
  }
}

/* ************************************************************************************ */
// Select Opponent
const opponentClass = document.querySelector("#opponent-class");
// Select Opponent:

selectOpponent.forEach((barbarian) =>
  barbarian.addEventListener("change", choseBarbarian)
);

function choseBarbarian() {
  switch (this.value) {
    case "barbarian":
      barbarianIMG.setAttribute("src", "assets/images/barbarian.png");
      barbarianName.textContent = `Thralr`;
      opponentClass.textContent = `Barbarian Legend`;
      OpponentAction.textContent = `\u2014 "Says excited"`;
      opponentDialogue.textContent = `HA HA!, every warrior wants a worthy opponent. There is no redress in fighting the pathetic.`;
      break;
    case "barbarian1":
      barbarianIMG.setAttribute("src", "assets/images/barbarian1.jpg");
      barbarianName.textContent = `Harald Bloodaxe`;
      opponentClass.textContent = `Viking  úlfheðnar`;
      OpponentAction.textContent = `\u2014 "Battlecry"`;
      opponentDialogue.textContent = `Better it is to die in battle with honor, than to live in shame because you did not defend your people.`;
      break;
    case "barbarian2":
      barbarianIMG.setAttribute("src", "assets/images/barbarian2.jpg");
      barbarianName.textContent = `Gunnstein`;
      opponentClass.textContent = `Viking Berserker`;
      OpponentAction.textContent = `\u2014 "Battlecry"`;
      opponentDialogue.textContent = `Run from me… and I will tear apart the mountains to find you! I will follow you to the end of the world!`;
      break;
    case "barbarian3":
      barbarianIMG.setAttribute("src", "assets/images/barbarian3.jpg");
      barbarianName.textContent = `Arnbjörg`;
      opponentClass.textContent = `Barbarian King`;
      OpponentAction.textContent = `\u2014 "Angry voice"`;
      opponentDialogue.textContent = `You speak of justice? or cowardice?, I will show you the justice of the grave, and the true meaning of fear.`;
      break;
    case "barbarian4":
      barbarianIMG.setAttribute("src", "assets/images/barbarian4.jpg");
      barbarianName.textContent = `Bóthildr`;
      opponentClass.textContent = `Barbarian Legend`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case "barbarian5":
      barbarianIMG.setAttribute("src", "assets/images/barbarian5.jpg");
      barbarianName.textContent = "Peghed";
      opponentClass.textContent = `Shaman`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case "barbarian6":
      barbarianIMG.setAttribute("src", "assets/images/barbarian6.jpg");
      barbarianName.textContent = `Sowar`;
      opponentClass.textContent = `Mage`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case "barbarian7":
      barbarianIMG.setAttribute("src", "assets/images/barbarian7.jpg");
      barbarianName.textContent = `Eyvindur`;
      opponentClass.textContent = `Dark Knight`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case "barbarian8":
      barbarianIMG.setAttribute("src", "assets/images/barbarian8.jpg");
      barbarianName.textContent = `Ùisdean the Devourer`;
      opponentClass.textContent = `Dark Lord`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
  }
}

/* ************************************************************************************ */
// LOGIC ON AI SIDE TO PLAY THE GAME;

// Accessing DOM for the AI life-bar to add and remove it:
const addComputerHearts = document.querySelector("#computer-life-bar");
const removeHearts = document.querySelector(".hearts:last-child");

// storing life potion and golden armor limit for AI game:
let computerLifePotion = 2;
let computerGoldenArmor = 1;

// Array with all the skills to be used by AI:
let SkillsArray = [
  "shield",
  "dagger",
  "blade-spin",
  "heavy-strike",
  "golden-armor",
  "shuriken",
  "health-potion",
  "rapid-severance",
];

// Selecting a random skill for AI:
function computerPlay() {
  const randomSkill =
    SkillsArray[Math.floor(Math.random() * SkillsArray.length)];
  let computerLifePotionIndex = "health-potion"; // storing index of life potion to remove it when condition is met.
  let computerGoldenArmorIndex = "golden-armor"; // storing index of divine protection to remove it when condition is met.

  switch (randomSkill) {
    case "health-potion":
      if (computerLifePotion !== 0) {
        computerLifePotion--;
        const newHeartContainer = document.createElement("div");
        newHeartContainer.classList.add("hearts");
        const heartImg = document.createElement("img");
        heartImg.setAttribute("src", "assets/images/heart.png");
        newHeartContainer.appendChild(heartImg);
        addComputerHearts.appendChild(newHeartContainer);
      }

      if (computerLifePotion === 0) {
        SkillsArray = SkillsArray.filter(
          (item) => item !== computerLifePotionIndex
        ); // removing potion after 2 uses
      }
      break;
    case "golden-armor":
      if (computerGoldenArmor !== 0) {
        computerGoldenArmor--;
      }
      if (computerGoldenArmor === 0) {
        SkillsArray = SkillsArray.filter(
          (item) => item !== computerGoldenArmorIndex
        ); // removing Divine protection after 1 use
      }
      break;
  }
  return randomSkill;
}

// Variables to store the results:
let playerPoints = 0;
let computerPoints = 0;

const useSkills = document.querySelectorAll(".skill-container[id]");

const roundMessage = document.querySelector(".round-message");

// PLAYING THE ROUND AND DETERMINE WHO WINS THE ROUND:
function playRound(playerSelection, computerSelection) {
  // storing the messages for the rounds:
  // shield round messages:
  const shieldWon = `You blocked ${barbarianName.textContent}'s Attack and damaged him with your shield spikes.`;
  const shieldLost = `${barbarianName.textContent} was quicker this time and damaged you with ${computerSelection}`;
  const shieldBroken = `Your shield was broken by ${computerSelection} skill, can't use it anymore.`;
  const displayNoDamage = `You used ${playerSelection} and ${barbarianName.textContent} used ${computerSelection}, no damaged was taken.`;
  // champion using shield messages:
  const championShieldWon = `Surprized with my shield?, want to quit now before you bleed to death, "${barbarianName.textContent.toUpperCase()}!!!".`;
  const championShieldLost = `"Moan's in pain", need to be careful with your flank attacks, you moved fast on that one`;
  const championShieldBreaks = `"Scream's in pain with deep cut on chest", AHHH, so thats the true power of a ${opponentClass.textContent}?, I need to be more careful on my nest moves, "severe bleeding".`;
  const bothChampionsNoDamage = `Are you just going to stand there looking at me?`;
  const playerVSgoldenArmor = `"Thinking: what's that pressure coming from him", What ever this trick is, I'm sure you cant use it for long.`;

  // champion using dagger messages:
  const daggerWon = `Your speed with daggers made you counter ${barbarianName.textContent} ${computerSelection} skill and damaged him.`;
  const daggerLost = `${barbarianName.textContent} stayed focus and could read your moves, your attack was countered and you are wounded.`
  const championDaggerWon = `You will barely see me when Im holding this dagger, I already stabbed you, Noticed? `;

  const computerUseGoldenArmor = `"With a red aura around him says:", ${championName.textContent}..., your attacks will do nothing this round. HA HA HA!!!`;
  const computerUsePotion = `"Slurps from potion, Aaah", This Shaman's elixir can really restore Life.`;

  let computerShieldIndex = "shield"; // storing index of shield to remove it when it is broken by heavy-strike;

  

  switch (playerSelection) {
    case "shield":
      if (
        computerSelection === "dagger" ||
        computerSelection === "blade-spin"
      ) {
        computerLoseRound();
        displayRoundMessage(shieldWon);
        displayChampionDialogue(championShieldWon);
        OpponentAction.textContent = `\u2014 "used ${computerSelection} "`;
        opponentDialogue.textContent = `You think you are so tough, because of that little cut you made?, I WILL DESTROY THAT SHIELD OF YOUR'S.`;
        championAction.textContent = `\u2014 "Blocked with ${playerSelection}"`;
        useShieldBlock();

      }else if(computerSelection === "shuriken") {

        roundMessage.textContent = `You blocked ${barbarianName.textContent}'s Attack and reflected hes ${computerSelection} back to him.`
        OpponentAction.textContent = `\u2014 "used ${computerSelection} "`;
        opponentDialogue.textContent = `You think you are so tough, because of that little cut you made?, I WILL DESTROY THAT SHIELD OF YOUR'S.`;
        championAction.textContent = `\u2014 "Blocked with ${playerSelection}"`;
        useShieldBlock();
        displayChampionDialogue(championShieldWon);
      }else if (computerSelection === "heavy-strike") {

        brokenShield();
        displayRoundMessage(shieldBroken);
        displayChampionDialogue(championShieldBreaks);
        OpponentAction.textContent = `\u2014 "used ${computerSelection} "`;
        opponentDialogue.textContent = `My true power?, HA HA HA, this is not even half of it, I can see the fear in your eyes. And you said you are a ${knightClass.textContent}, pathetic!!! `;
        championAction.textContent = `\u2014 " Tried to Block with ${playerSelection}"`;

      }else if (computerSelection === "golden-armor") {

        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
        displayComputerDialogue(computerUseGoldenArmor);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(playerVSgoldenArmor);
        useShieldBlock();

      }else if (computerSelection === "health-potion") {
        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        displayComputerDialogue(computerUsePotion);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(bothChampionsNoDamage);
        useShieldBlock();

      }else if (playerSelection === computerSelection) {

        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `"looking at ${championName.textContent}, trying to anticipate the next move."`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(bothChampionsNoDamage);
        useShieldBlock();

      }else {

        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `You will never block this special skill, I'm a ${opponentClass.textContent} after all. "spits on the floor".`;
        displayRoundMessage(shieldLost);
        displayChampionDialogue(championShieldLost);
        playerLoseRound();
        playerIsWounded();
      }
      break;

    case "dagger":
      if (
        computerSelection === "blade-spin" ||
        computerSelection === "heavy-strike"
      ) {
        useDagger();
        displayRoundMessage(daggerWon);
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Quietly Moan's in pain, but stays silent and focused"`;
        displayChampionDialogue(championDaggerWon);
        computerLoseRound();

      }else if(playerSelection === computerSelection) 
      {
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `"looking at ${championName.textContent}, trying to anticipate the next move."`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(bothChampionsNoDamage);
        useDagger();

      }else if (computerSelection === "golden-armor") {

        displayRoundMessage(displayNoDamage);
        useDagger();
        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
        displayComputerDialogue(computerUseGoldenArmor);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(playerVSgoldenArmor);

      }else if(computerSelection === "health-potion") {

        useDagger();
        roundMessage.textContent = `You moved silently and attacked ${barbarianName.textContent} while he was drinking a potion.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayComputerDialogue(computerUsePotion);
        displayChampionDialogue(championDaggerWon);
        computerLoseRound();

      }else 
      {
        roundMessage.textContent = `${barbarianName.textContent} saw an opening on your blade spin and damaged you with he's ${computerSelection}`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `It was hilarious for you to think that your dagger could stop my ${computerSelection} attack, who's bleeding now?`;
        championDialogue.textContent =`"bleeding from left arm" How could you stop that? I was sure I was about to stab you...`;
        playerLoseRound();
        playerIsWounded();

      }
      
      break;

    case "blade-spin":
      if (
        computerSelection === "shuriken" ||
        computerSelection === "heavy-strike"
      ) {

        roundMessage = `Your blade spin reflected ${barbarianName.textContent} attack and damaged him`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `You sliced me good, you are a strong fighter, but only one can win this battle, "AND ITS ME!!!"`;
        championDialogue.textContent = `${playerSelection} is one of the ${knightClass.textContent} basic skills, but I create it.`;
        computerLoseRound();
        useBladeSpin();

      }else if(playerSelection === computerSelection) {
        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `"looking at ${championName.textContent}, trying to anticipate the next move."`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(bothChampionsNoDamage);
        useBladeSpin()

      }else if (computerSelection === "golden-armor") {

        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
        displayComputerDialogue(computerUseGoldenArmor);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(playerVSgoldenArmor);
        useBladeSpin();

      }else if(computerSelection === "health-potion") {

        useBladeSpin();
        roundMessage.textContent = `You sliced several times ${barbarianName.textContent} while he was drinking a potion.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayComputerDialogue(computerUsePotion);
        championDialogue.textContent = `${playerSelection} is one of the ${knightClass.textContent} basic skills, but I create it.`;
        computerLoseRound();

      }else {
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"With both arms pointing up screams" IS THIS ALL YOU GOT? AHHHHHHH`;
        championDialogue.textContent = `"Moans in pain". Never thought you could beat my ${playerSelection} with that skill, guess you are a worthy opponent after all`;
        playerLoseRound();
        playerIsWounded();
      }
      break;

    case "heavy-strike":
      if (computerSelection === "shield") {

        computerLoseRound();
        SkillsArray = SkillsArray.filter(
          (item) => item !== computerShieldIndex
        );
        roundMessage = `You used all your force in this attack and broke ${barbarianName.textContent}'s shield and cut him deeply in the chest.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Screams in pain" ${championName.textContent.toUpperCase()}, I cant use my shield anymore, I will never quit a battle I will focus all my rage in full attack, "Battlecry"`;
        championDialogue.textContent = `AHHHHHH your shield will not block this..., Deep wound, want to quit before you bleed to death?`;
        computerLoseRound();
        useHeavyStrike();

      }else if(playerSelection === computerSelection) {

        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `"looking at ${championName.textContent}, trying to anticipate the next move."`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(bothChampionsNoDamage);
        useHeavyStrike();

      }else if (computerSelection === "health-potion") {

        roundMessage.textContent = `You sliced ${barbarianName.textContent} left arm while he was drinking a potion.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Slurps from potion, Aaah", This Shaman's elixir... AHHHHHH my arm, you cut my arm, you will DIIEEEE!!!!`;
        championDialogue.textContent = `This attack might be slow, but can cut some limbs if you are distracted, how can a ${opponentClass.textContent} be distracted?`;
        computerLoseRound();
        useHeavyStrike();

      } else if (computerSelection === "golden-armor") {

        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
        displayComputerDialogue(computerUseGoldenArmor);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(playerVSgoldenArmor);
        useHeavyStrike();

      } else {
        roundMessage.textContent = `Your Heavy Strike is strong but slow, ${barbarianName.textContent} counter your attack with ${computerSelection} skill`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `Using a power attack against my ${computerSelection} attack speed will never work.`;
        championDialogue.textContent = `You are a worthy opponent after all, but there will only be one Legend of the North, and it's not you..., " spits blood".`;
        playerIsWounded();
        playerLoseRound();

      }
      break;
    case "golden-armor":
        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        opponentDialogue.textContent = `What kind of shiny armor is that?, my attacks can't even scratch you.`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        championDialogue.textContent = `This is the Golden Armor of divine protection, you can't damage me while I'm wearing this.`;
        hideGoldenArmor();
        useGoldenArmor();
        if(playerSelection === computerSelection) {
          OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
          displayRoundMessage(displayNoDamage);
          opponentDialogue.textContent = `"looking at ${championName.textContent}, trying to anticipate the next move."`;
          championAction.textContent = `\u2014 "Used ${playerSelection}"`;
          championDialogue.textContent = `This is the Golden Armor of divine protection, you can't damage me while I'm wearing this.`;
        }
      break;

    case "shuriken":

      if (
        computerSelection === "dagger" ||
        computerSelection === "heavy-strike"
      ) {
        roundMessage = `Your Shuriken hit ${barbarianName.textContent} with high speed and damaged him`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `Scared of close combat?, need to throw this things at me to win? "COWARD!!!!"`;
        championDialogue.textContent = `Any attack counts, even ranged, deal with it`;
        computerLoseRound();
        useShuriken();

      }else if(computerSelection === "health-potion") {

        roundMessage.textContent = `You throw your Shuriken at ${barbarianName.textContent} while he was drinking a potion, breaking the bottle and cutting 2 of he's fingers`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Slurps from potion, Aaah", This Shaman's elixir... AHHHHHH my fingers, dam youuuu, you will DIIEEEE!!!!`;
        championDialogue.textContent = `Sorry about the bottle, I was aiming only at the fingers, HA HA HA!!!`;
        computerLoseRound();
        useShuriken();

      }else if (computerSelection === "golden-armor") {

        displayRoundMessage(displayNoDamage);
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`;
        displayComputerDialogue(computerUseGoldenArmor);
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        displayChampionDialogue(playerVSgoldenArmor);
        useShurikenBlocked();

      } else {
        roundMessage.textContent = `${barbarianName.textContent} blocked your Shuriken with  he's ${computerSelection} and damaged you.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `You thought you would be throwing this things the whole battle?. not against ${barbarianName.textContent}, no no, and you call yourself a ${knightClass.textContent}?, USE YOUR SWORD!!`;
        championDialogue.textContent = `I was trying to go easy on you, NOW FEEL MY WRATH.`;
        playerIsWounded();
        playerLoseRound();
        useShurikenBlocked();
      }
      break;
    case "health-potion":
      if (
        computerSelection === "shield" ||
        computerSelection === "golden-armor"
      ) {
        roundMessage.textContent = `You took one of your potions to restore life`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `You also bought this Shaman's elixirs to give you health?`;
        championDialogue.textContent = `Shaman's what?, no this is holy water blessed by our priests.`;
        healthPotion();
        useHealthPotion();
    
      } else if (playerSelection === computerSelection) {
        roundMessage.textContent = `Both of you are drinking a potion looking on each other eyes.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Thinking", Hope you drowns on that Elixir`;
        championDialogue.textContent = `"Thinking" wondering if he's potion tastes better...`;
        healthPotion();
        useHealthPotion();
      }else if(computerSelection === 'shuriken') {
        roundMessage.textContent = `You were damaged by ${barbarianName.textContent}, while drinking your potion.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Throws a shuriken at you", try to dodge this, HA HA HA!!`;
        championDialogue.textContent = `"spited a bit of potion", it got stuck on my leg errrrr, You will pay for this`;
        playerLoseRound();
        healthPotion();
        useHealthPotion();
      }else {
        roundMessage.textContent = `You were damaged by ${barbarianName.textContent}, while drinking your potion.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"Jumped at you with a fierce attack", AHHHHH, you are lucky...< I was aimed at the head.`;
        championDialogue.textContent = `"thinking", I barely escaped from that attack, need to focus more on my surroundings.`;
        playerLoseRound();
        healthPotion();
        useHealthPotion();
      }
      break;
      
    case "rapid-severance":
      ultimateSkill();
      useRapid();
      if (computerSelection === "golden-armor") {
        roundMessage.textContent = `${barbarianName.textContent} blocked your attack with he's Berserker Aura.`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `I was forced to use my Berserker Aura to block this attack, that hit would made severe damage, I don't think you can use this more than once tho.`;
        championDialogue.textContent = `How? what was that pressure I felt coming from you, this is how you blocked my attack?`;
      } else {
        roundMessage.textContent = `Only a blessed armor or skill can stop your attack, ${barbarianName.textContent} lost health`;
        OpponentAction.textContent = `\u2014 "${computerSelection}"`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        opponentDialogue.textContent = `"scared", what's all of this blades hitting me just from one attack, this is the ultimate of an ${knightClass.textContent}?`;
        championDialogue.textContent = `"Screams", YES THIS IS MY ULTIMATE, ANY LAST WORDS?`;
        computerLoseRound();

      }
      break;
    default:
      console.log(`input error`);
  }

  gameOver();
}



/* case "health-potion":
  healthPotion();
  if (
    computerSelection === "shield" ||
    computerSelection === "golden-armor"
  ) {
    roundMessage = `You took one of your potions to restore life`;
    OpponentAction.textContent = `\u2014 "${computerSelection}"`;
    championAction.textContent = `\u2014 "Used ${playerSelection}"`;
    opponentDialogue.textContent = `You also bought this Shaman's elixirs to give you health?`;
    championDialogue.textContent = `Shaman's what?, no this is holy water blessed by our priests.`;
    healthPotion();
    useHealthPotion();

  } else if (playerSelection === computerSelection) {
    roundMessage = `Both of you are drinking a potion looking on each other eyes.`;
    OpponentAction.textContent = `\u2014 "${computerSelection}"`;
    championAction.textContent = `\u2014 "Used ${playerSelection}"`;
    opponentDialogue.textContent = `"Thinking", Hope you drowns on that Elixir`;
    championDialogue.textContent = `"Thinking" wondering if he's potion tastes better...`;
    healthPotion();
    useHealthPotion();
  } else {
    roundMessage = `You were damaged by ${barbarianName.textContent}, while drinking your potion.`;
    OpponentAction.textContent = `\u2014 "${computerSelection}"`;
    championAction.textContent = `\u2014 "Used ${playerSelection}"`;
    opponentDialogue.textContent = `"Jumped at you with a fierce attack", AHHHHH, you are lucky I was aiming at the head.`;
    championDialogue.textContent = `"thinking", I barely escaped from that attack, need to focus more on my surroundings.`;
    playerLoseRound();
    healthPotion();
    useHealthPotion;
  }
  break;
case "rapid-severance":
  ultimateSkill();
  useRapid()
  if (computerSelection === "golden-armor") {
  } else {
    computerLoseRound();

  }
  break; */






useSkills.forEach((icon) =>
  icon.addEventListener("click", () => {
    playRound(icon.id, computerPlay());
  })
);

function displayRoundMessage(message) {
  roundMessage.textContent = message;
}

function displayChampionDialogue(message) {
  championDialogue.textContent = message;
}

function displayComputerDialogue(message) {
  opponentDialogue.textContent = message;
}

const addPlayerHearts = document.querySelector("#champion-health-bar");
const playerHealthPotionSkill = document.querySelector("#health-potion");
const hidePotionSkill = document.querySelector("#disable-potion-container");
const hideGoldenArmorSkill = document.querySelector(
  "#disable-golden-armor-container"
);
const hideShieldSkill = document.querySelector("#disable-shield-container");
const hideRapidSeveranceSkill = document.querySelector(
  "#disable-rapid-severance-container"
);
let playerHealthPotion = 2;
let playerGoldenArmor = 1;

const playerGoldenArmorSkill = document.querySelector("#golden-armor");
const playerShieldSkill = document.querySelector("#shield");
const playerRapidSeveranceSkill = document.querySelector("#rapid-severance");

function healthPotion() {
  switch (true) {
    case playerHealthPotion !== 0:
      playerHealthPotion--;
      const heartContainer = document.createElement("div");
      heartContainer.classList.add("hearts");
      const playerHeartImg = document.createElement("img");
      playerHeartImg.setAttribute("src", "assets/images/heart.png");
      heartContainer.appendChild(playerHeartImg);
      addPlayerHearts.appendChild(heartContainer);
      if (playerHealthPotion === 0) {
        hidePotionSkill.classList.add("disable-skill");
        playerHealthPotionSkill.setAttribute("style", "pointer-events: none");
      }
  }
}

function hideGoldenArmor() {
  switch (true) {
    case playerGoldenArmor !== 0:
      playerGoldenArmor--;

      if (playerGoldenArmor === 0) {
        hideGoldenArmorSkill.classList.add("disable-skill");
        playerGoldenArmorSkill.setAttribute("style", "pointer-events: none");
      }
  }
}

function brokenShield() {
  hideShieldSkill.classList.add("disable-skill");
  playerShieldSkill.setAttribute("style", "pointer-events: none");
  const shieldBreaks = new Audio("assets/sounds/shield-breaks.mp3");
  if (!shieldBreaks) return;
  shieldBreaks.currentTime = 0.2;
  shieldBreaks.volume = 0.7;
  shieldBreaks.play();
}

function ultimateSkill() {
  hideRapidSeveranceSkill.classList.add("disable-skill");
  playerRapidSeveranceSkill.setAttribute("style", "pointer-events: none");
}

const computerHealthBar = document.querySelector("#computer-life-bar");
const lostHearth = document.querySelector(".hearts");
const playerHealthBar = document.querySelector("#champion-health-bar");

function playerLoseRound() {
  playerHealthBar.removeChild(playerHealthBar.lastElementChild);
}

function computerLoseRound() {
  computerHealthBar.removeChild(computerHealthBar.lastElementChild);
}

const gameOverScreen = document.querySelector("#game-over-screen");
const gameIsOver = document.querySelector("#game-over");
const gameOverText = document.querySelector("#game-over-text");
const resetGame = document.querySelector("#reset-game");

function gameOver() {
  if (!playerHealthBar.firstElementChild) {
    showIcons.forEach((icon) => {
      icon.classList.add("selection-icon-display");
      icon.classList.remove("selection-icon");
    });

    heroIMG.setAttribute("src", "assets/images/game-over.png");
    gameOverScreen.setAttribute("style", "display: flex");
    gameIsOver.setAttribute("style", "display: flex");

    gameOverText.textContent = `The winner is ${barbarianName.textContent}`;
  } else if (!computerHealthBar.firstElementChild) {
    showIcons.forEach((icon) => {
      icon.classList.add("selection-icon-display");
      icon.classList.remove("selection-icon");
    });

    barbarianIMG.setAttribute("src", "assets/images/game-over.png");
    gameOverScreen.setAttribute("style", "display: flex");
    gameIsOver.setAttribute("style", "display: flex");
  }
}

resetGame.addEventListener("click", () => {
  window.location.reload();
});

/* ============================================ */
// sounds

function playerIsWounded() {
  const isWounded = new Audio("assets/sounds/get-hit.mp3");
  if (!isWounded) return; // stop the function from running
  isWounded.currentTime = 0; // rewind to the start
  isWounded.volume = 0.3;
  isWounded.play();
}

function useShuriken() {
  const shuriken = new Audio("assets/sounds/shuriken-hit.mp3");
  if (!shuriken) return;
  shuriken.currentTime = 0;
  shuriken.volume = 0.7;
  shuriken.play();
}

function useShurikenBlocked() {
  const shurikenBlocked = new Audio("assets/sounds/shuriken-armor.mp3");
  if (!shurikenBlocked) return;
  shurikenBlocked.currentTime = 0;
  shurikenBlocked.volume = 0.7;
  shurikenBlocked.play();
}

function useDagger() {
  const dagger = new Audio("assets/sounds/dagger.wav");
  if (!dagger) return; // stop the function from running
  dagger.currentTime = 0; // rewind to the start
  dagger.volume = 0.3;
  dagger.play();
}

function useShieldBlock() {
  const shieldBlock = new Audio("assets/sounds/shield-block.mp3");
  if (!shieldBlock) return;
  shieldBlock.currentTime = 0.2;
  shieldBlock.volume = 0.7;
  shieldBlock.play();
}

function useBladeSpin() {
  const bladeSpin = new Audio("assets/sounds/spin.wav");
  if (!bladeSpin) return;
  bladeSpin.currentTime = 0;
  bladeSpin.volume = 0.7;
  bladeSpin.play();
}

function useHeavyStrike() {
  const heavyStrike = new Audio("assets/sounds/heavy-attack.mp3");
  if (!heavyStrike) return;
  heavyStrike.currentTime = 0;
  heavyStrike.volume = 0.7;
  heavyStrike.play();
}

function useGoldenArmor() {
  const goldenArmor = new Audio("assets/sounds/golden-armor.wav");
  if (!goldenArmor) return;
  goldenArmor.currentTime = 0;
  goldenArmor.volume = 0.7;
  goldenArmor.play();
}

function useHealthPotion() {
  const healthPotion = new Audio("assets/sounds/bottle.wav");
  if (!healthPotion) return;
  healthPotion.currentTime = 0;
  healthPotion.volume = 0.7;
  healthPotion.play();
}

function useRapid() {
  const rapid = new Audio("assets/sounds/magic.wav");
  rapid.currentTime = 0;
  rapid.volume = 0.7;
  rapid.play();
}

function battleSound() {
  const battle = new Audio("assets/sounds/battle-sound-1.mp3");
  battle.currentTime = 4;
  battle.volume = 0.3;
  battle.play();
}

/* ============================== */

playGame.addEventListener("click", () => {
  startUI.classList.toggle("hide-UI");
  main.classList.add("show-main");

  ambience.currentTime = 35.5;
  ambience.volume = 0.3;
  ambience.play();
});

/* window.onload = function() {
 const music = document.getElementById("war");
  music.currentTime = 36;
  music.volume = 0.5;
  music.play();
} */
