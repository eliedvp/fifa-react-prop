# Liste de joueurs FIFA — React et props

Exercice réalisé pendant la formation GoMyCode : afficher une liste de joueurs de football sous forme de cartes, en transmettant les données d'un composant à l'autre par les props.

## Ce que fait le projet

- Affiche quatre joueurs (Messi, Ronaldo, Mbappé, De Bruyne) à partir d'un tableau de données local (`src/data/players.js`).
- Chaque joueur est rendu par le composant `Player` sous forme de carte React-Bootstrap : photo, nom, équipe, nationalité, numéro de maillot et âge.
- `PlayerList` parcourt le tableau et place les cartes dans une grille responsive.

## Notions travaillées

- Composants fonctionnels et props
- Valeurs par défaut des props via la déstructuration
- Opérateur de décomposition (`<Player {...player} />`) pour transmettre toutes les propriétés
- Rendu de listes avec `map()` et la prop `key`
- Grille avec `Container`, `Row` et `Col` de React-Bootstrap

## Stack

- React 19
- React-Bootstrap 2
- Create React App (`react-scripts` 5)

## Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur http://localhost:3000.

> Les photos des joueurs sont chargées depuis des URL externes : leur affichage dépend de la disponibilité de ces sites.
