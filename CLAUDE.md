# Maison Orée : site e-commerce de papiers peints panoramiques de luxe

## Le projet
Site vitrine et boutique d'une marque de papier peint panoramique haut de gamme.
Positionnement : peu de modèles, choisis un par un, en tailles standard.
Modèle : revente. Le papier peint est fabriqué et expédié par le fournisseur (AliExpress) ; la marque ne produit rien.
Langue du site : français. Public : particuliers aisés, architectes d'intérieur, hôtels.

## Structure
- `index.html` : page unique (HTML + CSS + JS). Sections : bandeau, en-tête avec menu, héro, collection, fiche produit (aperçus motif / à l'échelle / ambiance), trouver ma taille, comment commander, réassurance, pied de page, panier latéral.
- `config.js` : toutes les données modifiables (tailles et prix `TAILLES`, décors `D`, infos de marque `BRAND`).
- `images/` : photos des décors fournies par le fournisseur (motif à plat + photos d'ambiance).

## Règles à respecter
- Garder le style : palette ivoire / encre / laiton, titres en Cormorant Garamond, texte en Inter. Ne pas ajouter de couleurs vives.
- Toutes les couleurs passent par les variables CSS de `:root`. Le thème sombre doit rester fonctionnel (blocs `prefers-color-scheme` et `data-theme`).
- Le site doit rester lisible à 400 px de large, sans défilement horizontal.
- Pas de texte de remplissage : tout le contenu est du vrai contenu en français, sans tournures marketing creuses.
- Les prix s'affichent TTC, livraison offerte. Le prix = prix de la taille choisie × quantité. Prix = (coût fournisseur + 5 € de livraison) avec 30 % de marge minimum.
- Pas de taille personnalisée : chaque décor est vendu dans les tailles de `TAILLES`.
- Ne jamais écrire « sur mesure », « impression à la commande », « imprimé par nos soins » ni prétendre que la marque fabrique quoi que ce soit.
- Les tailles étant standard, le droit de rétractation de 14 jours s'applique : ne pas écrire qu'il est exclu.
- Ne jamais inventer d'avis clients, de chiffres de vente ni de certifications.
- Photos : uniquement celles du fournisseur pour les produits vendus (dossier `images/`). Ne pas copier de textes d'autres sites.
- Avant toute modification de prix, de nom de marque ou de promesse de service, demander confirmation.

## À brancher plus tard (non fait)
- Paiement réel (Stripe, ou migration vers Shopify)
- Compte client, favoris persistants, envoi de la demande d'échantillon
- Pages : garanties et retours, livraison, guide de pose, CGV, mentions légales, espace pro
- Photos en plus haute définition, fiche technique (matière, pose), délais de livraison réels

## Consignes personnalisées (à compléter)
<!-- Ajoute ici tes propres consignes, une par ligne. Claude Code les lira à chaque session. -->
-
