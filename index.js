const express = require('express');
const path = require('path');
const villagers = require('./villagers');

const app = express();


//Gets all Villagers
app.get('/api/villagers', (req, res) => {
    res.json(villagers);
});

//Get single Villager by Name
app.get('/api/villagers/:name', (req, res) => {
    res.json(villagers.filter(villager => villagers.name === req.params.name));
});

app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});