# Maison Orée : site e-commerce de papiers peints panoramiques de luxe

## Le projet
Site vitrine et boutique d'une marque de papier peint panoramique haut de gamme.
Positionnement : peu de modèles, qualité maximale, impression à la commande, sur mesure.
Langue du site : français. Public : particuliers aisés, architectes d'intérieur, hôtels.

## Structure
- `index.html` : page unique (HTML + CSS + JS). Sections : bandeau, en-tête avec menu, héro, collection, fiche produit configurable, atelier, réassurance, pied de page, panier latéral, calculateur de lés.
- `config.js` : toutes les données modifiables (décors `D`, coloris `C`, supports et prix au m² `M`, tailles `Z`, infos de marque `BRAND`).
- Les visuels sont des illustrations SVG générées par la fonction `scene(d, c, mode)`. Ce sont des placeholders à remplacer par de vraies photos.

## Règles à respecter
- Garder le style : palette ivoire / encre / laiton, titres en Cormorant Garamond, texte en Inter. Ne pas ajouter de couleurs vives.
- Toutes les couleurs passent par les variables CSS de `:root`. Le thème sombre doit rester fonctionnel (blocs `prefers-color-scheme` et `data-theme`).
- Le site doit rester lisible à 400 px de large, sans défilement horizontal.
- Pas de texte de remplissage : tout le contenu est du vrai contenu en français, sans tournures marketing creuses.
- Les prix s'affichent TTC, livraison offerte. Le prix = surface (largeur × hauteur en m², minimum 4 m²) × prix du support × quantité.
- Un papier peint sur mesure est exclu du droit de rétractation : ne jamais écrire « retour gratuit » ou « satisfait ou remboursé » sur ces produits.
- Ne jamais inventer d'avis clients, de chiffres de vente ni de certifications.
- Ne pas copier de photos ni de textes d'autres sites.
- Avant toute modification de prix, de nom de marque ou de promesse de service, demander confirmation.

## À brancher plus tard (non fait)
- Paiement réel (Stripe, ou migration vers Shopify)
- Compte client, favoris persistants, envoi de la demande d'échantillon
- Pages : garanties et retours, livraison, guide de pose, CGV, mentions légales, espace pro
- Vraies photos produit et photos d'ambiance, fiche technique par support

## Consignes personnalisées (à compléter)
<!-- Ajoute ici tes propres consignes, une par ligne. Claude Code les lira à chaque session. -->
-
