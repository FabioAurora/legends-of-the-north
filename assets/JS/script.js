"use strict";

// storing DOM elements
const userName = document.querySelector("#username");
const createName = document.querySelector("#btn-create");
const btnRandom = document.querySelector('.btn-random');
const championName = document.querySelector("#champion-name");
const championDialogue = document.querySelector('#champion-dialogue');
const opponentDialogue = document.querySelector('#opponent-dialogue');
const header = document.querySelector('.header');

const showIcons = document.querySelectorAll('figure');
const battleBTN = document.querySelector('#start-battle');
const battleCTN = document.querySelector('.battle-ctn');

const selectChampionAvatar = document.querySelectorAll('#champion-avatar');
const heroIMG = document.querySelector('#hero-img');

const selectOpponent = document.querySelectorAll('#barbarian-avatar');
const barbarianIMG = document.querySelector('#barbarian-img');

const barbarianName = document.querySelector('#barbarian-name');
const OpponentAction = document.querySelector('#opponent-action');
const championAction = document.querySelector('#champion-action');

const removeName = document.querySelector('#remove-name');

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
    'Richard The LionHeart'
  ];

  const selectIndex = names[Math.floor(Math.random() * names.length)];
  return championName.textContent = selectIndex;
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
  if(championName.textContent === 'Knight') {
    championAction.textContent = `\u2014 "Kindly ask's you."`;
    championDialogue.innerHTML = `Please give me a epic and glorious  name, so the world knows my story after this battle, against the <strong>${opponentClass.textContent}</strong>, <strong>${barbarianName.textContent}</strong>.`;
    OpponentAction.textContent = `\u2014 "Loudly asked"`
    opponentDialogue.textContent = `What's your name Knight?, I need to know the name of the one I'm about to defeat.`;
  } else if(championName.textContent === '') {
    championDialogue.textContent = "I'm sure my parents gave me a name..., but I have Amnesia, can you please help me by creating one or just press Random";
    opponentDialogue.textContent = ' HA HA HA HA, this will be fun!!!'
  }else {
    displayToggle();
  }
}

battleBTN.addEventListener('click', startBattle);

/* ************************************************************************************ */

