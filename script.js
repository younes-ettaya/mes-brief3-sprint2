const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};
const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};





const liste_ateliers = document.getElementById("liste-ateliers");
const liste_modes = document.getElementById("liste-modes");
const liste_campus = document.getElementById("liste-campus");

function afficherAteliers() {
  liste_ateliers.textContent = "";

  config.ateliers.forEach(atelier => {
    if (atelier.places > 0) {
      const label = document.createElement("label");
      label.className = "carte-choix";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "atelier";
      input.value = atelier.id;
      input.required = true;
      input.setAttribute("aria-describedby", "erreur-atelier");

      const span = document.createElement("span");

      const titre = document.createElement("strong");
      titre.className = "atelier-titre";
      titre.textContent = atelier.titre;

      const places = document.createElement("span");
      places.className = "atelier-places detail";
      places.textContent = atelier.places 

      span.appendChild(titre);
      span.appendChild(places);

      label.appendChild(input);
      label.appendChild(span);

      liste_ateliers.appendChild(label);
    }
  });
}

function afficherModes() {
  liste_modes.textContent = "";

  for (const mode in config.modes) {
    const label = document.createElement("label");
    label.className = "carte-choix";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "mode";
    input.value = "";
    input.required = true;
    input.setAttribute("aria-describedby", "erreur-mode");

    const span = document.createElement("span");
    span.className = "mode-libelle";
    span.textContent = config.modes[mode];

    label.appendChild(input);
    label.appendChild(span);

    liste_modes.appendChild(label);
  }
}

function afficherCampus(){
  liste_campus.textContent = "";
  for ( const compus in config.campus){
    const label = document.createElement("label");
    label.className = "carte-choix";

    const input = document.createElement("input");
      input.type = "radio";
    input.name = "campus";
    input.value = "";
    input.required = true;
    input.setAttribute("aria-describedby", "erreur-mode");

    const span = document.createElement("span");
    span.className = "campus-libelle";
    
    label.appendChild(input);
    label.appendChild(span):
  }
}


afficherAteliers();
afficherModes();
 afficherCampus()






