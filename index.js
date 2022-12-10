const express = require('express');
const path = require('path');
// const { runInNewContext } = require('vm');
const villagers = require('./villagers');
const valley = require('./valley');

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
app.get('/api/valley', (req, res) => {
    res.json(valley);
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});