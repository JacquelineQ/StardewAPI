const crops = [
{
    name: "Blue-Jazz",
    season: ["Spring"],
    description: "The flower grows in a sphere to invite as many butterflies as possible.",
    notes: "N/A",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png"
},
{
    name: "Cauliflower",
    season: ["Spring"],
    description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
    notes: "Cauliflower can become a Giant Crop.",
    growTime: "12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png"
},
{
    name: "Coffee-Bean",
    season: ["Spring", "Summer"],
    description: "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
    notes: "Each plant yields 4 beans per harvest with a small random chance for more beans.",
    growTime: "10 Days",
    regrowthTime: "2 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png"
},
{
    name: "Garlic",
    season: ["Spring"],
    description: "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
    notes: "Available from year 2+.",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png"
},
{
    name: "Green-Bean",
    season: ["Spring"],
    description: "A juicy little bean with a cool, crisp snap.",
    notes: "This crop uses a trellis, and continues to produce after maturity.",
    growTime: "10 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png"
},
{
    name: "Kale",
    season: ["Spring"],
    description: "The waxy leaves are great in soups and stir frys.",
    notes: "Harvested with a scythe",
    growTime: "6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png"
},
{
    name: "Parsnip",
    season: ["Spring"],
    description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
    notes: "N/A",
    growTime:"4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png"
},
{
    name: "Potato",
    season: ["Spring"],
    description: "A widely cultivated tuber.",
    notes: "Yields at least 1 Potato at harvest, with a chance to produce, on average, 0.25 extra potatoes.",
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png"
},
{
    name: "Rhubarb",
    season: ["Spring"],
    description: "The stalks are extremely tart, but make a great dessert when sweetened.",
    notes: "N/A",
    growTime:"13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png"
},
{
    name: "Strawberry",
    season: ["Spring"],
    description: "A sweet, juicy favorite with an appealing red color.",
    notes: "Keeps producing after maturity. When harvested, each Strawberry plant gives 1 Strawberry every 4 days, with a small random chance for more Strawberries.",
    growTime:"8 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png"
},
{
    name: "Tulip",
    season: ["Spring"],
    description: "The most popular spring flower. Has a very faint sweet smell.",
    notes: "N/A",
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png"
},
{
    name: "Unmilled-Rice",
    season: ["Spring"],
    description: "Rice in its rawest form. Run this through a mill to increase the value.",
    notes: "Grows faster when irrigated (planted next to water), Harvested with a scythe",
    growTime:"8 Days (Unirrigated), 6 Days (Irrigated)",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Unmilled_Rice.png"
},
{
    name: "Blueberry",
    season: ["Summer"],
    description: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
    notes: "Keeps producing after maturity. Each plant produces 3 blueberries at harvest, with ≈2% chance for more blueberries.",
    growTime:"13 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png"
},
{
    name: "Corn",
    season: ["Summer", "Fall"],
    description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
    notes: "Keeps producing after maturity. Can be grown in Summer or Fall.",
    growTime:"14 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png"
},
{
    name: "Hops",
    season: ["Summer"],
    description: "A bitter, tangy flower used to flavor beer.",
    notes: "Hops use a trellis, and continue to produce after maturity.",
    growTime:"11 Days",
    regrowthTime: "1 Day",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png"
},
{
    name: "Hot-Pepper",
    season: ["Summer"],
    description: "Fiery hot with a hint of sweetness.",
    notes: "Keeps producing after maturity. When harvested, each Hot Pepper plant gives 1 Hot Pepper every 3 days, with a small random chance for more Hot Peppers.",
    growTime:"5 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png"
},
{
    name: "Melon",
    season: ["Summer"],
    description: "A cool, sweet summer treat.",
    notes: "Melons can become a Giant Crop.",
    growTime:"12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png"
},
{
    name: "Poppy",
    season: ["Summer"],
    description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
    notes: "N/A",
    growTime:"7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png"
},
{
    name: "Radish",
    season: ["Summer"],
    description: "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
    notes: "N/A",
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png"
},
{
    name: "Red-Cabbage",
    season: ["Summer"],
    description: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
    notes: "Available from year 2+",
    growTime:"9 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png"
},
{
    name: "Starfruit",
    season: ["Summer"],
    description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone.",
    notes: "Not to be mistaken for Stardrop",
    growTime: "13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png"
},
{
    name: "Summer-Spangle",
    season: ["Summer"],
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
    notes: "N/A",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: ""
},
{
    name: "Sunflower",
    season: ["Summer", "Fall"],
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
    notes: "Harvesting a sunflower will also produce 0-2 Sunflower Seeds. Sunflowers can be grown in Summer or Fall.",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png"
},
{
    name: "Tomato",
    season: ["Summer"],
    description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
    notes: "Keeps producing after maturity. Each harvest produces 1 tomato, with a small random chance for more tomatoes.",
    growTime: "11 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png"
},
{
    name: "Wheat",
    season: ["Summer", "Fall"],
    description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
    notes: "Can be grown in Summer or Fall. Harvested with a scythe",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png"
},
{
    name: "Amaranth",
    season: ["Fall"],
    description: "A purple grain cultivated by an ancient civilization.",
    notes: "Harvested with a scythe",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png"
},
{
    name: "Artichoke",
    season: ["Fall"],
    description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
    notes: "N/A",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png"
},
{
    name: "Beet",
    season: ["Fall"],
    description: "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad.",
    notes: "Sold at The Oasis",
    growTime: "6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png"
},
{
    name: "Bok Choy",
    season: ["Fall"],
    description: "The leafy greens and fibrous stalks are healthy and delicious.",
    notes: "N/A",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png"
},
{
    name: "Cranberries",
    season: ["Fall"],
    description: "These tart red berries are a traditional winter food.",
    notes: "Yields 2 berries at harvest, with a small random chance for more berries. Keeps producing after maturity.",
    growTime: "7 Days",
    regrowthTime: "5 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png"
},
{
    name: "Eggplant",
    season: ["Fall"],
    description: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
    notes: "Keeps producing after maturity. When harvested, each Eggplant bush gives 1 Eggplant every 5 days, with a very small random chance for more Eggplants.",
    growTime: "5 Days",
    regrowthTime: "5 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png"
},
{
    name: "Fairy-Rose",
    season: ["Fall"],
    description: "An old folk legend suggests that the sweet smell of this flower attracts fairies.",
    notes: "N/A",
    growTime: "12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png"
},
{
    name: "Grape",
    season: ["Fall"],
    description: "A sweet cluster of fruit.",
    notes: "Grapes use a trellis, and continue to produce after maturity.",
    growTime: "10 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png"
},
{
    name: "Pumpkin",
    season: ["Fall"],
    description: "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
    notes: "Pumpkins can become a Giant Crop.",
    growTime: "13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png"
},
{
    name: "Yam",
    season: ["Fall"],
    description: "A starchy tuber with a lot of culinary versatility.",
    notes: "N/A",
    growTime: "10 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png"
},
{
    name: "Ancient-Fruit",
    season: ["Spring, Summer, Fall"],
    description: "It's been dormant for eons.",
    notes: "Grows in Spring, Summer, or Fall. Seeds can be purchased at the Traveling Cart or crafted from the Ancient Seed Artifact",
    growTime: "28 Days",
    regrowthTime: "7 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png"
},
{
    name: "Cactus-Fruit",
    season: ["N/A"],
    description: "The sweet fruit of the prickly pear cactus.",
    notes: "Can only be grown in the Greenhouse, indoors in Garden Pots, or the Ginger Island farm. Seeds can be purchases at Oasis. Can also be found as a foraged item in Calico Desert.",
    growTime: "12 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png"
},
{
    name: "Raw material sourced from plants.",
    season: ["Spring", "Summer", "Fall", "Winter"],
    description: "Raw material sourced from plants.",
    notes: "Grows in all seasons. Does not need to be watered. Produces multiple Fiber when harvested.",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/45/Fiber.png"
},
{
    name: "Mixed-Seeds",
    season: ["Spring", "Fall", "Summer"],
    description: "There's a little bit of everything here. Plant them and see what grows!",
    notes: "Mixed Seeds are a type of seed that can be planted in any season, except Winter, to grow into a random crop specific to that season. They can be randomly found when cutting weeds with a scythe, by digging up dirt or sand with a hoe, or from a Seed Maker. The Forest Farm has a unique type of weed which always drops Mixed Seeds when destroyed.",
    growTime: "N/A",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Mixed_Seeds.png"
},
{
    name: "Pineapple",
    season: ["Summer"],
    description: "A sweet and tangy tropical treat.",
    notes: "Grows in Summer if planted on the The Farm and all year on Ginger Island.",
    growTime: "14 Days",
    regrowthTime: "7 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png"
},
{
    name: "Taro-Root",
    season: ["Summer"],
    description: "This starchy root is one of the most ancient crops.",
    notes: "Grows in Summer if planted on the The Farm and all year on Ginger Island. Grows faster when irrigated (planted next to water)",
    growTime: "10 Days (Unirrigated), 7 Days (Irrigated)",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png"
},
{
    name: "Sweet-Gem-Berry",
    season: ["Fall"],
    description: "It's by far the sweetest thing you've ever smelled.",
    notes: "Can be grown from a Rare Seed can be found for sale at the Traveling Cart during Spring and Summer, and rarely during Fall and Winter. Can be gifted to Old Master Cannoli in the Secret Woods in exchange for a Stardrop. Cannot be turned into wine.",
    growTime: "24 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png"
},
{
    name: "Tea-Leaves",
    season: ["Spring", "Summer", "Fall"],
    description: "The young leaves of the tea plant. Can be brewed into the popular, energizing beverage.",
    notes: " Can be harvested each day during the last week of Spring, Summer, and Fall (and Winter if indoors).",
    growTime: "20 Days",
    regrowthTime: "1 Day",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Tea_Leaves.png"
},
{
    name: "Wild-Seeds",
    season: ["Spring", "Summer", "Fall", "Winter"],
    description: "N/A",
    notes: "Wild Seeds can be crafted out of foraged plants once you learn the recipe at the appropriate foraging level (Spring at level 1, Summer at level 4, Fall at level 6, Winter at level 7). Each recipe will produce 10 seed packets. When planted, wild seeds will randomly grow into one of that season's foraged plants. Regardless of what ends up growing, wild seeds all take the same amount of time to grow to maturity (7 days, not counting the day planted). Crows do not attack crops grown from Wild Seeds, so the use of Scarecrows is unnecessary. Since these seeds grow Forage crops, they will be of iridium quality if the Botanist Profession is chosen.",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "N/A"
},
{
    name: "",
    season: [""],
    description: "",
    notes: "",
    growTime: "",
    regrowthTime: "",
    imgSrc: ""
},
{
    name: "",
    season: [""],
    description: "",
    notes: "",
    growTime: "",
    regrowthTime: "",
    imgSrc: ""
},
{
    name: "",
    season: [""],
    description: "",
    notes: "",
    growTime: "",
    regrowthTime: "",
    imgSrc: ""
},
{
    name: "",
    season: [""],
    description: "",
    notes: "",
    growTime: "",
    regrowthTime: "",
    imgSrc: ""
},
];

module.exports = crops;