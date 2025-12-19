// ===== Choix du tableau de produits selon la page =====
let produits;
let maxProduits = Infinity; // nombre de produits à afficher

if (window.location.pathname.includes("index.html")) {
    produits = produitsDuJour;
    maxProduits = 3; // afficher seulement 3 sur l'accueil
} else {
    produits = tousLesProduits; // tous les produits sur produits.html
}

// Récupération du conteneur HTML
const listeProduits = document.getElementById("liste-produits");

// ===== Fonction pour afficher les produits =====//
function afficherProduits(maxPrix = Infinity) {
    listeProduits.innerHTML = "";

    let count = 0;
    produits.forEach(produit => {
        if (produit.prixValeur <= maxPrix && count < maxProduits) {
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

            count++;
        }
    });
}

// ===== Slider de prix (uniquement sur produits.html) =====//
const sliderPrix = document.getElementById("prixMax");
const prixAffiche = document.getElementById("prix-affiche");
const btnPlus = document.getElementById("plus");
const btnMoins = document.getElementById("moins");

function updateDisplay() {
    if (!sliderPrix || !prixAffiche) return; 
    prixAffiche.textContent = sliderPrix.value;
    afficherProduits(Number(sliderPrix.value));
}

// Événements slider
if (sliderPrix) sliderPrix.addEventListener("input", updateDisplay);

// Événements flèches
if (btnPlus) btnPlus.addEventListener("click", () => {
    sliderPrix.value = Math.min(Number(sliderPrix.value) + 25, Number(sliderPrix.max));
    updateDisplay();
});

if (btnMoins) btnMoins.addEventListener("click", () => {
    sliderPrix.value = Math.max(Number(sliderPrix.value) - 25, Number(sliderPrix.min));
    updateDisplay();
});

// ===== Affichage initial ===== //
afficherProduits(sliderPrix ? Number(sliderPrix.value) : Infinity);

// === LOADER === //
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const contenu = document.getElementById("contenu");

    if (!sessionStorage.getItem("loaderShown")) {
       
        const pixelsContainer = document.querySelector(".pixels");
        for (let i = 0; i < 10; i++) { 
            const pixel = document.createElement("span");
            pixelsContainer.appendChild(pixel);
        }

        loader.style.display = "flex";
        contenu.style.display = "none";

        setTimeout(() => {
            loader.style.display = "none";
            contenu.style.display = "block";
            sessionStorage.setItem("loaderShown", "true");
        }, 2000);
    } else {
        loader.style.display = "none";
        contenu.style.display = "block";
    }
});
