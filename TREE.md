# Arborescence du Projet iTech-Company

```
itech-company/
│
├── 📁 .vs/                              # Configuration Visual Studio (ignoré)
│
├── 📁 node_modules/                     # Dépendances npm (ignoré)
│
├── 📁 public/
│   └── vite.svg                         # Logo Vite
│
├── 📁 src/
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── Footer.tsx               ⚛️ Pied de page avec liens & réseaux sociaux
│   │   │   └── Navbar.tsx               ⚛️ Navigation sticky avec menu mobile
│   │   │
│   │   └── 📁 ui/
│   │       ├── Button.tsx               ⚛️ Bouton avec 4 variantes + icônes
│   │       ├── Card.tsx                 ⚛️ Carte avec glassmorphism
│   │       ├── SectionWrapper.tsx       ⚛️ Wrapper de section animé
│   │       └── TestimonialSlider.tsx    ⚛️ Slider de témoignages
│   │
│   ├── 📁 pages/
│   │   ├── About.tsx                    📄 Page À propos (Histoire, Équipe, Valeurs)
│   │   ├── Contact.tsx                  📄 Page Contact (Formulaire + Map)
│   │   ├── Home.tsx                     📄 Page d'accueil (Hero, Services, Projets)
│   │   ├── Portfolio.tsx                📄 Grille de projets avec filtres
│   │   ├── ProjectDetail.tsx            📄 Détails d'un projet
│   │   └── Services.tsx                 📄 Services détaillés
│   │
│   ├── App.tsx                          ⚙️ Composant principal + Router
│   ├── index.css                        🎨 Styles Tailwind + custom
│   ├── main.tsx                         🚀 Point d'entrée React
│   └── vite-env.d.ts                    📝 Types TypeScript Vite
│
├── 📁 dist/                             # Build de production (généré)
│
├── .eslintrc.cjs                        ⚙️ Configuration ESLint
├── .gitignore                           📝 Fichiers ignorés par Git
├── index.html                           📄 Template HTML principal
├── package.json                         📦 Dépendances & scripts
├── package-lock.json                    🔒 Versions verrouillées
├── postcss.config.js                    ⚙️ Configuration PostCSS
├── PROJECT_STRUCTURE.md                 📚 Documentation structure
├── README.md                            📖 Documentation principale
├── tailwind.config.js                   🎨 Configuration Tailwind
├── TREE.md                              🌳 Ce fichier - Arborescence
├── tsconfig.json                        ⚙️ Config TypeScript principale
├── tsconfig.node.json                   ⚙️ Config TypeScript Node
└── vite.config.ts                       ⚙️ Configuration Vite
```

## 📊 Statistiques du Projet

### Fichiers Source
- **Pages** : 6 fichiers
- **Components UI** : 4 composants
- **Components Layout** : 2 composants
- **Total TypeScript/TSX** : 14 fichiers

### Configuration
- **Build** : Vite + TypeScript
- **Styles** : Tailwind CSS + PostCSS
- **Linting** : ESLint
- **Routing** : React Router v6
- **Animations** : Framer Motion

### Dépendances
- **Production** : 5 packages
- **Développement** : 11 packages
- **Total** : 257 packages (avec sous-dépendances)

## 🎯 Composants par Type

### Pages (6)
```
📄 Home.tsx             - Hero + Services + Projets + Témoignages + CTA
📄 Services.tsx         - 6 services détaillés avec features
📄 Portfolio.tsx        - Grid de 6 projets + filtres
📄 ProjectDetail.tsx    - Page détail projet avec résultats
📄 About.tsx            - Histoire + Mission + Équipe + Timeline
📄 Contact.tsx          - Formulaire + Coordonnées + Map
```

### Components UI (4)
```
⚛️ Button.tsx           - 4 variantes, 3 tailles, support icônes
⚛️ Card.tsx             - Hover effects, glassmorphism
⚛️ SectionWrapper.tsx   - Backgrounds, animations scroll
⚛️ TestimonialSlider.tsx - Slider avec navigation
```

### Components Layout (2)
```
⚛️ Navbar.tsx           - Navigation sticky + dark mode toggle
⚛️ Footer.tsx           - Links + Social + Contact info
```

## 🎨 Assets & Styles

### CSS/Styles
- `index.css` - Tailwind + Custom utilities
- `tailwind.config.js` - Theme personnalisé

### Fonts (Google Fonts)
- **Inter** - Body text (300-900)
- **Outfit** - Headings (300-900)

### Images
- Unsplash CDN pour images de démonstration
- Dicebear API pour avatars d'équipe

## 🔧 Configuration Files

```
⚙️ vite.config.ts         - Bundler Vite + alias @/
⚙️ tsconfig.json          - TypeScript strict mode
⚙️ tailwind.config.js     - Couleurs electric + dark
⚙️ postcss.config.js      - Autoprefixer
⚙️ .eslintrc.cjs          - Linting rules
⚙️ package.json           - Scripts & dependencies
```

## 📦 Build Output

### Production Build (`npm run build`)
```
dist/
├── assets/
│   ├── index-[hash].js      # Bundle JavaScript
│   ├── index-[hash].css     # Bundle CSS
│   └── [images]-[hash].*    # Assets optimisés
└── index.html               # HTML avec assets injectés
```

### Build Stats (approximatif)
- **JS Bundle** : ~150KB (gzipped)
- **CSS Bundle** : ~15KB (gzipped)
- **Total** : ~165KB (très optimisé!)

## 🚀 Scripts Disponibles

```bash
npm run dev       # Serveur développement (http://localhost:5173)
npm run build     # Build production dans dist/
npm run preview   # Prévisualiser le build
npm run lint      # Vérifier le code
```

## 📝 Conventions de Nommage

### Fichiers
- **Composants** : PascalCase.tsx (Button.tsx)
- **Config** : kebab-case.js (vite.config.ts)
- **Styles** : kebab-case.css (index.css)

### Code
- **Composants** : PascalCase (Button, Card)
- **Props/Variables** : camelCase (darkMode, toggleDarkMode)
- **Constants** : UPPER_SNAKE_CASE (si nécessaire)
- **Types/Interfaces** : PascalCase (ButtonProps)

## 🎨 Palette de Couleurs

```
Electric Blue      #0070f3     rgb(0, 112, 243)
Dark Background    #0a0a0a     rgb(10, 10, 10)
Dark Surface       #141414     rgb(20, 20, 20)
White              #ffffff     rgb(255, 255, 255)
Gray               #6b7280     rgb(107, 114, 128)
```

## 📱 Responsive Breakpoints

```
sm:  640px   - Small devices (phones)
md:  768px   - Medium devices (tablets)
lg:  1024px  - Large devices (laptops)
xl:  1280px  - Extra large (desktops)
2xl: 1536px  - 2X Extra large (large screens)
```

---

**Note:** Cette arborescence représente la structure complète du projet iTech-Company.
Tous les fichiers sont optimisés pour la production et suivent les meilleures pratiques React/TypeScript.

**Dernière mise à jour:** Décembre 2024
