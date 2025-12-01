# Structure du Projet iTech-Company

## 📂 Arborescence Complète

```
itech-company/
│
├── 📁 public/                          # Fichiers statiques publics
│   └── vite.svg                        # Logo Vite
│
├── 📁 src/                             # Code source principal
│   │
│   ├── 📁 components/                  # Composants réutilisables
│   │   │
│   │   ├── 📁 layout/                  # Composants de mise en page
│   │   │   ├── Navbar.tsx              # Barre de navigation avec menu mobile
│   │   │   └── Footer.tsx              # Pied de page avec liens et réseaux sociaux
│   │   │
│   │   └── 📁 ui/                      # Composants d'interface utilisateur
│   │       ├── Button.tsx              # Bouton avec variantes et icônes
│   │       ├── Card.tsx                # Carte avec effets glassmorphism
│   │       ├── SectionWrapper.tsx      # Wrapper de section avec animations
│   │       └── TestimonialSlider.tsx   # Slider de témoignages clients
│   │
│   ├── 📁 pages/                       # Pages de l'application
│   │   ├── Home.tsx                    # Page d'accueil (Hero, Services, Projets, etc.)
│   │   ├── Services.tsx                # Page détaillée des services
│   │   ├── Portfolio.tsx               # Grille de projets avec filtres
│   │   ├── ProjectDetail.tsx           # Page de détail d'un projet
│   │   ├── About.tsx                   # À propos (Histoire, Valeurs, Équipe)
│   │   └── Contact.tsx                 # Formulaire de contact et coordonnées
│   │
│   ├── App.tsx                         # Composant principal avec routing
│   ├── main.tsx                        # Point d'entrée de l'application
│   ├── index.css                       # Styles Tailwind et personnalisés
│   └── vite-env.d.ts                   # Types TypeScript pour Vite
│
├── 📄 index.html                       # Template HTML principal
├── 📄 package.json                     # Dépendances et scripts npm
├── 📄 tsconfig.json                    # Configuration TypeScript
├── 📄 tsconfig.node.json               # Configuration TypeScript pour Node
├── 📄 vite.config.ts                   # Configuration Vite
├── 📄 tailwind.config.js               # Configuration Tailwind CSS
├── 📄 postcss.config.js                # Configuration PostCSS
├── 📄 .eslintrc.cjs                    # Configuration ESLint
├── 📄 .gitignore                       # Fichiers à ignorer par Git
├── 📄 README.md                        # Documentation principale
└── 📄 PROJECT_STRUCTURE.md             # Ce fichier
```

## 📝 Description des Fichiers Principaux

### Configuration

#### `package.json`
- Dépendances du projet (React, TypeScript, Tailwind, etc.)
- Scripts npm (dev, build, preview, lint)
- Métadonnées du projet

#### `vite.config.ts`
- Configuration du bundler Vite
- Alias de chemins (@/)
- Plugins (React)

#### `tsconfig.json`
- Configuration TypeScript principale
- Options de compilation strictes
- Alias de chemins

#### `tailwind.config.js`
- Thème personnalisé (couleurs electric, dark)
- Animations personnalisées
- Extensions de Tailwind

### Source Code

#### `src/main.tsx`
Point d'entrée de l'application React.

#### `src/App.tsx`
- Router principal (React Router)
- Gestion du dark mode
- Layout global (Navbar + Pages + Footer)

#### `src/index.css`
- Imports Tailwind (@tailwind base, components, utilities)
- Styles globaux personnalisés
- Classes utilitaires (glass, text-gradient, etc.)

## 🎨 Composants

### Layout Components

#### `Navbar.tsx`
**Props:**
- `darkMode: boolean` - État du mode sombre
- `toggleDarkMode: () => void` - Fonction pour basculer le mode

**Fonctionnalités:**
- Navigation sticky avec effet au scroll
- Menu mobile responsive
- Indicateur de page active animé
- Toggle dark mode

#### `Footer.tsx`
**Fonctionnalités:**
- Liens organisés par catégories
- Informations de contact
- Réseaux sociaux
- Copyright dynamique

### UI Components

#### `Button.tsx`
**Props:**
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'`
- `size?: 'sm' | 'md' | 'lg'`
- `icon?: LucideIcon`
- `iconPosition?: 'left' | 'right'`
- `href?: string`

