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