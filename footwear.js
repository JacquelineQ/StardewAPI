const footwear = [
{
    name: "Sneakers",
    description: "A little flimsy... but fashionable!",
    stats: "Defense (+1)",
    source: "Purchased from Adventurer's Guild after completing the 'Initiation' quest, Random Monster or crate/barrel drop on Floor 1-40 of The Mines, Fishing Treasure Chests",
    purchasePrice: "500g",
    sellPrice: "50g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Sneakers.png"
},
{
    name: "Rubber-Boots",
    description: "Protection from the elements.",
    stats: "Immunity (+1)",
    source: "Drop from rare Green Slimes, Fishing Treasure Chests",
    purchasePrice: "N/A",
    sellPrice: "50g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e8/Rubber_Boots.png"
},
{
    name: "Leather-Boots",
    description: "The leather is very supple.",
    stats: "Defense (+1), Immunity (+1)",
    source: "Purchased from Adventurer's Guild after reaching Floor 10 in The Mines, Reward from Chest at Floor 10 of The Mines, Fishing Treasure Chests",
    purchasePrice: "500g",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fd/Leather_Boots.png"
},
{
    name: "Work-Boots",
    description: "Steel-toed for extra protection.",
    stats: "Defense (+2)",
    source: "Fishing Treasure Chests",
    purchasePrice: "N/A",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/53/Work_Boots.png"
},
{
    name: "Combat-Boots",
    description: "Reinforced with iron mesh.",
    stats: "Defense (+3)",
    source: "Purchased from Adventurer's Guild after reaching Floor 40 in The Mines, Fishing Treasure Chests",
    purchasePrice: "1,250g",
    sellPrice: "150g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/63/Combat_Boots.png"
},
{
    name: "Tundra-Boots",
    description: "The fuzzy lining keeps your ankles so warm.",
    stats: "Defense (+2), Immunity (+1)",
    source: "Reward from Chest at Floor 50 of The Mines, Purchased from Adventurer's Guild after reaching Floor 50 in The Mines",
    purchasePrice: "750g",
    sellPrice: "150g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/93/Tundra_Boots.png"
},
{
    name: "Leprechaun-Shoes",
    description: "The buckle's made of solid gold.",
    stats: "Defense (+2), Immunity (+1)",
    source: "Trains",
    purchasePrice: "N/A",
    sellPrice: "150g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Leprechaun_Shoes.png"
},
{
    name: "Thermal-Boots",
    description: "Designed with extreme weather in mind.",
    stats: "Defense (+1), Immunity (+2)",
    source: "Random drop from monsters in The Mines, Fishing Treasure Chests",
    purchasePrice: "N/A",
    sellPrice: "150g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Thermal_Boots.png"
},
{
    name: "Cowboy-Boots",
    description: "It's the height of country fashion.",
    stats: "Defense (+2), Immunity (+2)",
    source: "Unobtainable",
    purchasePrice: "N/A",
    sellPrice: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/15/Cowboy_Boots.png"
},
{
    name: "Dark-Boots",
    description: "Made from thick black leather.",
    stats: "Defense (+4), Immunity (+2)",
    source: "Purchased from Adventurer's Guild after reaching Floor 80 in The Mines, Fishing Treasure Chests",
    purchasePrice: "2,500g",
    sellPrice: "300g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8d/Dark_Boots.png"
},
{
    name: "Firewalker-Boots",
    description: "It's said these can withstand the hottest magma.",
    stats: "Defense (+3), Immunity (+3)",
    source: "Reward from Chest at Floor 80 of The Mines, Fishing Treasure Chests, Purchased from Adventurer's Guild after reaching Floor 80 in The Mines",
    purchasePrice: "2,000g",
    sellPrice: "300g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fa/Firewalker_Boots.png"
},
{
    name: "Genie-Shoes",
    description: "A curious energy permeates the fabric.",
    stats: "Defense (+1), Immunity (+6)",
    source: "Skull Cavern drops, Fishing Treasure Chests",
    purchasePrice: "N/A",
    sellPrice: "350g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/98/Genie_Shoes.png"
},
{
    name: "Space-Boots",
    description: "An iridium weave gives them a purple sheen.",
    stats: "Defense (+4), Immunity (+4)",
    source: "Purchased from Adventurer's Guild after reaching Floor 110 in The Mines, Reward from Chest at Floor 110 of The Mines",
    purchasePrice: "5,000g",
    sellPrice: "400g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Space_Boots.png"
},
{
    name: "Emily's-Magic-Boots",
    description: "Made with love by Emily. 100% compostable!",
    stats: "Defense (+4), Immunity (+4)",
    source: "Given during Emily's 14-heart event",
    purchasePrice: "N/A",
    sellPrice: "400g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ac/Emily%27s_Magic_Boots.png"
},
{
    name: "Cinderclown-Shoes",
    description: "These magic shoes belonged to a famous Dwarvish jester.",
    stats: "Defense (+6), Immunity (+5)",
    source: "Volcano Dungeon Shop",
    purchasePrice: "Cinder Shard (100)",
    sellPrice: "550g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/94/Cinderclown_Shoes.png"
},
{
    name: "Mermaid-Boots",
    description: "Mermaid scales gives these boots a protective aura.",
    stats: "Defense (+5), Immunity (+8)",
    source: "From a treasure chest in the Volcano Dungeon",
    purchasePrice: "N/A",
    sellPrice: "650g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/98/Mermaid_Boots.png"
},
{
    name: "Dragonscale-Boots",
    description: "These shimmering boots are extremely tough.",
    stats: "Defense (+7)",
    source: "From a treasure chest in the Volcano Dungeon",
    purchasePrice: "N/A",
    sellPrice: "350g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Dragonscale_Boots.png"
},
{
    name: "Crystal-Shoes",
    description: "These sparkling shoes will keep your feet very safe.",
    stats: "Defense (+3), Immunity (+5)",
    source: "Skull Cavern drops, Possible reward from Chest at Floor 110 of The Mines (remixed mine rewards only)",
    purchasePrice: "N/A",
    sellPrice: "400g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/69/Crystal_Shoes.png"
}
];

module.exports = footwear;