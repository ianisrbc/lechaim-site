# Site Lechaim · lechaim-beer.com

Site vitrine statique (HTML, CSS, JavaScript, sans outil de build).

## Voir le site en local
Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Structure
- `index.html` : page d'accueil (hero, Nos bières, Notre histoire, Actus, Nous trouver)
- `assets/css/style.css` : charte (couleurs et polices en variables en haut du fichier)
- `assets/js/main.js` : contrôle d'âge, menu mobile, carrousel
- `CNAME` : domaine personnalisé pour GitHub Pages

## Éléments provisoires (attribut `data-placeholder` ou commentaire PLACEHOLDER)
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
