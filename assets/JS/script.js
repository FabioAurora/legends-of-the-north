"use strict";

// storing DOM elements
const userName = document.querySelector("#username");
const createName = document.querySelector("#btn-create");
const btnRandom = document.querySelector('.btn-random');
const kingName = document.querySelector("#kingName");
const kingText = document.querySelector('#king-text');
const invaderText = document.querySelector('#invader-text');
const header = document.querySelector('.header');

const showIcons = document.querySelectorAll('figure');
const battleBTN = document.querySelector('#start-battle');
const battleCTN = document.querySelector('.battle-ctn');

const selectHeroAvatar = document.querySelectorAll('#hero-avatar');
const heroIMG = document.querySelector('#hero-img');

const selectOpponent = document.querySelectorAll('#barbarian-avatar');
const barbarianIMG = document.querySelector('#barbarian-img');

const barbarianName = document.querySelector('#barbarian-name');
const OpponentName = document.querySelector('#opponent-name');
const knightName = document.querySelector('#knight-name');

const removeName = document.querySelector('#remove-name');

/* *********************************************************************************** */
// listener for the create name button
createName.addEventListener("click", () => {
  kingName.textContent = userName.value;
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
    'Harduinus the Tracker',
    'Geroldin the Messenger',
    'Ernoulet the Clever',
    'Bartrem the Shy',
    'Hildebrant the Talented',
    'Geofridus the Twisted',
    'Heudebrand the Paladin',
    'Ivone the Champ',
    'Nichol the Honorable',
    'Cristofre of the Dawn',
    'Gerbald the Selfish',
    'Aymon the Gorgeous',
    'Tancred the Dragon',
    'Peterkin the Clever',
    'Harry the Daring',
    'Thomelin the Gorgeous',
    'Hemart the Wild',
    'Arthur the Tough',
    'Rhovaom The Barbaric',
    'Dhavraan The Noxious',
    'Rorlak Spine Mutilator',
    'Rodrigo Díaz De Vivar',
    'Godfrey Of Bouillon',
    'William Marshal',
    'William Wallace',
    'Robert The Bruce',
    'Richard The Lionheart'
  ];

  const selectIndex = names[Math.floor(Math.random() * names.length)];
  return kingName.textContent = selectIndex;
}

btnRandom.addEventListener('click', randomName);

/* ************************************************************************************ */
const selection = document.querySelectorAll('select');
// removing the battle icon and header
function displayToggle() {
  showIcons.forEach(icon => {
    icon.classList.remove('selection-icon-display');
    icon.classList.add('selection-icon');
  })

  battleCTN.setAttribute('style', 'display: none');
  header.setAttribute('style', 'visibility: hidden');
  selection.forEach(select => select.disabled = true);
}

/* ************************************************************************************ */

//king name validation and starting the battle
function startBattle() {
  if(kingName.textContent === 'Knight') {
    knightName.textContent = `\u2014 "Kindly ask's you."`;
    kingText.innerHTML = `Please give me a epic and glorious  name, so the world knows my story after this battle, against the <strong>${opponentClass.textContent}</strong>, <strong>${barbarianName.textContent}</strong>.`;
    OpponentName.textContent = `\u2014 "Loudly asked"`
    invaderText.textContent = `What's your name Knight?, I need to know the name of the one I'm about to defeat.`;
  } else if(kingName.textContent === '') {
    kingText.textContent = "I'm sure my parents gave me a name..., but I have Amnesia, can you please help me by creating one or just press Random";
    invaderText.textContent = ' HA HA HA HA, this will be fun!!!'
  }else {
    knightName.textContent = `\u2014 "Challenge's ${barbarianName.textContent}"`;
    kingText.textContent = `I'm king ${kingName.textContent}, How dare you to invade my Kingdom??, Prepare for BATTLE!!!!!`;
    invaderText.textContent = `I'm here to defeat you ${kingName.textContent}, your kingdom will be mine, ATTACK!!!!`;
    displayToggle();
  }
}

battleBTN.addEventListener('click', startBattle);

/* ************************************************************************************ */

