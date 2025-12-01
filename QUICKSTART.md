# 🚀 QuickStart - iTech-Company

Guide rapide pour démarrer avec le projet en 5 minutes.

---

## ⚡ Installation Express

```bash
# 1. Cloner le projet (ou télécharger le ZIP)
git clone https://github.com/votre-username/itech-company.git
cd itech-company

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

**C'est tout !** Ouvrez [http://localhost:5173](http://localhost:5173)

---

## 📁 Fichiers Importants

```
itech-company/
├── src/
│   ├── pages/           ← Toutes les pages du site
│   ├── components/      ← Composants réutilisables
│   ├── App.tsx          ← Router principal
│   └── index.css        ← Styles Tailwind
├── public/              ← Fichiers statiques
├── README.md            ← Documentation complète
└── package.json         ← Dépendances
```

---

## 🎨 Personnalisation Rapide

### 1. Modifier les Couleurs

**Fichier** : `tailwind.config.js`

```javascript
electric: {
  500: '#0070f3', // ← Changez cette couleur
}
```

### 2. Modifier le Logo et Nom

**Fichier** : `src/components/layout/Navbar.tsx`

```tsx
<span className="text-gradient">iTech</span>
<span>-Company</span>
// ← Changez le texte ici
```

### 3. Modifier les Informations de Contact

**Fichier** : `src/components/layout/Footer.tsx` et `src/pages/Contact.tsx`

Cherchez et remplacez :
- Téléphone : `+33 1 23 45 67 89`
- Email : `contact@itech-company.com`
- Adresse : `123 Avenue des Champs-Élysées...`

### 4. Modifier les Services

**Fichier** : `src/pages/Home.tsx` (ligne ~25)

```tsx
const services = [
  {
    icon: Code,
    title: 'Votre Service',
    description: 'Votre description',
  },
  // ...
]
```

### 5. Modifier les Projets

**Fichier** : `src/pages/Portfolio.tsx` (ligne ~9)

```tsx
export const projects = [
  {
    id: 1,
    title: 'Votre Projet',
    description: 'Description',
    image: 'URL_IMAGE',
    stack: ['Tech1', 'Tech2'],
    // ...
  },
]
```

---

## 🎯 Actions Rapides

### Ajouter une Nouvelle Page

1. Créer `src/pages/MaPage.tsx`
```tsx
const MaPage = () => {
  return <div>Ma nouvelle page</div>
}
export default MaPage
```

2. Ajouter la route dans `src/App.tsx`
```tsx
import MaPage from './pages/MaPage'

// Dans <Routes>
<Route path="/ma-page" element={<MaPage />} />
```

3. Ajouter au menu dans `src/components/layout/Navbar.tsx`
```tsx
const navigation = [
  // ...
  { name: 'Ma Page', path: '/ma-page' },
]
```

### Ajouter un Nouveau Composant

1. Créer `src/components/ui/MonComposant.tsx`
```tsx
const MonComposant = () => {
  return <div>Mon composant</div>
}
export default MonComposant
```

2. L'utiliser dans une page
```tsx
import MonComposant from '../components/ui/MonComposant'

<MonComposant />
```

---

## 🎨 Utiliser les Composants Existants

### Button

```tsx
import Button from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'

// Variantes
<Button variant="primary">Primaire</Button>
<Button variant="secondary">Secondaire</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Avec icône
<Button icon={ArrowRight}>Avec icône</Button>
<Button icon={ArrowRight} iconPosition="left">Icône à gauche</Button>

// Tailles
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>
```

### Card

```tsx
import Card from '../components/ui/Card'

// Simple
<Card>Contenu de la card</Card>

// Avec effet de verre
<Card glass>Effet glassmorphism</Card>

// Sans hover
<Card hover={false}>Sans effet hover</Card>
```

### SectionWrapper

```tsx
import SectionWrapper from '../components/ui/SectionWrapper'

// Backgrounds
<SectionWrapper background="white">Fond blanc</SectionWrapper>
<SectionWrapper background="gray">Fond gris</SectionWrapper>
<SectionWrapper background="dark">Fond sombre</SectionWrapper>

