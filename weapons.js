const weapons = [
{
    "name": "Rusty-Sword",
    "type": "Sword",
    "level": "1",
    "description": "A rusty, dull old sword.",
    "damage": "2-5",
    "criticalStrikeChance": ".02",
    "stats": "N/A",
    "found": "The Mines entrance",
    "purchasePrice": "N/A",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/d/d7/Rusty_Sword.png"
},
{
    "name": "Steel-Smallsword",
    "type": "Sword",
    "level": "1",
    "description": "A standard metal blade.",
    "damage": "4-8",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2)",
    "found": "The Mines floor 20 chest reward",
    "purchasePrice": "N/A",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/d/da/Steel_Smallsword.png"
},
{
    "name": "Wooden-Blade",
    "type": "Sword",
    "level": "1",
    "description": "Not bad for a piece of carved wood.",
    "damage": "3-7",
    "criticalStrikeChance": ".02",
    "stats": "N/A",
    "found": "The Mines floor 10 chest reward (remixed mine rewards only), Adventurer's Guild",
    "purchasePrice": "250g",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/0/06/Wooden_Blade.png"
},
{
    "name": "Pirate's-Sword",
    "type": "Sword",
    "level": "2",
    "description": "It looks like a pirate owned this once.",
    "damage": "8-14",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2)",
    "found": "The Mines floor 50 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 30)",
    "purchasePrice": "850g",
    "sellPrice": "100g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/1/19/Pirate%27s_Sword.png"
},
{
    "name": "Silver-Saber",
    "type": "Sword",
    "level": "2",
    "description": "Plated with silver to deter rust.",
    "damage": "8-15",
    "criticalStrikeChance": ".02",
    "stats": "Defense (+1)",
    "found": "The Mines floor 50 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 20)",
    "purchasePrice": "750g",
    "sellPrice": "100g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/b/b0/Silver_Saber.png"
},
{
    "name": "Cutlass",
    "type": "Sword",
    "level": "3",
    "description": "A finely crafted blade.",
    "damage": "9-17",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2)",
    "found": "The Mines floor 60 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 25)",
    "purchasePrice": "1,500g",
    "sellPrice": "150g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/1/1e/Cutlass.png"
},
{
    "name": "Forest-Sword",
    "type": "Sword",
    "level": "3",
    "description": "Made powerful by forest magic.",
    "damage": "8-18",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2), Defense (+1)",
    "found": "The Mines (Floors 20-60)",
    "purchasePrice": "N/A",
    "sellPrice": "150g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/1/17/Forest_Sword.png"
},
{
    "name": "Iron-Edge",
    "type": "Sword",
    "level": "3",
    "description": "A heavy broadsword.",
    "damage": "12-25",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-2), Defense (+1), Weight (+3)",
    "found": "The Mines floor 60 chest reward (remixed mine rewards only), The Mines (Floors 41-59)",
    "purchasePrice": "N/A",
    "sellPrice": "Gold.png150g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/3c/Iron_Edge.png"
},
{
    "name": "Insect-Head",
    "type": "Sword",
    "level": "4",
    "description": "Not very pleasant to wield.",
    "damage": "10-20",
    "criticalStrikeChance": ".04",
    "stats": "Speed (+2), Crit. Chance (+2)",
    "found": "Adventurer's Guild reward for killing 125 Bugs",
    "purchasePrice": "10,000g",
    "sellPrice": "200g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/35/Insect_Head.png"
},
{
    "name": "Bone-Sword",
    "type": "Sword",
    "level": "5",
    "description": "A very light piece of sharpened bone.",
    "damage": "20-30",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+4), Weight (+2)",
    "found": "The Mines floor 90 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 75), Skeleton drops",
    "purchasePrice": "6,000g",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/2/29/Bone_Sword.png"
},
{
    "name": "Claymore",
    "type": "Sword",
    "level": "5",
    "description": "It's really heavy.",
    "damage": "20-32",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-4), Defense (+2), Weight (+3)",
    "found": "The Mines floor 80 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 45)",
    "purchasePrice": "2,000g",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/0/0c/Claymore.png"
},
{
    "name": "Neptune's-Glaive",
    "type": "Sword",
    "level": "5",
    "description": "An heirloom from beyond the Gem Sea.",
    "damage": "18-35",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-1), Defense (+2), Weight (+4)",
    "found": "Fishing Treasure Chests (Fishing Level 2+)",
    "purchasePrice": "N/A",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/2/26/Neptune%27s_Glaive.png"
},
{
    "name": "Templar's-Blade",
    "type": "Sword",
    "level": "5",
    "description": "It once belonged to an honorable knight.",
    "damage": "22-29",
    "criticalStrikeChance": "0",
    "stats": "Defense (+1)",
    "found": "The Mines floor 80 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 55)",
    "purchasePrice": "4,000g",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/e/e4/Templar%27s_Blade.png"
},
{
    "name": "Obsidian-Edge",
    "type": "Sword",
    "level": "6",
    "description": "It's incredibly sharp.",
    "damage": "30-45",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-1), Crit. Power (+10)",
    "found": "The Mines floor 90 chest reward",
    "purchasePrice": "N/A",
    "sellPrice": "300g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/7/73/Obsidian_Edge.png"
},
{
    "name": "Ossified-Blade",
    "type": "Sword",
    "level": "6",
    "description": "A large, sharp blade formed from bone.",
    "damage": "26-42",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-2), Defense (+1), Weight (+2)",
    "found": "The Mines floor 90 chest reward (remixed mine rewards only)",
    "purchasePrice": "N/A",
    "sellPrice": "300g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/30/Ossified_Blade.png"
},
{
    "name": "Tempered-Broadsword",
    "type": "Sword",
    "level": "7",
    "description": "It looks like it could withstand anything.",
    "damage": "29-44",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-3), Defense (+3), Weight (+3)",
    "found": "The Mines floor 90 chest reward (remixed mine rewards only), The Mines (floors 81-99), Skull Cavern",
    "purchasePrice": "N/A",
    "sellPrice": "350g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/5/51/Tempered_Broadsword.png"
},
{
    "name": "Yeti-Tooth",
    "type": "Sword",
    "level": "7",
    "description": "It's icy cold to the touch.",
    "damage": "26-42",
    "criticalStrikeChance": ".02",
    "stats": "Defense (+4), Crit. Power (+10)",
    "found": "The Mines (Floors 81-99)",
    "purchasePrice": "N/A",
    "sellPrice": "350g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/4/4d/Yeti_Tooth.png"
},
{
    "name": "Steel-Falchion",
    "type": "Sword",
    "level": "8",
    "description": "Light and powerful.",
    "damage": "28-46",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+4), Crit. Power (+20)",
    "found": "The Mines floor 110 chest reward (remixed mine rewards only), The Mines (Floors 101+), Skull Cavern, Adventurer's Guild (after unlocking the Mines floor 90)",
    "purchasePrice": "9,000g",
    "sellPrice": "400g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/e/ee/Steel_Falchion.png"
},
{
    "name": "Dark-Sword",
    "type": "Sword",
    "level": "9",
    "description": "It's glowing with vampire energy.",
    "damage": "30-45",
    "criticalStrikeChance": ".04",
    "stats": "Speed (-5), Crit. Chance (+2), Weight (+5), Vampiric (9%)",
    "found": "Haunted Skull drop",
    "purchasePrice": "N/A",
    "sellPrice": "450g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/2/2e/Dark_Sword.png"
},
{
    "name": "Lava-Katana",
    "type": "Sword",
    "level": "10",
    "description": "A powerful blade forged in a pool of churning lava.",
    "damage": "55-64",
    "criticalStrikeChance": ".015",
    "stats": "Defense (+3), Crit. Power (+25), Weight (+3)",
    "found": "Adventurer's Guild (after unlocking the Mines floor 120)",
    "purchasePrice": "25,000g",
    "sellPrice": "500g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/a/a0/Lava_Katana.png"
},
{
    "name": "Dragontooth-Cutlass",
    "type": "Sword",
    "level": "13",
    "description": "The blade was forged from a magical tooth.",
    "damage": "75-90",
    "criticalStrikeChance": ".02",
    "stats": "Crit. Power (+50)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "650g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/e/e8/Dragontooth_Cutlass.png"
},
{
    "name": "Dwarf-Sword",
    "type": "Sword",
    "level": "13",
    "description": "It's ancient, but the blade never dulls.",
    "damage": "65-75",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2), Defense (+4)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "650g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/38/Dwarf_Sword.png"
},
{
    "name": "Galaxy-Sword",
    "type": "Sword",
    "level": "13",
    "description": "It's unlike anything you've ever seen.",
    "damage": "60-80",
    "criticalStrikeChance": "02",
    "stats": "Speed (+4)",
    "found": "The Desert (bring a Prismatic Shard to the Three Pillars)",
    "purchasePrice": "50,000g",
    "sellPrice": "650g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/4/44/Galaxy_Sword.png"
},
{
    "name": "Infinity-Blade",
    "type": "Sword",
    "level": "17",
    "description": "The true form of the Galaxy Sword.",
    "damage": "80-100",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+4), Defense (+2)",
    "found": "Combine the Galaxy Sword with Galaxy Soul (3) and Cinder Shard (60) in the Forge",
    "purchasePrice": "N/A",
    "sellPrice": "850g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/4/40/Infinity_Blade.png"
},
{
    "name": "Carving-Knife",
    "type": "Dagger",
    "level": "1",
    "description": "A small, light blade.",
    "damage": "1-3",
    "criticalStrikeChance": ".04",
    "stats": "Crit. Chance (+2)",
    "found": "The Mines (Floors 1-19)",
    "purchasePrice": "N/A",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/6/6d/Carving_Knife.png"
},
{
    "name": "Iron-Dirk",
    "type": "Dagger",
    "level": "1",
    "description": "A common dagger.",
    "damage": "2-4",
    "criticalStrikeChance": ".03",
    "stats": "Crit. Chance (+2)",
    "found": "The Mines floor 10 chest reward (remixed mine rewards only), Adventurer's Guild (after unlocking the Mines floor 15)",
    "purchasePrice": "500g",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/b/bb/Iron_Dirk.png"
},
{
    "name": "Wind-Spire",
    "type": "Dagger",
    "level": "1",
    "description": "A swift little blade.",
    "damage": "1-5",
    "criticalStrikeChance": ".02",
    "stats": "Crit. Chance (+1), Crit. Power (+10), Weight (+5)",
    "found": "The Mines floor 10 chest reward (remixed mine rewards only), The Mines (Floors 21-39)",
    "purchasePrice": "N/A",
    "sellPrice": "50g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/0/00/Wind_Spire.png"
},
{
    "name": "Elf-Blade",
    "type": "Dagger",
    "level": "2",
    "description": "Only the nimble hands of an elf could craft this.",
    "damage": "3-5",
    "criticalStrikeChance": ".04",
    "stats": "Crit. Chance (+2)",
    "found": "The Mines floor 20 chest reward (remixed mine rewards only)",
    "purchasePrice": "N/A",
    "sellPrice": "100g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/f/f2/Elf_Blade.png"
},
{
    "name": "Burglar's-Shank",
    "type": "Dagger",
    "level": "4",
    "description": "A weapon of choice for the swift and silent.",
    "damage": "7-12",
    "criticalStrikeChance": ".04",
    "stats": "Crit. Chance (+2), Crit. Power (+25)",
    "found": "The Mines floor 60 chest reward (remixed mine rewards only), The Mines (Floors 81+), Skull Cavern",
    "purchasePrice": "N/A",
    "sellPrice": "200g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/7/7c/Burglar%27s_Shank.png"
},
{
    "name": "Crystal-Dagger",
    "type": "Dagger",
    "level": "4",
    "description": "The blade is made of purified quartz.",
    "damage": "4-10",
    "criticalStrikeChance": ".03",
    "stats": "Crit. Chance (+2),  Crit. Power (+50), Weight (+5)",
    "found": "The Mines floor 60 chest reward",
    "purchasePrice": "N/A",
    "sellPrice": "200g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/8/8a/Crystal_Dagger.png"
},
{
    "name": "Shadow-Dagger",
    "type": "Dagger",
    "level": "4",
    "description": "When you hold the blade to your ear you can hear 1,000 souls shrieking.",
    "damage": "10-20",
    "criticalStrikeChance": ".04",
    "stats": "Crit. Chance (+2)",
    "found": "The Mines floor 80 chest reward (remixed mine rewards only), The Mines (Floors 61-79, 101-119)",
    "purchasePrice": "N/A",
    "sellPrice": "200g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/4/47/Shadow_Dagger.png"
},
{
    "name": "Broken-Trident",
    "type": "Dagger",
    "level": "5",
    "description": "It came from the sea, but it's still sharp.",
    "damage": "15-26",
    "criticalStrikeChance": ".02",
    "stats": "Crit. Chance (+1)",
    "found": "Fishing treasure chests",
    "purchasePrice": "N/A",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/3f/Broken_Trident.png"
},
{
    "name": "Wicked-Kris",
    "type": "Dagger",
    "level": "8",
    "description": "The blade is made of an iridium alloy.",
    "damage": "24-30",
    "criticalStrikeChance": ".06",
    "stats": "Crit. Chance (+4)",
    "found": "The Mines floor 90 chest reward (remixed mine rewards only), Skull Cavern",
    "purchasePrice": "N/A",
    "sellPrice": "400g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/9/94/Wicked_Kris.png"
},
{
    "name": "Galaxy-Dagger",
    "type": "Dagger",
    "level": "8",
    "description": "It's unlike anything you've seen.",
    "damage": "30-40",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+1), Crit. Chance (+1), Weight (+5)",
    "found": "Adventurer's Guild (after obtaining the Galaxy Sword)",
    "purchasePrice": "35,000g",
    "sellPrice": "400g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/6/68/Galaxy_Dagger.png"
},
{
    "name": "Dwarf-Dagger",
    "type": "Dagger",
    "level": "11",
    "description": "It's ancient, but the blade never dulls.",
    "damage": "32-38",
    "criticalStrikeChance": ".03",
    "stats": "Speed (+1), Defense (+6), Crit. Chance (+2), Weight (+5)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "550g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/9/99/Dwarf_Dagger.png"
},
{
    "name": "Dwarf-Dagger",
    "type": "Dagger",
    "level": "11",
    "description": "It's ancient, but the blade never dulls.",
    "damage": "32-38",
    "criticalStrikeChance": ".03",
    "stats": "Speed (+1), Defense (+6), Crit. Chance (+2), Weight (+5)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "550g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/9/99/Dwarf_Dagger.png"
},
{
    "name": "Dragontooth-Shiv",
    "type": "Dagger",
    "level": "12",
    "description": "The blade was forged from a magical tooth.",
    "damage": "40-50",
    "criticalStrikeChance": ".05",
    "stats": "Crit. Chance (+3), Crit. Power (+100), Weight (+5)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "600g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/9/95/Dragontooth_Shiv.png"
},
{
    "name": "Iridium-Needle",
    "type": "Dagger",
    "level": "12",
    "description": "The point is unbelievably sharp, even down to the atomic level",
    "damage": "20-35",
    "criticalStrikeChance": "0.1",
    "stats": "Crit. Chance (+6), Crit. Power (+200)",
    "found": "14% chance of dropping from special slimes in mines when Shrine of Challenge is active",
    "purchasePrice": "N/A",
    "sellPrice": "600g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/6/62/Iridium_Needle.png"
},
{
    "name": "Infinity-Dagger",
    "type": "Dagger",
    "level": "16",
    "description": "The true form of the Galaxy Dagger.",
    "damage": "50-70",
    "criticalStrikeChance": ".06",
    "stats": "Speed (+1), Defense (+3), Crit. Chance (+4), Weight (+5)",
    "found": "Combine the Galaxy Dagger with Galaxy Soul (3) in the Forge",
    "purchasePrice": "N/A",
    "sellPrice": "800g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/d/d6/Infinity_Dagger.png"
},
{
    "name": "Femur",
    "type": "Club",
    "level": "2",
    "description": "An old, heavy bone caked in centuries of grime.",
    "damage": "6-11",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2)",
    "found": "The Mines floor 10 chest reward (remixed mine rewards only)",
    "purchasePrice": "N/A",
    "sellPrice": "100g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/e/e4/Femur.png"
},
{
    "name": "Wood-Club",
    "type": "Club",
    "level": "2",
    "description": "A solid piece of wood, crudely chiseled into a club shape.",
    "damage": "9-16",
    "criticalStrikeChance": ".02",
    "stats": "N/A",
    "found": "The Mines floor 20 chest reward (remixed mine rewards only), The Mines (Floors 1-39)",
    "purchasePrice": "N/A",
    "sellPrice": "100g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/5/51/Wood_Club.png"
},
{
    "name": "Wood-Mallet",
    "type": "Club",
    "level": "3",
    "description": "The solid head packs a punch. Relatively light for a club.",
    "damage": "15-24",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2), Weight (+2)",
    "found": "The Mines floor 60 chest reward (remixed mine rewards only), The Mines (Floors 41-79), Adventurer's Guild (after unlocking the Mines floor 40)",
    "purchasePrice": "2,000g",
    "sellPrice": "150g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/a/ac/Wood_Mallet.png"
},
{
    "name": "Lead-Rod",
    "type": "Club",
    "level": "4",
    "description": "It's incredibly heavy.",
    "damage": "18-27",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-4)",
    "found": "The Mines (Floors 41-79)",
    "purchasePrice": "N/A",
    "sellPrice": "200g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/36/Lead_Rod.png"
},
{
    "name": "Kudgel",
    "type": "Club",
    "level": "5",
    "description": "A brute's companion.",
    "damage": "27-40",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-1), Crit. Power (+4), Weight (+2)",
    "found": "The Mines floor 80 chest reward (remixed mine rewards only), The Mines (Floors 101+)",
    "purchasePrice": "N/A",
    "sellPrice": "250g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/e/e0/Kudgel.png"
},
{
    "name": "The-Slammer",
    "type": "Club",
    "level": "7",
    "description": "An extremely heavy gavel that'll send foes flying.",
    "damage": "40-55",
    "criticalStrikeChance": ".02",
    "stats": "Speed (-2)",
    "found": "The Mines floor 110 chest reward (remixed mine rewards only), The Mines (Floors 81-99), Skull Cavern",
    "purchasePrice": "N/A",
    "sellPrice": "350g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/c/c7/The_Slammer.png"
},
{
    "name": "Galaxy-Hammer",
    "type": "Club",
    "level": "12",
    "description": "It's made from an ultra-light material you've never seen before.",
    "damage": "70-90",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2), Weight (+5)",
    "found": "Adventurer's Guild (after obtaining the Galaxy Sword)",
    "purchasePrice": "75,000g",
    "sellPrice": "600g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/8/8a/Galaxy_Hammer.png"
},
{
    "name": "Dwarf-Hammer",
    "type": "Club",
    "level": "13",
    "description": "It emits a very faint whirring sound.",
    "damage": "75-85",
    "criticalStrikeChance": ".02",
    "stats": "Defense (+2), Weight (+5)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "650g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/d/d5/Dwarf_Hammer.png"
},
{
    "name": "Dragontooth-Club",
    "type": "Club",
    "level": "14",
    "description": "This club was crafted from a magical tooth.",
    "damage": "80-100",
    "criticalStrikeChance": ".02",
    "stats": "Crit. Power (+50), Weight (+3)",
    "found": "Volcano Dungeon Chest",
    "purchasePrice": "N/A",
    "sellPrice": "700g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/1/18/Dragontooth_Club.png"
},
{
    "name": "Infinity-Gavel",
    "type": "Club",
    "level": "17",
    "description": "The true form of the Galaxy Hammer.",
    "damage": "100-120",
    "criticalStrikeChance": ".02",
    "stats": "Speed (+2), Defense (+1), Weight (+5)",
    "found": "Combine the Galaxy Hammer with Galaxy Soul (3) in the Forge",
    "purchasePrice": "N/A",
    "sellPrice": "850g",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/8/87/Infinity_Gavel.png"
},
{
    "name": "Slingshot",
    "type": "Slingshot",
    "level": "N/A",
    "description": "Requires stones for ammo.",
    "damage": "Depends on ammo used",
    "criticalStrikeChance": ".02",
    "stats": "N/A",
    "found": "500g",
    "purchasePrice": "500g",
    "sellPrice": "N/A",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/3/3f/Slingshot.png"
},
{
    "name": "Master-Slingshot",
    "type": "Slingshot",
    "level": "N/A",
    "description": "Requires stones for ammo.",
    "damage": "Depends on ammo used",
    "criticalStrikeChance": ".02",
    "stats": "N/A",
    "found": "The Mines (Floor 70 chest reward)",
    "purchasePrice": "1,000g",
    "sellPrice": "N/A",
    "imgSrc": "https://stardewvalleywiki.com/mediawiki/images/6/63/Master_Slingshot.png"
}
];

module.exports = weapons;