const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'recipes.html'));
});

app.get('/alles', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'alles.html'));
});
app.get('/vegan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vegan.html'));
});
app.get('/vegetarisch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vegetarisch.html'));
});
app.get('/myrecipes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'myrecipes.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});