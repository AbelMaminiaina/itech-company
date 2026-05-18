# Guide de Création des Visuels

## Dimensions par Plateforme

### Facebook
| Format | Dimensions | Usage |
|--------|------------|-------|
| Post image | 1200x630px | Posts classiques |
| Post carré | 1080x1080px | Carrousels, engagement |
| Story | 1080x1920px | Stories |
| Cover | 820x312px | Couverture page |
| Vidéo | 1280x720px | Vidéos feed |

### LinkedIn
| Format | Dimensions | Usage |
|--------|------------|-------|
| Post image | 1200x627px | Posts classiques |
| Post carré | 1080x1080px | Carrousels |
| Article cover | 1280x720px | Articles |
| Banner | 1584x396px | Bannière page |

### TikTok
| Format | Dimensions | Usage |
|--------|------------|-------|
| Vidéo | 1080x1920px (9:16) | Toutes vidéos |
| Thumbnail | 1080x1920px | Cover vidéo |

---

## Charte Graphique iTech-Company

### Couleurs
```css
/* Couleurs principales */
--electric-500: #0070f3;    /* Bleu principal */
--purple-600: #7c3aed;      /* Violet accent */
--dark-900: #0a0a0a;        /* Fond sombre */

/* Dégradé signature */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Texte */
--text-white: #ffffff;
--text-gray: #9ca3af;
```

### Typographies
```
Titres: Poppins (Bold, 700)
Corps: Inter (Regular, 400)
Accent: Outfit (SemiBold, 600)
```

### Logo
- Logo principal: `/public/logo-512.png`
- Logo petit: `/public/logo-192.png`
- Favicon: `/public/logo-32.png`

---

## Templates Canva à Créer

### 1. Template Post Facebook/LinkedIn
- Fond: Dégradé violet/bleu
- Logo en haut à gauche
- Zone de texte centrale
- CTA en bas
- Dimensions: 1080x1080px

### 2. Template Carrousel
- Page 1: Titre accrocheur
- Pages 2-5: Contenu (1 point par page)
- Page finale: CTA + logo
- Dimensions: 1080x1080px

### 3. Template Citation/Témoignage
- Guillemets décoratifs
- Photo/avatar client
- Étoiles notation
- Fond sobre
- Dimensions: 1080x1080px

### 4. Template Infographie
- Titre en haut
- Points numérotés
- Icônes pour chaque point
- Logo en bas
- Dimensions: 1080x1350px (portrait)

### 5. Template Story/TikTok
- Format vertical
- Texte gros et lisible
- Animation suggérée
- Logo discret
- Dimensions: 1080x1920px

---

## Liste des Visuels à Créer (30 jours)

### Semaine 1
| Jour | Type | Description |
|------|------|-------------|
| 1 | Vidéo | Présentation (60s) |
| 2 | Carrousel 5 | 5 services |
| 3 | Photo | Équipe |
| 4 | Image | Témoignage #1 |
| 5 | Infographie | Pourquoi nous choisir |
| 6 | Carrousel 6 | Tendances tech |
| 7 | Image | Récap semaine |

### Semaine 2
| Jour | Type | Description |
|------|------|-------------|
| 8 | Carrousel 5 | Portfolio web |
| 9 | Vidéo/Carrousel | Apps mobiles |
| 10 | Carrousel 4 | Avant/Après design |
| 11 | Infographie | DevOps process |
| 12 | Carrousel 5 | IA cas d'usage |
| 13 | Carrousel | Success story |
| 14 | Image | Récap + Live |

### Semaine 3
| Jour | Type | Description |
|------|------|-------------|
| 15 | Carrousel 6 | Erreurs site web |
| 16 | Infographie | Guide SEO |
| 17 | Vidéo/Carrousel | Choisir agence |
| 18 | Image | Témoignage #2 |
| 19 | Carrousel 5 | Sécurité web |
| 20 | Photo/Vidéo | Behind the scenes |
| 21 | Image | Sondage |

### Semaine 4
| Jour | Type | Description |
|------|------|-------------|
| 22 | Image | Offre promo |
| 23 | Infographie | Stack technique |
| 24 | Carrousel 6 | Portfolio projets |
| 25 | Vidéo | Témoignage #3 |
| 26 | Carrousel 6 | FAQ |
| 27 | Vidéo | Best of |
| 28 | Image | Vision |
| 29 | Image | Communauté |
| 30 | Vidéo/Image | Remerciements |

---

## Outils Recommandés

### Création graphique
| Outil | Usage | Prix |
|-------|-------|------|
| Canva Pro | Templates, visuels | 12€/mois |
| Figma | Design pro | Gratuit |
| Adobe Express | Alternative Canva | Gratuit limité |

### Création vidéo
| Outil | Usage | Prix |
|-------|-------|------|
| CapCut | Montage TikTok | Gratuit |
| InShot | Montage mobile | Gratuit |
| DaVinci Resolve | Montage pro | Gratuit |
| Adobe Premiere | Montage avancé | 24€/mois |

### Stock médias
| Source | Type | Prix |
|--------|------|------|
| Unsplash | Photos | Gratuit |
| Pexels | Photos/Vidéos | Gratuit |
| Pixabay | Tout | Gratuit |
| Envato Elements | Premium | 16€/mois |

### Icônes
| Source | Prix |
|--------|------|
| Lucide Icons | Gratuit |
| Heroicons | Gratuit |
| Flaticon | Gratuit limité |

---

## Checklist Qualité Visuel

### Avant publication:
- [ ] Dimensions correctes pour la plateforme
- [ ] Logo visible mais pas envahissant
- [ ] Texte lisible (taille min 24px)
- [ ] Contraste suffisant
- [ ] Pas de fautes d'orthographe
- [ ] Couleurs de marque respectées
- [ ] Fichier optimisé (< 5MB images, < 500MB vidéos)

### Pour les vidéos:
- [ ] Sous-titres ajoutés
- [ ] 3 premières secondes captivantes
- [ ] Audio clair et audible
- [ ] Pas de barres noires
- [ ] Call-to-action visible

---

## Organisation des Fichiers

```
marketing/
└── social-media/
    └── assets/
        ├── templates/
        │   ├── template-post-carre.psd
        │   ├── template-carrousel.psd
        │   ├── template-story.psd
        │   └── template-infographie.psd
        ├── semaine-1/
        │   ├── jour1-video-presentation.mp4
        │   ├── jour2-carrousel-services/
        │   │   ├── slide-1.png
        │   │   ├── slide-2.png
        │   │   └── ...
        │   └── ...
        ├── semaine-2/
        ├── semaine-3/
        ├── semaine-4/
        └── exports/
            ├── facebook/
            ├── linkedin/
            └── tiktok/
```

---

## Ressources Canva (Templates prêts)

Recherchez ces templates sur Canva:
- "Agency social media post"
- "Tech company carousel"
- "Testimonial quote"
- "Infographic modern"
- "TikTok video template"

Personnalisez avec les couleurs iTech (#0070f3, #7c3aed)
