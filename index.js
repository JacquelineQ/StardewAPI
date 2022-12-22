const express = require('express');
const path = require('path');
const villagers = require('./villagers');
const minerals = require('./minerals');
const achievements = require('./achievements');
const artifacts = require('./artifacts');


const app = express();


const getVillagers = (req, res) => {
    const name = req.query.name; 
    const gender = req.query.gender;

    if(name) {
        res.json(villagers.find(villager => villager.name.toLowerCase() === name.toLowerCase()));   
    } else if(gender) {
        res.json(villagers.filter(villager => villager.gender.toLowerCase() === gender.toLowerCase()));
    }
    else {
    res.json(villagers);  
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

const getAchievements = (req, res) => {
    res.json(achievements);
};

const getAchievementByName = (req, res) => {
    const name = req.params.name;
    
    res.json(achievements.find(achievement => achievement.name.toLowerCase() === name.toLowerCase()));
};

const getArtifacts = (req, res) => {
    res.json(artifacts);
};

const getArtifactsByName = (req, res) => {
    const name = req.params.name;

    res.json(artifacts.find(artifact => artifact.name.toLowerCase() === name.toLowerCase()));
};



app.get('/api/villagers', getVillagers);
app.get('/api/minerals', getMinerals);
app.get('/api/achievements/:name', getAchievementByName);
app.get('/api/achievements', getAchievements);
app.get('/api/artifacts/:name', getArtifactsByName);
app.get('/api/artifacts', getArtifacts);


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