const villagers = [
{
    name: "Abigail",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "fall 13",
    livesIn: "pelican town",
    address: "pierre's general store",
    bestGifts: ["amethyst", "banana pudding", "blackberry cobbler", "chocolate cake", "pufferfish", "pumpkin", "spicy eel"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png"
},
{
    name: "Alex",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Summer 13",
    livesIn:  "Pelican Town",
    address: "1 River Road",
    bestGifts: ["Complete Breakfast", "Salmon Dinner"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png"
},
{
    name: "Birdie",
    gender: "female",
    giftable: "no",
    marriage: "no",
    birthday: "unknown",
    livesIn: "Ginger Island",
    address: "Hut on Island West",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/46/Birdie.png"
},
{
    name: "Bouncer",
    gender: "male",
    giftable: "no",
    marriage: "no",
    birthday: "unknown",
    livesIn: "The Calico Desert",
    address: "Oasis",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f5/Bouncer.png"
},
{
    name: "Caroline",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Winter 7",
    livesIn: "Pelican Town",
    address: "Pierre's General Store",
    bestGifts: ["Fish Taco", "Green Tea", "Summer Spangle", "Tropical Curry"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png"
},
{
    name: "Clint",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Winter 26",
    livesIn: "Pelican Town",
    address: "Blacksmith",
    bestGifts: ["Amethyst", "Aquamarine", "Artichoke Dip", "Emerald", "Fiddlehead Risotto",
                "Gold Bar", "Iridium Bar", "Jade", "Omni Geode", "Ruby", "Topaz"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png"
},
{
    name: "Demetrius",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 19",
    livesIn: "The Mountain",
    address: "24 Mountain Road",
    bestGifts: ["Bean Hotpot", "Ice Cream", "Rice Pudding", "Strawberry"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png"
},
{
    name: "Dwarf",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 22",
    livesIn: "The Mines",
    address: "Eastern Cave",
    bestGifts: ["Amethyst", "Aquamarine", "Emerald", "Jade", "Lemon Stone", "Omni Geode", "Ruby", "Topaz"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png"
},
{
    name: "Elliott",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Fall 5",
    livesIn: "The Beach",
    address: "Elliott's Cabin",
    bestGifts: ["Crab Cakes", "Duck Feather", "Lobster", "Pomegranate", "Squid Ink", "Tom Kha Soup"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png"
},
{
    name: "Emily",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "Spring 27",
    livesIn: "Pelican Town",
    address: "2 Willow Lane",
    bestGifts: ["Amethyst", "Aquamarine", "Cloth", "Emerald", "Jade", "Ruby", "Survival Burger", "Topaz", "Wool"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png"
},
{
    name: "Evelyn",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Winter 20",
    livesIn: "Pelican Town",
    address: "1 River Road",
    bestGifts: ["Beet", "Chocolate Cake", "Diamond", "Fairy Rose", "Stuffing", "Tulip"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png"
},
{
    name: "George",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Fall 24",
    livesIn: "Pelican Town",
    address: "1 River Road",
    bestGifts: ["Fried Mushroom", "Leek"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png"
},
{
    name: "Gil",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "The Mountain",
    address: "Adventurer's Guild",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/64/Gil.png"
},
{
    name: "Governor",
    gender: "male",
    giftable: "no",
    marriage: "no",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/46/Governor.png"
},
{
    name: "Grandpa",
    gender: "male",
    giftable: "no",
    marriage: "no",
    address: "The Afterlife",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png"
},
{
    name: "Gunther",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "Pelican Town",
    address: "Museum",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Gunther.png"
},
{
    name: "Gus",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 8",
    livesIn: "Pelican Town",
    address: "The Stardrop Saloon",
    bestGifts: ["Diamond", "Escargot", "Fish Taco", "Orange", "Tropical Curry"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png"
},
{
    name: "Haley",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "Spring 14",
    livesIn: "Pelican Town",
    address: "2 Willow Lane",
    bestGifts: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png"
},
{
    name: "Harvey",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Winter 14",
    livesIn: "Pelican Town",
    address: "Medical Clinic",
    bestGifts: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png"
},
{
    name: "Henchman",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "Witch's Swamp",
    bestGifts: ["Void Mayonnaise"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/21/Henchman_Portrait_1.png"
},
{
    name: "Jas",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 4",
    livesIn: "Cindersape Forest",
    address: "Marnie's Ranch",
    bestGifts: ["Fairy Rose", "Pink Cake", "Plum Pudding"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png"
},
{
    name: "Jodi",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Fall 11",
    livesIn: "Pelican Town",
    address: "1 Willow Lane",
    bestGifts: ["Chocolate Cake", "Crispy Bass", "Diamond", "Eggplant Parmesan", 
                "Fried Eel", "Pancakes", "Rhubarb Pie", "Vegetable Medley"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png"
},
{
    name: "Kent",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Spring 4",
    livesIn: "Pelican Town",
    address: "1 Willow Lane",
    bestGifts: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png"
},
{
    name: "Krobus",
    gender: "male",
    giftable: "yes",
    marriage: "no, but can be a roommate",
    birthday: "Winter 1",
    livesIn: "The Sewers",
    address: "Krobus's Shop",
    bestGifts: ["Diamond", "Iridium Bar", "Pumpkin", "Void Egg", "Void Mayonnaise", "Wild Horseradish"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png"
},
{
    name: "Leah",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "Winter 23",
    livesIn: "Cindersap Forest",
    address: "Leah's Cottage",
    bestGifts: ["Goat Cheese", "Poppyseed Muffin", "Salad", "Stir Fry", "Truffle", "Vegetable Medley", "Wine"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png"
},
{
    name: "Leo",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 26",
    livesIn: "Ginger Island",
    address: ["Hut", "Treehouse"],
    bestGifts: ["Duck Feather", "Mango", "Ostritch Egg", "Poi"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png"
},
{
    name: "Lewis",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Spring 7",
    livesIn: "Pelican Town",
    address: "Mayoer's Manor",
    bestGifts: ["Autumn's Bounty", "Glazed Yams", "Green Tea", "Hot Pepper", "Vegetable Medley"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png"
},
{
    name: "Linus",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Winter 3",
    livesIn: "The Mountain",
    address: "Tent",
    bestGifts: ["Blueberry Tart", "Cactus Fruit", "Coconut", "Dish O' The Sea", "Yam"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png"
},
{
    name: "Marlon",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "The Mountain",
    address: "Adventurer's Guild",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/37/Marlon.png"
},
{
    name: "Marnie",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Fall 18",
    livesIn: "Cindersap Forest",
    address: "Marnie's Ranch",
    bestGifts: ["Diamond", "Farmer's Lunch", "Pink Cake", "Pumpkin Pie"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png"
},
{
    name: "Maru",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "Summer 10",
    livesIn: "The Mountain",
    address: "24 Mountain Road",
    bestGifts: ["Battery Pack", "Cauliflower", "Cheese Cauliflower", "Diamond", "Gold Bar", "Iridium Bar", "Miner's Treat", "Pepper Poppers", "Radioactive Bar", "Rhubarb Pie", "Strawberry"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png"
},
{
    name: "Morris",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "Pelican Town",
    address: "JojaMart",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/90/Morris.png"
},
{
    name: "Mr. Qi",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "The Calico Desert",
    address: ["Casino (Desert)", "Qi's Walnut Room (Island)"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b4/Mr._Qi.png"
},
{
    name: "Pam",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Spring 18",
    livesIn: "Pelican Town",
    address: "Trailer",
    bestGifts: ["Beer", "Cactus Fruit", "Glazed Yams", "Mead", "Pale Ale", "Parsnip", "Parsnip Soup", "Pina Colada"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png"
},
{
    name: "Pierre",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Spring 26",
    livesIn: "Pelican Town",
    address: "Pierre's General Store",
    bestGifts: ["Fried Calamari"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png"
},
{
    name: "Robin",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Fall 21",
    livesIn: "The Mountain",
    address: "24 Mountain Road",
    bestGifts: ["Goat Cheese", "Peach", "Spaghetti"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png"
},
{
    name: "Sam",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Summer 17",
    livesIn: "Pelican Town",
    address: "1 Willow Lane",
    bestGifts: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png"
},
{
    name: "Sandy",
    gender: "female",
    giftable: "yes",
    marriage: "no",
    birthday: "Fall 15",
    livesIn: "The Calico Desert",
    address: "Oasis",
    bestGifts: ["Crocus", "Daffodil", "Mango Sticky Rice", "Sweet Pea"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png"
},
{
    name: "Sebastian",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Winter 10",
    livesIn: "The Mountain",
    address: "24 Mountain Road",
    bestGifts: ["Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi", "Void Egg"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png"
},
{
    name: "Shane",
    gender: "male",
    giftable: "yes",
    marriage: "yes",
    birthday: "Spring 20",
    livesIn: "Cindersap Forest",
    address: "Marnie's Ranch",
    bestGifts: ["Beer", "Hot Pepper", "Pepper Poppers", "Pizza"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png"
},
{
    name: "Penny",
    gender: "female",
    giftable: "yes",
    marriage: "yes",
    birthday: "Fall 2",
    livesIn: "Pelican Town",
    address: "Trailer",
    bestGifts: ["Diamond", "Emerald", "Melon", "Poppy", "Poppyseed Muffin", "Red Plate", "Roots Platter", "Sandfish", "Tom Kha Soup"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png"
},
{
    name: "Professor Snail",
    gender: "male",
    giftable: "no",
    marriage: "no",
    livesIn: "Ginger Island",
    address: "Island Field Office",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Professor_Snail.png"
},
{
    name: "Vincent",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Spring 10",
    livesIn: "Pelican Town",
    address: "1 Willow Lane",
    bestGifts: ["Cranberry Candy", "Ginger Ale", "Grape", "Pink Cake", "Snail"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png"
},
{
    name: "Willy",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Summer 24",
    livesIn: "The Beach",
    address: "Fish Shop",
    bestGifts: ["Catfish", "Diamond", "Iridium Bar", "Mead", "Octopus", "Pumpkin", "Sea Cucumber", "Sturgeon"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png"
},
{
    name: "Wizard",
    gender: "male",
    giftable: "yes",
    marriage: "no",
    birthday: "Winter 17",
    livesIn: "Cindersap Forest",
    address: "Wizard's Tower",
    bestGifts: ["Purple Mushroom", "Solar Essence", "Super Cucumber", "Void Essence"],
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png"
}
];

module.exports = villagers;