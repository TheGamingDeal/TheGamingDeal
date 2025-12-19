const listeProduits = document.getElementById("liste-produits");

produits.forEach(produit => {
    const produitDiv = document.createElement("div");
    produitDiv.classList.add("produit");

    // On crée le lien à l'intérieur du produit
    const produitLink = document.createElement("a");
    produitLink.href = produit.lien;
    produitLink.target = "_blank";
    produitLink.style.display = "block";       // important pour que ça remplisse le produit
    produitLink.style.color = "inherit";       // garde la couleur du texte
    produitLink.style.textDecoration = "none"; // enlève le soulignement

    produitLink.innerHTML = `
        <img src="${produit.image}" alt="${produit.nom}">
        <h2>${produit.nom}</h2>
        <p>${produit.description}</p>
        <p><strong>${produit.prix}</strong></p>
    `;

    produitDiv.appendChild(produitLink);
    listeProduits.appendChild(produitDiv);
});

const sliderPrix = document.getElementById("prixMax");
const prixAffiche = document.getElementById("prix-affiche");
const btnPlus = document.getElementById("plus");
const btnMoins = document.getElementById("moins");

function afficherProduits(maxPrix) {
    listeProduits.innerHTML = "";

    produits.forEach(produit => {
        if (produit.prixValeur <= maxPrix) {
            const produitDiv = document.createElement("div");
            produitDiv.classList.add("produit");

            const produitLink = document.createElement("a");
            produitLink.href = produit.lien;
            produitLink.target = "_blank";
            produitLink.style.display = "block";
            produitLink.style.color = "inherit";
            produitLink.style.textDecoration = "none";

            produitLink.innerHTML = `
                <img src="${produit.image}" alt="${produit.nom}">
                <h2>${produit.nom}</h2>
                <p>${produit.description}</p>
                <p><strong>${produit.prix}</strong></p>
            `;

            produitDiv.appendChild(produitLink);
            listeProduits.appendChild(produitDiv);
        }
    });
}

// Met à jour l'affichage du prix
function updateDisplay() {
    prixAffiche.textContent = sliderPrix.value;
    afficherProduits(Number(sliderPrix.value));
}

// Slider
sliderPrix.addEventListener("input", updateDisplay);

// Flèches
btnPlus.addEventListener("click", () => {
    sliderPrix.value = Math.min(Number(sliderPrix.value) + 25, Number(sliderPrix.max));
    updateDisplay();
});

btnMoins.addEventListener("click", () => {
    sliderPrix.value = Math.max(Number(sliderPrix.value) - 25, Number(sliderPrix.min));
    updateDisplay();
});

// Affichage initial
updateDisplay();

