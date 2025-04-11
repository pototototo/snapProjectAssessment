let URL = [
  "https://www.deckshop.pro/img/card_ed/Skellies.png",
  "https://www.deckshop.pro/img/card_ed/ElectroSpirit.png",
  "https://www.deckshop.pro/img/card_ed/FireSpirit.png",
  "https://www.deckshop.pro/img/card_ed/IceSpirit.png",
  "https://www.deckshop.pro/img/card_ed/HealSpirit.png",
  "https://www.deckshop.pro/img/card_ed/Gobs.png",
  "https://www.deckshop.pro/img/card_ed/SpearGobs.png",
  "https://www.deckshop.pro/img/card_ed/Bomber.png",
  "https://www.deckshop.pro/img/card_ed/Bats.png",
  "https://www.deckshop.pro/img/card_ed/Zap.png",
  "https://www.deckshop.pro/img/card_ed/Snowball.png",
  "https://www.deckshop.pro/img/card_ed/Berserker.png",
  "https://www.deckshop.pro/img/card_ed/IceGolem.png",
  "https://www.deckshop.pro/img/card_ed/SuspiciousBush.png",
  "https://www.deckshop.pro/img/card_ed/BarbBarrel.png",
  "https://www.deckshop.pro/img/card_ed/WallBreakers.png",
  "https://www.deckshop.pro/img/card_ed/GoblinCurse.png",
  "https://www.deckshop.pro/img/card_ed/Rage.png",
  "https://www.deckshop.pro/img/card_ed/Log.png",
  "https://www.deckshop.pro/img/card_ed/Archers.png",
  "https://www.deckshop.pro/img/card_ed/Arrows.png",
  "https://www.deckshop.pro/img/card_ed/Knight.png",
  "https://www.deckshop.pro/img/card_ed/Minions.png",
  "https://www.deckshop.pro/img/card_ed/Cannon.png",
  "https://www.deckshop.pro/img/card_ed/GobGang.png",
  "https://www.deckshop.pro/img/card_ed/SkellyBarrel.png",
  "https://www.deckshop.pro/img/card_ed/RoyalDelivery.png",
  "https://www.deckshop.pro/img/card_ed/Tombstone.png",
  "https://www.deckshop.pro/img/card_ed/MM.png",
  "https://www.deckshop.pro/img/card_ed/DartGob.png",
  "https://www.deckshop.pro/img/card_ed/Earthquake.png",
  "https://www.deckshop.pro/img/card_ed/ElixirGolem.png",
  "https://www.deckshop.pro/img/card_ed/Barrel.png",
  "https://www.deckshop.pro/img/card_ed/Guards.png",
  "https://www.deckshop.pro/img/card_ed/Skarmy.png",
  "https://www.deckshop.pro/img/card_ed/Clone.png",
  "https://www.deckshop.pro/img/card_ed/Tornado.png",
  "https://www.deckshop.pro/img/card_ed/Void.png",
  "https://www.deckshop.pro/img/card_ed/Miner.png",
  "https://www.deckshop.pro/img/card_ed/Princess.png",
  "https://www.deckshop.pro/img/card_ed/IceWiz.png",
  "https://www.deckshop.pro/img/card_ed/Ghost.png",
  "https://www.deckshop.pro/img/card_ed/Bandit.png",
  "https://www.deckshop.pro/img/card_ed/Fisherman.png",
  "https://www.deckshop.pro/img/card_ed/LittlePrince.png",

  
];

let titles = [
    "Skeletons",
    "Electro Spirit",
    "Fire Spirit",
    "Ice Spirit",
    "Heal Spirit",
    "Goblins",
    "Spear Goblins",
    "Bomber",
    "Bats",
    "Zap",
    "Giant Snowball",
    "Berserker",
    "Ice Golem",
    "Suspicious Bush",
    "Barbarian Barrel",
    "Wall Breakers",
    "Goblin Curse",
    "Rage",
    "The Log",
    "Archers",
    "Arrows",
    "Knight",
    "Minions",
    "Cannon",
    "Goblin Gang",
    "Skeleton Barrel",
    "Royal Delivery",
    "Tombstone",
    "Mega Minion",
    "Dart Goblin",
    "Earthquake",
    "Elixir Golem",
    "Goblin Barrel",
    "Guards",
    "Skeleton Army",
    "Clone",
    "Tornado",
    "Void",
    "Miner",
    "Princess",
    "Ice Wizard",
    "Royal Ghost",
    "Bandit",
    "Fisherman",
    "Little Prince"
  
];

