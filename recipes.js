const recipes = [
    //Need to decide how/when I want to include buffs and buff duration
    //Just wont include buffs if its N/A
{
    name: "Algae-Soup",
    description: "It's a little slimy.",
    ingredients: "Green Algae: 4",
    restores: "Energy: 75, Health: 33",
    source: "Clint (3+ Hearts)",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/53/Algae_Soup.png"
},
{
    name: "Artichoke-Dip",
    description: "It's cool and refreshing.",
    ingredients: "Artichoke: 1, Milk: 1",
    restores: "Energy: +100, Health: +45",
    source: "The Queen of Sauce: 28 Fall, Year 1",
    sellPrice: "210g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/77/Artichoke_Dip.png"
},
{
    name: "Autumn's-Bounty",
    description: "A taste of the season.",
    ingredients: "Yam: 1, Pumpkin: 1",
    restores: "Energy: +220, Health: +99",
    buffs: "Foraging: +2, Defense: +2",
    buffDuration: "7m 41s",
    source: "Demetrius (7+ Hearts)",
    sellPrice: "350g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Autumn%27s_Bounty.png"
},
{
    name: "Baked-Fish",
    description: "Baked fish on a bed of herbs.",
    ingredients: "Sunfish: 1, Bream: 1, Wheat Flour: 1",
    restores: "Energy: +75, Health: +33",
    source: "The Queen of Sauce: 7 Summer, Year 1",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png"
},
{
    name: "Banana-Pudding",
    description: "A creamy dessert with a wonderful tropical flavor.",
    ingredients: "Banana: 1, Milk: 1, Sugar: 1",
    restores: "Energy: +125, Health: +56",
    buffs: "Mining: +1, Luck: +1, Defense: +1",
    buffDuration: "5m 1s",
    source: "Island Trader for Bone Fragment (30)",
    sellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/40/Banana_Pudding.png"
},
{
    name: "Bean-Hotpot",
    description: "It sure is healthy",
    ingredients: "Green Bean: 2",
    restores: "Energy: +125, Health: +56",
    buffs: "MaxEnergy: +30, Magnetism: +32",
    buffDuration: "7m",
    source: "Clint (7+ Hearts)",
    sellPrice: "100g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png"
},
{
    name: "Blackberry-Cobbler",
    description: "There's nothing quite like it.",
    ingredients: {Blackberry: 2, Sugar: 1, WheatFlour: 1},
    restores: {Energy: +175, Health: +78},
    source: "The Queen of Sauce: 14 Fall, Year 2",
    sellPrice: "260g",
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/70/Blackberry_Cobbler.png"
},
{
    name: "Blueberry-Tar",
    description: "It's subtle and refreshing.",
    ingredients: "Blueberry: 1, Wheat Flour: 1, Sugar: 1",
    restores: {Energy: +125, Health: +56},
    source: "Pierre (3+ Hearts)",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Blueberry_Tart.png"
},
{
    name: "Bread",
    description: "A crusty baguette.",
    ingredients: "Wheat Flour: 1",
    restores: {Energy: +50, Health: +22},
    source: ["The Queen of Sauce: 28 Summer, Year 1", "Stardrop Saloon: 100g"],
    sellPrice: 60,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bread.png"
},
{
    name: "Bruschetta",
    description: "Roasted tomatoes on a crisp white bread.",
    ingredients: {"Bread": 1, "Oil": 1, "Tomator": 1},
    restores: {Energy: 113, Health: 50},
    source: "The Queen of Sauce: 21 Winter, Year 2",
    sellPrice: 210,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Bruschetta.png"
},
{
    name: "Carp-Surprise",
    description: "It's bland and oily.",
    ingredients: {"Carp": 4},
    restores: {Energy: 90, Health: 40},
    source: "The Queen of Sauce: 7 Summer, Year 2",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Carp_Surprise.png"
},
{
    name: "Cheese-Cauliflower",
    description: "It smells great!",
    ingredients: {"Cauliflower": 1, "Cheese": 1},
    restores: {Energy: 138, Health: 62},
    source: "Pam (3+ Hearts)",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png"
},
{
    name: "Chocolate-Cake",
    description: "Rich and moist with a thick fudge icing.",
    ingredients: {"Wheat Flour": 1, "Sugar": 1, "Egg": 1},
    restores: {Energy: 150, Health: 67},
    source: "The Queen of Sauce: 14 Winter, Year 1",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png"
},
{
    name: "Chowder",
    description: "A perfect way to warm yourself after a cold night at sea.",
    ingredients: {"Clam": 1, "Milk": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Fishing: +1},
    buffDuration: "16m 47s",
    source: "Willy (3+ Hearts)",
    sellPrice: 135,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/95/Chowder.png"
},
{
    name: "Coleslaw",
    description: "It's light, fresh and very healthy.",
    ingredients: {"Red Cabbage": 1, "Vinegar": 1, "Mayonnaise": 1},
    restores: {Energy: 213, Health: 95},
    source: "The Queen of Sauce: 14 Spring, Year 1",
    sellPrice: 345,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Coleslaw.png"
},
{
    name: "Commplete-Breakfast",
    description: "You'll feel ready to take on the world!",
    ingredients: {"Fried Egg": 1, "Milk": 1, "Hashbrowns": 1, "Pancakes": 1},
    restores: {Energy: 200, Health: 90},
    buffs: {Farming: +2, MaxEnergy: +50},
    buffDuration: "7m",
    source: "The Queen of Sauce: 21 Spring, Year 2",
    sellPrice: 350,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png"
},
{
    name: "Cookie",
    description: "Very chewy.",
    ingredients: {"Wheat Flour": 1, "Sugar": 1, "Egg": 1},
    restores: {Energy: 90, Health: 40},
    source: "Evelyn (4-Heart Event)",
    sellPrice: 140,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/70/Cookie.png"
},
{
    name: "Crab-Cakes",
    description: "Crab, bread crumbs, and egg formed into patties then fried to a golden brown.",
    ingredients: {"Crab": 1, "Wheat Flour": 1, "Egg": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Speed: +1, Defense: +1},
    buffDuration: "16m 47s",
    source: "The Queen of Sauce: 21 Fall, Year 2",
    sellPrice: 275,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png"
},
{
    name: "Cranberry-Candy",
    description: "It's sweet enough to mask the bitter fruit.",
    ingredients: {"Cranberries": 1, "Apple": 1, "Sugar": 1},
    restores: {Energy: 125, Health: 56},
    source: "The Queen of Sauce: 28 Winter, Year 1",
    sellPrice: 175,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Cranberry_Candy.png"
},
{
    name: "Cranberry-Sauce",
    description: "A festive treat.",
    ingredients: {"Cranberries": 1, "Sugar": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Mining: +2},
    buffDuration: "3m 30s",
    source: "Gus (7+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Cranberry_Sauce.png"
},
{
    name: "Crispy-Bass",
    description: "Wow, the breading is perfect.",
    ingredients: {"Largemouth Bass": 1, "Wheat Flour": 1, "Oil": 1},
    restores: {Energy: 90, Health: 40},
    buffs: {Magnetism: +64},
    buffDuration: "7m",
    source: "Kent (3+ Hearts)",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png"
},
{
    name: "Dish-O'-The Sea",
    description: "This'll keep you warm in the cold sea air.",
    ingredients: {"Sardine": 2, "Hasbrowns": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Fishing: +3},
    buffDuration: "5m 35s",
    source: "Fishing Level 3",
    sellPrice: 220,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/ff/Dish_O%27_The_Sea.png"
},
{
    name: "Eggplant-Parmesan",
    description: "Tangy, cheesy, and wonderful.",
    ingredients: {"Eggplant": 1, "Tomato": 1},
    restores: {Energy: 175, Health: 78},
    buffs: {Mining: +1, Defense: +3},
    buffDuration: "4m 39s",
    source: "Lewis (7+ Hearts)",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/73/Eggplant_Parmesan.png"
},
{
    name: "Escargot",
    description: "Butter-soaked snails cooked to perfection.",
    ingredients: {"Snail": 1, "Garlic": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Fishing: +2},
    buffDuration: "16m 47s",
    source: "Willy (5+ Hearts",
    sellPrice: 125,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/78/Escargot.png"
},
{
    name: "Farmer's-Lunch",
    description: "This'll keep you going.",
    ingredients: {"Omelet": 1, "Parsnip": 1},
    restores: {Energy: 200, Health: 90},
    buffs: {Farming: +3},
    buffDuration: "5m 35s",
    source: "Farming Level 3",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png"
},
{
    name: "Fiddlehead-Risotto",
    description: "A creamy rice dish served with sauteed fern heads. It's a little bland.",
    ingredients: {"Oil": 1, "Fiddlehead Fern": 1, "Garlic": 1},
    restores: {Energy: 225, Health: 101},
    source: "The Queen of Sauce: 28 Fall, Year 2",
    sellPrice: 350,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png"
},
{
    name: "Fish-Stew",
    description: "It smells a lot like the sea. Tastes better, though.",
    ingredients: {"Crayfish": 1, "Mussel": 1, "Periwinkle": 1, "Tomato": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Fishing: +3},
    buffDuration: "16m 47s",
    source: "Willy (7+ Hearts",
    sellPrice: 175,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6f/Fish_Stew.png"
},
{
    name: "Fish-Taco",
    description: "It smells delicious.",
    ingredients: {"Tuna": 1, "Tortilla": 1, "Red Cabbage": 1, "Mayonnaise": 1},
    restores: {Energy: 165, Health: 74},
    buffs: {Fishing: +2},
    buffDuration: "7m",
    source: "Linus (7+ Hearts",
    sellPrice: 500,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png"
},
{
    name: "Fried-Calamari",
    description: "It's so chewy.",
    ingredients: {"Squid": 1, "Wheat Flour": 1, "Oil": 1},
    restores: {Energy: 80, Health: 36},
    source: "Jodi (3+ Hearts)",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png"
},
{
    name: "Fried-Eel",
    description: "Greasy but flavorful",
    ingredients: {"Eel": 1, "Oil": 1},
    restores: {Energy: 75, Health: 33},
    buffs: {Luck: +1},
    buffDuration: "7m",
    source: "George (3+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/84/Fried_Eel.png"
},
{
    name: "Fried-Egg",
    description: "Sunny-side up.",
    ingredients: {"Egg": 1},
    restores: {Energy: 50, Health: 22},
    source: "Upgraded farmhouse",
    sellPrice: 35,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png"
},
{
    name: "Fried-Mushroom",
    description: "Earthy and aromatic",
    ingredients: {"Common Mushroom": 1, "Morel": 1, "Oil": 1},
    restores: {Energy: 135, Health: 60},
    buffs: {Attack: +2},
    buffDuration: "7m",
    source: "Demetrius (3+ Hearts)",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png"
},
{
    name: "Fruit-Salad",
    description: "A delicious combination of summer fruits.",
    ingredients: {"Blueberry": 1, "Melon": 1, "Apricot": 1},
    restores: {Energy: 263, Health: 118},
    source: "The Queen of Sauce: 7 Fall, Year 2",
    sellPrice: 450,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Fruit_Salad.png"
},
{
    name: "Ginger-Ale",
    description: "A zesty soda known for its soothing effect on the stomach.",
    ingredients: {"Ginger": 1, "Sugar": 1},
    restores: {Energy: 63, Health: 28},
    buffs: {Luck: +1},
    buffDuration: "5m",
    source: "Dwarf Shop in Volcano Dungeon for 1,000g",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/1a/Ginger_Ale.png"
},
{
    name: "Glazed-Yams",
    description: "Sweet and satisfying... The sugar gives it a hint of caramel.",
    ingredients: {"Yam": 1, "Sugar": 1},
    restores: {Energy: 200, Health: 90},
    source: "The Queen of Sauce: 21 Fall, Year 1",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png"
},
{
    name: "Hashbrowns",
    description: "Crispy and golden-brown!",
    ingredients: {"Potato": 1, "Oil": 1},
    restores: {Energy: 90, Health: 40},
    buffs: {Farming: +1},
    buffDuration: "5m 35s",
    source: ["The Queen of Sauce: 14 Spring, Year 2", "Stardrop Saloon for 50g"],
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Hashbrowns.png"
},
{
    name: "Ice-Cream",
    description: "It's hard to find someone who doesn't like this.",
    ingredients: {"Milk": 1, "Sugar": 1},
    restores: {Energy: 100, Health: 45},
    source: "Jodi (7+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Ice_Cream.png"
},
{
    name: "Lobster-Bisque",
    description: "This delicate soup is a secret family recipe of Willy's.",
    ingredients: {"Lobseter": 1, "Milk": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Fishing: +3, MaxEnergy: +50},
    buffDuration: "16m 47s",
    source: ["The Queen of Sauce: 14 Winter, Year 2", "Willy (9+ Hearts)"],
    sellPrice: 205,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Lobster_Bisque.png"
},
{
    name: "Lucky-Lunch",
    description: "A special little treat",
    ingredients: {"Sea Cucumber": 1, "Tortilla": 1, "Blue Jazz": 1},
    restores: {Energy: 100, Health: 45},
    buffs: {Luck: +3},
    buffDuration: "11m 11s",
    source: "The Queen of Sauce: 28 Spring, Year 2",
    sellPrice: 250,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png"
},
{
    name: "Maki-Roll",
    description: "Fish and rice wrapped in seaweed.",
    ingredients: {"Any Fish": 1, "Seaweed": 1, "Rice":1},
    restores: {Energy: 100, Health: 45},
    source: ["The Queen of Sauce: 21 Summer, Year 1", "Stardrop Saloon for 300g"],
    sellPrice: 220,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png"
},
{
    name: "Mango-Sticky-Rice",
    description: "Sweet mango and coconut transforms this rice into something very special.",
    ingredients: {"Mango": 1, "Coconut": 1, "Rice": 1},
    restores: {Energy: 113, Health: 50},
    buffs: {Defense: +3},
    buffDuration: "5m 1s",
    source: "Leo (7+ Hearts)",
    sellPrice: 250,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Mango_Sticky_Rice.png"
},
{
    name: "Maple-Bar",
    description: "It's a sweet doughnut topped with a rich maple glaze.",
    ingredients: {"Maple Syrup": 1, "Sugar": 1, "Wheat Flour": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Farming: +1, Fishing: +1, Mining: +1},
    buffDuration: "16m 47s",
    source: "The Queen of Sauce: 14 Summer, Year 2",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png"
},
{
    name: "Miner's-Treat",
    description: "This should keep your energy up.",
    ingredients: {"Cave Carrot": 2, "Sugar": 1, "Milk": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Mining: +3, Magnetism: +32},
    buffDuration: "5m 35s",
    source: "Mining Level 3",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/12/Miner%27s_Treat.png"
},
{
    name: "Omelet",
    description: "It's super fluffy.",
    ingredients: {"Egg": 1, "Milk": 1},
    restores: {Energy: 100, Health: 45},
    source: ["The Queen of Sauce: 28 Spring, Year 1", "Stardrop Saloon for 100g"],
    sellPrice: 125,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png"
},
{
    name: "Pale-Broth",
    description: "A delicate broth with a hint of sulfur.",
    ingredients: {"White Algae": 2},
    restores: {Energy: 125, Health: 56},
    source: "Marnie (3+ Hearts)",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pale_Broth.png"
},
{
    name: "Pancakes",
    description: "A double stack of fluffy, soft pancakes.",
    ingredients: {"Wheat Flour": 1, "Egg": 1},
    restores: {Energy: 90, Health: 40},
    buffs: {Foraging: +2},
    buffDuration: "11m 11s",
    source: ["The Queen of Sauce: 14 Summer, Year 1", "Stardrop Saloon for 100g"],
    sellPrice: 60,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/6/6b/Pancakes.png"
},
{
    name: "Parsnip-Soup",
    description: "It's fresh and hearty.",
    ingredients: {"Parsnip": 1, "Milk": 1, "Vinegar": 1},
    restores: {Energy: 85, Health: 38},
    source: "Caroline (3+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png"
},
{
    name: "Pepper-Poppers",
    description: "Spicy breaded peppers filled with cheese.",
    ingredients: {"Hot Pepper": 1, "Cheese": 1},
    restores: {Energy: 130, Health: 58},
    buffs: {Farming: +2, Speed: +1},
    buffDuration: "7m",
    source: "Shane (3+ Hearts)",
    sellPrice: 200,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png"
},
{
    name: "Pink-Cake",
    description: "There's little heart candies on top.",
    ingredients: {"Melon": 1, "Wheat Flour": 1, "Sugar": 1, "Egg": 1},
    restores: {Energy: 250, Health: 112},
    source: "The Queen of Sauce: 21 Summer, Year 2",
    sellPrice: 480,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png"
},
{
    name: "Pizza",
    description: "It's popular for all the right reasons.",
    ingredients: {"Wheat Flour": 1, "Tomato": 1, "Cheese": 1},
    restores: {Energy: 150, Health: 67},
    source: ["The Queen of Sauce: 7 Spring, Year2", "Stardrop Saloon for 150g"],
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png"
},
{
    name: "Plum-Pudding",
    description: "A traditional holiday treat.",
    ingredients: {"Wild Plum": 2, "Wheat Flour": 1, "Sugar": 1},
    restores: {Energy: 175, Health: 78},
    source: "The Queen of Sauce: 7 Winter, Year 1",
    sellPrice: 260,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/a/a0/Plum_Pudding.png"
},
{
    name: "Poi",
    description: "A traditional food with a delicate, sweet flavor when eaten fresh.",
    ingredients: {"Taro Root": 4},
    restores: {Energy: 75, Health: 33},
    source: "Leo (3+ Hearts)",
    sellPrice: 400,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Poi.png"
},
{
    name: "Poppyseed-Muffin",
    description: "It has a soothing effect.",
    ingredients: {"Poppy": 1, "Wheat Flour": 1, "Sugar": 1},
    restores: {Energy: 150, Health: 67},
    source: "The Queen of Sauce: 7 Winter, Year 2",
    sellPrice: 250,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png"
},
{
    name: "Pumpkin-Pie",
    description: "Silky pumpkin cream in a flakey crust.",
    ingredients: {"Pumpkin": 1, "Wheat Flour": 1, "Milk": 1, "Sugar": 1},
    restores: {Energy: 225, Health: 101},
    source: "The Queen of Sauce: 21 Winter, Year 1",
    sellPrice: 385,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Pumpkin_Pie.png"
},
{
    name: "Pumpkin-Soup",
    description: "A seasonal favorite.",
    ingredients: {"Pumpkin": 1, "Milk": 1},
    restores: {Energy: 200, Health: 90},
    buffs: {Defense: +2, Luck: +2},
    buffDuration: "7m 41s",
    source: "Robin (7+ Hearts)",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/59/Pumpkin_Soup.png"
},
{
    name: "Radish-Salad",
    description: "The radishes are so crisp!",
    ingredients: {"Oil": 1, "Vinegar": 1, "Radish": 1},
    restores: {Energy: 200, Health: 90},
    source: "The Queen of Sauce: 21 Spring, Year 1",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Radish_Salad.png"
},
{
    name: "Red-Plate",
    description: "Full of antioxidants.",
    ingredients: {"Red Cabbage": 1, "Radish": 1},
    restores: {Energy: 240, Health: 108},
    buffs: {MaxEnergy: +50},
    buffDuration: "3m 30s",
    source: "Emily (7+ Hearts)",
    sellPrice: 400,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/45/Red_Plate.png"
},
{
    name: "Rhubarb-Pie",
    description: "Mmm, tangy and sweet!",
    ingredients: {"Rhubarb": 1, "Wheat Flour": 1, "Sugar": 1},
    restores: {Energy: 215, Health: 96},
    source: "Marnie (7+ Hearts)",
    sellPrice: 400,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/2/21/Rhubarb_Pie.png"
},
{
    name: "Rice-Pudding",
    description: "It's creamy, sweet, and fun to eat",
    ingredients: {"Milk": 1, "Sugar": 1, "Rice": 1},
    restores: {Energy: 115, Health: 51},
    source: "Evelyn (7+ Hearts)",
    sellPrice: 260,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Rice_Pudding.png"
},
{
    name: "Roasted-Hazelnuts",
    description: "The roasting process creates a rich forest flavor.",
    ingredients: {"Hazelnut": 3},
    restores: {Energy: 175, Health: 78},
    source: "The Queen of Sauce: 28 Summer, Year 2",
    sellPrice: 270,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/1/18/Roasted_Hazelnuts.png"
},
{
    name: "Roots-Platter",
    description: "This'll get you digging for more.",
    ingredients: {"Cave Carrot": 1, "Winter Root": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Attack: +3},
    buffDuration: "5m 35s",
    source: "Combat Level 3",
    sellPrice: 100,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Roots_Platter.png"
},
{
    name: "Salad",
    description: "A healthy garden salad.",
    ingredients: {"Leek": 1, "Dandelion": 1, "Vinegar": 1},
    restores: {Energy: 113, Health: 50},
    source: "Emily (3+ Hearts)",
    sellPrice: 110,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png"
},
{
    name: "Salmon-Dinner",
    description: "The lemon spritz makes it special.",
    ingredients: {"Salmon": 1, "Amaranth": 1, "Kale": 1},
    restores: {Energy: 125, Health: 56},
    source: "Gus (3+ Hearts)",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png"
},
{
    name: "Sashimi",
    description: "Raw fish sliced into thin pieces.",
    ingredients: {"Any Fish": 1},
    restores: {Energy: 75, Health: 33},
    source: "Linus (3+ Hearts)",
    sellPrice: 75,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png"
},
{
    name: "Seafoam-Pudding",
    description: "This briny pudding will really get you into the maritime mindset!",
    ingredients: {"Flounder": 1, "Midnight Carp": 1, "Squid Ink": 1},
    restores: {Energy: 175, Health: 78},
    buffs: {Fishing: +4},
    buffDuration: "3m 30s",
    source: "Fishing (Level 9)",
    sellPrice: 300,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/33/Seafoam_Pudding.png"
},
{
    name: "Shrimp-Cocktail",
    description: "A sumptuous appetizer made with freshly-caught shrimp.",
    ingredients: {"Tomato": 1, "Shrimp": 1, "Wild Horseradish": 1},
    restores: {Energy: 225, Health: 101},
    buffs: {Fishing: +1, Luck: +1},
    buffDuration: "10m 2s",
    source: "The Queen of Sauce: 28 Winter, Year 2",
    sellPrice: 160,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Shrimp_Cocktail.png"
},
{
    name: "Spaghetti",
    description: "An old favorite.",
    ingredients: {"Wheat Flour": 1, "Tomato": 1},
    restores: {Energy: 75, Health: 33},
    source: "Lewis (3+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png"
},
{
    name: "Spicy-Eel",
    description: "It's really spicy! Be careful.",
    ingredients: {"Eel": 1, "Hot Pepper": 1},
    restores: {Energy: 75, Health: 33},
    buffs: {Luck: +1, Speed: +1},
    buffDuration: "7m",
    source: "George (7+ Hearts)",
    sellPrice: 175,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Spicy_Eel.png"
},
{
    name: "Squid-Ink-Ravioli",
    description: "Temporarily protects from debuffs.",
    ingredients: {"Squid Ink": 1, "Wheat Flour": 1, "Tomato": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Mining: +1}, //Squid Ink Ravioli Buff, should I convert all buffs to arrayof strings?
    buffDuration: "4m 39s (Mining), 2m 59s (Squid Ink Ravioli Buff",
    source: "Combat Level 9",
    sellPrice: 150,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/86/Squid_Ink_Ravioli.png"
},
{
    name: "Stir-Fry",
    description: "Julienned vegetables on a bed of rice.",
    ingredients: {"Cave Carrot": 1, "Common Mushroom": 1, "Kale": 1, "Oil": 1},
    restores: {Energy: 200, Health: 90},
    source: "The Queen of Sauce: 7 Spring, Year 1",
    sellPrice: 335,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Stir_Fry.png"
},
{
    name: "Strange-Bun",
    description: "What's inside?",
    ingredients: {"Wheat Flour": 1, "Periwinkle": 1, "Void Mayonnaise": 1},
    restores: {Energy: 100, Health: 45},
    source: "Shane (7+ Hearts",
    sellPrice: 225,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png"
},
{
    name: "Stuffing",
    description: "Ahh... the smell of warm bread and sage.",
    ingredients: {"Bread": 1, "Cranberries": 1, "Hazelnut": 1},
    restores: {Energy: 170, Health: 76},
    buffs: {Defense: +2},
    buffDuration: "5m 35s",
    source: "Pam (7+ Hearts)",
    sellPrice: 165,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/9/9a/Stuffing.png"
},
{
    name: "Super-Meal",
    description: "It's a really energizing meal.",
    ingredients: {"Bok Choy": 1, "Cranberries": 1, "Artichoke": 1},
    restores: {Energy: 160, Health: 72},
    buffs: {MaxEnergy: +40, Speed: +1},
    buffDuration: "3m 30s",
    source: "Kent (7+ Hearts)",
    sellPrice: 220,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Super_Meal.png"
},
{
    name: "Survival-Burger",
    description: "A convenient snack for the explorer",
    ingredients: {"Bread": 1, "Cave Carrot": 1, "Eggplant": 1},
    restores: {Energy: 125, Health: 56},
    buffs: {Foraging: +3},
    buffDuration: "5m 35s",
    source: "Foraging Level 2",
    sellPrice: 180,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/8/87/Survival_Burger.png"
},
{
    name: "Tom-Kha-Soup",
    description: "These flavors are incredible!",
    ingredients: {"Coconut": 1, "Shrimp": 1, "Common Mushroom": 1},
    restores: {Energy: 175, Health: 78},
    buffs: {Farming: +2, MaxEnergy: +30},
    buffDuration: "7m",
    source: "Sandy (7+ Hearts)",
    sellPrice: 250,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png"
},
{
    name: "Tortilla",
    description: "Can be used as a vessel for food or eaten by itself.",
    ingredients: {"Corn": 1},
    restores: {Energy: 50, Health: 22},
    source: "The Queen of Sauce: 7 Fall, Year 1 || Stardrop Saloon for 100g",
    sellPrice: 50,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png"
},
{
    name: "Triple-Shot-Espresso",
    description: "It's more potent than regular coffee!",
    ingredients: {"Coffee": 3},
    restores: {Energy: 8, Health: 3},
    buffs: {Speed: +1},
    buffDuration: "4m 12s",
    source: "Stardrop Saloon for 5,000g",
    sellPrice: 450,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/36/Triple_Shot_Espresso.png"
},
{
    name: "Tropical-Curry",
    description: "An exotic, fragrant curry served in a pineapple bowl.",
    ingredients: {"Coconut": 1, "Pineapple": 1},
    restores: {Energy: 150, Energy: 67},
    buffs: {Foraging: +4},
    buffDuration: "5m 1s",
    source: "Ginger Island Resort for 2,000g",
    sellPrice: 500,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/3/32/Tropical_Curry.png"
},
{
    name: "Trout-Soup",
    description: "Pretty Salty",
    ingredients: {"Rainbow Trout": 1, "Green Algae": 1},
    restores: {Energy: 100, Health: 45},
    buffs: {Fishing: +1},
    buffDuration: "4m 39s",
    source: "The Queen of Sauce: 14 Fall, Year 1",
    sellPrice: 100,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/4/48/Trout_Soup.png"
},
{
    name: "Vegetable-Medley",
    description: "This is very nnutritious.",
    ingredients: {"Tomato": 1, "Beet": 1},
    restores: {Energy: 165, Health: 74},
    source: "Caroline (7+ Hearts)",
    sellPrice: 120,
    imgSrc: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png"
}
]
module.exports = recipes;