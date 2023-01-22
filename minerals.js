const minerals = [

{
    name: "Quartz",
    type: "Foraged",
    description: "A clear crystal commonly found in caves and mines.",
    found: "The Mines (Floors 1-120), Garbage Can, Stone Golem (10%)",
    usedIn: "Geologist's Bundle, Refined Quartz, Fish Pond (Quest)",
    sellPrice: "25g",
    gemologistSellPrice: "32g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png"
},
{
    name: "Earth-Crystal",
    type: "Foraged",
    description: "A resinous substance found near the surface.",
    found: "The Mines (Floors 1-39), Duggy (10%), Haunted Skull (1.3%), Fishing Treasure Chest, Panning, Geode, Omni Geode, Garbage Can",
    usedIn: "Geologist's Bundle, Mayonnaise Machine, Sturdy Ring, Fish Pond (Quest)",
    sellPrice: "50g",
    gemologistSellPrice: "65g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png"
},
{
    name: "Frozen-Tear",
    type: "Foraged",
    description: "A crystal fabled to be the frozen tears of a yeti.",
    found: "The Mines (Floors 40-79), Fishing Treasure Chest, Panning, Frozen Geode, Omni Geode, Dust Sprite (2%), Garbage Can",
    usedIn: "Geologist's Bundle, Warrior Ring, Sebastian (Loved Gift), Fish Pond (Quest)",
    sellPrice: "75g",
    gemologistSellPrice: "97g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png"
},
{
    name: "Fire-Quartz",
    type: "Foraged",
    description: "A glowing red crystal commonly found near hot lava.",
    found: "The Mines (Floors 80-120), Fishing Treasure Chest, Panning, Magma Geode, Omni Geode, Garbage Can",
    usedIn: "Geologist's Bundle, Slime Egg-Press, Refined Quartz, Fish Pond (Quest)",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png"
},
{
    name: "Emerald",
    type: "Gem",
    description: "A precious stone with a brilliant green color.",
    found: "Emerald Node, Gem Node, Panning, Panning, Fishing Treasure Chest, Feast of the Winter Star",
    usedIn: "Clint, Dwarf, Emily, Penny (Loved Gift), Fish Pond (Quest), Forge weapons",
    sellPrice: "250g",
    gemologistSellPrice: "325g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png"
},
{
    name: "Aquamarine",
    type: "Gem",
    description: "A shimmery blue-green gem.",
    found: "Aquamarine Node, Gem Node, Panning, Garbage Can, Fishing Treasure Chest",
    usedIn: "Dye Bundle, Clint, Dwarf, Emily (Loved Gift), Marble Brazier, Fish Pond (Quest), Forge weapons",
    sellPrice: "180g",
    gemologistSellPrice: "234g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png"
},
{
    name: "Ruby",
    type: "Gem",
    description: "A precious stone that is sought after for its rich color and beautiful luster.",
    found: "Ruby Node, Gem Node, Panning, Garbage Can, Fishing Treasure Chest, Feast of the Winter Star",
    usedIn: "Clint, Dwarf, Emily (Loved Gift), Forge weapons",
    sellPrice: "250g",
    gemologistSellPrice: "325g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Ruby.png"
},
{
    name: "Amethyst",
    type: "Gem",
    description: "A purple variant of quartz.",
    found: "Amethyst Node, Gem Node, Green Slimes, Panning, Garbage Can, Fishing Treasure Chest",
    usedIn: "Abigail, Clint, Dwarf, Emily (Loved Gift), Fish Pond (Quest), Forge weapons",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png"
},
{
    name: "Topaz",
    type: "Gem",
    description: "Fairly common but still prized for its beauty.",
    found: "Topaz Node, Gem Node, Green Slimes, Panning, Garbage Can, Fishing Treasure Chest",
    usedIn: "Clint, Dwarf, Emily (Loved Gift), Fish Pond (Quest), Forge weapons",
    sellPrice: "80g",
    gemologistSellPrice: "104g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Topaz.png"
},
{
    name: "Jade",
    type: "Gem",
    description: "A pale green ornamental stone.",
    found: "Jade Node, Gem Node, Blue Slimes, Panning, Garbage Can, Fishing Treasure Chest, Feast of the Winter Star",
    usedIn: "Clint, Dwarf, Emily (Loved Gift), Fish Pond (Quest), Forge weapons",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Jade.png"
},
{
    name: "Diamond",
    type: "Gem",
    description: "A rare and valuable gem.",
    found: "Diamond Node, Gem Node, Panning, Garbage Can, Fishing Treasure Chest, Any monster after reaching the bottom of the mines (0.05%)",
    usedIn: "Ring of Yoba, Geode Crusher, Fairy Dust, Evelyn, Gus, Jodi, Krobus, Marnie, Maru, Penny, Willy (Loved Gift), Fish Pond (Quest), Forge weapons",
    sellPrice: "750g",
    gemologistSellPrice: "975g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png"
},
{
    name: "Prismatic Shard",
    type: "Gem",
    description: "A very rare and powerful substance with unknown origins.",
    found: "Iridium Node (4%), Mystic Stone (25%), Omni Geode (0.4%), Shadow Brute (0.05%), Shadow Shaman (0.05%), Mummy (0.1%), Serpent (0.1%), Fishing Treasure Chest, Any monster after reaching the bottom of the mines (0.05%)",
    usedIn: "Loved by all Villagers except Haley, who hates it., Obtain the Galaxy Sword in the Desert, Transform children into doves at the Dark Shrine of Selfishness, Enchant tools and weapons",
    sellPrice: "2000g",
    gemologistSellPrice: "2600g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/56/Prismatic_Shard.png"
},
{
    name: "Tigerseye",
    type: "Geode-Mineral",
    description: "A stripe of shimmering gold gives this gem a warm luster.",
    found: "Magma Geode, Omni Geode",
    usedIn: "Sam (Loved Gift)",
    sellPrice: "275g",
    gemologistSellPrice: "357g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Tigerseye.png"
},
{
    name: "Opal",
    type: "Geode-Mineral",
    description: "Its internal structure causes it to reflect a rainbow of light.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3c/Opal.png"
},
{
    name: "Fire-Opal",
    type: "Geode-Mineral",
    description: "A rare variety of opal, named for its red spots.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "350g",
    gemologistSellPrice: "455g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/60/Fire_Opal.png"
},
{
    name: "Alamite",
    type: "Geode-Mineral",
    description: "Its distinctive fluorescence makes it a favorite among rock collectors.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Alamite.png"
},
{
    name: "Bixite",
    type: "Geode-Mineral",
    description: "A dark metallic Mineral sought after for its cubic structure.",
    found: "Magma Geode, Omni Geode, Black Slime",
    usedIn: "N/A",
    sellPrice: "300g",
    gemologistSellPrice: "390g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/98/Bixite.png"
},
{
    name: "Baryte",
    type: "Geode-Mineral",
    description: "The best specimens resemble a desert rose.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "50g",
    gemologistSellPrice: "65g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Baryte.png"
},
{
    name: "Aerinite",
    type: "Geode-Mineral",
    description: "These crystals are curiously light.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "125g",
    gemologistSellPrice: "162g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6b/Aerinite.png"
},
{
    name: "Calcite",
    type: "Geode-Mineral",
    description: "This yellow crystal is speckled with shimmering nodules.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "75g",
    gemologistSellPrice: "97g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/97/Calcite.png"
},
{
    name: "Dolomite",
    type: "Geode-Mineral",
    description: "It can occur in coral reefs, often near an underwater volcano.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "300g",
    gemologistSellPrice: "390g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Dolomite.png"
},
{
    name: "Esperite",
    type: "Geode-Mineral",
    description: "The crystals glow bright green when stimulated.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Esperite.png"
},
{
    name: "Fluorapatite",
    type: "Geode-Mineral",
    description: "Small amounts are found in human teeth.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fluorapatite.png"
},
{
    name: "Geminite",
    type: "Geode-Mineral",
    description: "Occurs in brilliant clusters.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/54/Geminite.png"
},
{
    name: "Helvite",
    type: "Geode-Mineral",
    description: "It grows in a triangular column.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "450g",
    gemologistSellPrice: "585g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Helvite.png"
},
{
    name: "Jamborite",
    type: "Geode-Mineral",
    description: "The crystals are so tightly packed it almost looks fuzzy.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Jamborite.png"
},
{
    name: "Jagoite",
    type: "Geode-Mineral",
    description: "A high volume of tiny crystals makes it very glittery.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "115g",
    gemologistSellPrice: "149g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Jagoite.png"
},
{
    name: "Kyanite",
    type: "Geode-Mineral",
    description: "The geometric faces are as smooth as glass.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "250g",
    gemologistSellPrice: "325g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e4/Kyanite.png"
},
{
    name: "Lunarite",
    type: "Geode-Mineral",
    description: "The cratered white orbs form a tight cluster.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/06/Lunarite.png"
},
{
    name: "Malachite",
    type: "Geode-Mineral",
    description: "A popular ornamental stone, used in sculpture and to make green paint.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Malachite.png"
},
{
    name: "Neptunite",
    type: "Geode-Mineral",
    description: "A jet-black crystal that is unusually reflective.",
    found: "Magma Geode, Omni Geode, Black Slimes",
    usedIn: "N/A",
    sellPrice: "400g",
    gemologistSellPrice: "520g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/05/Neptunite.png"
},
{
    name: "Lemon Stone",
    type: "Geode-Mineral",
    description: "Some claim the powdered crystal is a dwarvish delicacy.",
    found: "Magma Geode, Omni Geode",
    usedIn: "Dwarf (Loved Gift)",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/31/Lemon_Stone.png"
},
{
    name: "Nekoite",
    type: "Geode-Mineral",
    description: "The delicate shards form a tiny pink meadow.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "80g",
    gemologistSellPrice: "104g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/53/Nekoite.png"
},
{
    name: "Orpiment",
    type: "Geode-Mineral",
    description: "Despite its high toxicity, this Mineral is widely used in manufacturing and folk medicine.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "80g",
    gemologistSellPrice: "104g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/41/Orpiment.png"
},
{
    name: "Petrified Slime",
    type: "Geode-Mineral",
    description: "This little guy may be 100,000 years old.",
    found: "Geode, Omni Geode, Slime Ball",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "120g",
    gemologistSellPrice: "156g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/24/Petrified_Slime.png"
},
{
    name: "Thunder Egg",
    type: "Geode-Mineral",
    description: "According to legend, angry thunder spirits would throw these stones at one another.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/14/Thunder_Egg.png"
},
{
    name: "Pyrite",
    type: "Geode-Mineral",
    description: "Commonly known as 'Fool's Gold'.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "120g",
    gemologistSellPrice: "156g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pyrite.png"
},
{
    name: "Ocean-Stone",
    type: "Geode-Mineral",
    description: "An old legend claims these stones are the mosaics of ancient mermaids.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "220g",
    gemologistSellPrice: "286g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Ocean_Stone.png"
},
{
    name: "Ghost-Crystal",
    type: "Geode-Mineral",
    description: "There is an aura of coldness around this crystal.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d0/Ghost_Crystal.png"
},
{
    name: "Jasper",
    type: "Geode-Mineral",
    description: "When polished, this stone becomes attractively luminous. Prized by ancient peoples for thousands of years.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Jasper.png"
},
{
    name: "Celestine",
    type: "Geode-Mineral",
    description: "Some early life forms had bones made from this.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "125g",
    gemologistSellPrice: "162g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/19/Celestine.png"
},
{
    name: "Marble",
    type: "Geode-Mineral",
    description: "A very popular material for sculptures and construction.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "Marble Brazier",
    sellPrice: "110g",
    gemologistSellPrice: "143g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/82/Marble.png"
},
{
    name: "Sandstone",
    type: "Geode-Mineral",
    description: "A common type of stone with red and brown striations.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "60g",
    gemologistSellPrice: "78g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d6/Sandstone.png"
},
{
    name: "Granite",
    type: "Geode-Mineral",
    description: "A speckled Mineral that is commonly used in construction.",
    found: "Geode, Omni Geode",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "75g",
    gemologistSellPrice: "97g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Granite.png"
},
{
    name: "Basalt",
    type: "Geode-Mineral",
    description: "Forms near searing hot magma.",
    found: "Magma Geode, Omni Geode",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "175g",
    gemologistSellPrice: "227g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/22/Basalt.png"
},
{
    name: "Limestone",
    type: "Geode-Mineral",
    description: "A very common type of stone. It's not worth very much.",
    found: "Geode, Omni Geode",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "15g",
    gemologistSellPrice: "19g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Limestone.png"
},
{
    name: "Soapstone",
    type: "Geode-Mineral",
    description: "Because of its relatively soft consistency, this stone is very popular for carving.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "120g",
    gemologistSellPrice: "156g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/81/Soapstone.png"
},
{
    name: "Hematite",
    type: "Geode-Mineral",
    description: "An iron-based Mineral with interesting magnetic properties.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "150g",
    gemologistSellPrice: "195g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Hematite.png"
},
{
    name: "Mudstone",
    type: "Geode-Mineral",
    description: "A fine-grained rock made from ancient clay or mud.",
    found: "Geode, Omni Geode",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "25g",
    gemologistSellPrice: "35g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Mudstone.png"
},
{
    name: "Obsidian",
    type: "Geode-Mineral",
    description: "A volcanic glass that forms when lava cools rapidly.",
    found: "Magma Geode, Omni Geode",
    usedIn: "Sebastian (Loved Gift)",
    sellPrice: "200g",
    gemologistSellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png"
},
{
    name: "Slate",
    type: "Geode-Mineral",
    description: "It's extremely resistant to water, making it a good roofing material.",
    found: "Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "85g",
    gemologistSellPrice: "110g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/97/Slate.png"
},
{
    name: "Fairy-Stone",
    type: "Geode-Mineral",
    description: "An old miner's song suggests these are made from the bones of ancient fairies.",
    found: "Frozen Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "250g",
    gemologistSellPrice: "325g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Fairy_Stone.png"
},
{
    name: "Star-Shards",
    type: "Geode-Mineral",
    description: "No one knows how these form. Some scientists claim that the microscopic structure displays unnatural regularity.",
    found: "Magma Geode, Omni Geode",
    usedIn: "N/A",
    sellPrice: "500g",
    gemologistSellPrice: "650g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Star_Shards.png"
},
{
    name: "Geode",
    type: "Geode",
    description: "A blacksmith can break this open for you.",
    found: "The Mines (Floors 1-39), Duggy (25%), Tilling on The Farm, Fishing Treasure Chest, Feast of the Winter Star",
    usedIn: "Fish Pond (Quest)",
    sellPrice: "N/A",
    gemologistSellPrice: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/43/Geode.png"
},
{
    name: "Frozen-Geode",
    type: "Geode",
    description: "A blacksmith can break this open for you.",
    found: "The Mines (Floor 41-79), Fishing Treasure Chest, Tilling on The Farm (Winter), Feast of the Winter Star",
    usedIn: "Field Research Bundle, Fish Pond (Quest)",
    sellPrice: "N/A",
    gemologistSellPrice: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/bf/Frozen_Geode.png"
},
{
    name: "Magma-Geode",
    type: "Geode",
    description: "A blacksmith can break this open for you.",
    found: "The Mines (Floor 81-120), Boxes/barrels in the Skull Cavern, Fishing Treasure Chest, Tilling on The Farm (Winter), Feast of the Winter Star",
    usedIn: "N/A",
    sellPrice: "N/A",
    gemologistSellPrice: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/89/Magma_Geode.png"
},
{
    name: "Omni-Geode",
    type: "Geode",
    description: "A blacksmith can break this open for you. These geodes contain a wide variety of Minerals.",
    found: "The Mines, Skull Cavern, Carbon Ghost, Panning, The Oasis (Wednesdays), Krobus (Tuesdays), Ginger Island Artifact Spots, Volcano Dungeon",
    usedIn: "Clint, Dwarf (Loved Gift)",
    sellPrice: "N/A",
    gemologistSellPrice: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/09/Omni_Geode.png"
}
];

module.exports = minerals;