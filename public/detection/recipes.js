// Beispielcode zum Laden von Inhalten aus einer externen HTML-Datei

document.addEventListener("DOMContentLoaded", function() {
    // Beispiel: Pfad zu den externen HTML-Dateien
    const recipeFiles = [
        'http://localhost:8000/test.html',
        'http://localhost:8000/test1.html',
        'http://localhost:8000/test2.html'
    ];

    // Button zum Laden der Rezepte
    const loadRecipesBtn = document.getElementById('loadRecipesBtn');
    const recipesContainer = document.getElementById('recipesContainer');

    loadRecipesBtn.addEventListener('click', function() {
        loadRecipes();
    });

    function loadRecipes() {
        recipeFiles.forEach(file => {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    // Beispiel: Anzeige der Inhalte in recipesContainer
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const recipeList = doc.getElementById('recipeList');

                    if (recipeList) {
                        recipesContainer.appendChild(recipeList.cloneNode(true));
                    } else {
                        console.error('Rezeptliste nicht gefunden in der Datei ' + file);
                    }
                })
                .catch(error => {
                    console.error('Error fetching ' + file, error);
                });
        });
    }
});
