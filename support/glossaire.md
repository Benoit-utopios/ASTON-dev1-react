# Glossaire React

### **Composants (Components)**

- **Définition :** Ce sont les briques de base d’une application React.
- **Rôle :** Un composant représente une partie de l’interface utilisateur (UI), par exemple un bouton, un formulaire ou un menu.
- **Types :**
    - **Fonctionnels** (les plus courants aujourd’hui) : simples fonctions JavaScript qui retournent du JSX.
    - **Classiques** (via `class`) : plus anciens, moins utilisés dans les nouveaux projets.
- **Avantage :** Réutilisables et modulaires, ils permettent de construire des applications complexes à partir de petites unités indépendantes.

---

### **JSX**

- **Définition :** Abréviation de *JavaScript XML*, c’est une syntaxe qui mélange du JavaScript et une écriture proche du HTML.
- **Rôle :** Décrire l’interface utilisateur à afficher.
- **Particularité :** Les navigateurs ne comprennent pas directement le JSX → il est transformé en JavaScript pur (par Babel, Vite, etc.).
- **Exemple :**
    
    ```jsx
    const App = () => <h1>Hello React !</h1>;
    
    ```

### **EventHandler (Gestionnaires d’événements)**

- **Définition :** Fonctions déclenchées lorsqu’un événement survient dans l’interface (clic, saisie clavier, soumission de formulaire, etc.).
- **Rôle :** Rendre l’application interactive.
- **Syntaxe :** En JSX, les noms des événements sont en **camelCase** et passent une fonction comme valeur.
- **Exemple :**
    
    ```jsx
    const handleClick = () => alert("Bouton cliqué !");
    <button onClick={handleClick}>Clique-moi</button>
    ```
    

---

### **Props (Propriétés)**

- **Définition :** Abréviation de *properties*, ce sont des données transmises **du parent vers l’enfant**.
- **Rôle :** Permettre à un composant d’être dynamique et réutilisable en changeant son contenu ou son comportement via des paramètres.
- **Particularité :** Elles sont **en lecture seule** (un composant enfant ne peut pas les modifier).
- **Exemple :**
    
    ```jsx
    const Welcome = ({ name }) => <h1>Bonjour {name} !</h1>;
    
    <Welcome name="Alice" />
    <Welcome name="Bob" />
    ```

---

### **State (État)**

- **Définition :** Donnée interne d’un composant, mémorisée par React et pouvant évoluer dans le temps.
- **Rôle :** Permet de rendre une interface dynamique et réactive aux interactions utilisateur.
- **Exemple :**
    
    ```jsx
    const [count, setCount] = useState(0);
    // "count" est le state courant, "setCount" permet de le mettre à jour
    
    ```
    

---

### **useState**

- **Définition :** Hook de React qui permet à un composant fonctionnel de créer et gérer un **state**.
- **Syntaxe :**
    
    ```jsx
    const [state, setState] = useState(valeurInitiale);
    
    ```
    
- **Renvoie :**
    - la valeur actuelle du state,
    - une fonction qui met à jour ce state et provoque un **re-render** du composant.
- **Exemple :**
    
    ```jsx
    const [name, setName] = useState("");
    
    ```
    

---

### **Callback Handler**

- **Définition :** Event Handler spécifique passée dans les props qui sera exécutée lorsqu’un événement ou une action spécifique se produit dans l’enfant jusqu’au parent
- **Schéma :**
1. (A) Le parent définit une fonction.
2. (B) Il la passe à l’enfant via props.
3. (C) L’enfant l’appelle dans son code (souvent dans un event handler).
4. (D) Le parent est “notifié” de l’action.
- **Exemple :**
    
    ### Parent (`App`)
    
    ```jsx
    const App = () => {
      const stories = [ ... ];
    
      // A - fonction définie dans App
      const handleSearch = (event) => {
        // D - reçoit la valeur de Search
        console.log(event.target.value);
      };
    
      return (
        <div>
          <h1>My Hacker Stories</h1>
          {/* B - passage de la fonction en props */}
          <Search onSearch={handleSearch} />
          <hr />
          <List list={stories} />
        </div>
      );
    };
    
    ```
    
    ### Enfant (`Search`)
    
    ```jsx
    const Search = (props) => {
      const [searchTerm, setSearchTerm] = React.useState('');
    
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // C - exécution du callback transmis par App
        props.onSearch(event);
      };
    
      return (
        <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={handleChange} />
          <p>Searching for <strong>{searchTerm}</strong></p>
        </div>
      );
    };
    
    ```

  ### **useEffect**

- **Définition :** Hook React qui permet d’exécuter du code en réaction au **cycle de vie d’un composant** (montage, mise à jour, démontage).
- **Rôle :** Gérer les **effets de bord** (*side-effects*) comme les appels API, timers, manipulations du DOM ou synchronisation avec `localStorage`.
- **Fonctionnement :**
    - Premier argument → la fonction à exécuter.
    - Deuxième argument (tableau de dépendances) → contrôle quand l’effet est relancé.
- **Exemple :**
    
    ```jsx
    React.useEffect(() => {
      console.log("searchTerm changé :", searchTerm);
    }, [searchTerm]); // exécuté au montage et à chaque changement de searchTerm
    
    ```
    
---

### **Hooks**

- **Définition :** Fonctions spéciales introduites par React pour ajouter des fonctionnalités (state, effets, contexte, etc.) aux composants fonctionnels.
- **Exemples :**
    - `useState` → gérer un état local.
    - `useEffect` → gérer des effets de bord.
    - `useContext`, `useReducer`, etc.
- **Règles importantes :**
    1. Commencer par `use`.
    2. Appelés uniquement **au niveau racine** d’un composant ou d’un custom hook (jamais dans une boucle, condition ou fonction imbriquée).

---

### **React Fragments**

- **Définition :** “Conteneur invisible” permettant de grouper plusieurs éléments sans ajouter de balise inutile dans le DOM.
- **Problème résolu :** React impose un **seul élément racine** par composant. Plutôt que d’ajouter un `<div>` inutile, on peut utiliser un Fragment.
- **Deux syntaxes :**
    
    ```jsx
    <React.Fragment>
      <h2>Titre</h2>
      <p>Paragraphe</p>
    </React.Fragment>
    
    // version raccourcie
    <>
      <h2>Titre</h2>
      <p>Paragraphe</p>
    </>
    
    ```
    
---