**Exemples:**
```tsx
<Button variant="primary" size="lg" icon={ArrowRight}>
  Call to Action
</Button>
```

#### `Card.tsx`
**Props:**
- `className?: string`
- `hover?: boolean`
- `glass?: boolean`
- `onClick?: () => void`

**Exemples:**
```tsx
<Card glass hover>
  Contenu avec effet de verre
</Card>
```

#### `SectionWrapper.tsx`
**Props:**
- `background?: 'white' | 'gray' | 'dark'`
- `id?: string`

**Exemples:**
```tsx
<SectionWrapper background="gray" id="services">
  {children}
</SectionWrapper>
```

#### `TestimonialSlider.tsx`
Slider autonome avec navigation et indicateurs.

## 📄 Pages

### `Home.tsx`
**Sections:**
1. Hero - Grande bannière avec CTA
2. Services - Grille de 6 services
3. Projects - Projets récents (3 cards)
4. Why Us - 3 raisons de nous choisir
5. Testimonials - Slider de témoignages
6. CTA - Appel à l'action final

### `Services.tsx`
**Contenu:**
- Liste détaillée de 6 services
- Features et technologies pour chaque service
- CTA de contact

### `Portfolio.tsx`
**Contenu:**
- Filtres par catégorie
- Grille de projets (6 projets)
- Liens vers les détails

**Données exportées:**
```tsx
export const projects = [...]
```

### `ProjectDetail.tsx`
**Paramètres:**
- `id` (route param)

**Contenu:**
- Image principale
- Informations du projet
- Description détaillée
- Résultats et métriques
- Projets similaires

### `About.tsx`
**Sections:**
1. Histoire de l'agence
2. Mission & Vision
3. Valeurs (4 valeurs)
4. Équipe (6 membres)
5. Timeline (6 jalons)

### `Contact.tsx`
**Fonctionnalités:**
- Formulaire complet avec validation
- Informations de contact
- Carte Google Maps
- Boutons WhatsApp et téléphone

## 🎨 Design System

### Couleurs

```javascript
electric: {
  50: '#e6f1ff',
  500: '#0070f3',  // Principal
  600: '#0058c7',
}

dark: {
  900: '#0a0a0a',  // Fond principal dark
  800: '#141414',
  700: '#1e1e1e',
}
```

### Typographie

- **Body** : Inter (300-900)
- **Headings** : Outfit (300-900)

### Animations

- `animate-fade-in` - Apparition en fondu
- `animate-slide-up` - Glissement vers le haut
- `animate-scale-in` - Zoom d'entrée
- `animate-float` - Flottement continu
- `animate-glow` - Effet de brillance

### Classes Utilitaires

```css
.glass          /* Glassmorphism clair */
.glass-dark     /* Glassmorphism sombre */
.text-gradient  /* Dégradé de texte electric */
.container-custom /* Container avec padding responsive */
```

## 🚀 Scripts NPM

```bash
npm run dev      # Démarrer le serveur de dev (port 5173)
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier le code avec ESLint
```

## 📦 Dépendances Clés

**Production:**
- react ^18.3.1
- react-dom ^18.3.1
- react-router-dom ^6.22.0
- framer-motion ^11.0.5
- lucide-react ^0.344.0

**Développement:**
- @vitejs/plugin-react ^4.3.3
- tailwindcss ^3.4.1
- typescript ^5.6.3
- vite ^5.4.11

## 🎯 Points Clés de l'Architecture

1. **Composants Réutilisables** : UI components modulaires dans `/components/ui/`
2. **Pages Séparées** : Chaque route a sa propre page dans `/pages/`
3. **Type Safety** : TypeScript strict pour tous les composants
4. **Responsive First** : Mobile-first avec Tailwind breakpoints
5. **Performance** : Lazy loading, code splitting, animations optimisées
6. **Accessibilité** : ARIA labels, navigation clavier, contraste WCAG
7. **SEO Ready** : Meta tags, structure sémantique, SSR-ready

## 📚 Convention de Code

- **Composants** : PascalCase (Button.tsx)
- **Fichiers** : PascalCase pour composants, camelCase pour utilitaires
- **Props** : Interfaces TypeScript explicites
- **Styles** : Tailwind classes, pas de CSS inline
- **Imports** : Ordre : React → Libraries → Components → Types

---

**Version:** 1.0.0
**Dernière mise à jour:** Décembre 2024
