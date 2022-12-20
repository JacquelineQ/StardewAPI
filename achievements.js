// Achievements that do not have an in-game icon are Steam-specific achievements.
//Will have to change Unlocks strings to references to hats.js table
//Possibly add a "type" category

const achievements = [
{
    name: "Greenhorn",
    description: "Earn 15,000g",
    unlocks: "Good Ol' Cap",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Achievement_Greenhorn.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/b/b8/Achievement_Star_01.png"
},
{
    name: "Cowpoke",
    description: "Earn 50,000g",
    unlocks: "Lucky Bow",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/24/Achievement_Cowpoke.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Achievement_Star_02.png"
},
{
    name: "Homesteader",
    description: "Earn 250,000g",
    unlocks: "Cool Cap",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Achievement_Homesteader.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Achievement_Star_03.png"
},
{
    name: "Millionaire",
    description: "Earn 1,000,000g",
    unlocks: "Bowler Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/9/91/Achievement_Millionaire.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Achievement_Star_04.png"
},
{
    name: "Legend",
    description: "Earn 10,000,000g (Secret Achievement)",
    unlocks: "Sombrero",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/b/bb/Achievement_Legend.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Achievement_Star_03.png"
},
{
    name: "A Complete Collection",
    description: "Complete the museum collection.",
    unlocks: "Cowboy Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Achievement_A_Complete_Collection.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Achievement_Star_05.png"
},
{
    name: "A New Friend",
    description: "Reach a 5-heart friend level with someone.",
    unlocks: "Butterfly Bow",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Achievement_A_New_Friend.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/7/77/Achievement_Star_06.png"
},
{
    name: "Best Friends",
    description: "Reach a 10-heart friend level with someone.",
    unlocks: "Mouse Ears",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/e/e8/Achievement_Best_Friends.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Achievement_Star_05.png"
},
{
    name: "The Beloved Farmer",
    description: "Reach a 10-heart friend level with 8 people.",
    unlocks: "Cat Ears",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Achievement_The_Beloved_Farmer.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Achievement_Star_07.png"
},
{
    name: "Cliques",
    description: "Reach a 5-heart friend level with 4 people.",
    unlocks: "Tiara",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/26/Achievement_Cliques.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Achievement_Star_07.png"
},
{
    name: "Networking",
    description: "Reach a 5-heart friend level with 10 people.",
    unlocks: "Santa Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Achievement_Networking.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Achievement_Star_08.png"
},
{
    name: "Popular",
    description: "Reach a 5-heart friend level with 20 people.",
    unlocks: "Earmuffs",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Achievement_Popular.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Achievement_Star_09.png"
},
{
    name: "Cook",
    description: "Cook 10 different recipes.",
    unlocks: "Delicate Bow",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Achievement_Cook.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Achievement_Star_09.png"
},
{
    name: "Sous Chef",
    description: "Cook 25 different recipes.",
    unlocks: "Plum Chapeau",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/4/44/Achievement_Sous_Chef.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/2/28/Achievement_Star_10.png"
},
{
    name: "Gourmet Chef",
    description: "Cook every recipe.",
    unlocks: "Archer's Cap, Chef Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Achievement_Gourmet_Chef.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Achievement_Star_11.png"
},
{
    name: "Moving Up",
    description: "Upgrade your house.",
    unlocks: "Tropiclip",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Achievement_Moving_Up.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/2/28/Achievement_Star_10.png"
},
{
    name: "Living Large",
    description: "Upgrade your house to the maximum size. (2nd upgrade, not cellar)",
    unlocks: "Hunter's Cap",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/6/65/Achievement_Living_Large.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Achievement_Star_11.png"
},
{
    name: "D.I.Y.",
    description: "Craft 15 different items.",
    unlocks: "Daisy",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Achievement_DIY.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Achievement_Star_02.png"
},
{
    name: "Artisan",
    description: "Craft 30 different items.",
    unlocks: "Trucker Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/20/Achievement_Artisan.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/b/b8/Achievement_Star_01.png"
},
{
    name: "Craft Master",
    description: "Craft every item.",
    unlocks: "Gnome's Cap",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/6/60/Achievement_Master_Craft.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Achievement_Star_02.png"
},
{
    name: "Fisherman",
    description: "Catch 10 different fish.",
    unlocks: "Sou'wester",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/0/00/Achievement_Fisherman.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Achievement_Star_04.png"
},
{
    name: "Ol' Mariner",
    description: "Catch 24 different fish.",
    unlocks: "Official Cap",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/a/af/Achievement_Ol_Mariner.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Achievement_Star_03.png"
},
{
    name: "Master Angler",
    description: "Catch every fish.",
    unlocks: "Eye Patch",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/6/65/Achievement_Master_Angler.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Achievement_Star_04.png"
},
{
    name: "Mother Catch",
    description: "Catch 100 fish.",
    unlocks: "Watermelon Band",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/0/0f/Achievement_Mother_Catch.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Achievement_Star_03.png"
},
{
    name: "Treasure Trove",
    description: "Donate 40 different items to the museum.",
    unlocks: "Blue Bonnet",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/5/55/Achievement_Treasure_Trove.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Achievement_Star_05.png"
},
{
    name: "Gofer",
    description: "Complete 10 'Help Wanted' requests.",
    unlocks: "Polka Bow",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/27/Achievement_Gofer.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/7/77/Achievement_Star_06.png"
},
{
    name: "A Big Help",
    description: "Complete 40 'Help Wanted' requests.",
    unlocks: "Chicken Mask",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/3/37/Achievement_A_Big_Help.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Achievement_Star_05.png"
},
{
    name: "Polyculture",
    description: "Ship 15 of each crop. (There are exactly 28 Crops that must be shipped to earn the Polyculture achievement)",
    unlocks: "Cowpoke Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/7/7f/Achievement_Polyculture.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Achievement_Star_08.png"
},
{
    name: "Monoculture",
    description: "Ship 300 of one crop.",
    unlocks: "Cowgal Hat",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/2/2c/Achievement_Monoculture.jpg",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Achievement_Star_07.png"
},
{
    name: "Full Shipment",
    description: "Ship every item.",
    unlocks: "Goblin Mask",
    steamIcon: "https://stardewvalleywiki.com/File:Achievement_Full_Shipment.jpg",
    gameIcon: "https://stardewvalleywiki.com/File:Achievement_Star_07.png"
},
{
    name: "Prairie King",
    description: "Beat 'Journey of the Prairie King'.",
    unlocks: "Prairie King Arcade System",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/7/79/Achievement_Prarie_King.jpg",
    gameIcon: "N/A"
},
{
    name: "The Bottom",
    description: "Reach the lowest level of the mines.",
    unlocks: "Skull Key",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Achievement_The_Bottom.jpg",
    gameIcon: "N/A"
},
{
    name: "Local Legend",
    description: "Restore the Pelican Town Community Center.",
    unlocks: "tardew Hero Trophy",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/7/72/Achievement_Local_Legend.jpg",
    gameIcon: "N/A"
},
{
    name: "Joja Co. Member Of The Year",
    description: "Purchase all Joja Community Development projects.",
    unlocks: "Soda Machine",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/0/02/Achievement_Joja_Co._Member_Of_The_Year.jpg",
    gameIcon: "N/A"
},
{
    name: "Mystery Of The Stardrops",
    description: "Find every stardrop.",
    unlocks: "N/A",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Achievement_Mystery_Of_The_Stardrops.jpg",
    gameIcon: "N/A"
},
{
    name: "Full House",
    description: "Get married and have two kids.",
    unlocks: "N/A",
    steamIcon: "N/A",
    gameIcon: "https://stardewvalleywiki.com/mediawiki/images/e/e4/Achievement_Full_House.jpg"
},
{
    name: "Singular Talent",
    description: "Reach level 10 in a skill.",
    unlocks: "N/A",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/6/6f/Achievement_Singular_Talent.jpg",
    gameIcon: "N/A"
},
{
    name: "Master Of The Five Ways",
    description: "Reach level 10 in every skill.",
    unlocks: "N/A",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/4/49/Achievement_Master_Of_The_Five_Ways.jpg",
    gameIcon: "N/A"
},
{
    name: "Protector Of The Valley",
    description: "Complete all of the Adventure Guild Monster Slayer goals.",
    unlocks: "N/A",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/6/66/Achievement_Protector_Of_The_Valley.jpg",
    gameIcon: "N/A"
},
{
    name: "Fector's Challenge",
    description: "Beat 'Journey Of The Prairie King' without dying. (Secret Achievement)",
    unlocks: "N/A",
    steamIcon: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Achievement_Fector%27s_Challenge.jpg",
    gameIcon: "N/A"
}
];