// Select Warrior
const knightClass = document.querySelector('#knight-class');
  selectHeroAvatar.forEach(king => king.addEventListener('change', choseAvatar));

  function choseAvatar() {
    switch(this.value) {
      case 'king':
        heroIMG.setAttribute('src', 'assets/images/king.jpg');
        knightClass.textContent = `Grand Officer`;
        break;
      case 'king1':
        heroIMG.setAttribute('src', 'assets/images/king1.jpg');
        knightClass.textContent = `Holy Knight`;
        break;
      case 'king3':
        heroIMG.setAttribute('src', 'assets/images/king3.jpg');
        knightClass.textContent = `Holy Knight`;
        break;
      case 'king4':
        heroIMG.setAttribute('src', 'assets/images/king4.jpg');
        knightClass.textContent = `Templar`;
        break;
      case 'king5':
        heroIMG.setAttribute('src', 'assets/images/king5.jpg');
        knightClass.textContent = `Jerusalem Knight`;
        break;
      case 'king6':
        heroIMG.setAttribute('src', 'assets/images/king6.png');
        knightClass.textContent = `White Knight`;
        break;
      case 'king7':
        heroIMG.setAttribute('src', 'assets/images/king7.jpg');
        knightClass.textContent = `Teutonic Knight`;
        break;
      case 'king8':
        heroIMG.setAttribute('src', 'assets/images/king8.jpg');
        knightClass.textContent = `Companion`;
        break;
      case 'king9':
        heroIMG.setAttribute('src', 'assets/images/king9.jpg');
        knightClass.textContent = `Paladin`;
        break;
      case 'king10':
        heroIMG.setAttribute('src', 'assets/images/king10.jpg');
        knightClass.textContent = `Paladin Guardian`;
        break;
      case 'king11':
        heroIMG.setAttribute('src', 'assets/images/king11.jpg');
        knightClass.textContent = `Elven Knight`;
        break;
      case 'king12':
        heroIMG.setAttribute('src', 'assets/images/king12.jpg');
        knightClass.textContent = `Dragon Hunter`;
        break;
        case 'king13':
          heroIMG.setAttribute('src', 'assets/images/king13.jpg');
          knightClass.textContent = `Dragon Hunter`;
          break;
        case 'king14':
          heroIMG.setAttribute('src', 'assets/images/king14.jpg');
          knightClass.textContent = `Defender`;
          break;
        case 'king15':
          heroIMG.setAttribute('src', 'assets/images/king15.jpg');
          knightClass.textContent = `Dragon Hunter`;
          break;
        case 'king16':
          heroIMG.setAttribute('src', 'assets/images/king16.jpg');
          knightClass.textContent = `Grand Commander`;
          break;
        case 'king17':
          heroIMG.setAttribute('src', 'assets/images/king17.jpg');
          knightClass.textContent = `Northen Knight`;
          break;
    }
  }

/* ************************************************************************************ */
// Select Opponent 
const opponentClass = document.querySelector('#opponent-class');
// Select Opponent:

selectOpponent.forEach(barbarian => barbarian.addEventListener('change', choseBarbarian));

function choseBarbarian() {
  switch(this.value) {
    case 'barbarian':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian.png');
      barbarianName.textContent = `Thralr`;
      opponentClass.textContent = `Barbarian Legend`;
      break;
    case 'barbarian1':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian1.jpg');
      barbarianName.textContent = `Harald Bloodaxe`;
      opponentClass.textContent = `Viking  úlfheðnar`;
      break;
    case 'barbarian2':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian2.jpg');
      barbarianName.textContent = `Gunnstein`;
      opponentClass.textContent = `Viking Berserker`;
      break;
    case 'barbarian3':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian3.jpg');
      barbarianName.textContent = `Arnbjörg`;
      opponentClass.textContent = `Barbarian King`;
      break;
    case 'barbarian4':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian4.jpg');
      barbarianName.textContent = `Bóthildr`;
      opponentClass.textContent = `Barbarian Legend`;
      break;
    case 'barbarian5':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian5.jpg');
      barbarianName.textContent = 'Peghed';
      opponentClass.textContent = `Shaman`;
      break;
    case 'barbarian6':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian6.jpg');
      barbarianName.textContent = `Sowar`;
      opponentClass.textContent = `Mage`;
      break;
    case 'barbarian7':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian7.jpg');
      barbarianName.textContent = `Eyvindur`;
      opponentClass.textContent = `Dark Knight`;
      break;
    case 'barbarian8':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian8.jpg');
      barbarianName.textContent = `Ùisdean the Devourer`;
      opponentClass.textContent = `Dark Lord`;
      break;
  }
}

