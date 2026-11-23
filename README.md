# Site Lechaim · lechaim-beer.com

Site vitrine statique (HTML, CSS, JavaScript, sans outil de build).

## Voir le site en local
Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Structure
- `index.html` : page d'accueil (hero, Nos bières, Notre histoire, Actus, Nous trouver)
- `bieres.html` : fiche Lechaim Pale Ale – Blonde (caractéristiques, ingrédients bilingues, texte de l'étiquette, service et accords)
- `histoire.html` : sens de לחיים, le projet, les valeurs, l'identité visuelle
- `actus.html` : liste d'actus + article « De l'étiquette à la bouteille »
- `trouver.html` : points de vente (provisoires), contact professionnels, adresse
- `mentions-legales.html` : modèle à compléter
- En-tête et pied de page sont dupliqués dans chaque page : toute modification du menu se fait dans les 6 fichiers.
- `assets/css/style.css` : charte (couleurs et polices en variables en haut du fichier)
- `assets/js/main.js` : contrôle d'âge, menu mobile, carrousel
- `CNAME` : domaine personnalisé pour GitHub Pages

## Éléments provisoires (attribut `data-placeholder`, classe `.ph` surlignée en jaune, ou commentaire PLACEHOLDER)
- Mentions légales : raison sociale, forme et capital, RCS, SIRET, TVA, directeur de la publication, titulaire de la marque, crédits
- Profil de dégustation, houblons, IBU et lieu de brassage de la Pale Ale
- Nom d'Ianis et lien Rupture Brewing sur « Notre histoire » (à valider)
- Points de vente, articles d'actus « Exemple d'article »
- Cible du bouton « Acheter » (mène à trouver.html#acheter)
- `assets/img/provisoire/` : photo des verres et illustration « Notre histoire » extraites de la planche (basse définition ; l’hébreu des verres y est écrit לחים au lieu de לחיים). À remplacer par de vrais visuels.
- Bouteilles « À venir » sur l’accueil
- Cartes « Prochainement » dans Nos bières (Blonde et IPA non confirmées)
- Cartes Actus
- Adresse e-mail contact@lechaim-beer.com
- Lien Instagram @lechaim_beer
- Bouteille dessinée en vectoriel : à remplacer par une photo avec la vraie étiquette
- Polices : Bebas Neue (gratuite) en remplacement de Bebas Neue Pro tant que la licence web n'est pas ajoutée

## Mise en ligne (GitHub Pages)
1. Pousser ce dossier dans un dépôt GitHub.
2. Settings > Pages : source « Deploy from a branch », branche `main`, dossier `/`.
3. Chez le registrar de lechaim-beer.com :
   - 4 enregistrements A sur `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME sur `www` : `<compte-github>.github.io`
4. Dans Settings > Pages, cocher « Enforce HTTPS » une fois le certificat émis.
