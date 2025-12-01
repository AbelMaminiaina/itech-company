# iTech-Company - Site Vitrine Premium

Un site vitrine moderne, professionnel et ultra performant pour l'agence web iTech-Company, développé avec React, TypeScript, Vite et Tailwind CSS.

![iTech-Company](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop)

## 🎨 Design & Direction Artistique

- **Style** : Neo-brutalism léger + Glassmorphism
- **Palette** : Bleu électrique (#0070f3), Noir, Blanc, Gris anthracite
- **Typographie** : Inter (body) + Outfit (headings)
- **Animations** : Framer Motion avec micro-interactions
- **Layout** : Sections horizontales larges et aérées

## 🚀 Stack Technique

- **Framework** : React 18
- **Language** : TypeScript
- **Build Tool** : Vite
- **Styling** : Tailwind CSS
- **Routing** : React Router v6
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Fonts** : Inter + Outfit (Google Fonts)

## 📁 Structure du Projet

```
itech-company/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionWrapper.tsx
│   │       └── TestimonialSlider.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## 📄 Pages

### 🏠 Home
- Hero section premium avec animations
- Section Services (6 services avec icônes animées)
- Section Projets récents (grid avec hover effects)
- Section "Pourquoi nous ?" (3 arguments clés)
- Témoignages clients (slider interactif)
- Call-to-Action final

### 💼 Services
- Vue détaillée de tous les services
- Features et technologies pour chaque service
- Présentation en cards avec informations complètes

### 🎨 Portfolio
- Grille de projets avec filtres
- Cards projets avec hover effects
- Navigation vers les pages de détail

### 📖 Project Detail
- Page détaillée pour chaque projet
- Informations complètes (client, année, stack)
- Résultats et métriques
- Projets similaires

### 👥 About
- Histoire de l'agence
- Mission & Vision
- Valeurs de l'entreprise
- Équipe avec avatars animés
- Timeline des jalons

### 📧 Contact
- Formulaire de contact complet
- Validation des champs
- Informations de contact (téléphone, email, adresse)
- Carte Google Maps intégrée
- Boutons WhatsApp et téléphone

## 🎯 Fonctionnalités

### ✅ Composants Réutilisables
- **Button** : 4 variantes (primary, secondary, outline, ghost) + support icônes
- **Card** : Effets glassmorphism et hover
- **SectionWrapper** : Animations scroll + backgrounds personnalisables
- **TestimonialSlider** : Slider de témoignages avec navigation

### 🎭 Animations
- Animations d'entrée sur scroll (Framer Motion)
- Micro-interactions sur hover
- Transitions fluides entre les pages
- Effets parallax subtils
- Animations de boutons et cartes

### 🌓 Dark Mode
- Mode sombre activé par défaut
- Détection des préférences système
- Toggle manuel dans la navbar
- Transitions fluides

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu burger pour mobile
- Grilles adaptatives

### ⚡ Performance
- Lazy loading des images
- Code splitting automatique (Vite)
- Optimisation des animations
- Bundle size optimisé

### ♿ Accessibilité
- Labels ARIA sur tous les éléments interactifs
- Navigation au clavier
- Contraste des couleurs conforme WCAG
- Focus visible sur tous les éléments

### 🔍 SEO
- Meta tags optimisés
- Open Graph tags
- Twitter Card tags
- Structure sémantique HTML5
- Titles et descriptions uniques

## 🛠️ Installation & Lancement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/itech-company.git

# Accéder au dossier
cd itech-company

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173
```

### Build Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

### Linting

```bash
# Vérifier le code
npm run lint
```

## 🎨 Personnalisation

### Couleurs (tailwind.config.js)
```javascript
colors: {
  electric: {
    500: '#0070f3', // Couleur principale
    // ... autres nuances
  }
}
```

### Polices (index.html)
Les polices Google Fonts sont déjà configurées :
- Inter : Texte body
- Outfit : Titres et headings

### Animations (tailwind.config.js)
Animations personnalisées disponibles :
- `animate-fade-in`
- `animate-slide-up`
- `animate-scale-in`
- `animate-float`
- `animate-glow`

## 📦 Dépendances Principales

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.0",
  "framer-motion": "^11.0.5",
  "lucide-react": "^0.344.0",
  "tailwindcss": "^3.4.1"
}
```

## 🌟 Fonctionnalités Avancées

### Glassmorphism
Utilisez la classe utilitaire `glass` pour des effets de verre :
```tsx
<div className="glass">Contenu</div>
```

### Text Gradient
Pour des titres avec gradient :
```tsx
<h1>Texte <span className="text-gradient">coloré</span></h1>
```

### Section Wrapper
Composant pour créer des sections cohérentes :
```tsx
<SectionWrapper background="gray" id="section-id">
  {/* Contenu */}
</SectionWrapper>
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier dist/
```

### GitHub Pages
```bash
npm run build
# Configurer gh-pages
```

## 📱 Compatibilité Navigateurs

- Chrome (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Edge (dernières 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**iTech-Company Team**
- Website: [itech-company.com](https://itech-company.com)
- Email: contact@itech-company.com
- Phone: +33 1 23 45 67 89

## 🙏 Remerciements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) pour les images

---

⭐ Si ce projet vous a aidé, n'oubliez pas de lui donner une étoile !

**Made with ❤️ by iTech-Company**
