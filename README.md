# Site Lechaim · lechaim-beer.com

Site vitrine statique (HTML, CSS, JavaScript, sans outil de build).

## Voir le site en local
Ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Structure
Les pages sont générées une fois par un script hors dépôt ; chaque fichier HTML est autonome et modifiable à la main.
- `index.html` : accueil (maquette finale d'Ianis) : hero, Nos bières, Notre histoire, offre pros, bloc Professionnels
- `bieres.html` : fiche Pale Ale – Blonde (4,2 %, 33 cl et fût 30 L), ingrédients bilingues, étiquette, service ; IPA bientôt disponible
- `histoire.html` : sens de לחיים, le projet, les valeurs
- `evenements.html` : location de tireuse (solution clé en main, occasions, formulaire de devis qui ouvre la messagerie)
- `pros.html` : offre professionnelle validée (1,80 € HT la bouteille 33 cl, 100 € HT le fût 30 L, livraison offerte, sans minimum) et formulaire « Devenons partenaires » (ouvre la messagerie vers hello@lechaim-beer.com, pas de serveur)
- Page « Où nous trouver » retirée le 23/11 (pas encore de points de vente) ; elle reste dans l’historique git.
- `bieres.html` a des filtres (Toutes, Disponibles, Bientôt, Formats pros)
- `mentions-legales.html` : modèle à compléter
- `biere-casher.html` : Lechaim et la cacherout (mentions validées uniquement, FAQ), liée depuis le pied de page
- `sitemap.xml` et `robots.txt` : à mettre à jour si une page est ajoutée. Données structurées (JSON-LD) dans index, bieres, evenements et biere-casher.
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
- `assets/img/provisoire/` : photos extraites des maquettes (fût de 30 L), basse définition, à remplacer par des photos HD. Les photos définitives sont dans `assets/img/photos/`.
- Lien Instagram @lechaim_beer
- Polices : Bebas Neue (gratuite) en remplacement de Bebas Neue Pro tant que la licence web n'est pas ajoutée

## Mise en ligne (GitHub Pages)
1. Pousser ce dossier dans un dépôt GitHub.
2. Settings > Pages : source « Deploy from a branch », branche `main`, dossier `/`.
3. Chez le registrar de lechaim-beer.com :
   - 4 enregistrements A sur `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME sur `www` : `<compte-github>.github.io`
4. Dans Settings > Pages, cocher « Enforce HTTPS » une fois le certificat émis.

## Référencement (SEO)

- Chaque page a un `<title>`, une description, une URL canonique, des balises Open Graph et Twitter, et des données structurées JSON-LD (Brewery et WebSite sur l'accueil, Product sur Nos bières, Service et FAQPage sur Événementiel, FAQPage sur Cacherout, fil d'Ariane sur les pages intérieures).
- Images de partage (1200 × 630) : `assets/img/partage/`.
- Photos en WebP, avec des noms de fichiers descriptifs, `width`/`height`, `loading="lazy"` sous la ligne de flottaison et `fetchpriority="high"` sur l'image principale.
- Favicons : `assets/img/favicon.svg`, `assets/img/favicon-96.png`, `favicon.ico`, `apple-touch-icon.png`.
- `sitemap.xml` (avec images), `robots.txt`, `404.html` (liens absolus, non indexée).
- Après une modification de texte, mettre à jour `<lastmod>` dans `sitemap.xml`.

