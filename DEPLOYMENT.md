# Guide de Déploiement - iTech-Company

## 🚀 Options de Déploiement

Ce guide vous présente plusieurs options pour déployer votre site iTech-Company en production.

---

## Option 1 : Vercel (Recommandé) ⭐

Vercel est la plateforme de déploiement créée par l'équipe de Next.js, parfaite pour les applications React.

### Avantages
- Déploiement instantané
- HTTPS automatique
- CDN global
- Preview deployments pour chaque commit
- Domaine gratuit (.vercel.app)

### Étapes

#### Via Dashboard Web (Plus Simple)
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Configuration automatique détectée
5. Cliquez sur "Deploy"

#### Via CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour production
vercel --prod
```

### Configuration Build (automatique)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "framework": "vite"
}
```

---

## Option 2 : Netlify

Netlify est une excellente alternative à Vercel avec des fonctionnalités similaires.

### Avantages
- Déploiement continu depuis Git
- HTTPS gratuit
- Formulaires backend (utile pour le contact)
- CDN global
- Domaine gratuit (.netlify.app)

### Étapes

#### Via Dashboard Web
1. Allez sur [netlify.com](https://netlify.com)
2. "New site from Git"
3. Connectez votre repository
4. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy site

#### Via CLI
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy

# Production
netlify deploy --prod
```

### Configuration netlify.toml (optionnel)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Option 3 : GitHub Pages

GitHub Pages est gratuit et parfait pour les sites statiques.

### Avantages
- 100% gratuit
- Intégration GitHub
- HTTPS inclus
- Domaine personnalisé possible

### Étapes

1. Installer gh-pages
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://[username].github.io/itech-company"
}
```

3. Modifier vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/itech-company/', // Nom de votre repo
})
```

4. Déployer
```bash
npm run deploy
```

5. Activer dans Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages

---

## Option 4 : Firebase Hosting

Firebase Hosting offre un CDN rapide et une intégration avec les services Google.

### Avantages
- CDN ultra rapide
- HTTPS gratuit
- Intégration Firebase (auth, database, etc.)
- Rollbacks faciles

### Étapes

1. Installer Firebase CLI
```bash
npm install -g firebase-tools
```

2. Login et init
```bash
firebase login
firebase init hosting
```

3. Configuration
```
? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
```

4. Build et déployer
```bash
npm run build
firebase deploy
```

---

## Option 5 : Cloudflare Pages

Cloudflare Pages offre une performance excellente avec CDN global.

### Avantages
- CDN Cloudflare (ultra rapide)
- Déploiements illimités
- HTTPS automatique
- Analytics inclus

### Étapes

1. Allez sur [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connectez votre repository Git
3. Configuration :
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and Deploy

---

## Option 6 : Render

Render est une plateforme moderne avec tier gratuit.

### Avantages
- Tier gratuit généreux
- HTTPS automatique
- Déploiement continu
- Facile à configurer

### Étapes

1. Créez compte sur [render.com](https://render.com)
2. New Static Site
3. Connectez votre repository
4. Configuration :
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Create Static Site

---

## 🌐 Configuration de Domaine Personnalisé

### Pour tous les providers

1. Achetez un domaine (Namecheap, GoDaddy, OVH, etc.)

2. Configurez DNS :
   - Type A : Pointez vers l'IP du provider
   - Type CNAME : `www` → votre-site.vercel.app

3. Dans votre provider (Vercel/Netlify/etc) :
   - Settings → Domains
   - Add custom domain
   - Suivez les instructions

### Exemple de configuration DNS
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     your-site.vercel.app
```

---

## 🔧 Variables d'Environnement

Si vous avez besoin de variables d'environnement (API keys, etc.)

### Fichier .env.local (local development)
```bash
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

### Dans Vercel/Netlify
1. Project Settings → Environment Variables
2. Ajoutez vos variables
3. Redéployez

### Dans le code
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📊 Optimisations Pré-Déploiement

### 1. Vérifier le Build
```bash
npm run build
npm run preview
```

### 2. Analyser le Bundle
```bash
npm run build -- --mode production
```

### 3. Tester la Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 4. Vérifier l'Accessibilité
- [WAVE](https://wave.webaim.org/)
- Lighthouse dans Chrome DevTools

### 5. Tester le SEO
- [Google Search Console](https://search.google.com/search-console)
- Lighthouse SEO audit

---

## 🎯 Checklist Pré-Déploiement

- [ ] Build sans erreurs (`npm run build`)
- [ ] Tests manuels sur desktop
- [ ] Tests manuels sur mobile
- [ ] Vérification dark mode
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact testé
- [ ] Images optimisées
- [ ] Meta tags configurés
- [ ] Favicon présent
- [ ] Google Analytics (optionnel)
- [ ] Domaine personnalisé configuré (optionnel)

---

## 📈 Post-Déploiement

### Analytics

#### Google Analytics
```html
<!-- Dans index.html avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// Dans main.tsx
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

### Monitoring

- **Uptime Robot** - Monitoring gratuit
- **Sentry** - Error tracking
- **LogRocket** - Session replay

---

## 🔄 Déploiement Continu (CI/CD)

### GitHub Actions (exemple)

Créez `.github/workflows/deploy.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🆘 Troubleshooting

### Problème : 404 sur les routes
**Solution** : Configurez redirects pour SPA

Vercel - `vercel.json` :
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Problème : Build fails
**Solution** :
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problème : Images ne chargent pas
**Solution** : Vérifiez les chemins (utiliser chemins relatifs ou CDN)

---

## 💰 Coûts

| Provider | Tier Gratuit | Limite |
|----------|--------------|---------|
| Vercel | Oui | 100GB bandwidth/mois |
| Netlify | Oui | 100GB bandwidth/mois |
| GitHub Pages | Oui | 100GB bandwidth/mois |
| Firebase | Oui | 10GB storage, 360MB/day |
| Cloudflare | Oui | 500 builds/mois |
| Render | Oui | 100GB bandwidth/mois |

**Tous largement suffisants pour un site vitrine !**

---

## 🎉 Conclusion

Pour iTech-Company, nous recommandons **Vercel** pour :
- Setup en 2 minutes
- Performance exceptionnelle
- Preview deployments
- Interface intuitive
- Gratuit pour toujours

### Commande rapide
```bash
npm install -g vercel
vercel login
vercel
```

**C'est tout ! Votre site est en ligne ! 🚀**

---

## 📞 Support

Si vous avez des questions :
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Vite : [vitejs.dev](https://vitejs.dev)
- Issues GitHub : Créez une issue dans votre repo

**Bon déploiement ! 🎊**
