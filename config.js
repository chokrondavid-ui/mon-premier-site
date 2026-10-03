/* ==========================================================================
   Maison Orée — données modifiables du site
   --------------------------------------------------------------------------
   BRAND   : informations de marque
   TAILLES : formats disponibles (largeur × hauteur en cm) et prix TTC,
             livraison comprise
   D       : décors (photos dans le dossier images/)
   ========================================================================== */

const BRAND = {
  nom: 'Maison Orée',
  signature: 'Papiers peints panoramiques',
  // Laisser vide tant que l'adresse n'est pas créée : la ligne n'est pas affichée.
  email: '',
  devise: 'EUR',
  margePose: 5 // cm ajoutés à la largeur et à la hauteur du mur par « Trouver ma taille »
};

/* Prix = coût fournisseur + 5 € de livraison, avec 30 % de marge minimum.
   Coût fournisseur : 7,59 / 15,19 / 22,79 / 30,39 / 37,99 / 44,19 / 52,99 /
   60,69 / 68,39 / 75,69 / 83,39 / 90,99 € */
const TAILLES = [
  { l: 140, h: 70,  prix: 17.99 },
  { l: 200, h: 100, prix: 28.84 },
  { l: 220, h: 140, prix: 39.70 },
  { l: 250, h: 160, prix: 50.56 },
  { l: 280, h: 180, prix: 61.41 },
  { l: 300, h: 200, prix: 70.27 },
  { l: 330, h: 210, prix: 82.84 },
  { l: 360, h: 230, prix: 93.84 },
  { l: 380, h: 240, prix: 104.84 },
  { l: 400, h: 250, prix: 115.27 },
  { l: 420, h: 260, prix: 126.27 },
  { l: 440, h: 270, prix: 137.13 }
];

/* motif     : le décor à plat
   cadrage   : point de l'image gardé au centre quand elle est recadrée
   ambiances : photos du décor posé dans une pièce
   tailles   : remplacer TAILLES par une liste propre au décor si besoin */
const D = [
  {
    id: 'ramure', nom: 'Ramure', ref: 'MO-01',
    texte: "Des branches nues entrent par les bords du mur et se détachent sur un fond beige patiné, plus clair au centre. Le motif encadre le mur et laisse le milieu dégagé pour un canapé ou un meuble bas.",
    motif: 'images/ramure-motif.jpg', cadrage: '50% 40%',
    ambiances: [
      { src: 'images/ramure-salon.jpg', legende: 'Ramure dans un salon' },
      { src: 'images/ramure-meuble.jpg', legende: 'Ramure derrière un meuble bas' }
    ],
    tailles: TAILLES
  },
  {
    id: 'alize', nom: 'Alizé', ref: 'MO-02',
    texte: "Des feuilles longues et translucides tombent du haut du mur sur un fond gris béton. Les tons vert, rose poudré et blanc restent doux, et la moitié basse du mur reste presque unie : la place d'une tête de lit ou d'une commode.",
    motif: 'images/alize-motif.jpg', cadrage: '50% 30%',
    ambiances: [
      { src: 'images/alize-chambre.jpg', legende: 'Alizé dans une chambre' }
    ],
    tailles: TAILLES
  }
];
