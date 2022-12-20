const minerals = [
    //types: Foraged, gems, geode-minderals, geodes
    //May have to update location and usedIn to be arrays containing references
{
    name: "Quartz",
    type: "Foraged",
    description: "A clear crystal commonly found in caves and mines.",
    location: "The Mines (Floors 1-120), Garbage Can, Stone Golem (10%)",
    usedIn: "Geologist's Bundle, Refined Quartz, Fish Pond (Quest)",
    sellPrice: "25g",
    gemologistSellPrice: "32g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png"
},
{
    name: "Earth Crystal",
    type: "Foraged",
    description: "A resinous substance found near the surface.",
    location: "The Mines (Floors 1-39), Duggy (10%), Haunted Skull (1.3%), Fishing Treasure Chest, Panning, Geode, Omni Geode, Garbage Can",
    usedIn: "Geologist's Bundle, Mayonnaise Machine, Sturdy Ring, Fish Pond (Quest)",
    sellPrice: "50g",
    gemologistSellPrice: "65g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png"
},
{
    name: "Frozen Tear",
    type: "Foraged",
    description: "A crystal fabled to be the frozen tears of a yeti.",
    location: "The Mines (Floors 40-79), Fishing Treasure Chest, Panning, Frozen Geode, Omni Geode, Dust Sprite (2%), Garbage Can",
    usedIn: "Geologist's Bundle, Warrior Ring, Sebastian (Loved Gift), Fish Pond (Quest)",
    sellPrice: "75g",
    gemologistSellPrice: "97g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png"
},
{
    name: "Fire Quartz",
    type: "Foraged",
    description: "A glowing red crystal commonly found near hot lava.",
    location: "The Mines (Floors 80-120), Fishing Treasure Chest, Panning, Magma Geode, Omni Geode, Garbage Can",
    usedIn: "Geologist's Bundle, Slime Egg-Press, Refined Quartz, Fish Pond (Quest)",
    sellPrice: "100g",
    gemologistSellPrice: "130g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png"
},
];

module.exports = minerals;