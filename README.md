# Éditeur d’architecture réutilisable

Ouvrez `index.html` dans un navigateur moderne. L’application est entièrement autonome : aucun serveur, compte ou paquet n’est requis. Le modèle Microsoft Foundry + ARO et ses onze scénarios sont fournis comme point de départ, mais l’éditeur permet aussi de créer des architectures entièrement différentes.

## Consultation

- Choisissez un scénario dans la barre supérieure.
- Cliquez un composant pour afficher son rôle.
- Utilisez la molette pour zoomer et glissez le fond pour déplacer le canevas.
- `Auto` présente successivement tous les cas d’usage.

## Édition

Activez `Éditer`, puis :

- glissez les composants pour les repositionner ;
- cliquez un composant pour modifier son nom, son sigle, sa zone, sa position, ses dimensions et sa description ;
- ajoutez et configurez librement les zones du canevas ;
- cliquez un lien animé pour modifier ses extrémités et son type ;
- utilisez `+ Composant` et `+ Lien` pour étendre le scénario ;
- utilisez `Scénario` pour renommer, dupliquer, créer ou supprimer une vue complète ;
- utilisez `Annuler` et `Rétablir`, ou `Ctrl+Z` et `Ctrl+Maj+Z`.

## Projets réutilisables

Le bouton `Projet` permet de modifier :

- le nom, le titre et la description de l’architecture ;
- les principes affichés dans l’en-tête ;
- les fondations transverses ;
- la largeur et la hauteur du canevas ;
- la place réservée au socle de plateforme.

La bibliothèque locale accepte plusieurs projets. Vous pouvez :

- partir du modèle Foundry + ARO avec ses scénarios ;
- créer un projet entièrement vierge ;
- dupliquer une architecture existante ;
- passer d’un projet à l’autre avec le sélecteur ;
- supprimer un projet sans affecter les autres.

Les changements sont enregistrés dans le stockage local du navigateur. `Exporter JSON` produit un projet complet, éditable et réimportable comme nouveau projet. `Exporter SVG` produit une version vectorielle statique du scénario affiché.

`Réinitialiser` restaure l’architecture livrée à l’origine. Cette action reste annulable pendant la session courante.
