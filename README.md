# Site Lechaim · lechaim-beer.com

Site vitrine statique (HTML, CSS, JavaScript, sans outil de build).

## Voir le site en local
Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Structure
Les pages sont générées une fois par un script hors dépôt ; chaque fichier HTML est autonome et modifiable à la main.
- `index.html` : accueil (maquette finale d'Ianis) : hero, Nos bières, Notre histoire, offre pros, Où nous trouver
- `bieres.html` : fiche Pale Ale – Blonde (4,2 %, 33 cl et fût 30 L), ingrédients bilingues, étiquette, service ; IPA bientôt disponible
- `histoire.html` : sens de לחיים, le projet, les valeurs, l'identité, article « De l'étiquette à la bouteille »
- `evenements.html` : agenda (provisoire) et événements pour les pros
- `pros.html` : offre professionnelle (livraison, fûts 30 L et bouteilles 33 cl, accompagnement, événements)
- `trouver.html` : points de vente (provisoires), contact, adresse
- `mentions-legales.html` : modèle à compléter
- En-tête et pied de page sont dupliqués dans chaque page.

## Éléments provisoires (attribut `data-placeholder`, classe `.ph` surlignée en jaune, ou commentaire PLACEHOLDER)
- Mentions légales : raison sociale, forme et capital, RCS, SIRET, TVA, directeur de la publication, titulaire de la marque, crédits
- Profil de dégustation, houblons, IBU et lieu de brassage de la Pale Ale
- Nom d'Ianis et lien Rupture Brewing sur « Notre histoire » (à valider)
- Points de vente, articles d'actus « Exemple d'article »
- `assets/img/visuels/` : visuels fournis par Ianis (bouteilles, pictos, carte, motifs, photos). Le texte « IPA / Bientôt disponible » est posé en HTML sur la bouteille vierge.
- Plan de Paris illustratif : les épingles ne correspondent à aucun point de vente réel.
- Texte « Nos bières sont servies dans une sélection de bars… » : à confirmer quand les points de vente existeront.
- IPA : degré, profil et date de sortie ; offre pros : zone et délais de livraison, tarifs, détail de l'accompagnement.
- Événements de l'agenda
- Adresse e-mail contact@lechaim-beer.com
- Lien Instagram @lechaim_beer
- Polices : Bebas Neue (gratuite) en remplacement de Bebas Neue Pro tant que la licence web n'est pas ajoutée

## Mise en ligne (GitHub Pages)
1. Pousser ce dossier dans un dépôt GitHub.
2. Settings > Pages : source « Deploy from a branch », branche `main`, dossier `/`.
3. Chez le registrar de lechaim-beer.com :
   - 4 enregistrements A sur `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME sur `www` : `<compte-github>.github.io`
4. Dans Settings > Pages, cocher « Enforce HTTPS » une fois le certificat émis.
