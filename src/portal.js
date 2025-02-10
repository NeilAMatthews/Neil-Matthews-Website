document.getElementById('generatePortalButton').addEventListener('click', generatePortal);
document.getElementById('generateNewNPC').addEventListener('click', generateNewNpc);
document.getElementById('generateNewLoot').addEventListener('click', generateNewLoot);

const portal = document.getElementById('portal');
const planetRadius = document.getElementById('planetRadius');
const planetPopulation = document.getElementById('planetPopulation');
const planetSector = document.getElementById('planetSector');
const planetCoordinates = document.getElementById('planetCoordinates');
const worldType = document.getElementById('worldType');
const dangerRating = document.getElementById('dangerRating');
const weaponType = document.getElementById('weaponType');
const weaponBonus = document.getElementById('weaponBonus');
const moneyAmount = document.getElementById('moneyAmount');
const shipParts = document.getElementById('shipParts');
const dimensionUpgrades = document.getElementById('dimensionUpgrades');
const shipUpgrades = document.getElementById('shipUpgrades');
const planetEnviorment = document.getElementById('planetEnviorment');
const planetDiscovery = document.getElementById('planetDiscovery');
const planetInhabatants = document.getElementById('planetInhabitant');
const planetEvent = document.getElementById('planetEvent');
const npcAligment = document.getElementById('npcAligment');
const npcJob = document.getElementById('npcJob');
const npcStr = document.getElementById('npcStr');
const npcCha = document.getElementById('npcCha');
const npcInt = document.getElementById('npcInt');
const npcWis = document.getElementById('npcWis');
const npcDex = document.getElementById('npcDex');
const npcCon = document.getElementById('npcCon');
const npcName = document.getElementById('npcName');

function generatePortal() {
    const size = Math.floor(Math.random() * (500 - 200 + 1)) + 200; 
    portal.style.width = `${size}px`;
    portal.style.height = `${size}px`;

    
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    portal.style.background = `radial-gradient(circle, ${color1}, ${color2})`;

    
    const glowIntensity = Math.random() * 30 + 10; 
    portal.style.boxShadow = `0 0 ${glowIntensity}px rgba(255, 255, 255, 0.6)`;

    // Generate random planet radius and population
    const radius = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000; 
    const population = getRandomPopulation(); 

    
    const sector = getRandomSector();
    const coordinates = getRandomCoordinates();
    const type = getRandomWorldType();
    const danger = getRandomDangerRating();
    const weapon = getRandomWeapon();
    const bonus = getWeaponBonus();
    const cash = getRandomCash();
    const dimesnionUpgrade = getRandomDimensionUpgrade();
    const shipPart = getRandomShipPart();
    const shipUpgrade = getRandomShipUpgrade();
    const planetEnviormment = generatePlanetEnviorment();
    const planetFinder = generatePlanetDiscovery();
    const planetPeople = generatePlanetInhabitants();
    const planetRandomEvent = generatePlanetEvent();
    const aligment = generateNPCAligment();
    const job = generateNPCJob();
    const strength = generateNPCStats();
    const dextarity = generateNPCStats();
    const constution = generateNPCStats();
    const inteligence = generateNPCStats();
    const wisdom = generateNPCStats();
    const charisma = generateNPCStats();
    const name = generateNPCName();

    
    planetRadius.textContent = radius;
    planetPopulation.textContent = population;
    planetSector.textContent = sector;
    planetCoordinates.textContent = coordinates;
    worldType.textContent = type;
    dangerRating.textContent = danger;
    weaponType.textContent = weapon;
    weaponBonus.textContent = bonus;
    moneyAmount.textContent = cash;
    dimensionUpgrades.textContent = dimesnionUpgrade;
    shipParts.textContent = shipPart;
    shipUpgrades.textContent = shipUpgrade;
    planetEnviorment.textContent = planetEnviormment;
    planetDiscovery.textContent = planetFinder;
    planetInhabatants.textContent = planetPeople;
    planetEvent.textContent = planetRandomEvent;
    npcAligment.textContent = aligment;
    npcJob.textContent = job;
    npcCha.textContent = charisma;
    npcCon.textContent = constution;
    npcDex.textContent = dextarity;
    npcInt.textContent = inteligence;
    npcStr.textContent = strength;
    npcWis.textContent = wisdom;
    npcName.textContent = name;
}

