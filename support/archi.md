# Single-Page Application (SPA)

Une application monopage est une application web qui ne recharge qu'une **seule page HTML** tout au long de la navigation.
L'expérience utilisateur ressemble à une application native: les interactions changent l'interface et l'URL sans rechargement complet du document.

## Caractéristiques clés
- Un seul fichier HTML de base (index.html)
- Chargement initial: Le navigateur télécharge le bundle JS/CSS -> l'app va prendre le contrôle du DOM
- Navigation côté client: Le routage manipule l'URL et affiche le bon composant, sans aller-retour complet au serveur.
- Expérience fluide: pas de flash blanc, pas de rechargement.

## Exemple de flux

- L'utilisateur tape `http://app.com`
- Le serveur renvoie toujours `index.html`
- React (ou Vue, Angular...) démarre, lit l'URL et monte le composant racine.
- L'utilisateur clique sur `/profile` -> pas de requête HTML -> React Router affiche <ProfilePage />
- Si besoin, l'app fait une requête API (/api/profile), récupère les données et les affiche, sans rechargement global.

## Avantages

- **UX fluide** (navigation rapide, transitions).
- **Séparation front/back** : front = React SPA, back = API REST/GraphQL.
- **Réutilisable** : même API peut servir mobile (React Native).
- **Très productif** avec un outil comme Vite + React.

---

## Inconvénients

- **SEO compliqué** (car la page est vide avant que JS s’exécute) → d’où l’intérêt des frameworks SSR (Next.js).
- **Performance au premier chargement** : gros bundle initial à télécharger.
- **Gestion plus complexe de la navigation & état** (tout est côté client).
- **Sécurité** : tout le JS est exposé au client, donc attention aux règles d’auth/permissions.

---

## Exemple d’architecture simple d’une SPA React avec Vite

```
index.html       # racine unique
/src
  main.tsx       # bootstrap React
  App.tsx        # layout global + routes
  /pages
    Home.tsx
    Profile.tsx
  /components
    Navbar.tsx
    Footer.tsx
  /api
    client.ts    # axios ou fetch wrapper

```