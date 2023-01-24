const express = require('express');
const path = require('path');
const villagers = require('./villagers');
const minerals = require('./minerals');
const artifacts = require('./artifacts');
const crops = require('./crops');
const fish = require('./fish');
const weapons = require('./weapons');
const recipes = require('./recipes');
const achievements = require('./achievements');
const footwear = require('./footwear');
const hats = require('./hats');
const rings = require('./rings');



const app = express();


const getVillagers = (req, res) => {
    const name = req.query.name; 
    const gender = req.query.gender;
    const marriage = req.query.marriage;
    const giftable = req.query.giftable;

    if(name) {
        res.json(villagers.find(villager => villager.name.toLowerCase() === name.toLowerCase()));   
    } 
    else if(gender) {
        res.json(villagers.filter(villager => villager.gender.toLowerCase() === gender.toLowerCase()));
    } 
    else if (marriage) {
        res.json(villagers.filter(villager => villager.marriage.toLowerCase() === marriage.toLowerCase()));
    } 
    else if (giftable) {
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

const getFish = (req, res) => {
    const name = req.query.name;
    const type = req.query.type;

    if(name) {
        res.json(fish.find(foundFish => foundFish.name.toLowerCase() === name.toLowerCase()));
    }
    else if(type) {
        res.json(fish.filter(foundFish => foundFish.type.toLowerCase() === type.toLowerCase()));
    }
    else {
        res.json(fish);
    }
};

const getArtifacts = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(artifacts.find(artifact => artifact.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(artifacts);
    }

};

const getWeapons = (req, res) => {
    const name = req.query.name;
    const type = req.query.type;

    if(name) {
        res.json(weapons.find(weapon => weapon.name.toLowerCase() === name.toLowerCase()));
    }
    else if(type) {
        res.json(weapons.filter(weapon => weapon.type.toLowerCase() === type.toLowerCase()));
    }
    else {
        res.json(weapons);
    }
}

const getRecipes = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(recipes);
    }
};

const getAchievements = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(achievements.find(achievement => achievement.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(achievements);
    }
}

const getFootwear = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(footwear.find(foundFootwear => foundFootwear.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(footwear);
    }
}

const getHats = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(hats.find(hat => hat.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(hats);
    }
}

const getRings = (req, res) => {
    const name = req.query.name;

    if(name) {
        res.json(rings.find(ring => ring.name.toLowerCase() === name.toLowerCase()));
    }
    else {
        res.json(rings);
    }
}



app.get('/api/villagers', getVillagers);
app.get('/api/minerals', getMinerals);
app.get('/api/crops/', getCrops);
app.get('/api/fish', getFish);
app.get('/api/artifacts', getArtifacts);
app.get('/api/weapons', getWeapons);
app.get('/api/recipes', getRecipes);
app.get('/api/achievements', getAchievements);
app.get('/api/footwear', getFootwear);
app.get('/api/hats', getHats);
app.get('/api/rings', getRings);








const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});