function generateNewNpc() {
    const aligment = generateNPCAligment();
    const job = generateNPCJob();
    const strength = generateNPCStats();
    const dextarity = generateNPCStats();
    const constution = generateNPCStats();
    const inteligence = generateNPCStats();
    const wisdom = generateNPCStats();
    const charisma = generateNPCStats();
    const name = generateNPCName();

    npcAligment.textContent = aligment;
    npcJob.textContent = job;
    npcCha.textContent = charisma;
    npcCon.textContent = constution;
    npcDex.textContent = dextarity;
    npcInt.textContent = inteligence;
    npcStr.textContent = strength;
    npcWis.textContent = wisdom;
    npcName.textContent = name;
}


function generateNewLoot() {
    const weapon = getRandomWeapon();
    const bonus = getWeaponBonus();
    const cash = getRandomCash();
    const dimesnionUpgrade = getRandomDimensionUpgrade();
    const shipPart = getRandomShipPart();
    const shipUpgrade = getRandomShipUpgrade();

    weaponType.textContent = weapon;
    weaponBonus.textContent = bonus;
    moneyAmount.textContent = cash;
    dimensionUpgrades.textContent = dimesnionUpgrade;
    shipParts.textContent = shipPart;
    shipUpgrades.textContent = shipUpgrade;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);  
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`
}


function getRandomPopulation() {
    const population = Math.floor(Math.random() * (10000000000 - 1000000 + 1)) + 1000000; 
    return population.toLocaleString()
}


function getRandomSector() {
    const sectors = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Omega'];
    const randomIndex = Math.floor(Math.random() * sectors.length);
    return sectors[randomIndex]
}


function getRandomCoordinates() {
    const x = Math.floor(Math.random() * 10000); 
    const y = Math.floor(Math.random() * 10000); 
    return `X: ${x}, Y: ${y}`
}


function getRandomWorldType() {
    const types = ['Tech-based', 'Magic-based'];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex]
}


function getRandomDangerRating() {
    const rating = Math.floor(Math.random() * 5) + 1; 
    return rating
}


function getRandomWeapon() {
    const weapon = ['Dagger', 'Handaxes', 'Quarterstaff', 'Spear', 'Crossbow', 'Longbow', 'Longsword', 'Greatsword', 'Trident'];
    const randomIndex = Math.floor(Math.random() * weapon.length);
    return weapon[randomIndex]
}

function getWeaponBonus() {
    const bonus = ['+1', 'Magical', '+2', 'Silver', 'Light'];
    const randomIndex = Math.floor(Math.random() * bonus.length);
    return bonus[randomIndex]
}

function getRandomCash() {
    const cash = Math.floor(Math.random() * (1000 - 100 + 1)) + 10; 
    return cash.toLocaleString()
}

function getRandomDimensionUpgrade() {
    const dimesnionUpgrade = ['Size', 'Terrain', 'Building', 'Equipment', 'Misc.'];
    const randomIndex = Math.floor(Math.random() * dimesnionUpgrade.length);
    return dimesnionUpgrade[randomIndex]
}

function getRandomShipPart() {
    const shipParts = ['Drive', 'Guidence', 'Weapon', 'Material', 'Engine'];
    const randomIndexParts = Math.floor(Math.random() * shipParts.length);
    return shipParts[randomIndexParts]
}

function getRandomShipUpgrade() {
    const shipUpgrades = ['Weapons', 'Speed', 'Radar', 'Fuel', 'Hull'];
    const randomIndex = Math.floor(Math.random() * shipUpgrades.length);
    return shipUpgrades[randomIndex]
}

function generatePlanetEnviorment() {
    const environments = [
        "a lush jungle filled with exotic creatures",
        "a barren wasteland with harsh storms",
        "a frozen tundra where ancient ruins lie buried",
        "a vibrant ocean world teeming with life",
        "a volcanic planet with rivers of lava",
        "a desert planet with towering crystal formations",
        "a gas giant with floating islands of solid matter",
        "a planet covered in bioluminescent flora that glows at night"
    ];
    const environment = environments[Math.floor(Math.random() * environments.length)];
    return environment
}

function generatePlanetDiscovery() {
    const discoveries = [
        "was discovered by a team of explorers seeking new worlds",
        "was once home to an advanced civilization that mysteriously vanished",
        "was the site of a great battle between two alien factions",
        "was colonized by humans in the year 3021",
        "was hidden from the galaxy for centuries due to a cloaking technology",
        "was found to contain a portal to another dimension",
        "was the first planet to be inhabited by a synthetic life form",
        "was discovered by accident when a spaceship crashed on its surface"
    ];
    const discovery = discoveries[Math.floor(Math.random() * discoveries.length)];
    return discovery
}

function generatePlanetInhabitants() {
    const inhabitants = [
        "a race of intelligent beings known for their wisdom",
        "giant, sentient plants that communicate through pheromones",
        "mechanical drones left behind by a long-gone civilization",
        "a nomadic tribe that travels across the planet's surface",
        "a solitary scientist studying the planet's unique properties",
        "a group of telepathic beings that can manipulate time",
        "a civilization of underwater dwellers who build intricate cities",
        "a species of small, furry creatures that are known for their mischief"
    ];
    const inhabitant = inhabitants[Math.floor(Math.random() * inhabitants.length)];
    return inhabitant
}

function generatePlanetEvent() {
    const events = [
        "a catastrophic event that reshaped the planet's landscape",
        "the discovery of a rare mineral that changed the course of history",
        "a festival celebrated by the inhabitants every hundred years",
        "the arrival of a mysterious traveler who brought new technology",
        "a natural disaster that nearly wiped out the native species",
        "the awakening of an ancient guardian that protects the planet",
        "the establishment of a trade route that connected it to other worlds",
        "the signing of a peace treaty between rival factions on the planet"
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    return event
}

function generateNPCAligment() {
    const aligments = ["LG", "NG", "CG", "LN", "TN", "CN", "LE", "NE", "CE"];
    const randomIndex = Math.floor(Math.random() * aligments.length);
    return aligments[randomIndex]
}

function generateNPCJob() {
    const jobs = ["Mayor", "Chef", "Blacksmith", "Banker", "Mehcanic", "Mage", "Doctor"];
    const randomIndex =  Math.floor(Math.random() * jobs.length);
    return jobs[randomIndex]
}

function generateNPCStats() {
    const stats = ["+1", "+2", "+3", "+4", "+5"];
    const randomIndex = Math.floor(Math.random() * stats.length);
    return stats[randomIndex]
}

function generateNPCName() {
    const prefixes = [
        "Al", "El", "Thal", "Gor", "Zar", "Fen", "Lun", "Mor", "Kra", "Dra",
        "Syl", "Nim", "Tir", "Vex", "Jor", "Ryn", "Xan", "Vor", "Kyl", "Zyn",
        "Ael", "Bryn", "Cyr", "Drax", "Elys", "Fyn", "Gwyn", "Hyl", "Ith", "Jyn"
    ];

    const infixes = [
        "an", "el", "or", "is", "ar", "en", "ith", "as", "ra", "th",
        "yn", "or", "il", "en", "ae", "ur", "is", "al", "on", "as"
    ];

    const suffixes = [
        "dor", "wen", "thas", "riel", "nox", "ian", "ara", "ion", "el", "is",
        "ara", "thiel", "wyn", "ra", "or", "is", "en", "ael", "ith", "us",
        "thar", "lyn", "mir", "sor", "vyn", "diel", "fiel", "gorn", "tiel", "wen"
    ];
    const numberOfNames = Math.floor(Math.random() * 2) + 1;
    const names = [];

    for (let i = 0; i < numberOfNames; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const infix = infixes[Math.floor(Math.random() * infixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        names.push(prefix + infix + suffix);
    }
    return names.join(' ');
}