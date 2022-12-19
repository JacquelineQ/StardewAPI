const hats = [
{
    name: "Cowboy Hat",
    description: "The leather is old and cracked, but surprisingly supple. It smells musty.",
    achievement: "A Complete Collection",
    howToObtain: "Complete the museum collection.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Cowboy_Hat.png"
},
{
    name: "Bowler Hat",
    description: "Made from smooth felt.",
    achievement: "Millionaire",
    howToObtain: "Earn 1,000,000 gold coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bowler_Hat.png"
},
{
    name: "Top Hat",
    description: "A gentleman's classic.",
    achievement: "N/A",
    howToObtain: "Purchase for 8,000 Qi coins at the Casino.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8d/Top_Hat.png"
},
{
    name: "Sombrero",
    description: "A festively decorated hat made from woven straw.",
    achievement: "Legend",
    howToObtain: "Earn 10,000,000 coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1c/Sombrero.png"
},
{
    name: "Straw Hat",
    description: "Light and cool, it's a farmer's delight.",
    achievement: "N/A",
    howToObtain: "Win the egg hunt at the Egg Festival.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Straw_Hat.png"
},
{
    name: "Official Cap",
    description: "Looks like it belonged to a postman or policeman. Either way, it's still very soft and smells okay.",
    achievement: "Ol' Mariner",
    howToObtain: "Catch 24 different fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b4/Official_Cap.png"
},
{
    name: "Blue Bonnet",
    description: "Harken back to simpler times with this prairie bonnet.",
    achievement: "Treasure Trove",
    howToObtain: "Donate 40 different items to The Museum.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/ba/Blue_Bonnet.png"
},
{
    name: "Plum Chapeau",
    description: "Looks alright.",
    achievement: "Sous Chef",
    howToObtain: "Cook 25 different recipes.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Plum_Chapeau.png"
},
{
    name: "Skeleton Mask",
    description: "The red eyes are glowing mysteriously.",
    achievement: "N/A",
    howToObtain: "Monster Eradication Goal - Defeat 50 Skeletons.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/12/Skeleton_Mask.png"
},
{
    name: "Goblin Mask",
    description: "Freak out the neighborhood with this creepy mask. Rubber ear joints for effect.",
    achievement: "Full Shipment",
    howToObtain: "Ship every item.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/91/Goblin_Mask.png"
},
{
    name: "Chicken Mask",
    description: "You'll be sure to get them grinning with this one.",
    achievement: "A Big Help",
    howToObtain: "Complete 40 'Help Wanted' requests.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Chicken_Mask.png"
},
{
    name: "Earmuffs",
    description: "Keep your ears toasty. Lined with artisanal velvet from Castle Village.",
    achievement: "Popular",
    howToObtain: "Reach a 5-heart friend level with 20 people.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Earmuffs.png"
},
{
    name: "Delicate Bow",
    description: "Little pink jewels glisten as you examine it.",
    achievement: "Cook",
    howToObtain: "Cook 10 different recipes.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/38/Delicate_Bow.png"
},
{
    name: "Tropiclip",
    description: "It's shaped like a little palm tree.",
    achievement: "Moving Up",
    howToObtain: "Upgrade your house.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5a/Tropiclip.png"
},
{
    name: "Butterfly Bow",
    description: "This one is very soft.",
    achievement: "A New Friend",
    howToObtain: "Reach a 5-heart friend level with someone.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Butterfly_Bow.png"
},
{
    name: "Hunter's Cap",
    description: "The wool lining should stay warm deep into the forest.",
    achievement: "Living Large",
    howToObtain: "Upgrade your house to the maximum size.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c9/Hunter%27s_Cap.png"
},
{
    name: "Trucker Hat",
    description: "Mesh in the back to keep your head cool.",
    achievement: "Artisan",
    howToObtain: "Craft 30 different items.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Trucker_Hat.png"
},
{
    name: "Sailor's Cap",
    description: "It's fresh and starchy.",
    achievement: "N/A",
    howToObtain: "Win the fishing competition at the Festival of Ice.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/45/Sailor%27s_Cap.png"
},
{
    name: "Good Ol' Cap",
    description: "A floppy old topper with a creased bill. Looks like it's been through a lot.",
    achievement: "Greenhorn",
    howToObtain: "Earn 15,000 gold coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Good_Ol%27_Cap.png"
},
{
    name: "Fedora",
    description: "A city-slicker's standard.",
    achievement: "N/A",
    howToObtain: "Purchase for 500 stars at the Stardew Valley Fair",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Fedora.png"
},
{
    name: "Cool Cap",
    description: "It looks really faded, but it used to be a vibrant blue.",
    achievement: "Homesteader",
    howToObtain: "Earn 250,000 gold coins",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/69/Cool_Cap.png"
},
{
    name: "Lucky Bow",
    description: "The middle is made of solid gold.",
    achievement: "Cowpoke",
    howToObtain: "Earn 50,000 gold coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/71/Lucky_Bow.png"
},
{
    name: "Polka Bow",
    description: "This one's sure to be turn heads.",
    achievement: "Gofer",
    howToObtain: "Complete 10 'Help Wanted' requests.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Polka_Bow.png"
},
{
    name: "Gnome's Cap",
    description: "This gnome had a very large head.",
    achievement: "Craft Master",
    howToObtain: "Craft every Item.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/26/Gnome%27s_Cap.png"
},
{
    name: "Eye Patch",
    description: "You can't tell if it's real or just from a costume shop.",
    achievement: "Master Angler",
    howToObtain: "Catch every fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Eye_Patch.png"
},
{
    name: "Santa Hat",
    description: "Celebrate the magical season.",
    achievement: "Networking",
    howToObtain: "Reach a 5-heart friend level with 10 people.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Santa_Hat.png"
},
{
    name: "Tiara",
    description: "This one has a big amethyst encircled by gold.",
    achievement: "Cliques",
    howToObtain: "Reach a 5-heart friend level with 4 people.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Tiara.png"
},
{
    name: "Hard Hat",
    description: "Keep your dome in one piece.",
    achievement: "N/A",
    howToObtain: "Monster Eradication Goal - Defeat 30 Duggies.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/08/Hard_Hat.png"
},
{
    name: "Sou'wester",
    description: "The shape helps to keep sailors dry during storms.",
    achievement: "Fisherman",
    howToObtain: "Catch 10 different fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f0/Sou%27wester.png"
},
{
    name: "Daisy",
    description: "A fresh spring daisy to put in your hair.",
    achievement: "D.I.Y.",
    howToObtain: "Craft 15 different items.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c1/Daisy.png"
},
{
    name: "Watermelon Band",
    description: "The color scheme was inspired by the beloved summer melon.",
    achievement: "Mother Catch",
    howToObtain: "Catch 100 Fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b7/Watermelon_Band.png"
},
{
    name: "Mouse Ears",
    description: "Made from synthetic fibers.",
    achievement: "Best Friends",
    howToObtain: "Reach a 10-heart friend level with someone.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/05/Mouse_Ears.png"
},
{
    name: "Cat Ears",
    description: "Whiskers included.",
    achievement: "The Beloved Farmer",
    howToObtain: "Reach a 10-heart friend level with 8 people.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Cat_Ears.png"
},
{
    name: "Cowgal Hat",
    description: "The band is studded with fake diamonds.",
    achievement: "Monoculture",
    howToObtain: "Ship 300 of one crop.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Cowgal_Hat.png"
},
{
    name: "Cowpoke Hat",
    description: "For dairy experts.",
    achievement: "Polyculture",
    howToObtain: "Ship 15 of each crop.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Cowpoke_Hat.png"
},
{
    name: "Archer's Cap",
    description: "Fashionable whether you're an archer or not.",
    achievement: "Gourmet Chef",
    howToObtain: "Cook every recipe.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Archer%27s_Cap.png"
},
{
    name: "Panda Hat",
    description: "A lovely panda hat.",
    achievement: "N/A",
    howToObtain: "TGP exclusive content; unobtainable otherwise",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3a/Panda_Hat.png"
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},
{
    name: "",
    description: "",
    achievement: "",
    howToObtain: "",
    imgSrc: ""
},

];