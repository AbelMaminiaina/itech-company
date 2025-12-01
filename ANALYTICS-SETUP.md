# Guide de Configuration Analytics et SEO

Ce guide vous aidera à configurer Google Analytics 4, Google Search Console et soumettre votre sitemap pour améliorer le référencement et suivre les performances de votre site iTech-Company.

---

## 📊 1. Configuration Google Analytics 4 (GA4)

### Étape 1.1 : Créer un compte Google Analytics

1. Allez sur https://analytics.google.com/
2. Cliquez sur **"Commencer à mesurer"**
3. Remplissez les informations :
   - **Nom du compte** : iTech-Company
   - **Nom de la propriété** : iTech-Company Website
   - **Fuseau horaire** : (UTC+03:00) Antananarivo / (UTC+01:00) Paris
   - **Devise** : EUR ou MGA
4. Acceptez les conditions d'utilisation

### Étape 1.2 : Configurer le flux de données

1. Sélectionnez **"Web"** comme plateforme
2. Entrez l'URL du site : `https://itech-company.com`
3. Donnez un nom au flux : **"Site Web iTech-Company"**
4. Cliquez sur **"Créer un flux"**

### Étape 1.3 : Récupérer l'ID de mesure

Après la création, vous obtiendrez un **ID de mesure** au format : `G-XXXXXXXXXX`

### Étape 1.4 : Installer GA4 dans votre site

1. Installez le package nécessaire :

```bash
npm install react-ga4
```

2. Créez le fichier de configuration Analytics :

**src/utils/analytics.ts**
```typescript
import ReactGA from 'react-ga4'

// Remplacez par votre véritable ID de mesure GA4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gaOptions: {
      anonymizeIp: true, // Anonymiser les IP pour RGPD
    },
  })
}

export const logPageView = (path: string, title: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title,
  })
}

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}

// Événements personnalisés
export const trackContactFormSubmit = () => {
  logEvent('Contact', 'Form Submit', 'Contact Form')
}

export const trackProjectView = (projectId: string) => {
  logEvent('Portfolio', 'View Project', projectId)
}

export const trackServiceView = (serviceName: string) => {
  logEvent('Services', 'View Service', serviceName)
}

export const trackJobApplication = (jobTitle: string) => {
  logEvent('Recrutement', 'Apply', jobTitle)
}

export const trackDownload = (fileName: string) => {
  logEvent('Download', 'Click', fileName)
}
```

3. Mettez à jour **src/App.tsx** pour initialiser GA4 :

```typescript
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { initGA, logPageView } from './utils/analytics'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// ... autres imports

function AppContent() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Initialiser Google Analytics
    initGA()
  }, [])

  useEffect(() => {
    // Tracker chaque changement de page
    logPageView(location.pathname, document.title)
  }, [location])

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Routes>
          {/* ... vos routes ... */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
```

4. Ajoutez le tracking sur le formulaire de contact (**src/pages/Contact.tsx**) :

```typescript
import { trackContactFormSubmit } from '../utils/analytics'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  // Tracker l'envoi du formulaire
  trackContactFormSubmit()

  setTimeout(() => {
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }, 2000)
}
```

---

## 🔍 2. Configuration Google Search Console

### Étape 2.1 : Ajouter votre site

1. Allez sur https://search.google.com/search-console
2. Cliquez sur **"Ajouter une propriété"**
3. Choisissez le type de propriété :
   - **Préfixe d'URL** : `https://itech-company.com`
4. Cliquez sur **"Continuer"**

### Étape 2.2 : Vérifier la propriété

**Méthode recommandée : Balise HTML**

1. Copiez la balise meta fournie par Google
2. Ajoutez-la dans votre **index.html** :

```html
<head>
  <!-- ... autres balises ... -->

  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="VOTRE_CODE_DE_VERIFICATION" />
</head>
```

3. Déployez votre site avec cette modification
4. Retournez dans Search Console et cliquez sur **"Vérifier"**

**Alternative : Fichier HTML**

1. Téléchargez le fichier HTML fourni par Google
2. Placez-le dans le dossier `public/`
3. Déployez et vérifiez

### Étape 2.3 : Soumettre le sitemap

1. Dans Google Search Console, allez dans **"Sitemaps"** (menu de gauche)
2. Ajoutez l'URL de votre sitemap : `https://itech-company.com/sitemap.xml`
3. Cliquez sur **"Envoyer"**

**Note** : Il peut falloir quelques jours pour que Google commence à explorer votre site.

### Étape 2.4 : Vérifier l'indexation

1. Allez dans **"Inspection d'URL"**
2. Testez vos principales pages :
   - `https://itech-company.com/`
   - `https://itech-company.com/services`
   - `https://itech-company.com/portfolio`
   - etc.
3. Pour chaque page, cliquez sur **"Demander une indexation"**

---

## 🗺️ 3. Soumettre le sitemap à d'autres moteurs

### Bing Webmaster Tools

1. Allez sur https://www.bing.com/webmasters
2. Ajoutez votre site
3. Vérifiez la propriété (similaire à Google)
4. Soumettez le sitemap : `https://itech-company.com/sitemap.xml`

### Yandex Webmaster

