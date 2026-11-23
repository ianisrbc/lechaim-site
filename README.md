# Site Lechaim · lechaim-beer.com

Site vitrine statique (HTML, CSS, JavaScript, sans outil de build).

## Voir le site en local
Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Structure
Les pages sont générées une fois par un script hors dépôt ; chaque fichier HTML est autonome et modifiable à la main.
- `index.html` : accueil (maquette finale d'Ianis) : hero, Nos bières, Notre histoire, offre pros, Où nous trouver
- `bieres.html` : fiche Pale Ale – Blonde (4,2 %, 33 cl et fût 30 L), ingrédients bilingues, étiquette, service ; IPA bientôt disponible
- `histoire.html` : maquette « Notre histoire » d'Ianis : héros bleu, « Lechaim, c'est À la vie », une culture du partage, les moments qui nous rassemblent
- `evenements.html` : location de tireuse (solution clé en main, occasions, formulaire de devis qui ouvre la messagerie)
- `pros.html` : offre professionnelle validée (1,80 € HT la bouteille 33 cl, 100 € HT le fût 30 L, livraison offerte, sans minimum) et formulaire « Devenons partenaires » (ouvre la messagerie vers hello@lechaim-beer.com, pas de serveur)
- `trouver.html` : carte et liste des points de vente avec recherche (provisoire), contact, adresse
- `bieres.html` a des filtres (Toutes, Disponibles, Bientôt, Formats pros)
- `mentions-legales.html` : modèle à compléter
- En-tête et pied de page sont dupliqués dans chaque page.

## Éléments provisoires (attribut `data-placeholder`, classe `.ph` surlignée en jaune, ou commentaire PLACEHOLDER)
- Mentions légales : raison sociale, forme et capital, RCS, SIRET, TVA, directeur de la publication, titulaire de la marque, crédits
- Profil de dégustation, houblons, IBU et lieu de brassage de la Pale Ale
- Points de vente
- `assets/img/visuels/` : visuels fournis par Ianis (bouteilles, pictos, carte, motifs, photos). Le texte « IPA / Bientôt disponible » est posé en HTML sur la bouteille vierge.
- Plan de Paris illustratif : les épingles ne correspondent à aucun point de vente réel.
- Texte « Nos bières sont servies dans une sélection de bars… » : à confirmer quand les points de vente existeront.
- IPA : degré, profil et date de sortie.
- Location de tireuse : tarif, caution, zone de livraison, quantité minimale.
- `assets/img/provisoire/` : photos extraites des maquettes (tireuse, fût, occasions, table de fête, bouteille du héros pros), basse définition, à remplacer par des photos HD.
- Lien Instagram @lechaim_beer
- Polices : Bebas Neue (gratuite) en remplacement de Bebas Neue Pro tant que la licence web n'est pas ajoutée

## Mise en ligne (GitHub Pages)
1. Pousser ce dossier dans un dépôt GitHub.
2. Settings > Pages : source « Deploy from a branch », branche `main`, dossier `/`.
3. Chez le registrar de lechaim-beer.com :
   - 4 enregistrements A sur `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME sur `www` : `<compte-github>.github.io`
4. Dans Settings > Pages, cocher « Enforce HTTPS » une fois le certificat émis.
