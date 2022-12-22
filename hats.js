const hats = [
{
    name: "Cowboy-Hat",
    description: "The leather is old and cracked, but surprisingly supple. It smells musty.",
    achievement: "A Complete Collection",
    howToObtain: "Complete the museum collection.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Cowboy_Hat.png"
},
{
    name: "Bowler-Hat",
    description: "Made from smooth felt.",
    achievement: "Millionaire",
    howToObtain: "Earn 1,000,000 gold coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bowler_Hat.png"
},
{
    name: "Top-Hat",
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
    name: "Straw-Hat",
    description: "Light and cool, it's a farmer's delight.",
    achievement: "N/A",
    howToObtain: "Win the egg hunt at the Egg Festival.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Straw_Hat.png"
},
{
    name: "Official-Cap",
    description: "Looks like it belonged to a postman or policeman. Either way, it's still very soft and smells okay.",
    achievement: "Ol' Mariner",
    howToObtain: "Catch 24 different fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b4/Official_Cap.png"
},
{
    name: "Blue-Bonnet",
    description: "Harken back to simpler times with this prairie bonnet.",
    achievement: "Treasure Trove",
    howToObtain: "Donate 40 different items to The Museum.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/ba/Blue_Bonnet.png"
},
{
    name: "Plum-Chapeau",
    description: "Looks alright.",
    achievement: "Sous Chef",
    howToObtain: "Cook 25 different recipes.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Plum_Chapeau.png"
},
{
    name: "Skeleton-Mask",
    description: "The red eyes are glowing mysteriously.",
    achievement: "N/A",
    howToObtain: "Monster Eradication Goal - Defeat 50 Skeletons.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/12/Skeleton_Mask.png"
},
{
    name: "Goblin-Mask",
    description: "Freak out the neighborhood with this creepy mask. Rubber ear joints for effect.",
    achievement: "Full Shipment",
    howToObtain: "Ship every item.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/91/Goblin_Mask.png"
},
{
    name: "Chicken-Mask",
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
    name: "Delicate-Bow",
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
    name: "Butterfly-Bow",
    description: "This one is very soft.",
    achievement: "A New Friend",
    howToObtain: "Reach a 5-heart friend level with someone.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Butterfly_Bow.png"
},
{
    name: "Hunter's-Cap",
    description: "The wool lining should stay warm deep into the forest.",
    achievement: "Living Large",
    howToObtain: "Upgrade your house to the maximum size.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c9/Hunter%27s_Cap.png"
},
{
    name: "Trucker-Hat",
    description: "Mesh in the back to keep your head cool.",
    achievement: "Artisan",
    howToObtain: "Craft 30 different items.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Trucker_Hat.png"
},
{
    name: "Sailor's-Cap",
    description: "It's fresh and starchy.",
    achievement: "N/A",
    howToObtain: "Win the fishing competition at the Festival of Ice.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/45/Sailor%27s_Cap.png"
},
{
    name: "Good-Ol'-Cap",
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
    name: "Cool-Cap",
    description: "It looks really faded, but it used to be a vibrant blue.",
    achievement: "Homesteader",
    howToObtain: "Earn 250,000 gold coins",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/69/Cool_Cap.png"
},
{
    name: "Lucky-Bow",
    description: "The middle is made of solid gold.",
    achievement: "Cowpoke",
    howToObtain: "Earn 50,000 gold coins.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/71/Lucky_Bow.png"
},
{
    name: "Polka-Bow",
    description: "This one's sure to be turn heads.",
    achievement: "Gofer",
    howToObtain: "Complete 10 'Help Wanted' requests.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Polka_Bow.png"
},
{
    name: "Gnome's-Cap",
    description: "This gnome had a very large head.",
    achievement: "Craft Master",
    howToObtain: "Craft every Item.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/26/Gnome%27s_Cap.png"
},
{
    name: "Eye-Patch",
    description: "You can't tell if it's real or just from a costume shop.",
    achievement: "Master Angler",
    howToObtain: "Catch every fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Eye_Patch.png"
},
{
    name: "Santa-Hat",
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
    name: "Hard-Hat",
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
    name: "Watermelon-Band",
    description: "The color scheme was inspired by the beloved summer melon.",
    achievement: "Mother Catch",
    howToObtain: "Catch 100 Fish.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b7/Watermelon_Band.png"
},
{
    name: "Mouse-Ears",
    description: "Made from synthetic fibers.",
    achievement: "Best Friends",
    howToObtain: "Reach a 10-heart friend level with someone.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/05/Mouse_Ears.png"
},
{
    name: "Cat-Ears",
    description: "Whiskers included.",
    achievement: "The Beloved Farmer",
    howToObtain: "Reach a 10-heart friend level with 8 people.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Cat_Ears.png"
},
{
    name: "Cowgal-Hat",
    description: "The band is studded with fake diamonds.",
    achievement: "Monoculture",
    howToObtain: "Ship 300 of one crop.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Cowgal_Hat.png"
},
{
    name: "Cowpoke-Hat",
    description: "For dairy experts.",
    achievement: "Polyculture",
    howToObtain: "Ship 15 of each crop.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Cowpoke_Hat.png"
},
{
    name: "Archer's-Cap",
    description: "Fashionable whether you're an archer or not.",
    achievement: "Gourmet Chef",
    howToObtain: "Cook every recipe.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Archer%27s_Cap.png"
},
{
    name: "Panda-Hat",
    description: "A lovely panda hat.",
    achievement: "N/A",
    howToObtain: "TGP exclusive content; unobtainable otherwise",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3a/Panda_Hat.png"
},
{
    name: "Blue-Cowboy-Hat",
    description: "A denim cowboy hat in cool blue.",
    achievement: "N/A",
    howToObtain: "Found randomly in treasure chests in the Skull Cavern.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/73/Blue_Cowboy_Hat.png"
},
{
    name: "Red-Cowboy-Hat",
    description: "An eye-catching cowboy hat in red suede.",
    achievement: "N/A",
    howToObtain: "Found randomly in treasure chests in the Skull Cavern.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Red_Cowboy_Hat.png"
},
{
    name: "Cone-Hat",
    description: "A curiosity from a distant land.",
    achievement: "N/A",
    howToObtain: "Purchase during the Night Market at the Magic Shop Boat.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Cone_Hat.png"
},
{
    name: "Living-Hat",
    description: "It absorbs moisture from your scalp. No watering needed!",
    achievement: "N/A",
    howToObtain: "0.001% chance to find while cutting weeds, .01% chance of dropping from Wilderness Golems",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/95/Living_Hat.png"
},
{
    name: "Emily's-Magic-Hat",
    description: "Made with love by Emily. It's 100% organic!",
    achievement: "N/A",
    howToObtain: "Obtained in Emily's 14-heart cutscene",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Emily%27s_Magic_Hat.png"
},
{
    name: "Mushroom-Cap",
    description: "It smells earthy.",
    achievement: "N/A",
    howToObtain: "1% chance of obtaining when chopping down a Mushroom Tree",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/71/Mushroom_Cap.png"
},
{
    name: "Dinosaur-Hat",
    description: "A hat fashioned to look like a small dinosaur.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/25/Dinosaur_Hat.png"
},
{
    name: "Totem-Mask",
    description: "Don't worry, it won't warp your face...",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Totem_Mask.png"
},
{
    name: "Logo-Cap",
    description: "A red cap with a logo on the front.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Logo_Cap.png"
},
{
    name: "Wearable-Dwarf-Helm",
    description: "A slightly larger, human sized version of the helmets worn by dwarves.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/36/Wearable_Dwarf_Helm.png"
},
{
    name: "Fashion-Hat",
    description: "A fashionable hat with a feather in the brim.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/69/Fashion_Hat.png"
},
{
    name: "Pumpkin-Mask",
    description: "This must have been a pretty big pumpkin once...",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pumpkin_Mask.png"
},
{
    name: "Hair-Bone",
    description: "A prehistoric version of the hair bow.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cb/Hair_Bone.png"
},
{
    name: "Knight's-Helmet",
    description: "It looks just like the real thing!",
    achievement: "N/A",
    howToObtain: "Monster Eradication Goal - Defeat 50 Pepper Rex.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/62/Knight%27s_Helmet.png"
},
{
    name: "Squire's Helmet",
    description: "The face is exposed to increase air flow.",
    achievement: "N/A",
    howToObtain: "Monster drop from Metal Heads",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/70/Squire%27s_Helmet.png"
},
{
    name: "Spotted-Headscarf",
    description: "A red polka-dot scarf tied around the head.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a7/Spotted_Headscarf.png"
},
{
    name: "Beanie",
    description: "A warm hat with a pretty tight fit.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/51/Beanie.png"
},
{
    name: "Floppy-Beanie",
    description: "A warm hat with a looser fit.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0d/Floppy_Beanie.png"
},
{
    name: "Fishing Hat",
    description: "The wide brim keeps you shaded when you're fishing on the riverbank.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d8/Fishing_Hat.png"
},
{
    name: "Blobfish-Mask",
    description: "Just as spongy as the real thing!",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Blobfish_Mask.png"
},
{
    name: "Party-Hat",
    description: "A goofy red hat that makes any celebration more fun.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/96/Party_Hat_%28red%29.png"
},
{
    name: "Party-Hat",
    description: "A goofy blue hat that makes any celebration more fun.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Party_Hat_%28blue%29.png"
},
{
    name: "Party-Hat",
    description: "A goofy green hat that makes any celebration more fun.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Party_Hat_%28green%29.png"
},
{
    name: "Arcane-Hat",
    description: "The type of cowboy hat worn by a wizard.",
    achievement: "N/A",
    howToObtain: "Monster Eradication Goal - Defeat 100 Mummies.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Arcane_Hat.png"
},
{
    name: "Chef-Hat",
    description: "The traditional hat worn by a head chef.",
    achievement: "Gourmet Chef",
    howToObtain: "Cook every recipe.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Chef_Hat.png"
},
{
    name: "Pirate-Hat",
    description: "A captain's hat with a horrible skull on the front.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/04/Pirate_Hat.png"
},
{
    name: "Flat-Topped-Hat",
    description: "An old style of hat once considered very fashionable.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Flat_Topped_Hat.png"
},
{
    name: "Elegant-Turban",
    description: "A fine black silk turban with gold trim.",
    achievement: "N/A",
    howToObtain: "Earn all other Achievements.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Elegant_Turban.png"
},
{
    name: "White-Turban",
    description: "A fine white silk turban with blue trim.",
    achievement: "N/A",
    howToObtain: "Tailoring, Found randomly in treasure chests in the Skull Cavern.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/60/White_Turban.png"
},
{
    name: "Garbage-Hat",
    description: "It's a garbage can lid 'upcycled' into a hat...",
    achievement: "N/A",
    howToObtain: "0.2% chance to find while checking Garbage Cans in Town, only after checking 20 cans",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Garbage_Hat.png"
},
{
    name: "Golden-Mask",
    description: "A faithful recreation of the Calico Desert relic!",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Golden_Mask_%28hat%29.png"
},
{
    name: "Propeller-Hat",
    description: "A goofy hat with a propeller on top.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/96/Propeller_Hat.png"
},
{
    name: "Bridal-Veil",
    description: "The traditional headwear for a bride.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/05/Bridal_Veil.png"
},
{
    name: "Witch-Hat",
    description: "A pointy hat popular with witches.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Witch_Hat.png"
},
{
    name: "Copper-Pan",
    description: "You place the copper pan on your head...",
    achievement: "N/A",
    howToObtain: "Place the Copper Pan in the hat slot next to the farmer sprite in the inventory menu",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Copper_Pan_%28hat%29.png"
},
{
    name: "Green-Turban",
    description: "A green silk turban with a gold ornament on the front.",
    achievement: "N/A",
    howToObtain: "Desert Trader in exchange for 50 Omni Geodes",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d0/Green_Turban.png"
},
{
    name: "Magic-Cowboy-Hat",
    description: "It's shimmering with prismatic energy",
    achievement: "N/A",
    howToObtain: "Desert Trader in exchange for 333 Omni Geodes, odd days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/60/Magic_Cowboy_Hat.png"
},
{
    name: "Magic Turban",
    description: "It's shimmering with prismatic energy",
    achievement: "N/A",
    howToObtain: "Desert Trader in exchange for 333 Omni Geodes, even days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/65/Magic_Turban.png"
},
{
    name: "Golden-Helmet",
    description: "It's half of a golden coconut.",
    achievement: "N/A",
    howToObtain: "Golden Coconut (5% chance on opening)",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Golden_Helmet.png"
},
{
    name: "Deluxe-Pirate-Hat",
    description: "Only the most infamous pirate could pull off this look.",
    achievement: "N/A",
    howToObtain: "Volcano Dungeon chest",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cb/Deluxe_Pirate_Hat.png"
},
{
    name: "Pink-Bow",
    description: "This huge bow makes quite a statement!",
    achievement: "N/A",
    howToObtain: "Sold by Dwarf in Volcano Dungeon",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Pink_Bow.png"
},
{
    name: "Frog-Hat",
    description: "A slimy friend that lives on your dome.",
    achievement: "N/A",
    howToObtain: "Caught in the Gourmand Frog's cave on Ginger Island",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Frog_Hat.png"
},
{
    name: "Small-Cap",
    description: "It's a more aerodynamic style of cap.",
    achievement: "N/A",
    howToObtain: "Island Trader on Mondays in exchange for 30 Taro Roots.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1a/Small_Cap.png"
},
{
    name: "Bluebird-Mask",
    description: "Wear this to look just like your favorite island trader.",
    achievement: "N/A",
    howToObtain: "Island Trader on Wednesdays in exchange for 30 Taro Roots.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Bluebird_Mask.png"
},
{
    name: "Deluxe-Cowboy-Hat",
    description: "A cowboy hat with a more extreme shape.",
    achievement: "N/A",
    howToObtain: "Island Trader on Fridays in exchange for 30 Taro Roots.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Deluxe_Cowboy_Hat.png"
},
{
    name: "Mr.-Qi's-Hat",
    description: "A replica of Mr. Qi's iconic hat.",
    achievement: "N/A",
    howToObtain: "Qi's Walnut Room in exchange for 5 Qi Gems",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Mr._Qi%27s_Hat.png"
},
{
    name: "Dark Cowboy Hat",
    description: "A cowboy hat in fashionable black.",
    achievement: "N/A",
    howToObtain: "Found randomly in treasure chests in the Skull Cavern",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Dark_Cowboy_Hat.png"
},
{
    name: "Radioactive-Goggles",
    description: "Doesn't actually provide any protection from radiation.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4d/Radioactive_Goggles.png"
},
{
    name: "Swashbuckler-Hat",
    description: "The classic swashbuckler look.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c4/Swashbuckler_Hat.png"
},
{
    name: "Qi-Mask",
    description: "???",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Qi_Mask.png"
},
{
    name: "Star-Helmet",
    description: "A red hat with stars on it.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2a/Star_Helmet.png"
},
{
    name: "Sunglasses",
    description: "These give you a relaxed look.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/92/Sunglasses.png"
},
{
    name: "Goggles",
    description: "These will make you look very safe.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1a/Goggles.png"
},
{
    name: "Forager's-Hat",
    description: "It's a forager's delight.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/30/Forager%27s_Hat.png"
},
{
    name: "Warrior-Helmet",
    description: "An Ostrich eggshell repurposed into a helmet.",
    achievement: "N/A",
    howToObtain: "Tailoring",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/68/Warrior_Helmet.png"
},
{
    name: "???",
    description: "???",
    achievement: "N/A",
    howToObtain: "Interact with the monkey in the Volcano Caldera once you have achieved 100% Perfection.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1a/ConcernedApe_Hat.png"
}
];

module.exports = hats;