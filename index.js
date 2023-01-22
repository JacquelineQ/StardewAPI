const express = require('express');
const path = require('path');
const villagers = require('./villagers');
const minerals = require('./minerals');
const achievements = require('./achievements');
const artifacts = require('./artifacts');
const footwear = require('./footwear');
const hats = require('./hats');
const rings = require('./rings');
const recipes = require('./recipes');
const weapons = require('./weapons');
const crops = require('./crops');

const app = express();


const getVillagers = (req, res) => {
    const name = req.query.name; 
    const gender = req.query.gender;
    const marriage = req.query.marriage;
    const giftable = req.query.giftable;

    if(name) {
        res.json(villagers.find(villager => villager.name.toLowerCase() === name.toLowerCase()));   
    } else if(gender) {
        res.json(villagers.filter(villager => villager.gender.toLowerCase() === gender.toLowerCase()));
    } else if (marriage) {
        res.json(villagers.filter(villager => villager.marriage.toLowerCase() === marriage.toLowerCase()));
    } else if (giftable) {
        res.json(villagers.filter(villager => villager.giftable.toLowerCase() === giftable.toLowerCase()));
    }
    else {
    res.json(villagers);  
    }
};

const getCrops = (req, res) => {
    const name = req.query.name;
    const season = req.query.season;

    if(name) {
        res.json(crops.find(crop => crop.name.toLowerCase() === name.toLowerCase()));
        } 
        
    else if (season) {
        if (season.toLowerCase() === 'spring') {
            res.json(crops.filter(crop => crop.growsSpring === true));
        } else if (season.toLowerCase() === 'summer') {
            res.json(crops.filter(crop => crop.growsSummer === true));
        } else if (season.toLowerCase() === 'fall') {
            res.json(crops.filter(crop => crop.growsFall === true));
        }
        else if (season.toLowerCase() === 'winter') {
            res.json(crops.filter(crop => crop.growsWinter === true));
        } 
    }

    else {
        res.json(crops);
    }
};

const getMinerals = (req, res) => {
    const name = req.query.name;
    const type = req.query.type;

    if(name) {
        res.json(minerals.find(mineral => mineral.name.toLowerCase() === name.toLowerCase()));
    }
    else if(type) {
        res.json(minerals.filter(mineral => mineral.type.toLowerCase() === type.toLowerCase()));
    }
    else {
        res.json(minerals);
    }
};

// const getAchievements = (req, res) => {
//     res.json(achievements);
// };

// const getAchievementByName = (req, res) => {
//     const name = req.params.name;
    
//     res.json(achievements.find(achievement => achievement.name.toLowerCase() === name.toLowerCase()));
// };

// const getArtifacts = (req, res) => {
//     res.json(artifacts);
// };

// const getArtifactsByName = (req, res) => {
//     const name = req.params.name;

//     res.json(artifacts.find(artifact => artifact.name.toLowerCase() === name.toLowerCase()));
// };

// const getFootwear = (req, res) => {
//     res.json(footwear);
// };

// const getFootwearByName = (req, res) => {
//     const name = req.params.name;

//     res.json(footwear.find(item => item.name.toLowerCase() === name.toLowerCase()));
// };

// const getHats = (req, res) => {
//     res.json(hats);
// };

// const getHatsByName = (req, res) => {
//     const name = req.params.name;

//     res.json(hats.find(hat => hat.name.toLowerCase() === name.toLowerCase()));
// };

// const getRings = (req, res) => {
//     res.json(rings);
// };

// const getRingsByName = (req, res) => {
//     const name = req.params.name;

//     res.json(rings.find(ring => ring.name.toLowerCase() === name.toLowerCase()));
// };

// const getRecipes = (req, res) => {
//     res.json(recipes);
// };

// const getRecipesByName = (req, res) => {
//     const name = req.params.name;

//     res.json(recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase()));
// };

// const getWeapons = (req, res) => {
//     const name = req.query.name;
//     const type = req.query.type;

//     if(name) {
//         res.json(weapons.find(weapon => weapon.name.toLowerCase() === name.toLowerCase()));
//     }
//     else if(type) {
//         res.json(weapons.filter(weapon => weapon.type.toLowerCase() === type.toLowerCase()));
//     }
//     else {
//         res.json(weapons);
//     }
// };


app.get('/api/villagers', getVillagers);
app.get('/api/minerals', getMinerals);
app.get('/api/crops/', getCrops);
// app.get('/api/achievements/:name', getAchievementByName);
// app.get('/api/achievements', getAchievements);
// app.get('/api/artifacts/:name', getArtifactsByName);
// app.get('/api/artifacts', getArtifacts);
// app.get('/api/footwear/:name', getFootwearByName);
// app.get('/api/footwear', getFootwear);
// app.get('/api/hats/:name', getHatsByName);
// app.get('/api/hats', getHats);
// app.get('/api/rings/:name', getRingsByName);
// app.get('/api/rings', getRings);
// app.get('/api/recipes/:name', getRecipesByName);
// app.get('/api/recipes', getRecipes);
// app.get('/api/weapons', getWeapons);


//  res.json(villagers.find(villager => villager.name.toLowerCase() === req.params.name.toLowerCase()));


// const getVillagerByName = (req, res) => {
//     const name = req.query.name; 
//     res.json(villagers.find(villager => villager.name.toLocaleLowerCase() === name.toLocaleLowerCase()));
// }

// app.get('/api/villagers', getVillagerByName)


// Gets all Villagers
// app.get('/api/villagers', (req, res) => {
//     res.json(villagers);
// });

// app.get("/songs", (req, res) => {
//     const title = req.query.title;
//     res.send(title);
// });


//Get a single villager by name
// app.get('/api/villager', (req, res) => {
//     const villagerByName = req.query.name;
//     res.json(villagers.find(villager => villager.params.name === req.query.name));
// })

// app.get('/api/villagers', (req, res) => {
//     console.log('hi');
//     console.log(req.query);
// })

// Get single Villager by Name
// app.get('/api/villagers/:name', (req, res) => {
//     res.json(villagers.find(villager => villager.name.toLowerCase() === req.params.name.toLowerCase()));
// });

//Get all marriage candidates
// app.get('/api/marriagecandidates/', (req, res) => {
//     res.json(villagers.filter(villager => villager.marriage === "yes"));
// });

//Get All bachelors
// app.get('/api/villagers-bachelors', (req, res) => {
//     res.json(villagers.filter(villager => villager.gender === "male" && villager.marriage === "yes"));
//     // console.log(req.params.gender);

// });

//Get All bachelorettes 
// app.get('/api/villagers-bachelorettes', (req, res) => {
//     res.json(villagers.filter(villager => villager.gender === "female" && villager.marriage === "yes"))
// })



//Get all fish
// app.get('/api/fish', (req, res) => {
//     res.json(fish);
// });

//Get single fish by name
// app.get('/api/fish/:name', (req, res) => {
//     res.json(fish.find(fish => fish.name.toLowerCase() === req.params.name.toLowerCase()));
// });



//Get all artifacts
// app.get('/api/artifacts', (req, res) => {
//     res.json(artifacts);
// });

//Get artifact by name
// app.get('/api/artifacts/:name', (req, res) => {
//     res.json(artifacts.find(artifact => artifact.name.toLowerCase() === req.params.name.toLowerCase()));
// });
//Gets single area of the valley by name, possibly use split and join
// app.get('/api/valley/:name', (req, res) => {
//     const splitName = req.params.name.split(" ");
//     const joinName = splitName.join();
//     res.json(areas.find(area => area.name.toLowerCase() === req.params.name.toLowerCase()));
// });




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});