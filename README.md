# 🥛 Soummam — Yago

Bienvenue sur le projet web vitrine de **Laiterie Soummam**, mettant en avant la boisson lactée iconique **Yago** et l'ensemble de la gamme de produits laitiers frais.

Conçu avec des technologies modernes pour offrir une expérience fluide, interactive et fidèle à l'identité visuelle gourmande de la marque.

---

## ✨ Fonctionnalités & Pages

- **🏠 Page d'accueil (`/`)** :
  - **Hero Section** : Bouteille Yago flottante en 3D avec animations fluides de lévitation et rotation continue, halo lumineux et effets de perspective.
  - **Section À propos** : Histoire de la laiterie depuis 1993, valeurs et engagement envers la qualité.
  - **Gamme de Produits** : Présentation interactive des saveurs phares (Banane, Grenadine, Fruits des Bois, etc.).
  - **Section Découvrir** : Idées de recettes et immersion dans les coulisses de production.
- **📖 Page À Propos (`/about`)** : Récit complet sur l'histoire de la laiterie, chiffres clés (+30 ans d'expertise) et vision durable.
- **🍌 Page Produits (`/product`)** : Catalogue interactif avec filtres par catégories (Yago, Yaourts, Desserts, Boissons).
- **🌿 Page Ingrédients (`/ingredients`)** : Origine 100% lait frais local, sélection de fruits mûris au soleil, ferments actifs et valeurs nutritionnelles.
- **✉️ Page Contact (`/contact`)** : Formulaire de contact fonctionnel, coordonnées de l'usine à Akbou (Béjaïa), téléphone, email et horaires.
- **🔐 Page Connexion (`/login`)** : Interface d'authentification personnalisée aux couleurs de Soummam.
- **🧭 Navigation Dynamique** : Navbar flottante en pilule avec détection de la route active (`usePathname`), menu tiroir responsive sur mobile.
- **🎨 Thème & Favicon** : Identité visuelle jaune Soummam (`#FFD923`), crème (`#FFF8D9`) et noir, avec favicons et icônes d'onglets personnalisés.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI & Rendu** : [React 19](https://react.dev/)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Typographie** : Google Fonts (`Modak` pour les titres Milky, `DM Sans` pour les textes)
- **Animations** : CSS Keyframes & [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Structure du Projet

```text
soumam/
├── public/
│   └── assets/             # Logos, visuels produits (Yago), usine et recettes
├── src/
│   └── app/
│       ├── about/          # Route /about (page.js)
│       ├── contact/        # Route /contact (page.js)
│       ├── ingredients/    # Route /ingredients (page.js)
│       ├── login/          # Route /login (page.js)
│       ├── product/        # Route /product (page.js)
│       ├── components/
│       │   ├── About.jsx       # Section de présentation
│       │   ├── Contact.jsx     # Pied de page & bloc contact
│       │   ├── Explore.jsx     # Section recettes et coulisses
│       │   ├── Hero.jsx        # Hero interactif avec bouteille flottante
│       │   ├── NavBar.jsx      # Barre de navigation flottante
│       │   └── Products.jsx    # Grille de présentation des produits
│       ├── favicon.ico     # Favicon officiel Soummam
│       ├── icon.png        # Icône d'onglet haute résolution
│       ├── apple-icon.png  # Icône pour appareils Apple
│       ├── globals.css     # Directives Tailwind & animations personnalisées
│       ├── layout.js       # Layout racine, polices et métadonnées
│       └── page.js         # Page d'accueil principale
├── package.json
└── README.md
```

---

## 🚀 Démarrage Rapide

### Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- Gestionnaire de paquets `npm`, `yarn` ou `pnpm`

### Installation

1. Clonez le dépôt ou ouvrez le dossier du projet :
   ```bash
   cd soumam
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le site.

---

## 📦 Scripts Disponibles

- `npm run dev` : Lance l'environnement de développement avec rechargement à chaud (Turbopack).
- `npm run build` : Compile et optimise l'application pour la production.
- `npm run start` : Lance le serveur de production suite au build.
- `npm run lint` : Exécute ESLint pour vérifier la qualité du code.

---

## 📄 Licence

Projet développé pour la marque **Soummam**. Tous droits réservés.
