const listeProduits = document.getElementById("liste-produits");

produits.forEach(produit => {
    // Créer un lien <a> autour du produit
    const card = document.createElement("a");
    card.classList.add("produit");
    card.href = produit.lien;
    card.target = "_blank"; // ouvre Amazon dans un nouvel onglet

    card.innerHTML = `
        <img src="${produit.image}" alt="${produit.nom}">
        <h2>${produit.nom}</h2>
        <p>${produit.description}</p>
        <p><strong>${produit.prix}</strong></p>
    `;

    listeProduits.appendChild(card);
});