let bulletPoints = [
  ["3x Skeletons", "Ground Unit", "Melee-Single"], // Skeletons
  ["1x Electro Spirit", "Ground Unit", "Spirit-Splash"],
  ["1x Fire Spirit", "Ground Unit", "Spirit-Splash"],
  ["1x Ice Spirit", "Ground Unit", "Spirit-Splash"],
  ["1x Heal Spirit", "Ground Unit", "Spirit-Splash"],
  ["3x Goblins", "Ground Unit", "Melee-Single"],
  ["3x Spear Goblins", "Ground Unit", "Ranged-Single"],
  ["1x Bomber", "Ground Unit", "Ranged-Splash"],
  ["5x Bats", "Flying", "Melee-Single"],
  ["1x Electric", "Spell", "Splash"],
  ["1x Knockback", "Spell", "Splash"],
  ["1x Berserker", "Ground Unit", "Melee-Single"],
  ["1x Ice Golem", "Ground Unit", "Towers"],
  ["1x Suspicious Bush", "Ground Unit", "Towers"],
  ["1x Barbarian", "Spell", "Splash"],
  ["2x Wallbreakers", "Ground Unit", "Towers"],
  ["1x Curse", "Spell", "Splash"],
  ["1x Rage", "Spell", "Splash"],
  ["1x Log", "Spell", "Splash"],
  ["2x Archers", "Ground Unit", "Ranged-Single"],
  ["1x Arrows", "Spell", "Splash"],
  ["1x Knight", "Ground Unit", "Melee-Single"],
  ["3x Minions", "Flying", "Melee-Single"],
  ["1x Cannon", "Ground Defense", "Tower-Single"],
  ["3x Goblins + 3x Spear Goblins", "Ground Unit", "Mixed Attack"],
  ["1x Skeleton Barrel", "Flying Unit", "Towers"],
  ["1x Delivery", "Spell", "Spawns Recruit + Splash"],
  ["1x Tombstone", "Tower", "Spawner"],
  ["1x Mega Minion", "Flying", "Single Target"],
  ["1x Dart Goblin", "Ground Unit", "Ranged-Single"],
  ["1x Earthquake", "Spell", "Splash"],
  ["1x Elixer Golem", "Ground Unit", "Towers"],
  ["3x Goblins", "Spell", "Melee-Single"],
  ["3x Guards", "Ground Unit", "Melee-Single"],
  ["15x Skeletons", "Ground Unit", "Melee-Single"],
  ["1x Clone", "Spell", "Duplicates Troops"],
  ["1x Tornado", "Spell", "Pulls Enemies to Center"],
  ["1x Void", "Spell", "Splash"],
  ["1x Miner", "Ground Unit", "Melee-Single"],
  ["1x Princess", "Ground Unit", "Range-Splash"],
  ["1x Ice Wizard", "Ground Unit", "Range-Splash"],
  ["1x Royal Ghost", "Ground Unit", "Melee-Splash"],
  ["1x Bandit", "Ground Unit", "Melee-Single"],
  ["1x Fisherman", "Ground Unit", "Melee-Single"],
  ["1x Little Prince", "Ground Unit", "Ranged-Single"]
];

let elixerCosts = [
  1, // Skeletons
  1, // Electro Spirit
  1, // Fire Spirit
  1, // Ice Spirit
  1, // Heal Spirit
  2, // Goblins
  2, // Spear Goblins
  2, // Bomber
  2, // Bats
  2, // Zap
  2, // Giant Snowball
  2, // Berserker
  2, // Ice Golem
  2, // Suspicious Bush
  2, // Barbarian Barrel
  2, // Wall Breakers
  2, // Goblin Curse
  2, // Rage
  2,  // The Log
  3, // Archers
  3, // Arrows
  3, // Knight
  3, // Minions
  3, // Cannon
  3, // Goblin Gang
  3, // Skeleton Barrel
  3,  // Royal Delivery
  3, // Tombstone
  3, // Mega Minion
  3, // Dart Goblin
  3, // Earthquake
  3, // Elixir Golem
  3, // Goblin Barrel
  3, // Guards
  3, // Skeleton Army
  3,  // Clone
  3, // Tornado
  3, // Void
  3, // Miner
  3, // Princess
  3, // Ice Wizard
  3, // Royal Ghost
  3, // Bandit
  3, // Fisherman
  3  // Little Prince (assuming he’s a champion-type card)
];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let imageURL = URL[i];

    const nextCard = templateCard.cloneNode(true); // Clone card template
    editCardContent(nextCard, title, imageURL, i); // Edit content
    cardContainer.appendChild(nextCard); // Append new card to container
  }
}

function editCardContent(card, newTitle, newImageURL, index) {
  card.style.display = "block"; // Make card visible
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const bulletList = card.querySelector("ul");
  bulletList.innerHTML = ""; // Clear old list items

  // Add new bullet points
  for (let i = 0; i < bulletPoints[index].length; i++) {
    const li = document.createElement("li");
    li.textContent = bulletPoints[index][i];
    bulletList.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
  titles.pop(); // Remove last card from titles array
  showCards(); // Refresh cards
}
