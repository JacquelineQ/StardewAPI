const express = require('express');
const path = require('path');
// const { runInNewContext } = require('vm');
const villagers = require('./villagers');
const areas = require('./areas');
const fish = require('./fish');

const app = express();


//Gets all Villagers
app.get('/api/villagers', (req, res) => {
    res.json(villagers);
});


//Get single Villager by Name
app.get('/api/villagers/:name', (req, res) => {
    res.json(villagers.find(villager => villager.name.toLowerCase() === req.params.name.toLowerCase()));
});


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