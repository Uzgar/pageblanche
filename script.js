function saveContent() {
    var content = document.getElementById('editor').innerHTML;

    // Envoie le contenu au serveur Firebase
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    })
    .then(response => response.json())
    .then(data => {
        // Affiche le contenu sauvegardé par le serveur Firebase
        displaySavedContent(data.savedContent);
    });
}

function displaySavedContent(savedContent) {
    var savedContentDiv = document.getElementById('savedContent');
    
    savedContentDiv.innerHTML = '<strong>Contenu sauvegardé :</strong><br>' + (savedContent || 'Aucun contenu sauvegardé.');
}
