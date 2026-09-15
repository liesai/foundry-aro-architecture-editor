# Éditeur d’architecture Microsoft Foundry + ARO

Ouvrez `index.html` dans un navigateur moderne. L’application est entièrement autonome : aucun serveur, compte ou paquet n’est requis.

## Consultation

- Choisissez un scénario dans la barre supérieure.
- Cliquez un composant pour afficher son rôle.
- Utilisez la molette pour zoomer et glissez le fond pour déplacer le canevas.
- `Auto` présente successivement tous les cas d’usage.

## Édition

Activez `Éditer`, puis :

- glissez les composants pour les repositionner ;
- cliquez un composant pour modifier son nom, son sigle, sa zone et sa description ;
- cliquez un lien animé pour modifier ses extrémités et son type ;
- utilisez `+ Composant` et `+ Lien` pour étendre le scénario ;
- utilisez `Scénario` pour renommer, dupliquer, créer ou supprimer une vue complète ;
- utilisez `Annuler` et `Rétablir`, ou `Ctrl+Z` et `Ctrl+Maj+Z`.

Les changements sont enregistrés dans le stockage local du navigateur. `Exporter JSON` produit une sauvegarde éditable et réimportable. `Exporter SVG` produit une version vectorielle statique du scénario affiché.

`Réinitialiser` restaure l’architecture livrée à l’origine. Cette action reste annulable pendant la session courante.