/* ************************************************************************************ */
// LOGIC ON AI SIDE TO PLAY THE GAME;

// Accessing DOM for the AI life-bar to add and remove it:
const addComputerHearts = document.querySelector('#computer-life-bar');
const removeHearts = document.querySelector('.hearts:last-child');

// storing life potion limit for AI game:
let computerLifePotion = 2;
let computerGoldenArmor = 1;

// Array with all the skills to be used by AI:
let SkillsArray = ['shield', 'dagger', 'blade-spin', 'heavy-strike', 'golden-armor', 'shuriken', 'health-potion', 'rapid-severance'];

// Selecting a random skill for AI:
function computerPlay() {
  const randomSkill = SkillsArray[Math.floor(Math.random() * SkillsArray.length)];
 let computerLifePotionIndex = 'health-potion';// storing index of life potion to remove it when condition is met.
 let computerGoldenArmorIndex = 'golden-armor';// storing index of divine protection to remove it when condition is met.


  switch(randomSkill) {
    case 'health-potion':
        if(computerLifePotion !== 0) {
          computerLifePotion--;
          const newHeartContainer = document.createElement('div');
          newHeartContainer.classList.add('hearts');
          const heartImg = document.createElement('img');
          heartImg.setAttribute('src', 'assets/images/heart.png');
          newHeartContainer.appendChild(heartImg);
          addComputerHearts.appendChild(newHeartContainer);
        }
        
        if(computerLifePotion === 0) {
          SkillsArray = SkillsArray.filter(item => item !== computerLifePotionIndex);// removing potion after 2 uses
        }
      break;
    case 'golden-armor':
      if(computerGoldenArmor !== 0) {
        computerGoldenArmor--;
      }
      if(computerGoldenArmor === 0) {
        SkillsArray = SkillsArray.filter(item => item !== computerGoldenArmorIndex);// removing Divine protection after 1 use
      }
      break;
  }
  return randomSkill
}

// Variables to store the results:
let playerPoints = 0;
let computerPoints = 0;

const useSkills = document.querySelectorAll('.skill-container[id]')