// Avec ID pour ancres
<SectionWrapper id="ma-section">Contenu</SectionWrapper>
```

---

## 🌓 Dark Mode

Le dark mode est activé par défaut et détecte les préférences système.

Pour le personnaliser, modifiez `src/App.tsx` :

```tsx
// Forcer le mode clair par défaut
const [darkMode, setDarkMode] = useState(false)

// Forcer le mode sombre par défaut
const [darkMode, setDarkMode] = useState(true)
```

---

## 🎨 Classes Tailwind Utiles

```tsx
// Gradient de texte
<h1 className="text-gradient">Titre avec gradient</h1>

// Effet de verre
<div className="glass">Contenu avec glassmorphism</div>

// Container personnalisé
<div className="container-custom">Contenu centré</div>

// Animations
<div className="animate-fade-in">Apparition en fondu</div>
<div className="animate-slide-up">Glissement vers le haut</div>
<div className="animate-float">Flottement continu</div>
```

---

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev              # Démarrer serveur dev (port 5173)

# Build
npm run build            # Créer build production
npm run preview          # Prévisualiser le build

# Code Quality
npm run lint             # Vérifier erreurs ESLint

# Installation
npm install              # Installer dépendances
npm install [package]    # Ajouter nouvelle dépendance
```

---

## 📦 Ajouter des Dépendances

### Icônes supplémentaires
```bash
npm install lucide-react
```

Utilisation :
```tsx
import { Heart, Star, Check } from 'lucide-react'
<Heart className="w-6 h-6" />
```

### Formulaires
```bash
npm install react-hook-form
```

### Animations supplémentaires
```bash
npm install aos
```

---

## 🎯 Prochaines Étapes

1. **Personnaliser le contenu**
   - Remplacer les textes par vos contenus
   - Ajouter vos vrais projets
   - Mettre vos coordonnées

2. **Remplacer les images**
   - Uploader vos propres images
   - Utiliser un service comme Cloudinary ou Imgur

3. **Configurer le formulaire de contact**
   - Intégrer un service backend (EmailJS, Formspree, etc.)
   - Ajouter validation côté serveur

4. **Optimiser pour le SEO**
   - Ajouter Google Analytics
   - Configurer meta tags par page
   - Ajouter sitemap.xml

5. **Déployer**
   - Suivre `DEPLOYMENT.md`
   - Recommandation : Vercel (gratuit + simple)

---

## 🆘 Problèmes Fréquents

### Le serveur ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur TypeScript
```bash
# Recharger TypeScript server dans VS Code
Ctrl+Shift+P > TypeScript: Restart TS Server
```

### Les styles ne s'appliquent pas
Vérifiez que `index.css` est bien importé dans `main.tsx`

### Les images ne chargent pas
- Vérifiez les URLs
- Pour images locales, placez-les dans `/public/`

---

## 📚 Documentation Complète

- `README.md` - Vue d'ensemble et installation
- `PROJECT_STRUCTURE.md` - Architecture détaillée
- `FEATURES.md` - Liste complète des fonctionnalités
- `TREE.md` - Arborescence du projet
- `DEPLOYMENT.md` - Guide de déploiement
- `QUICKSTART.md` - Ce fichier

---

## 💡 Ressources

### Documentation Officielle
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Icônes
- [Lucide Icons](https://lucide.dev/)
- Cherchez des icônes et copiez le nom

### Images Gratuites
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### Inspiration Design
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

---

## 🎉 C'est Parti !

Vous êtes prêt à créer votre site iTech-Company !

### Checklist de Démarrage
- [ ] Projet cloné et dépendances installées
- [ ] Serveur dev lancé (`npm run dev`)
- [ ] Contenu personnalisé (textes, images)
- [ ] Couleurs adaptées à votre marque
- [ ] Coordonnées mises à jour
- [ ] Build testé (`npm run build`)
- [ ] Déployé en production

**Besoin d'aide ?** Consultez la documentation complète ou ouvrez une issue !

**Bon développement ! 🚀**

---

**Made with ❤️ by iTech-Company Team**
