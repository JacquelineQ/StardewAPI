// Not sure if I can resturn crops by grow season unless I set every season as a boolean 
// And I dont think that works either lmao
// Okay made that work but it looks like I could have done this without including the extra values like growsSpring,
// will leave for now and possibly rewrite later
// Should I include Pierre and JojaMart seed prices?
// Should I include value for each type of quality?

// Included seed prices, are a number type and are 0 if N/A (ie not available to purchase from Piere or Joja)


const crops = [
{
    name: "Blue-Jazz",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "The flower grows in a sphere to invite as many butterflies as possible.",
    pierreSeedPrice: 30,
    jojaSeedPrice: 37, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 50,
        silver: 62,
        gold: 75,
        iridium: 100
    },
    notes: "N/A",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png"
},
{
    name: "Cauliflower",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
    pierreSeedPrice: 80,
    jojaSeedPrice: 100, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 175,
        silver: 218,
        gold: 262,
        iridium: 350
    },
    notes: "Cauliflower can become a Giant Crop.",
    growTime: "12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png"
},
{
    name: "Coffee-Bean",
    season: "Spring, Summer",
    growsSpring: true,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 2500,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 15,
        silver: 18,
        gold: 22,
        iridium: 30
    },
    notes: "Each plant yields 4 beans per harvest with a small random chance for more beans.",
    growTime: "10 Days",
    regrowthTime: "2 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png"
},
{
    name: "Garlic",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
    pierreSeedPrice: 40,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 60,
        silver: 75,
        gold: 90,
        iridium: 120
    },
    notes: "Available from year 2+.",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png"
},
{
    name: "Green-Bean",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "A juicy little bean with a cool, crisp snap.",
    pierreSeedPrice: 60,
    jojaSeedPrice: 75, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 40,
        silver: 50,
        gold: 60,
        iridium: 80
    },
    notes: "This crop uses a trellis, and continues to produce after maturity.",
    growTime: "10 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png"
},
{
    name: "Kale",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "The waxy leaves are great in soups and stir frys.",
    pierreSeedPrice: 40,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 60,
        silver: 75,
        gold: 90,
        iridium: 120
    },
    notes: "Harvested with a scythe",
    growTime: "6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png"
},
{
    name: "Parsnip",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
    pierreSeedPrice: 20,
    jojaSeedPrice: 25, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 35,
        silver: 43,
        gold: 52,
        iridium: 70
    },
    notes: "N/A",
    growTime:"4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png"
},
{
    name: "Potato",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "A widely cultivated tuber.",
    notes: "Yields at least 1 Potato at harvest, with a chance to produce, on average, 0.25 extra potatoes.",
    pierreSeedPrice: 52,
    jojaSeedPrice: 62, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 80,
        silver: 100,
        gold: 120,
        iridium: 160
    },
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png"
},
{
    name: "Rhubarb",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "The stalks are extremely tart, but make a great dessert when sweetened.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 100,
    sellPrice: {
        regular: 220,
        silver: 275,
        gold: 330,
        iridium: 440
    },
    notes: "N/A",
    growTime:"13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png"
},
{
    name: "Strawberry",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "A sweet, juicy favorite with an appealing red color.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 120,
        silver: 150,
        gold: 180,
        iridium: 240
    },
    notes: "Keeps producing after maturity. When harvested, each Strawberry plant gives 1 Strawberry every 4 days, with a small random chance for more Strawberries. Seeds only available for purchase at the Egg Festival.",
    growTime:"8 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png"
},
{
    name: "Tulip",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "The most popular spring flower. Has a very faint sweet smell.",
    pierreSeedPrice: 20,
    jojaSeedPrice: 25, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 30,
        silver: 37,
        gold: 45,
        iridium: 60
    },
    notes: "N/A",
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png"
},
{
    name: "Unmilled-Rice",
    season: "Spring",
    growsSpring: true,
    growsSummer: false,
    growsFall: false,
    growsWinter: false,
    description: "Rice in its rawest form. Run this through a mill to increase the value.",
    pierreSeedPrice: 40,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 30,
        silver: 37,
        gold: 45,
        iridium: 60
    },
    notes: "Grows faster when irrigated (planted next to water), Harvested with a scythe",
    growTime:"8 Days (Unirrigated), 6 Days (Irrigated)",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Unmilled_Rice.png"
},
{
    name: "Blueberry",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
    pierreSeedPrice: 80,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 50,
        silver: 62,
        gold: 75,
        iridium: 100
    },
    notes: "Keeps producing after maturity. Each plant produces 3 blueberries at harvest, with ≈2% chance for more blueberries.",
    growTime:"13 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png"
},
{
    name: "Corn",
    season: "Summer, Fall",
    growsSpring: false,
    growsSummer: true,
    growsFall: true,
    growsWinter: false,
    description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
    pierreSeedPrice: 150,
    jojaSeedPrice: 187, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 50,
        silver: 62,
        gold: 75,
        iridium: 100
    },
    notes: "Keeps producing after maturity. Can be grown in Summer or Fall.",
    growTime:"14 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png"
},
{
    name: "Hops",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "A bitter, tangy flower used to flavor beer.",
    pierreSeedPrice: 60,
    jojaSeedPrice: 75, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 25,
        silver: 31,
        gold: 37,
        iridium: 50
    },
    notes: "Hops use a trellis, and continue to produce after maturity.",
    growTime:"11 Days",
    regrowthTime: "1 Day",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png"
},
{
    name: "Hot-Pepper",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "Fiery hot with a hint of sweetness.",
    pierreSeedPrice: 40,
    jojaSeedPrice: 50, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 40,
        silver: 50,
        gold: 60,
        iridium: 80
    },
    notes: "Keeps producing after maturity. When harvested, each Hot Pepper plant gives 1 Hot Pepper every 3 days, with a small random chance for more Hot Peppers.",
    growTime:"5 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png"
},
{
    name: "Melon",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "A cool, sweet summer treat.",
    pierreSeedPrice: 80,
    jojaSeedPrice: 100, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 250,
        silver: 312,
        gold: 375,
        iridium: 500
    },
    notes: "Melons can become a Giant Crop.",
    growTime:"12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png"
},
{
    name: "Poppy",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
    pierreSeedPrice: 100,
    jojaSeedPrice: 125, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 140,
        silver: 175,
        gold: 210,
        iridium: 280
    },
    notes: "N/A",
    growTime:"7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png"
},
{
    name: "Radish",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
    pierreSeedPrice: 40,
    jojaSeedPrice: 50, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 90,
        silver: 112,
        gold: 135,
        iridium: 180
    },
    notes: "N/A",
    growTime:"6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png"
},
{
    name: "Red-Cabbage",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
    pierreSeedPrice: 100,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 260,
        silver: 325,
        gold: 390,
        iridium: 520
    },
    notes: "Available from year 2+",
    growTime:"9 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png"
},
{
    name: "Starfruit",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 100,
    sellPrice: {
        regular: 750,
        silver: 937,
        gold: 1125,
        iridium: 1500
    },
    notes: "Not to be mistaken for Stardrop",
    growTime: "13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png"
},
{
    name: "Summer-Spangle",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
    pierreSeedPrice: 50,
    jojaSeedPrice: 62, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 90,
        silver: 112,
        gold: 135,
        iridium: 180
    },
    notes: "N/A",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: ""
},
{
    name: "Sunflower",
    season: "Summer, Fall",
    growsSpring: false,
    growsSummer: true,
    growsFall: true,
    growsWinter: false,
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
    pierreSeedPrice: 200,
    jojaSeedPrice: 125, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 80,
        silver: 100,
        gold: 120,
        iridium: 160
    },
    notes: "Harvesting a sunflower will also produce 0-2 Sunflower Seeds. Sunflowers can be grown in Summer or Fall.",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png"
},
{
    name: "Tomato",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
    pierreSeedPrice: 50,
    jojaSeedPrice: 62, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 60,
        silver: 75,
        gold: 90,
        iridium: 120
    },
    notes: "Keeps producing after maturity. Each harvest produces 1 tomato, with a small random chance for more tomatoes.",
    growTime: "11 Days",
    regrowthTime: "4 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png"
},
{
    name: "Wheat",
    season: "Summer, Fall",
    growsSpring: false,
    growsSummer: true,
    growsFall: true,
    growsWinter: false,
    description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
    pierreSeedPrice: 10,
    jojaSeedPrice: 12, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 25,
        silver: 31,
        gold: 37,
        iridium: 50
    },
    notes: "Can be grown in Summer or Fall. Harvested with a scythe",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png"
},
{
    name: "Amaranth",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A purple grain cultivated by an ancient civilization.",
    pierreSeedPrice: 70,
    jojaSeedPrice: 87, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 150,
        silver: 187,
        gold: 225,
        iridium: 300
    },
    notes: "Harvested with a scythe",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png"
},
{
    name: "Artichoke",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
    pierreSeedPrice: 30,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 160,
        silver: 200,
        gold: 240,
        iridium: 320
    },
    notes: "N/A",
    growTime: "8 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png"
},
{
    name: "Beet",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 20,
    sellPrice: {
        regular: 100,
        silver: 125,
        gold: 150,
        iridium: 200
    },
    notes: "Sold at The Oasis",
    growTime: "6 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png"
},
{
    name: "Bok Choy",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "The leafy greens and fibrous stalks are healthy and delicious.",
    pierreSeedPrice: 50,
    jojaSeedPrice: 62, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 80,
        silver: 100,
        gold: 120,
        iridium: 160
    },
    notes: "N/A",
    growTime: "4 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png"
},
{
    name: "Cranberries",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "These tart red berries are a traditional winter food.",
    pierreSeedPrice: 240,
    jojaSeedPrice: 300, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 75,
        silver: 93,
        gold: 112,
        iridium: 150
    },
    notes: "Yields 2 berries at harvest, with a small random chance for more berries. Keeps producing after maturity.",
    growTime: "7 Days",
    regrowthTime: "5 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png"
},
{
    name: "Eggplant",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
    pierreSeedPrice: 20,
    jojaSeedPrice: 25, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 60,
        silver: 75,
        gold: 90,
        iridium: 120
    },
    notes: "Keeps producing after maturity. When harvested, each Eggplant bush gives 1 Eggplant every 5 days, with a very small random chance for more Eggplants.",
    growTime: "5 Days",
    regrowthTime: "5 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png"
},
{
    name: "Fairy-Rose",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "An old folk legend suggests that the sweet smell of this flower attracts fairies.",
    pierreSeedPrice: 200,
    jojaSeedPrice: 250, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 290,
        silver: 362,
        gold: 435,
        iridium: 580
    },
    notes: "N/A",
    growTime: "12 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png"
},
{
    name: "Grape",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A sweet cluster of fruit.",
    pierreSeedPrice: 60,
    jojaSeedPrice: 75, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 80,
        silver: 100,
        gold: 120,
        iridium: 160
    },
    notes: "Grapes use a trellis, and continue to produce after maturity.",
    growTime: "10 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png"
},
{
    name: "Pumpkin",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
    pierreSeedPrice: 100,
    jojaSeedPrice: 125, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 320,
        silver: 400,
        gold: 480,
        iridium: 640
    },
    notes: "Pumpkins can become a Giant Crop.",
    growTime: "13 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png"
},
{
    name: "Yam",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "A starchy tuber with a lot of culinary versatility.",
    pierreSeedPrice: 60,
    jojaSeedPrice: 75, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 160,
        silver: 200,
        gold: 240,
        iridium: 320
    },
    notes: "N/A",
    growTime: "10 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png"
},
{
    name: "Ancient-Fruit",
    season: "Spring, Summer, Fall",
    growsSpring: true,
    growsSummer: true,
    growsFall: true,
    growsWinter: false,
    description: "It's been dormant for eons.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 1000,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 550,
        silver: 687,
        gold: 825,
        iridium: 1100
    },
    notes: "Grows in Spring, Summer, or Fall. Seeds can be purchased at the Traveling Cart for 100g-1000g or crafted from the Ancient Seed Artifact",
    growTime: "28 Days",
    regrowthTime: "7 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png"
},
{
    name: "Cactus-Fruit",
    season: "N/A",
    description: "The sweet fruit of the prickly pear cactus.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 150,
    sellPrice: {
        regular: 75,
        silver: 93,
        gold: 112,
        iridium: 150
    },
    notes: "Can only be grown in the Greenhouse, indoors in Garden Pots, or the Ginger Island farm. Seeds can be purchases at Oasis. Can also be found as a foraged item in Calico Desert.",
    growTime: "12 Days",
    regrowthTime: "3 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png"
},
{
    name: "Fiber",
    season: "Spring, Summer, Fall, Winter",
    growsSpring: true,
    growsSummer: true,
    growsFall: true,
    growsWinter: true,
    description: "Raw material sourced from plants.",
    pierreSeedPrice: 00,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 1,
        silver: 1,
        gold: 1,
        iridium: 1
    },
    notes: "Grows in all seasons. Does not need to be watered. Produces multiple Fiber when harvested.",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/45/Fiber.png"
},
{
    name: "Mixed-Seeds",
    season: "Spring, Fall, Summer",
    growsSpring: true,
    growsSummer: true,
    growsFall: true,
    growsWinter: false,
    description: "There's a little bit of everything here. Plant them and see what grows!",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 0,
        silver: 0,
        gold: 0,
        iridium: 0
    },
    notes: "Mixed Seeds are a type of seed that can be planted in any season, except Winter, to grow into a random crop specific to that season. They can be randomly found when cutting weeds with a scythe, by digging up dirt or sand with a hoe, or from a Seed Maker. The Forest Farm has a unique type of weed which always drops Mixed Seeds when destroyed.",
    growTime: "N/A",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Mixed_Seeds.png"
},
{
    name: "Pineapple",
    season: "Summer",
    description: "A sweet and tangy tropical treat.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 300,
        silver: 375,
        gold: 450,
        iridium: 600
    },
    notes: "Grows in Summer if planted on the The Farm and all year on Ginger Island.",
    growTime: "14 Days",
    regrowthTime: "7 Days",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png"
},
{
    name: "Taro-Root",
    season: "Summer",
    growsSpring: false,
    growsSummer: true,
    growsFall: false,
    growsWinter: false,
    description: "This starchy root is one of the most ancient crops.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 100,
        silver: 125,
        gold: 150,
        iridium: 200
    },
    notes: "Grows in Summer if planted on the The Farm and all year on Ginger Island. Grows faster when irrigated (planted next to water)",
    growTime: "10 Days (Unirrigated), 7 Days (Irrigated)",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png"
},
{
    name: "Sweet-Gem-Berry",
    season: "Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "It's by far the sweetest thing you've ever smelled.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 3000,
        silver: 3750,
        gold: 4500,
        iridium: 6000
    },
    notes: "Can be grown from a Rare Seed can be found for sale at the Traveling Cart during Spring and Summer, and rarely during Fall and Winter. Can be gifted to Old Master Cannoli in the Secret Woods in exchange for a Stardrop. Cannot be turned into wine.",
    growTime: "24 Days",
    regrowthTime: "N/A",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png"
},
{
    name: "Tea-Leaves",
    season: "Spring, Summer, Fall",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "The young leaves of the tea plant. Can be brewed into the popular, energizing beverage.",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 50,
        silver: 50,
        gold: 50,
        iridium: 50
    },
    notes: " Can be harvested each day during the last week of Spring, Summer, and Fall (and Winter if indoors).",
    growTime: "20 Days",
    regrowthTime: "1 Day",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Tea_Leaves.png"
},
{
    name: "Wild-Seeds",
    season: "Spring, Summer, Fall, Winter",
    growsSpring: false,
    growsSummer: false,
    growsFall: true,
    growsWinter: false,
    description: "N/A",
    pierreSeedPrice: 0,
    jojaSeedPrice: 0, 
    cartSeedPrice: 0,
    oasisSeedPrice: 0,
    sellPrice: {
        regular: 0,
        silver: 0,
        gold: 0,
        iridium: 0
    },
    notes: "Wild Seeds can be crafted out of foraged plants once you learn the recipe at the appropriate foraging level (Spring at level 1, Summer at level 4, Fall at level 6, Winter at level 7). Each recipe will produce 10 seed packets. When planted, wild seeds will randomly grow into one of that season's foraged plants. Regardless of what ends up growing, wild seeds all take the same amount of time to grow to maturity (7 days, not counting the day planted). Crows do not attack crops grown from Wild Seeds, so the use of Scarecrows is unnecessary. Since these seeds grow Forage crops, they will be of iridium quality if the Botanist Profession is chosen.",
    growTime: "7 Days",
    regrowthTime: "N/A",
    imgSrc: "N/A"
}
];

module.exports = crops;