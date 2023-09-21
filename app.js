const express = require('express');
const faker = require('faker');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;


// Define a route to generate a random name
app.get('/generate', (req, res) => {
    const randomName = faker.name.findName();
    res.send(randomName);
});

// Handle the root URL by serving the "index.html" file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