1. Allez sur https://webmaster.yandex.com/
2. Ajoutez votre site
3. Soumettez le sitemap

---

## 📈 4. Configurer les événements personnalisés

Les événements suivants sont déjà configurés dans le code :

### Événements de formulaire
```typescript
// Quand un utilisateur soumet le formulaire de contact
trackContactFormSubmit()
```

### Événements de portfolio
```typescript
// Quand un utilisateur consulte un projet
trackProjectView('1') // ID du projet
```

### Événements de services
```typescript
// Quand un utilisateur consulte un service
trackServiceView('Développement Web')
```

### Événements de recrutement
```typescript
// Quand un utilisateur postule à une offre
trackJobApplication('Développeur Odoo')
```

### Événements de téléchargement
```typescript
// Quand un utilisateur télécharge un fichier
trackDownload('brochure.pdf')
```

---

## 🎯 5. Objectifs à configurer dans GA4

### Objectif 1 : Soumission du formulaire de contact
- **Type** : Événement
- **Nom** : contact_form_submit
- **Valeur** : 10 (valeur symbolique)

### Objectif 2 : Consultation de 3+ pages
- **Type** : Engagement
- **Condition** : Nombre de pages vues >= 3

### Objectif 3 : Temps sur le site > 2 minutes
- **Type** : Engagement
- **Condition** : Temps d'engagement >= 120 secondes

### Objectif 4 : Consultation du portfolio
- **Type** : Événement
- **Nom** : view_project

### Objectif 5 : Candidature à une offre
- **Type** : Événement
- **Nom** : job_application

---

## 📊 6. Rapports importants à surveiller

### Dans Google Analytics 4 :

1. **Rapports en temps réel**
   - Utilisateurs actifs
   - Pages consultées
   - Sources de trafic

2. **Acquisition**
   - Sources de trafic (Organique, Direct, Référents)
   - Canaux d'acquisition
   - Campagnes

3. **Engagement**
   - Pages et écrans
   - Événements
   - Conversions

4. **Données démographiques**
   - Pays
   - Villes
   - Langue
   - Appareil (Desktop, Mobile, Tablet)

### Dans Google Search Console :

1. **Performances**
   - Impressions
   - Clics
   - CTR moyen
   - Position moyenne

2. **Couverture**
   - Pages indexées
   - Pages exclues
   - Erreurs d'exploration

3. **Expérience**
   - Core Web Vitals
   - Ergonomie mobile
   - HTTPS

4. **Améliorations**
   - Données structurées
   - Fil d'Ariane
   - Logo

---

## ✅ Checklist de vérification

### Configuration initiale
- [ ] Google Analytics 4 installé et fonctionnel
- [ ] Google Search Console vérifié
- [ ] Sitemap soumis à Google
- [ ] Sitemap soumis à Bing
- [ ] Meta tag de vérification ajouté dans index.html

### Tracking des événements
- [ ] Page views trackés automatiquement
- [ ] Formulaire de contact tracké
- [ ] Vues de projets trackées
- [ ] Vues de services trackées
- [ ] Candidatures trackées

### Optimisation
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Données structurées Schema.org présentes
- [ ] Open Graph configuré
- [ ] Twitter Cards configurées

### Monitoring
- [ ] Vérifier les rapports GA4 chaque semaine
- [ ] Vérifier Search Console pour les erreurs
- [ ] Surveiller les Core Web Vitals
- [ ] Analyser les mots-clés performants

---

## 🔧 Commandes utiles

### Tester le sitemap localement
```bash
# Vérifier que le fichier est accessible
curl http://localhost:5174/sitemap.xml
```

### Vérifier robots.txt
```bash
curl http://localhost:5174/robots.txt
```

### Build de production
```bash
npm run build
npm run preview
```

---

## 📝 Notes importantes

1. **Délai d'indexation** : Google peut prendre de quelques heures à plusieurs jours pour indexer votre site
2. **Mises à jour du sitemap** : Mettez à jour les dates dans sitemap.xml quand vous modifiez du contenu
3. **RGPD** : L'anonymisation des IP est activée par défaut dans la configuration GA4
4. **Cookies** : Pensez à ajouter un bandeau de consentement aux cookies si vous ciblez l'Europe

---

## 🆘 Dépannage

### Analytics ne track pas
- Vérifiez que l'ID de mesure est correct dans `analytics.ts`
- Ouvrez la console du navigateur pour voir les erreurs
- Utilisez l'extension Chrome "Google Analytics Debugger"

### Sitemap non trouvé
- Vérifiez que `sitemap.xml` est dans le dossier `public/`
- Vérifiez que le fichier est déployé en production
- Testez l'URL : `https://itech-company.com/sitemap.xml`

### Pages non indexées
- Vérifiez robots.txt (ne doit pas bloquer Googlebot)
- Vérifiez qu'il n'y a pas de balise `noindex`
- Demandez une indexation manuelle dans Search Console

---

## 📚 Ressources utiles

- [Documentation GA4](https://support.google.com/analytics/answer/10089681)
- [Guide Search Console](https://support.google.com/webmasters/answer/9128668)
- [Schema.org Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

**Dernière mise à jour** : Décembre 2025
**Auteur** : iTech-Company
