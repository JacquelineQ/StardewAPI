const rings = [
{
    name: "Small-Glow-Ring",
    description: "Emits a small, constant light.",
    effect: "Emits 5 radius circle of light. Light effect stacks with other glow rings",
    found: "Killing Slimes in The Mines before level 40, Fishing Treasure Chests, Reward for completing the Bundle Night Fishing Bundle",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "50g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Small_Glow_Ring.png"
},
{
    name: "Glow-Ring",
    description: "Emits a constant light.",
    effect: "Emits 10 radius circle of light. Light effect stacks with other glow rings.",
    found: "Killing Slimes in The Mines after level 40, Killing a Skeleton in The Mines level 70-79, Destroying various barrels and boxes in The Mines",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Glow_Ring.png"
},
{
    name: "Small-Magnet-Ring",
    description: "Slightly increases your radius for collecting items.",
    effect: "Increases Magnetism by one tile. Stacks with itself, the normal Magnet Ring, and the Iridium Band.",
    found: "Reward for completing the Adventurer's Bundle, Fishing Treasure Chests, Destroying various barrels and boxes in The Mines",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "50g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/25/Small_Magnet_Ring.png"
},
{
    name: "Magnet-Ring",
    description: "Increases your radius for collecting items.",
    effect: "Increases Magnetism by two tiles. Stacks with itself, the Small Magnet Ring, and the Iridium Band.",
    found: "Enemy drops in The Mines between levels 40-80, Destroying various barrels and boxes in The Mines",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/04/Magnet_Ring.png"
},
{
    name: "Slime-Charmer-Ring",
    description: "Prevents damage from slimes.",
    effect: "Prevents damage from Slimes and prevents the Slimed Buff.",
    found: "Reward for eradicating 1000 Slimes at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "25,000g",
    sellPrice: "350g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/51/Slime_Charmer_Ring.png"
},
{
    name: "Warrior-Ring",
    description: "Occasionally infuses the wearer with 'warrior energ' after slaying a monster.",
    effect: "Has a chance of giving the Warrior Energy buff after slaying a monster.",
    found: "Crafting with Combat Level 4",
    ingredients: "Iron Bar (10), Coal (25), Frozen Tear (10)",
    purchasePrice: "N/A",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/13/Warrior_Ring.png"
},
{
    name: "Vampire-Ring",
    description: "Gain a little health every time you slay a monster.",
    effect: "Restores 2 health after slaying a monster.",
    found: "Reward for eradicating 200 Bats at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "15,000g",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Vampire_Ring.png"
},
{
    name: "Savage-Ring",
    description: "Gain a short speed boost whenever you slay a monster.",
    effect: "Gives a 3-second Speed.png Speed (+2) Buff after slaying a monster.",
    found: "Reward for eradicating 150 Void Spirits (Shadow Shaman / Shadow Brutes) at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "25,000g",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/55/Savage_Ring.png"
},
{
    name: "Ring-of-Yoba",
    description: "Occasionally shields the wearer from damage.",
    effect: "Has a chance of giving the Yoba's Blessing buff after taking damage. The lower your health and the higher your luck, the higher the chance of receiving this buff.",
    found: "Crafting with Combat Level 7",
    ingredients: "Iron Bar (5), Gold Bar (5), Diamond (1)",
    purchasePrice: "N/A",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/21/Ring_of_Yoba.png"
},
{
    name: "Sturdy-Ring",
    description: "Cuts the duration of negative status effects in half.",
    effect: "The duration of negative Buffs (e.g., Slimed Buff, Jinxed Buff) are cut in half.",
    found: "Crafting with Combat Level 1",
    ingredients: "Copper Bar (2), Bug Meat (25), Slime (25)",
    purchasePrice: "N/A",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Sturdy_Ring.png"
},
{
    name: "Burglar's-Ring",
    description: "Monsters have a greater chance of dropping loot.",
    effect: "Monsters drop items more often. The game rolls twice on the monster's drop table when equipped so items have a chance to drop twice.",
    found: "Reward for eradicating 500 Dust Sprites at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "20,000g",
    sellPrice: "750g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Burglar%27s_Ring.png"
},
{
    name: "Iridium-Band",
    description: "Glows, attracts items, and increases attack damage by 10%.",
    effect: "Combines the effect of the Glow Ring, the Magnet Ring, and the Ruby Ring.",
    found: "Crafting with Combat Level 9, Fishing Treasure Chests",
    ingredients: "Iridium Bar (5), Solar Essence (50), Void Essence (50)",
    purchasePrice: "N/A",
    sellPrice: "1,00g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/77/Iridium_Band.png"
},
{
    name: "Jukebox-Ring",
    description: "Plays a random assortment of music you've heard.",
    effect: "Unknown",
    found: "Unobtainable",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/13/Jukebox_Ring.png"
},
{
    name: "Amethyst-Ring",
    description: "Increases knockback by 10%.",
    effect: "Increases knockback by 10%.",
    found: "Purchased from the Adventurer's Guild after completing the 'Initiation' Quest, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "1000g",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Amethyst_Ring.png"
},
{
    name: "Topaz-Ring",
    description: "Increases weapon precision by 10%.",
    effect: "Decreases the chance that a strike will cause no damage by 10% while equipped",
    found: "Purchased from the Adventurer's Guild after completing the 'Initiation' Quest, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "1000g",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8a/Topaz_Ring.png"
},
{
    name: "Aquamarine-Ring",
    description: "Increases critical strike chance by 10%.",
    effect: "Increases critical strike chance by 10% (Multiplicative, like the Scout Profession).",
    found: "Purchased from the Adventurer's Guild after reaching level 40 in The Mines, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "2,500g",
    sellPrice: "200g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8d/Aquamarine_Ring.png"
},
{
    name: "Jade-Ring",
    description: "Increases critical strike power by 10%.",
    effect: "Increases Critical Strike Power by 10%.",
    found: "Purchased from the Adventurer's Guild after reaching level 40 in The Mines, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "2,500g",
    sellPrice: "200g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d8/Jade_Ring.png"
},
{
    name: "Emerald-Ring",
    description: "Increases weapon speed by 10%.",
    effect: "Increases weapon speed by 10%.",
    found: "Purchased from the Adventurer's Guild after reaching level 80 in The Mines, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "5,000g",
    sellPrice: "300g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8a/Emerald_Ring.png"
},
{
    name: "Ruby-Ring",
    description: "Increases attack by 10%.",
    effect: "Increases attack by 10%.",
    found: "Purchased from the Adventurer's Guild after reaching level 80 in The Mines, Fishing Treasure Chests",
    ingredients: "N/A",
    purchasePrice: "5,000g",
    sellPrice: "300g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Ruby_Ring.png"
},
{
    name: "Wedding-Ring",
    description: "An old Zuzu City tradition... It's used to ask for another farmer's hand in marriage.",
    effect: "Allows you to propose marriage to another player in a Multiplayer game. No effect when worn.",
    found: "Purchase crafting recipe from Traveling Cart for 500g",
    ingredients: "Iridium Bar (5), Prismatic Shard (1)",
    purchasePrice: "N/A",
    sellPrice: "1,000g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Wedding_Ring.png"
},
{
    name: "Crabshell-Ring",
    description: "The top of the ring is made from enchanted crab shell.",
    effect: "Increases Defense by +5.",
    found: "Reward for eradicating 60 Rock Crabs at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "15,000g",
    sellPrice: "1,000g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/eb/Crabshell_Ring.png"
},
{
    name: "Napalm-Ring",
    description: "When you defeat an enemy, they explode.",
    effect: "Slain monsters will explode, destroying objects and damaging enemies. Does not damage the player.",
    found: "Reward for eradicating 250 Serpents at the Adventurer's Guild",
    ingredients: "N/A",
    purchasePrice: "30,000g",
    sellPrice: "1,000g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/82/Napalm_Ring.png"
},
{
    name: "Thorns-Ring",
    description: "When enemies damage you, they will take damage themselves.",
    effect: "Monsters take damage equal to the unmitigated damage done to the player.",
    found: "Crafting with Combat Level 7",
    ingredients: "Bone Fragment (50), Stone (50), Gold Bar (1)",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Thorns_Ring.png"
},
{
    name: "Lucky-Ring",
    description: "The lunar emblem is said to bring good luck to whoever wears it.",
    effect: "Increases Luck by +1.",
    found: "Dropped as a special item in the Skull Cavern, or rarely by panning.",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4c/Lucky_Ring.png"
},
{
    name: "Hot-Java-Ring",
    description: "Greatly increases your chance to find coffee drinks when slaying monsters.",
    effect: "Increases the chance to find Coffee and Triple Shot Espresso when slaying monsters.",
    found: "Found in chests in the Volcano Dungeon",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/af/Hot_Java_Ring.png"
},
{
    name: "Protection-Ring",
    description: "Stay invincible for a little while longer after taking damage.",
    effect: "Increases invincibility time after taking damage by 0.4 seconds.",
    found: "Found in chests in the Volcano Dungeon",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/16/Protection_Ring.png"
},
{
    name: "Soul-Sapper-Ring",
    description: "Gain a little bit of energy every time you slay a monster.",
    effect: "Gain 4 Energy after slaying a monster.",
    found: "Found in chests in the Volcano Dungeon",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c8/Soul_Sapper_Ring.png"
},
{
    name: "Phoenix-Ring",
    description: "Once a day, regain some health after being knocked out in combat.",
    effect: "Once a day, be restored to 50% health after being knocked out.",
    found: "Found in chests in the Volcano Dungeon",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e3/Phoenix_Ring.png"
},
{
    name: "Immunity-Band",
    description: "The top of the ring is made from enchanted purple wool.",
    effect: "Increases Immunity by +4.",
    found: "Special item in the Skull Cavern and level 100+ of The Mines",
    ingredients: "N/A",
    purchasePrice: "N/A",
    sellPrice: "250g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/09/Immunity_Band.png"
},
{
    name: "Glowstone-Ring",
    description: "Emits a constant light, and also increases your radius for collecting items.",
    effect: "A combination of the Glow and Magnet rings: emits 10 radius circle of light and increases Magnetism.png Magnetism by two tiles.",
    found: "Crafting with Mining Level 4",
    ingredients: "Solar Essence (5), Iron Bar (5)",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/65/Glowstone_Ring.png"
}
];

module.exports = rings;