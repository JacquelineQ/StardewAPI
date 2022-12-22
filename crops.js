const crops = [
    //Get info from Cookng section of wiki
    //Need to decide what to do with notes Decision: Put them in as strings
    //Need to add fruit from fruit trees
    //This file has strings within an array, unlike other files, need to make a decisions
    //Do I want to keep type? Yes
    //Going to get rid of requiredFor
    //Oh wait, looks like the page I'm referencing only includes crops that are used in recipes, brilliant 

    //Final skeleton: 
    // {
    //     name: "",
    //     type: "",
    //     season: "",
    //     description: "",
    //     notes: "",
    //     growTime: "",    
    //     sellPrice: {
    //         regular: "",
    //         silver: "",
    //         gold: "",
    //         iridium: ""
    //     },
    //     imgSrc: ""
    // }
{
    name: "Amaranth",
    type: "Vegetable",
    season: "Fall",
    growTime: "7 Days",
    notes: "Harvested with Scythe",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png"
},
{
    name: "Artichoke",
    type: "Vegetable",
    season: "Fall",
    growTime: "8 Days",
    notes: "Available from Year 2",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png"
},
{
    name: "Beet",
    type: "Vegetable",
    season: "Fall",
    growTime: "6 Days",
    notes: "Seeds available at the Oasis",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png"
},
{
    name: "Blue Jazz",
    type: "Flower",
    season: "Spring",
    growTime: "7 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png"
},
{
    name: "Blueberry",
    type: "Fruit",
    season: "Summer",
    growTime: "13 Days",
    notes: "Produces multiple blueberries each harvest. Continues to produce every 4 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png"
},
{
    name: "Bok Choy",
    type: "Fruit",
    season: "Fall",
    growTime: "4 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png"
},
{
    name: "Cauliflower",
    type: "Vegetable",
    season: "Fall",
    growTime: "4 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png"
},
{
    name: "Corn",
    type: "Vegetable",
    season: "Summer/Fall",
    growTime: "14 Days",
    notes: "Continues to produce every 4 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png"
},
{
    name: "Cranberries",
    type: "Fruit",
    season: "Fall",
    growTime: "7 Days",
    notes: "Produces 2 Cranberries at harvest. Continues to produce every 5 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png"
},
{
    name: "Eggplant",
    type: "Vegetable",
    season: "Fall",
    growTime: "7 Days",
    notes: "Produces 2 Cranberries at harvest. Continues to produce every 5 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png"
},
{
    name: "Garlic",
    type: "Vegetable",
    season: "Spring",
    growTime: "4 Days",
    notes: "Available from Year 2",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png"
},
{
    name: "Green Bean",
    type: "Vegetable",
    season: "Spring",
    growTime: "10 Days",
    notes: "Grows on Trellis. Continues to produce every 3 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png"
},
{
    name: "Hot Pepper",
    type: "Fruit",
    season: "Summer",
    growTime: "5 Days",
    notes: "Continues to produce every 3 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png"
},
{
    name: "Kale",
    type: "Vegetable",
    season: "Spring",
    growTime: "6 Days",
    notes: "Harvest with Scythe",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png"
},
{
    name: "Melon",
    type: "Fruit",
    season: "Summer",
    growTime: "12 Days",
    notes: "Can become a Giant Crop",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png"
},
{
    name: "Parsnip",
    type: "Vegetable",
    season: "Spring",
    growTime: "4 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png"
},
{
    name: "Pineapple",
    type: "Fruit ",
    season: "Summer",
    growTime: "14 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png"
},
{
    name: "Poppy",
    type: "Flower",
    season: "Summer",
    growTime: "7 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png"
},
{
    name: "Potato",
    type: "Vegetable",
    season: "Spring",
    growTime: "6 Days",
    notes: "Has a 20% chance to yield extra potatoes",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png"
},
{
    name: "Pumpkin",
    type: "Vegetable",
    season: "Fall",
    growTime: "13 Days",
    notes: "Can become a Giant Crop",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png"
},
{
    name: "Radish",
    type: "Vegetable",
    season: "Summer",
    growTime: "6 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png"
},
{
    name: "Red Cabbage",
    type: "Vegetable",
    season: "Summer",
    growTime: "9 Days",
    notes: "Available from Year 2",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png"
},
{
    name: "Rhubarb",
    type: "Fruit",
    season: "Spring",
    growTime: "13 Days",
    notes: "Seeds available in the Oasis",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png"
},
{
    name: "Taro Root",
    type: "Vegetable",
    season: "Summer",
    growTime: "10 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png"
},
{
    name: "Tomato",
    type: "Vegetable",
    season: "Summer",
    growTime: "11 Days",
    notes: "Continues to produce every 4 days.",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png"
},
{
    name: "Yam",
    type: "Vegetable",
    season: "Fall",
    growTime: "10 Days",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png"
},
{
    name: "Apple",
    type: "Tree Fruit",
    season: "Fall",
    growTime: "N/A",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png"
},
{
    name: "Apricot",
    type: "Tree Fruit",
    season: "Spring",
    growTime: "N/A",
    notes: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png"
},
{
    name: "Banana",
    type: "Tree Fruit ",
    season: "",
    growTime: "",
    notes: "",
    imgSrc: ""
},
{
    name: "",
    type: "",
    season: "",
    growTime: "",
    notes: "",
    imgSrc: ""
},
{
    name: "",
    type: "",
    season: "",
    growTime: "",
    notes: "",
    imgSrc: ""
},
];

module.exports = crops;