// PLAYING THE ROUND AND DETERMINE WHO WINS THE ROUND:
function playRound(playerSelection, computerSelection) {
  // storing the messages for the rounds:
  const championWinMessage = `You Win!!!, ${playerSelection} beats ${computerSelection}`;
  const opponentMessage = `You Lost!!! ${computerSelection} beats ${playerSelection}`;
  const tie = `It's a tie!!!, both selected ${playerSelection}`;
  const noEffect = `Both skills used have no effect over the opponent.`;

  let computerShieldIndex = 'shield';// storing index of shield to remove it when it is broken by heavy-strike;


  //storing messages when using skills
  const usingPotion = `Drinks Life Potion`;
  
  //condition for tie:
  if(playerSelection === computerSelection) {
    displayRoundMessage(tie);
  }

  switch(playerSelection) {
    case 'shield':
      if(computerSelection === 'dagger' || computerSelection === 'blade-spin' || computerSelection === 'shuriken') {
        computerLoseRound();
        displayRoundMessage(championWinMessage)
      }else if(computerSelection === 'heavy-strike') {
        brokenShield();
        displayRoundMessage(`ohhh no my shield...`)
      }else if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else if(computerSelection === 'health-potion') {
        displayRoundMessage(noEffect);
      }else {
        playerLoseRound();
        displayRoundMessage(opponentMessage);
      }
      break;

    case 'dagger':
      if(computerSelection === 'blade-spin' || computerSelection === 'heavy-strike' || computerSelection === 'health-potion') {
        computerLoseRound();
        displayRoundMessage(championWinMessage);
      }else if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else {
        playerLoseRound();
        displayRoundMessage(opponentMessage);
      }
      break;

    case 'blade-spin':
      if(computerSelection === 'shuriken' || computerSelection === 'heavy-strike' || computerSelection === 'health-potion') {
        computerLoseRound();
        displayRoundMessage(championWinMessage);
      }else if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else {
        displayRoundMessage(opponentMessage);
        playerLoseRound();
      }
      break;

    case 'heavy-strike':
      if(computerSelection === 'shield') {
        computerLoseRound();
        SkillsArray = SkillsArray.filter(item => item !== computerShieldIndex);
        displayRoundMessage(championWinMessage);
      }else if(computerSelection === 'health-potion') {
        computerLoseRound();
      }else if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else{
        playerLoseRound();
        displayRoundMessage(opponentMessage);
      }
      break;
    case 'golden-armor':
      hideGoldenArmor();
      displayRoundMessage(`blessed`);
      break;
      
    case 'shuriken':
      if(computerSelection === 'dagger' || computerSelection === 'heavy-strike' || computerSelection === 'health-potion') {
        computerLoseRound();
        displayRoundMessage(championWinMessage);
      }else if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else {
        playerLoseRound();
        displayRoundMessage(opponentMessage);
      }
      break;
  case 'health-potion':
      healthPotion();
      if(computerSelection === 'shield' || computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else {
        playerLoseRound();
        displayRoundMessage(opponentMessage);
      }
      break;
    case 'rapid-severance':
      ultimateSkill();
      if(computerSelection === 'golden-armor') {
        displayRoundMessage(noEffect);
      }else {
        computerLoseRound();
        displayRoundMessage(`Used my powerfull ultimate skill`);
      }
      break;
    default:
      console.log(`input error`);
  }
}

useSkills.forEach(icon => icon.addEventListener('click', () => {
  playRound(icon.id, computerPlay());
}))

function displayRoundMessage(message) {
  kingText.textContent = message;
}

const addPlayerHearts = document.querySelector('#champion-health-bar');
const playerHealthPotionSkill = document.querySelector('#health-potion');
const hidePotionSkill = document.querySelector('#disable-potion-container');
const hideGoldenArmorSkill = document.querySelector('#disable-golden-armor-container');
const hideShieldSkill = document.querySelector('#disable-shield-container');
const hideRapidSeveranceSkill = document.querySelector('#disable-rapid-severance-container');
let playerHealthPotion = 2;
let playerGoldenArmor = 1;

const playerGoldenArmorSkill = document.querySelector('#golden-armor');
const playerShieldSkill = document.querySelector('#shield');
const playerRapidSeveranceSkill = document.querySelector('#rapid-severance');



function healthPotion() {
  switch(true) {
    case playerHealthPotion !== 0:
      playerHealthPotion--;
      const heartContainer = document.createElement('div');
      heartContainer.classList.add('hearts');
      const playerHeartImg = document.createElement('img');
      playerHeartImg.setAttribute('src', 'assets/images/heart.png');
      heartContainer.appendChild(playerHeartImg);
      addPlayerHearts.appendChild(heartContainer);
      if(playerHealthPotion === 0){
        hidePotionSkill.classList.add('disable-skill')
      playerHealthPotionSkill.setAttribute('style', 'pointer-events: none');
      }
  }
}

function hideGoldenArmor() {
  switch(true) {
    case playerGoldenArmor !== 0:
      playerGoldenArmor--;

      if(playerGoldenArmor === 0){
        hideGoldenArmorSkill.classList.add('disable-skill');
        playerGoldenArmorSkill.setAttribute('style', 'pointer-events: none');
      }
  }
}

function brokenShield() {
  hideShieldSkill.classList.add('disable-skill');
  playerShieldSkill.setAttribute('style', 'pointer-events: none');
}

function ultimateSkill() {
  hideRapidSeveranceSkill.classList.add('disable-skill');
  playerRapidSeveranceSkill.setAttribute('style', 'pointer-events: none');
}


const computerHealthBar = document.querySelector('#computer-life-bar');
const lostHearth = document.querySelector('.hearts:last-child');
const playerHealthBar = document.querySelector('#champion-health-bar')
console.log(lostHearth)
console.log(computerHealthBar)

function playerLoseRound() {
  playerHealthBar.removeChild(playerHealthBar.lastElementChild);
  
}

function computerLoseRound() {
  computerHealthBar.removeChild(computerHealthBar.lastElementChild);
  
}