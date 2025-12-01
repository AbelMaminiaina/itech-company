# Configuration Google Search Console

## 📋 Vue d'ensemble

Google Search Console est un outil essentiel pour :
- Suivre les performances de votre site dans les résultats de recherche Google
- Soumettre votre sitemap pour une indexation rapide
- Identifier et corriger les erreurs d'exploration
- Surveiller les Core Web Vitals
- Voir quels mots-clés génèrent du trafic

## 🚀 Étape 1 : Ajouter votre propriété

1. Allez sur https://search.google.com/search-console

2. Cliquez sur **"Ajouter une propriété"**

3. Choisissez le type **"Préfixe d'URL"** :
   ```
   https://itech-company.com
   ```

4. Cliquez sur **"Continuer"**

## ✅ Étape 2 : Vérifier votre propriété

### Méthode recommandée : Balise HTML meta

1. **Copiez la balise meta** fournie par Google Search Console
   - Elle ressemble à : `<meta name="google-site-verification" content="VOTRE_CODE_ICI" />`

2. **Ajoutez-la dans votre index.html** :

Ouvrez `index.html` et ajoutez la balise dans la section `<head>` après les autres balises meta :

```html
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VE6GB3ZXD6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VE6GB3ZXD6');
  </script>

  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0070f3" />

  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="VOTRE_CODE_ICI" />

  <!-- SEO Meta Tags -->
  <!-- ... reste des balises ... -->
</head>
```

3. **Buildez et déployez** :
```bash
npm run build
# Déployez le dossier dist/ sur votre serveur
```

4. **Retournez dans Search Console** et cliquez sur **"Vérifier"**

### Méthode alternative : Fichier HTML

Si vous préférez utiliser un fichier HTML :

1. **Téléchargez le fichier** HTML fourni par Google (ex: `google1234567890abcdef.html`)

