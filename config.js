/* ==========================================================================
   Maison Orée — données modifiables du site
   --------------------------------------------------------------------------
   BRAND : informations de marque et règles de calcul
   D     : décors (un décor = un motif dessiné par scene() : rameaux, jardin, horizon, foret, arches, montagnes)
   C     : coloris (applicables à tous les décors)
   M     : supports et prix TTC au m²
   Z     : tailles prédéfinies (largeur × hauteur en mètres)
   ========================================================================== */

const BRAND = {
  nom: 'Maison Orée',
  signature: 'Papiers peints panoramiques sur mesure',
  // Laisser vide tant que l'adresse n'est pas créée : la ligne n'est pas affichée.
  email: '',
  devise: 'EUR',
  surfaceMin: 4,       // m² — surface minimale facturée
  largeurLe: 0.5,      // m — largeur d'un lé imprimé
  margeHauteur: 0.1,   // m — marge de coupe ajoutée à la hauteur de chaque lé
  limites: { lMin: 0.5, lMax: 20, hMin: 0.5, hMax: 5 } // m
};

const D = [
  {
    id: 'ramure', nom: 'Ramure', ref: 'MO-01', motif: 'rameaux', colorisDefaut: 'ivoire',
    texte: "Des branches nues qui entrent par les bords du mur et se perdent dans un fond de brume patinée. Le centre reste clair : le décor encadre le mobilier sans le charger."
  },
  {
    id: 'serre', nom: 'Serre', ref: 'MO-02', motif: 'jardin', colorisDefaut: 'sauge',
    texte: "De grandes feuilles dessinées à l'échelle du mur, sur un fond uni. Le motif est dense en partie basse et s'ouvre vers le haut, pour laisser respirer le plafond."
  },
  {
    id: 'horizon', nom: 'Horizon', ref: 'MO-03', motif: 'horizon', colorisDefaut: 'brume',
    texte: "Une mer calme, une ligne d'horizon basse et deux îles au loin. Un décor horizontal, pensé pour les pièces en longueur et les murs de tête de lit."
  },
  {
    id: 'futaie', nom: 'Futaie', ref: 'MO-04', motif: 'foret', colorisDefaut: 'argile',
    texte: "Des troncs droits répartis sur plusieurs plans, sans feuillage. Le rythme vertical du décor allonge visuellement la hauteur sous plafond."
  },
  {
    id: 'arcades', nom: 'Arcades', ref: 'MO-05', motif: 'arches', colorisDefaut: 'nuit',
    texte: "Une galerie d'arches ouverte sur un paysage de collines. Le décor le plus architectural de la collection, à placer face à une entrée ou au fond d'un couloir."
  }
];

/* ciel : dégradé haut → bas ; plans : du plus lointain au plus proche */
const C = [
  { id: 'ivoire', nom: 'Ivoire', ciel: ['#f3ede1', '#e6dccb'], plans: ['#d8ccb7', '#c1b197', '#a39077', '#776753'], soleil: '#ecdcb6' },
  { id: 'sauge',  nom: 'Sauge',  ciel: ['#eef0e6', '#d9dfcf'], plans: ['#c3cbb5', '#a2ad93', '#7d8a71', '#525d49'], soleil: '#e6e3c6' },
  { id: 'argile', nom: 'Argile', ciel: ['#f4e7db', '#e6cfbc'], plans: ['#d6b39b', '#bc9377', '#987058', '#694a39'], soleil: '#f0d3b2' },
  { id: 'brume',  nom: 'Brume',  ciel: ['#eaedef', '#d3d9dd'], plans: ['#bcc4ca', '#99a3ab', '#76818a', '#4f5962'], soleil: '#f1f0ea' },
  { id: 'nuit',   nom: 'Nuit',   ciel: ['#3b3e44', '#26282c'], plans: ['#4b4c4d', '#3b3b3a', '#2d2c2a', '#1d1c1a'], soleil: '#b8a079' }
];

/* PRIX PROVISOIRES — à valider avant mise en ligne (TTC, au m²) */
const M = [
  { id: 'intisse', nom: 'Intissé mat',       prix: 65,  detail: 'Papier intissé, finition mate.' },
  { id: 'texture', nom: 'Intissé texturé',   prix: 85,  detail: 'Intissé à léger relief, aspect toile.' },
  { id: 'vinyle',  nom: 'Vinyle lessivable', prix: 95,  detail: "Surface vinyle, se nettoie à l'éponge humide." },
  { id: 'toile',   nom: 'Toile tissée',      prix: 135, detail: 'Textile tissé contrecollé, rendu mat profond.' }
];

const Z = [
  { id: 'pan',    nom: 'Pan de mur',    l: 2.5, h: 2.6 },
  { id: 'sejour', nom: 'Mur de séjour', l: 3.5, h: 2.7 },
  { id: 'grand',  nom: 'Grand mur',     l: 5,   h: 2.8 },
  { id: 'hall',   nom: 'Hall, hôtel',   l: 8,   h: 3.2 }
];
