# Projet 001 – CV en React avec Vite

## Étapes réalisées


1. Création du projet : `npm create vite@latest 001 -- --template react`
2. Entrée dans le dossier : `cd 001`
3. Installation des dépendances : `npm install`
4. Lancement du serveur de développement : `npm run dev`
5. Création du dossier `src/components/`
6. Création des composants `InfoPerso.jsx`, `Competences.jsx` et `Experiences.jsx`
7. Assemblage des composants dans `src/App.jsx`
8. Mise en forme dans `src/App.css`
9. Vérification du rendu dans le navigateur

## Rôle des dossiers et fichiers indispensables

| Élément | Rôle |
|---|---|
| `node_modules/` | Contient toutes les bibliothèques installées par npm (React, Vite…). Généré automatiquement, jamais modifié à la main. |
| `public/` | Fichiers statiques servis tels quels (favicon, images publiques). |
| `src/` | Code source de l'application : c'est là qu'on travaille. |
| `src/assets/` | Images et ressources utilisées par les composants. |
| `src/components/` | Composants React réutilisables (InfoPerso, Competences, Experiences). |
| `src/main.jsx` | Point d'entrée JavaScript : monte le composant `App` dans la page HTML. |
| `src/App.jsx` | Composant principal qui assemble les autres composants. |
| `src/App.css` / `src/index.css` | Feuilles de style. |
| `index.html` | Unique page HTML ; contient `<div id="root">` où React affiche l'application. |
| `package.json` | Carte d'identité du projet : nom, scripts (`dev`, `build`), dépendances. |
| `package-lock.json` | Verrouille les versions exactes des dépendances installées. |
| `vite.config.js` | Configuration de Vite (plugins, options du serveur). |
| `eslint.config.js` | Règles de vérification de la qualité du code. |
| `.gitignore` | Liste des fichiers ignorés par Git (ex. `node_modules`). |
| `README.md` | Documentation du projet. |

## Les trois composants

- **InfoPerso** : nom, numero de tel, coordonnées.
- **Competences** : liste de compétences affichée avec `map()`.
- **Experiences** : liste d'expériences (poste, lieu, période, description).

## Lancer le projet

```bash
npm install
npm run dev
```