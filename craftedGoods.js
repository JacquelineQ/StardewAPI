//Types: Bomb, Fence, Sprinkler, Artisan Equipment, Fertilizer, Seed, Decor, Fishing, Rings, Edible, 
    //Consumable, Lighting, Refining Equpiment, Furniture, Storage, Signs, Misc.

//Skipping rings for now


const craftedGoods = [
    {
        name: "Cherry-Bomb",
        type: "Bomb",
        description: "Generates a small explosion. Stand back!",
        ingredients: "Copper Ore (4), Coal (1)",
        amountProduced: 1,
        recipeSource: "Mining Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Cherry_Bomb.png"
    },
    {
        name: "Bomb",
        type: "Bomb",
        description: "Generates an explosion. Watch out!",
        ingredients: "Iron Ore (4), Coal (1)",
        amountProduced: 1,
        recipeSource: "Mining Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Bomb.png"

    },
    {
        name: "Mega-Bomb",
        type: "Bomb",
        description: "Generates a powerful explosion. Use with extreme caution.",
        ingredients: "Gold Ore (4), Solar Essence (1), Void Essence (1)",
        amountProduced: 1,
        recipeSource: "Mining Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4f/Mega_Bomb.png"
    },
    {
        name: "Gate",
        type: "Fence",
        description: "Allows you to pass through a fence.",
        ingredients: "Wood (10)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/94/Gate.png"
    },
    {
        name: "Wood-Fence",
        type: "Fence",
        description: "Keeps grass and animals contained!",
        ingredients: "Wood (2)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Wood_Fence.png"
    },
    {
        name: "Stone-Fence",
        type: "Fence",
        description: "Lasts longer than a wood fence.",
        ingredients: "Stone (2)",
        amountProduced: 1,
        recipeSource: "Farming Level 2",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Stone_Fence.png"
    },
    {
        name: "Iron-Fence",
        type: "Fence",
        description: "Lasts longer than a stone fence.",
        ingredients: "Iron Bar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Iron_Fence.png"
    },
    {
        name: "Hardwood-Fence",
        type: "Fence",
        description: "The most durable type of fence.",
        ingredients: "Hardwood (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Hardwood_Fence.png"
    },
    {
        name: "Sprinkler",
        type: "Sprinkler",
        description: "Waters the 4 adjacent tiles every morning.",
        ingredients: "Copper Bar (1), Iron Bar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 3",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/08/Sprinkler.png"
    },
    {
        name: "Quality-Sprinkler",
        type: "Sprinkler",
        description: "Waters the 8 adjacent tiles every morning.",
        ingredients: "Iron Bar (1), Gold Bar (1), Refined Quartz (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/af/Quality_Sprinkler.png"
    },
    {
        name: "Iridium-Sprinkler",
        type: "Sprinkler",
        description: "Waters the 24 adjacent tiles every morning.",
        ingredients: "Gold Bar (1), Iridium Bar (1), Battery Pack (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 9",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/90/Iridium_Sprinkler.png"
    },
    {
        name: "Mayonnaise-Machine",
        type: "Artisan-Equipment",
        description: "Turns eggs into mayonnaise.",
        ingredients: "Wood (15), Stone (15), Earth Crystal (1), Copper Bar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 2",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Mayonnaise_Machine.png"
    },
    {
        name: "Bee-House",
        type: "Artisan-Equipment",
        description: "Place outside and wait for delicious honey! (Except in Winter).",
        ingredients: "Wood (40), Coal (8), Iron Bar (1), Maple Syrup (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 3",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Bee_House.png"
    },
    {
        name: "Preserves-Jar",
        type: "Artisan-Equipment",
        description: "Turns vegetables into pickles and fruit into jam.",
        ingredients: "Wood (50), Stone (40), Coal (8)",
        amountProduced: 1,
        recipeSource: "Farming Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Preserves_Jar.png"
    },
    {
        name: "Cheese-Press",
        type: "Artisan-Equipment",
        description: "Turns milk into cheese.",
        ingredients: "Wood (45), Stone (45), Hardwood (10), Copper Bar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/79/Cheese_Press.png"
    },
    {
        name: "Loom",
        type: "Artisan-Equipment",
        description: "Turns raw wool into fine cloth.",
        ingredients: "Wood (60), Fiber (30), Pine Tar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Loom.png"
    },
    {
        name: "Keg",
        type: "Artisan-Equipment",
        description: "Place a fruit or vegetable in here. Eventually it will turn into a beverage.",
        ingredients: "Wood (3), Copper Bar (1), Iron Bar (1), Oak Resin (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Keg.png"
    },
    {
        name: "Oil-Maker",
        type: "Artisan-Equipment",
        description: "Makes gourmet truffle oil.",
        ingredients: "Slime (50), Hardwood (20), Gold Bar (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Oil_Maker.png"
    },
    {
        name: "Cask",
        type: "Artisan-Equipment",
        description: "Use in the cellar to age products like wine and cheese.",
        ingredients: "Wood (20), Hardwood (1)",
        amountProduced: 1,
        recipeSource: "Farmhouse cellar upgrade.",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Cask.png"
    },
    {
        name: "Basic-Fertilizer",
        type: "Fertilizer",
        description: "Improves soil quality a little, increasing your chance to grow quality crops. Mix into tilled soil.",
        ingredients: "Sap (2)",
        amountProduced: 1,
        recipeSource: "Farming Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Basic_Fertilizer.png"
    },
    {
        name: "Quality-Fertilizer",
        type: "Fertilizer",
        description: "Improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.",
        ingredients: "Sap (2), Any Fish (1)",
        amountProduced: 1,
        recipeSource: "Farming Level 9",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a0/Quality_Fertilizer.png"
    },
    {
        name: "Deluxe-Fertilizer",
        type: "Fertilizer",
        description: "Greatly improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.",
        ingredients: "Iridium Bar (1), Sap (20)",
        amountProduced: 5,
        recipeSource: "Purchase from Mr. Qi for 20 Qi Gems",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1c/Deluxe_Fertilizer.png"
    },
    {
        name: "Speed-Gro",
        type: "Fertilizer",
        description: "Stimulates leaf production. Guaranteed to increase growth rate by at least 10%. Mix into tilled soil.",
        ingredients: "Pine Tar (1), Clam (1)",
        amountProduced: 5,
        recipeSource: "Farming Level 3",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/94/Speed-Gro.png"
    },
    {
        name: "Deluxe-Speed-Gro",
        type: "Fertilizer",
        description: "Stimulates leaf production. Guaranteed to increase growth rate by at least 25%. Mix into tilled soil.",
        ingredients: "Oak Resin (1), Coral (1)",
        amountProduced: 5,
        recipeSource: "Farming Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Deluxe_Speed-Gro.png"
    },
    {
        name: "Hyper-Speed-Gro",
        type: "Fertilizer",
        description: "Greatly stimulates leaf production. Guaranteed to increase growth rate by at least 33%. Mix into tilled soil.",
        ingredients: "Radioactive Ore (1), Bone Fragments (3), Solar Essence (1)",
        amountProduced: 1,
        recipeSource: "Purchase from Mr. Qi for 30 Qi Gems",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/53/Hyper_Speed-Gro.png"
    },
    {
        name: "Basic-Retaining-Soil",
        type: "Fertilizer",
        description: "This soil has a chance of staying watered overnight. Mix into tilled soil.",
        ingredients: "Stone (2)",
        amountProduced: 1,
        recipeSource: "Farming Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Basic_Retaining_Soil.png"
    },
    {
        name: "Quality-Retaining-Soil",
        type: "Fertilizer",
        description: "This soil has a good chance of staying watered overnight. Mix into tilled soil.",
        ingredients: "Stone (3), Clay (1)",
        amountProduced: 2,
        recipeSource: "Farming Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Quality_Retaining_Soil.png"
    },
    {
        name: "Deluxe-Retaining-Soil",
        type: "Fertilizer",
        description: "This soil has a 100% chance of staying watered overnight. Mix into tilled soil.",
        ingredients: "Stone (5), Fiber (3), Clay (1)",
        amountProduced: 1,
        recipeSource: "Purchased from Island Trader for 50 Cinder Shards",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Deluxe_Retaining_Soil.png"
    },
    {
        name: "Tree-Fertilizer",
        type: "Fertilizer",
        description: "Sprinkle on a wild tree to ensure rapid growth, even in winter. Doesn't work on fruit trees.",
        ingredients: "Stone (5), Fiber (5)",
        amountProduced: 1,
        recipeSource: "Foraging Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Tree_Fertilizer.png"
    },
    {
        name: "Spring-Seed",
        type: "Seed",
        description: "An assortment of wild spring Seed.",
        ingredients: "Wild Horseradish (1), Daffodil (1), Leek (1), Dandelion (1)",
        amountProduced: 10,
        recipeSource: "Foraging Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/39/Spring_Seed.png"
    },
    {
        name: "Summer-Seed",
        type: "Seed",
        description: "An assortment of wild summer Seed.",
        ingredients: "Spice Berry (1), Grape (1), Sweet Pea (1)",
        amountProduced: 10,
        recipeSource: "Foraging Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c4/Summer_Seed.png"
    },
    {
        name: "Fall-Seed",
        type: "Seed",
        description: "An assortment of wild fall Seed.",
        ingredients: "Common Mushroom (1), Wild Plum (1), Hazelnut (1), Blackberry (1)",
        amountProduced: 10,
        recipeSource: "Foraging Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/55/Fall_Seed.png"
    },
    {
        name: "Winter-Seed",
        type: "Seed",
        description: "An assortment of wild winter Seed.",
        ingredients: "Winter Root (1), Crystal Fruit (1), Snow Yam (1), Crocus (1)",
        amountProduced: 10,
        recipeSource: "Foraging Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Winter_Seed.png"
    },
    {
        name: "Ancient-Seed",
        type: "Seed",
        description: "Could these still grow?",
        ingredients: "Ancient Seed (1)",
        amountProduced: 1,
        recipeSource: "Donating Ancient Seed to museum",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Ancient_Seed.png"
    },
    {
        name: "Grass-Starter",
        type: "Seed",
        description: "Place this on your farm to start a new patch of grass.",
        ingredients: "Fiber (10)",
        amountProduced: 1,
        recipeSource: "Purchase from Pierre's for 1,000g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/14/Grass_Starter.png"
    },
    {
        name: "Tea-Sappling",
        type: "Seed",
        description: "Takes 20 days to mature. Produces tea leaves during the final week of each season, except winter. No watering necessary!",
        ingredients: "Wild Seeds (Any) (2), Fiber (5), Wood (5)",
        amountProduced: 1,
        recipeSource: "Mail the day after Caroline's 2-heart event",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/12/Tea_Sapling.png"
    },
    {
        name: "Fiber-Seeds",
        type: "Seed",
        description: "Plant these in any season. Does not require watering. Harvest with the scythe. Takes 7 days to grow.",
        ingredients: "Mixed Seeds (1), Sap (5), Clay (1)",
        amountProduced: 4,
        recipeSource: "Linus (Special Order)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/05/Fiber_Seeds.png"
    },
    {
        name: "Wood-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to decorate your floors.",
        ingredients: "Wood (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 100g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/58/Wood_Floor.png"
    },
    {
        name: "Rustic-Plank-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to decorate your floors.",
        ingredients: "Wood (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 200g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Rustic_Plank_Floor.png"
    },
    {
        name: "Straw-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Wood (1), Fiber (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 200g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/85/Straw_Floor.png"
    },
    {
        name: "Weathered-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Wood (1)",
        amountProduced: 1,
        recipeSource: "Dwarf (500g)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2a/Weathered_Floor.png"
    },
    {
        name: "Crystal-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Refined Quartx (1)",
        amountProduced: 5,
        recipeSource: "Krobus (500g)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Crystal_Floor.png"
    },
    {
        name: "Stone-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Stone (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop 100g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Stone_Floor.png"
    },
    {
        name: "Stone-Walkway",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Stone (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 200g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/51/Stone_Walkway_Floor.png"
    },
    {
        name: "Brick-Floor",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Clay (2), Stone (5)",
        amountProduced: 5,
        recipeSource: "Carpenter's Shop for 500g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/29/Brick_Floor.png"
    },
    {
        name: "Wooden-Path",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Wood (1)",
        amountProduced: 1,
        recipeSource: "Staarter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e3/Wood_Path.png"
    },
    {
        name: "Gravel-Path",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Stone (1)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/15/Gravel_Path.png"
    },
    {
        name: "Cobblestone-Path",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Stone (1)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/90/Cobblestone_Path.png"
    },
    {
        name: "Stepping-Stone-Path",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Stone (1)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 100g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Stepping_Stone_Path.png"
    },
    {
        name: "Crystal-Path",
        type: "Decor",
        description: "Place on the ground to create paths or to spruce up your floors.",
        ingredients: "Refined Quartz (1)",
        amountProduced: 5,
        recipeSource: "Carpenter's Shop for 200g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Crystal_Path.png"
    },
    {
        name: "Spinner",
        type: "Fishing",
        description: "The shape makes it spin around in the water. Slightly increases the bite-rate when fishing.",
        ingredients: "Iron Bar (2)",
        amountProduced: 1,
        recipeSource: "Fishing Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7b/Spinner.png"
    },
    {
        name: "Trap-Bobber",
        type: "Fishing",
        description: "Causes fish to escape slower when you aren't reeling them in.",
        ingredients: "Copper Bar (1), Sap (10)",
        amountProduced: 1,
        recipeSource: "Fishing Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/da/Trap_Bobber.png"
    },
    {
        name: "Cork-Bobber",
        type: "Fishing",
        description: "Slightly increases the size of your 'fishing bar'.",
        ingredients: "Wood (10), Hardwood (5), Slime (10)",
        amountProduced: 1,
        recipeSource: "Fishing Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Cork_Bobber.png"
    },
    {
        name: "Quality-Bobber",
        type: "Fishing",
        description: "Boosts the quality of fish that you catch.",
        ingredients: "Copper Bar (1), Sap (20), Solar Essence (5)",
        amountProduced: 1,
        recipeSource: "Willy (Special Order)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Quality_Bobber.png"
    },
    {
        name: "Treasure-Hunter",
        type: "Fishing",
        description: "Fish don't escape while collecting treasures. Also slightly increases the chance to find treasures.",
        ingredients: "Gold Bar (2)",
        amountProduced: 1,
        recipeSource: "Fishing Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/79/Treasure_Hunter.png"
    },
    {
        name: "Dressed-Spinner",
        type: "Fish",
        description: "The metal tab and colorful streamers create an enticing spectacle for fish. Increases the bite-rate when fishing.",
        ingredients: "Iron Bar (2), Cloth (1)",
        amountProduced: 1,
        recipeSource: "Fishing Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e8/Dressed_Spinner.png"
    },
    {
        name: "Barbed-Hook",
        type: "Fishing",
        description: "Makes your catch more secure, causing the 'fishing bar' to cling to your catch. Works best on slow, weak fish.",
        ingredients: "Copper Bar (1), Iron Bar (1)m Gold Bar (1)",
        amountProduced: 1,
        recipeSource: "Fishing Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4f/Barbed_Hook.png"
    },
    {
        name: "Magnet",
        type: "Fishing",
        description: "Increases the chance of finding treasures when fishing. However, fish aren't crazy about the taste.",
        ingredients: "Iron Bar (1)",
        amountProduced: 3,
        recipeSource: "Fishing Level 9",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8c/Magnet.png"
    },
    {
        name: "Bait",
        type: "Fishing",
        description: "Causes fish to bite faster. Must first be attached to a fishing rod.",
        ingredients: "Bug Meat (1)",
        amountProduced: 5,
        recipeSource: "Fishing Level 2",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/ff/Bait.png"
    },
    {
        name: "Wild-Bait",
        type: "Fishing",
        description: "A unique recipe from Linus that gives you a chance to catch two fish at once.",
        ingredients: "Fiber (10), Bug Meat (5), Slime (5)",
        amountProduced: 5,
        recipeSource: "Linus 4-Heart Event",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/da/Wild_Bait.png"
    },
    {
        name: "Magic-Bait",
        type: "Fishing",
        description: "Allows you to catch fish from any season, time, or weather, from whichever type of water you cast into.",
        ingredients: "Radioactive Ore (1), Bug Meat (3)",
        amountProduced: 5,
        recipeSource: "Purchase from Mr. Qi for 20 Qi Gems",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/58/Magic_Bait.png"
    },
    {
        name: "Crab-Pot",
        type: "Fishing",
        description: "Place it in the water, load it with bait, and check the next day to see if you've caught anything. Works in streams, lakes, and the ocean.",
        ingredients: "Wood (40) Iron Bar (3), with Trapper Profession: Wood (25), Copper Bar (2)",
        amountProduced: 1,
        recipeSource: "Fishing Level 3",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/92/Crab_Pot.png"
    },
    {
        name: "Sturdy-Ring",
        type: "Rings",
        description: "Cuts the duration of negative status effects in half.",
        ingredients: "Copper Bar (2), Bug Meat (25), Slime (25)",
        amountProduced: 1,
        recipeSource: "Combat Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Sturdy_Ring.png"
    },
    {
        name: "Warrior-Ring",
        type: "Rings",
        description: "Occasionally infuses the wearer with 'warrior energy' after slaying a monster.",
        ingredients: "Iron Bar (10), Coal (25), Frozen Tear (10)",
        amountProduced: 1,
        recipeSource: "Combat Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/13/Warrior_Ring.png"
    },
    {
        name: "Ring-of-Yoba",
        type: "Rings",
        description: "Occasionally shields the wearer from damage.",
        ingredients: "Golden Bar (5), Iron Bar (5), Diamond (1)",
        amountProduced: 1,
        recipeSource: "Combat Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/21/Ring_of_Yoba.png"
    },
    {
        name: "Thorns-Ring",
        type: "Rings",
        description: "When enemies damage you, they will take damage themselves.",
        ingredients: "Bone Fragment (50), Stone (50), Gold Bar (1)",
        amountProduced: 1,
        recipeSource: "Combat Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Thorns_Ring.png"
    },
    {
        name: "Glowstone-Ring",
        type: "Rings",
        description: "Emits a constant light, and also increases your radius for collecting items.",
        ingredients: "Solar Essence (5), Iron Bar (5)",
        amountProduced: 1,
        recipeSource: "Mining Level 4",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/65/Glowstone_Ring.png"
    },
    {
        name: "Iridium-Band",
        type: "Rings",
        description: "Glows, attracts items, and increases attack damage by 10%.",
        ingredients: "Iridium Bar (5), Solar Essence (50), Void Essence (50)",
        amountProduced: 1,
        recipeSource: "Combat Level 9",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/77/Iridium_Band.png"
    },
    {
        name: "Wedding-Ring",
        type: "Rings",
        description: "An old Zuzu City tradition... It's used to ask for another farmer's hand in marriage.",
        ingredients: "Iridium Bar (5), Prismatic Shard (1)",
        amountProduced: 1,
        recipeSource: "Traveling Cart for 500g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Wedding_Ring.png"
    },
    {
        name: "Field-Snack",
        type: "Edible-Item",
        description: "A quick snack to fuel the hungry forager.",
        ingredients: "Acorn (1), Maple Seed (1), Pine Cone (1)",
        amountProduced: 1,
        recipeSource: "Foraging Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Field_Snack.png"
    },
    {
        name: "Bug-Steak",
        type: "Edible-Item",
        description: "The last resort of the hungry cave diver.",
        ingredients: "Bug Meat (10)",
        amountProduced: 1,
        recipeSource: "Combat Level 1",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b7/Bug_Steak.png"
    },
    {
        name: "Life-Elixir",
        type: "Edible-Item",
        description: "Restores health to full.",
        ingredients: "Red Mushroom (1), Purple Mushroom (1), Morel (1), Chanterelle (1)",
        amountProduced: 1,
        recipeSource: "Combat Level 2",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Life_Elixir.png"
    },
    {
        name: "Oil-of-Garlic",
        type: "Edible-Item",
        description: "Drink this and weaker monsters will avoid you.",
        ingredients: "Garlic (10), Oil (1)",
        amountProduced: 1,
        recipeSource: "Combat Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Oil_of_Garlic.png"
    },
    {
        name: "Monster-Musk",
        type: "Consumable",
        description: "Spray this on to draw more monsters out of hiding.",
        ingredients: "Bat Wing (30), Slime (30)",
        amountProduced: 1,
        recipeSource: "Wizard (Special Order)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/af/Monster_Musk.png"
    },
    {
        name: "Fairy-Dust",
        type: "Consumable",
        description: "Sprinkle on kegs, furnaces, and other refining equipment to instantly receive their product.",
        ingredients: "Diamond (1), Fairy Rose (1)",
        amountProduced: 1,
        recipeSource: "The Pirate's Wife Quest",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Fairy_Dust.png"
    },
    {
        name: "Warp-Totem-Beach",
        type: "Consumable",
        description: "Warp directly to the beach. Consumed on use.",
        ingredients: "Hardwood (1), Coral (2), Fiber (10)",
        amountProduced: 1,
        recipeSource: "Foraging Level 6",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Warp_Totem_Beach.png"
    },
    {
        name: "Warp-Totem-Mountains",
        type: "Consumable",
        description: "Warp directly to the mountains. Consumed on use.",
        ingredients: "Hardwood (1), Iron Bar (1), Stone (25)",
        amountProduced: 1,
        recipeSource: "Foraging Level 7",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d8/Warp_Totem_Mountains.png"
    },
    {
        name: "Warp-Totem-Farm",
        type: "Consumable",
        description: "Warp directly to your house. Consumed on use.",
        ingredients: "Hardwood (1), Honey (1), Fiber (20)",
        amountProduced: 1,
        recipeSource: "Foraging Level 8",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e4/Warp_Totem_Farm.png"
    },
    {
        name: "Warp-Totem-Desert",
        type: "Consumable",
        description: "Warp directly to Calico Desert. Consumed on use.",
        ingredients: "Hardwood (2), Coconut (1), Iridium Ore (4)",
        amountProduced: 1,
        recipeSource: "Desert Trader for Iridium Bar (10)",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/83/Warp_Totem_Desert.png"
    },
    {
        name: "Warp-Totem-Island",
        type: "Consumable",
        description: "Warp directly to Ginger Island. Consumed on use.",
        ingredients: "Hardwood (5), Dragon Tooth (1), Ginger (1)",
        amountProduced: 1,
        recipeSource: "Volcano Dwarf Shop for 10,000g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Warp_Totem_Island.png"
    },
    {
        name: "Rain-Totem",
        type: "Consumable",
        description: "Activate to greatly increase the chance for rain tomorrow. Consumed on use.",
        ingredients: "Hardwood (1), Truffle Oil (1), Pine Tar (5)",
        amountProduced: 1,
        recipeSource: "Foraging Level 9",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f7/Rain_Totem.png"
    },
    {
        name: "Torch",
        type: "Lighting",
        description: "Provides a modest amount of light.",
        ingredients: "Wood (1), Sap (2)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Torch.png"
    },
    {
        name: "Campfire",
        type: "Lighitng",
        description: "Provides a moderate amount of light.",
        ingredients: "Stone (10), Wood (10), Fiber (10)",
        amountProduced: 1,
        recipeSource: "Starter",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Campfire.png"
    },
    {
        name: "Wooden-Brazier",
        type: "Lighting",
        description: "Provides a moderate amount of light.",
        ingredients: "Wood (10), Coal (1), Fiber (5)",
        amountProduced: 1,
        recipeSource: "Carpenter's Shop for 250g",
        imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/34/Wooden_Brazier.png"
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },
    {
        name: "",
        type: "",
        description: "",
        ingredients: "",
        amountProduced: ,
        recipeSource: "",
        imgSrc: ""
    },





];