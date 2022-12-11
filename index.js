const express = require('express');
const path = require('path');
// const { runInNewContext } = require('vm');
const villagers = require('./villagers');
const areas = require('./areas');
const fish = require('./fish');
const artifacts = require('./artifacts');
const minerals = require('./minerals');
const weapons = require('./weapons');
const recipes = require('./recipes');
const crops = require('./crops');

const app = express();


//Gets all Villagers
app.get('/api/villagers', (req, res) => {
    res.json(villagers);
});

//Get a single villager by name
// app.get('/api/villager', (req, res) => {
//     const villagerByName = req.query.name;
//     res.json(villagers.find(villager => villager.params.name === req.query.name));
// })

app.get('api/villagers', (req, res))

// Get single Villager by Name
// app.get('/api/villagers/:name', (req, res) => {
//     res.json(villagers.find(villager => villager.name.toLowerCase() === req.params.name.toLowerCase()));
// });

//Get all marriage candidates
app.get('/api/marriagecandidates/', (req, res) => {
    res.json(villagers.filter(villager => villager.marriage === "yes"));
});

//Get All bachelors
app.get('/api/villagers-bachelors', (req, res) => {
    res.json(villagers.filter(villager => villager.gender === "male" && villager.marriage === "yes"));
    // console.log(req.params.gender);

});

//Get All bachelorettes 
app.get('/api/villagers-bachelorettes', (req, res) => {
    res.json(villagers.filter(villager => villager.gender === "female" && villager.marriage === "yes"))
})

//Heres something different 
//Gets all areas of the Valley
app.get('/api/areas', (req, res) => {
    res.json(areas);
});

//Get all fish
app.get('/api/fish', (req, res) => {
    res.json(fish);
});

//Get single fish by name
app.get('/api/fish/:name', (req, res) => {
    res.json(fish.find(fish => fish.name.toLowerCase() === req.params.name.toLowerCase()));
});



//Get all artifacts
app.get('/api/artifacts', (req, res) => {
    res.json(artifacts);
});

//Get artifact by name
app.get('/api/artifacts/:name', (req, res) => {
    res.json(artifacts.find(artifact => artifact.name.toLowerCase() === req.params.name.toLowerCase()));
});
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