// Select Warrior
const knightClass = document.querySelector('#knight-class');
selectChampionAvatar.forEach(king => king.addEventListener('change', choseAvatar));

  function choseAvatar() {
    switch(this.value) {
      case 'grand officer':
        heroIMG.setAttribute('src', 'assets/images/king.jpg');
        knightClass.textContent = `Grand Officer`;
        championAction.textContent = `\u2014 "Says with low voice"`;
        championDialogue.textContent = `Most have been forgotten. Most deserve to be forgotten. The heroes will always be remembered. The best. The best and the worst. And a few who were a bit of both.`;
        break;
      case 'holy knight 1':
        heroIMG.setAttribute('src', 'assets/images/king1.jpg');
        knightClass.textContent = `Holy Knight`;
        championAction.textContent = `\u2014 "Prays on he's knees."`;
        championDialogue.textContent = `War seems like a fine adventure, the greatest most of them will ever know. Then they get a taste of battle.`;
        break;
      case 'holy knight 2':
        heroIMG.setAttribute('src', 'assets/images/king3.jpg');
        knightClass.textContent = `Holy Knight`;
        championAction.textContent = `\u2014 "Prays on he's knees."`;
        championDialogue.textContent = `I will fight until I die, but I will protect you`;
        break;
      case 'templar':
        heroIMG.setAttribute('src', 'assets/images/king4.jpg');
        knightClass.textContent = `Templar`;
        championAction.textContent = `\u2014 "Approaches opponent"`;
        championDialogue.textContent = `In times of war, as in life, surround yourself with people of value, virtue and high morals, because it's always better to lose, perish and vanish in glory than to live in shame.`;
        break;
      case 'king5':
        heroIMG.setAttribute('src', 'assets/images/king5.jpg');
        knightClass.textContent = `Jerusalem Knight`;
        break;
      case 'king6':
        heroIMG.setAttribute('src', 'assets/images/king6.png');
        knightClass.textContent = `White Knight`;
        championAction.textContent = `\u2014 "Chants"`;
        championDialogue.textContent = `Hail Holy Queen of mercy. Our life, our consolidation and our hope, hail!. To thee we cry, the banished sons of Eve. To thee we sigh groaning and weeping in this valley of tears.`;
        break;
      case 'king7':
        heroIMG.setAttribute('src', 'assets/images/king7.jpg');
        knightClass.textContent = `Teutonic Knight`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
      case 'king8':
        heroIMG.setAttribute('src', 'assets/images/king8.jpg');
        knightClass.textContent = `Companion`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
      case 'king9':
        heroIMG.setAttribute('src', 'assets/images/king9.jpg');
        knightClass.textContent = `Paladin`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
      case 'king10':
        heroIMG.setAttribute('src', 'assets/images/king10.jpg');
        knightClass.textContent = `Paladin Guardian`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
      case 'king11':
        heroIMG.setAttribute('src', 'assets/images/king11.jpg');
        knightClass.textContent = `Elven Knight`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
      case 'king12':
        heroIMG.setAttribute('src', 'assets/images/king12.jpg');
        knightClass.textContent = `Dragon Hunter`;
        championAction.textContent = `\u2014 "To be added..."`;
        championDialogue.textContent = `To be added....`;
        break;
        case 'king13':
          heroIMG.setAttribute('src', 'assets/images/king13.jpg');
          knightClass.textContent = `Dragon Hunter`;
          championAction.textContent = `\u2014 "To be added..."`;
          championDialogue.textContent = `To be added....`;
          break;
        case 'king14':
          heroIMG.setAttribute('src', 'assets/images/king14.jpg');
          knightClass.textContent = `Defender`;
          championAction.textContent = `\u2014 "To be added..."`;
          championDialogue.textContent = `To be added....`;
          break;
        case 'king15':
          heroIMG.setAttribute('src', 'assets/images/king15.jpg');
          knightClass.textContent = `Dragon Hunter`;
          championAction.textContent = `\u2014 "To be added..."`;
          championDialogue.textContent = `To be added....`;
          break;
        case 'king16':
          heroIMG.setAttribute('src', 'assets/images/king16.jpg');
          knightClass.textContent = `Grand Commander`;
          championAction.textContent = `\u2014 "To be added..."`;
          championDialogue.textContent = `To be added....`;
          break;
        case 'king17':
          heroIMG.setAttribute('src', 'assets/images/king17.jpg');
          knightClass.textContent = `Northen Knight`;
          championAction.textContent = `\u2014 "To be added..."`;
          championDialogue.textContent = `To be added....`;
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
      OpponentAction.textContent = `\u2014 "Says excited"`;
      opponentDialogue.textContent = `HA HA!, every warrior wants a worthy opponent. There is no redress in fighting the pathetic.`;
      break;
    case 'barbarian1':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian1.jpg');
      barbarianName.textContent = `Harald Bloodaxe`;
      opponentClass.textContent = `Viking  úlfheðnar`;
      OpponentAction.textContent = `\u2014 "Battlecry"`;
      opponentDialogue.textContent = `Better it is to die in battle with honor, than to live in shame because you did not defend your people.`;
      break;
    case 'barbarian2':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian2.jpg');
      barbarianName.textContent = `Gunnstein`;
      opponentClass.textContent = `Viking Berserker`;
      OpponentAction.textContent = `\u2014 "Battlecry"`;
      opponentDialogue.textContent = `Run from me… and I will tear apart the mountains to find you! I will follow you to the end of the world!`;
      break;
    case 'barbarian3':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian3.jpg');
      barbarianName.textContent = `Arnbjörg`;
      opponentClass.textContent = `Barbarian King`;
      OpponentAction.textContent = `\u2014 "Angry voice"`;
      opponentDialogue.textContent = `You speak of justice? or cowardice?, I will show you the justice of the grave, and the true meaning of fear.`;
      break;
    case 'barbarian4':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian4.jpg');
      barbarianName.textContent = `Bóthildr`;
      opponentClass.textContent = `Barbarian Legend`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case 'barbarian5':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian5.jpg');
      barbarianName.textContent = 'Peghed';
      opponentClass.textContent = `Shaman`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case 'barbarian6':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian6.jpg');
      barbarianName.textContent = `Sowar`;
      opponentClass.textContent = `Mage`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case 'barbarian7':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian7.jpg');
      barbarianName.textContent = `Eyvindur`;
      opponentClass.textContent = `Dark Knight`;
      OpponentAction.textContent = `\u2014 "To be added..."`;
      opponentDialogue.textContent = `To be added...`;
      break;
    case 'barbarian8':
      barbarianIMG.setAttribute('src', 'assets/images/barbarian8.jpg');
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
        OpponentAction.textContent = `\u2014 "used ${computerSelection} "`
        opponentDialogue.textContent = `I will destroy that shield soon.`;
        championAction.textContent = `\u2014 "Blocked with ${playerSelection}"`;
        championDialogue.textContent = `You know I can block that attack.`;
      }else if(computerSelection === 'heavy-strike') {
        brokenShield();
        OpponentAction.textContent = `\u2014 "used ${computerSelection} "`
        opponentDialogue.textContent = `You have no shield now to hide... ATTACK!!`;
        championAction.textContent = `\u2014 " Tried to Block with ${playerSelection}"`;
        championDialogue.textContent = `That attack was to powerful for my shield`;
      }else if(computerSelection === 'golden-armor') {
        OpponentAction.textContent = `\u2014 "used Berserker Aura "`
        opponentDialogue.textContent = `Beeerrzerrrkkeerrr AURAAAAA, your attacks can't do nothing this round.`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        championDialogue.textContent = `That Battle cry was impressive!`;
      }else if(computerSelection === 'health-potion') {
        OpponentAction.textContent = `\u2014 "${computerSelection}"`
        opponentDialogue.textContent = `preparing herbal Elixir to increase health.`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        championDialogue.textContent = `Defensive Stance with shield`;
      }else if(playerSelection === computerSelection) {
        OpponentAction.textContent = `\u2014 "${computerSelection}"`
        opponentDialogue.textContent = `Defensive Stance with shield`;
        championAction.textContent = `\u2014 "Used ${playerSelection}"`;
        championDialogue.textContent = `Defensive Stance with shield`;
        displayRoundMessage(tie);
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

  gameOver();
}

useSkills.forEach(icon => icon.addEventListener('click', () => {
  playRound(icon.id, computerPlay());
}));

function displayRoundMessage(message) {
  championDialogue.textContent = message;
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
const lostHearth = document.querySelector('.hearts');
const playerHealthBar = document.querySelector('#champion-health-bar')

function playerLoseRound() {
  playerHealthBar.removeChild(playerHealthBar.lastElementChild);
}

function computerLoseRound() {
  computerHealthBar.removeChild(computerHealthBar.lastElementChild);
  
}

const gameOverScreen = document.querySelector('#game-over-screen');
const gameIsOver = document.querySelector('#game-over');
const gameOverText = document.querySelector('#game-over-text');
const resetGame = document.querySelector('#reset-game');

function gameOver() {
  if(!playerHealthBar.firstElementChild){
    showIcons.forEach(icon => {
      icon.classList.add('selection-icon-display');
      icon.classList.remove('selection-icon');
    });

    heroIMG.setAttribute('src', 'assets/images/game-over.png');
    gameOverScreen.setAttribute('style', 'display: flex');
    gameIsOver.setAttribute('style', 'display: flex');

    gameOverText.textContent = `The winner is ${barbarianName.textContent}`;

  }else if(!computerHealthBar.firstElementChild) {
    showIcons.forEach(icon => {
      icon.classList.add('selection-icon-display');
      icon.classList.remove('selection-icon');
    });

    barbarianIMG.setAttribute('src', 'assets/images/game-over.png');
    gameOverScreen.setAttribute('style', 'display: flex');
    gameIsOver.setAttribute('style', 'display: flex');
  }

}


resetGame.addEventListener('click', () => {
  window.location.reload();
})

/* ============================================ */
// sounds

function playSound(e) {
 const audio = document.querySelector(`audio[name="${e.id}"]`);
  if(!audio) return; // stop the function from running
  audio.currentTime = 0;
  audio.volume = 0.1;// rewind to the start
  audio.play();
}



useSkills.forEach(skill => skill.addEventListener('click', () => {
playSound(skill)
}));