2. **Placez-le dans le dossier public/** :
```
public/
├── google1234567890abcdef.html  ← Ajoutez le fichier ici
├── logo.svg
├── og-image.svg
├── manifest.json
├── robots.txt
└── sitemap.xml
```

3. **Buildez et déployez**

4. **Vérifiez** que le fichier est accessible :
   - URL : `https://itech-company.com/google1234567890abcdef.html`

5. **Retournez dans Search Console** et cliquez sur **"Vérifier"**

## 🗺️ Étape 3 : Soumettre le sitemap

Une fois votre propriété vérifiée :

1. Dans Google Search Console, cliquez sur **"Sitemaps"** dans le menu de gauche

2. Entrez l'URL de votre sitemap :
   ```
   https://itech-company.com/sitemap.xml
   ```

3. Cliquez sur **"Envoyer"**

4. **Statut** : Le sitemap devrait passer à "Réussi" après quelques minutes

### Vérifier que le sitemap est accessible

Avant de soumettre, testez l'URL :
```
https://itech-company.com/sitemap.xml
```

Vous devriez voir le contenu XML du sitemap.

## 📊 Étape 4 : Demander l'indexation des pages clés

Pour accélérer l'indexation de vos pages :

1. Allez dans **"Inspection d'URL"** (icône de loupe en haut)

2. Testez chaque page principale :
   - `https://itech-company.com/`
   - `https://itech-company.com/services`
   - `https://itech-company.com/portfolio`
   - `https://itech-company.com/about`
   - `https://itech-company.com/contact`
   - `https://itech-company.com/blog`
   - `https://itech-company.com/recrutement`

3. Pour chaque page :
   - Entrez l'URL
   - Cliquez sur **"Tester l'URL en direct"**
   - Attendez le résultat
   - Cliquez sur **"Demander une indexation"**

**Note** : Vous pouvez demander l'indexation de 10 pages par jour environ.

## 🔍 Étape 5 : Vérifier les données structurées

1. Allez dans **"Améliorations"** > **"Données structurées"**

2. Google devrait détecter vos balises Schema.org :
   - **Organization** (page d'accueil)
   - **WebSite** (page d'accueil)
   - **Service** (page services)

3. Si vous voyez des erreurs, corrigez-les

### Tester les données structurées

Utilisez l'outil de test de Google :
- https://search.google.com/test/rich-results

Testez vos pages et vérifiez qu'elles passent tous les tests.

## 📈 Étape 6 : Surveiller les performances

### Rapport "Performances"

1. Allez dans **"Performances"** dans le menu de gauche

2. Vous verrez 4 métriques principales :
   - **Clics** : Nombre de clics depuis Google
   - **Impressions** : Nombre de fois votre site apparaît dans les résultats
   - **CTR moyen** : Taux de clic (Clics / Impressions)
   - **Position moyenne** : Position moyenne dans les résultats

3. **Analysez** :
   - Quelles pages génèrent le plus de trafic ?
   - Quels mots-clés sont les plus performants ?
   - Quels pays génèrent le plus de visites ?

### Rapport "Couverture"

1. Allez dans **"Couverture"**

2. Vérifiez :
   - **Pages indexées** : Nombre de pages indexées par Google
   - **Pages exclues** : Pages que Google a choisi de ne pas indexer
   - **Erreurs** : Pages avec des erreurs d'exploration

3. **Corrigez les erreurs** si nécessaire

### Rapport "Expérience"

1. Allez dans **"Expérience"** > **"Signaux Web essentiels"**

2. Vérifiez les **Core Web Vitals** :
   - **LCP** (Largest Contentful Paint) : Temps de chargement
   - **FID** (First Input Delay) : Réactivité
   - **CLS** (Cumulative Layout Shift) : Stabilité visuelle

3. **Objectif** : Toutes les métriques doivent être dans le vert

4. Si certaines métriques sont dans le rouge :
   - Testez avec PageSpeed Insights : https://pagespeed.web.dev/
   - Suivez les recommandations d'optimisation

### Rapport "Ergonomie mobile"

1. Allez dans **"Expérience"** > **"Ergonomie mobile"**

2. Vérifiez qu'il n'y a **pas d'erreurs**

3. Testez avec l'outil Google :
   - https://search.google.com/test/mobile-friendly

## 🎯 Bonnes pratiques

### 1. Mettre à jour le sitemap régulièrement

Quand vous ajoutez du nouveau contenu, mettez à jour `public/sitemap.xml` :
- Changez les dates `<lastmod>`
- Ajoutez les nouvelles pages

### 2. Vérifier les erreurs d'exploration

- Allez dans **"Paramètres"** > **"Rapport d'exploration"**
- Vérifiez qu'il n'y a pas d'erreurs 404 ou 500

### 3. Surveiller la sécurité

- Allez dans **"Sécurité et actions manuelles"**
- Vérifiez qu'il n'y a **aucun problème de sécurité**

### 4. Optimiser pour les featured snippets

- Utilisez des listes à puces et numérotées
- Répondez clairement aux questions
- Structurez bien votre contenu avec des titres H2, H3

### 5. Surveiller les liens entrants

- Allez dans **"Liens"**
- Voyez quels sites font des liens vers vous
- Identifiez les pages les plus liées

## ⚙️ Soumettre à d'autres moteurs de recherche

### Bing Webmaster Tools

1. Allez sur https://www.bing.com/webmasters

2. Ajoutez votre site : `https://itech-company.com`

3. **Astuce** : Vous pouvez importer vos données depuis Google Search Console !
   - Cliquez sur **"Import from Google Search Console"**
   - Autorisez l'accès
   - Bing récupérera automatiquement votre sitemap et vos paramètres

4. Soumettez le sitemap si ce n'est pas fait :
   ```
   https://itech-company.com/sitemap.xml
   ```

### Yandex Webmaster

1. Allez sur https://webmaster.yandex.com/

2. Ajoutez votre site

3. Vérifiez la propriété (méthode similaire à Google)

4. Soumettez le sitemap :
   ```
   https://itech-company.com/sitemap.xml
   ```

## 📊 Checklist de vérification

Après la configuration, vérifiez que :

- [ ] Propriété vérifiée dans Google Search Console
- [ ] Sitemap soumis et statut "Réussi"
- [ ] Pages principales indexées (testez avec `site:itech-company.com` sur Google)
- [ ] Données structurées détectées sans erreur
- [ ] Core Web Vitals dans le vert
- [ ] Ergonomie mobile OK
- [ ] Aucune erreur de sécurité
- [ ] Sitemap soumis à Bing Webmaster Tools
- [ ] robots.txt accessible : `https://itech-company.com/robots.txt`

## 🔧 Dépannage

### Sitemap non détecté

**Problème** : Le sitemap n'est pas trouvé par Google

**Solutions** :
1. Vérifiez que le fichier existe dans `public/sitemap.xml`
2. Testez l'URL : `https://itech-company.com/sitemap.xml`
3. Vérifiez que `robots.txt` référence le sitemap :
   ```
   Sitemap: https://itech-company.com/sitemap.xml
   ```

### Pages non indexées

**Problème** : Mes pages n'apparaissent pas dans Google

**Solutions** :
1. Attendez 1-2 semaines (l'indexation peut prendre du temps)
2. Demandez l'indexation manuellement via "Inspection d'URL"
3. Vérifiez qu'il n'y a pas de balise `<meta name="robots" content="noindex">`
4. Vérifiez que robots.txt n'interdit pas l'exploration
5. Assurez-vous que le site est accessible publiquement

### Erreurs de données structurées

**Problème** : Google détecte des erreurs dans les données structurées

**Solutions** :
1. Utilisez l'outil de test : https://search.google.com/test/rich-results
2. Vérifiez les fichiers :
   - `src/components/StructuredData.tsx`
3. Corrigez les erreurs et redéployez

### Core Web Vitals en rouge

**Problème** : Les métriques de performance sont mauvaises

**Solutions** :
1. Testez avec PageSpeed Insights : https://pagespeed.web.dev/
2. Optimisez les images (format WebP, lazy loading)
3. Réduisez le JavaScript non utilisé
4. Utilisez un CDN pour les assets statiques
5. Activez la compression GZIP/Brotli sur le serveur

## 📚 Ressources utiles

- [Guide officiel Search Console](https://support.google.com/webmasters/answer/9128668)
- [Documentation Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Core Web Vitals](https://web.dev/vitals/)
- [Schema.org](https://schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Prochaine étape** : Consultez `ANALYTICS-SETUP.md` pour configurer le tracking complet.
