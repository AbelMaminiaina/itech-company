# Configuration Google Analytics 4

## 📋 Prérequis

Le code est déjà configuré pour utiliser Google Analytics 4. Il ne vous reste plus qu'à ajouter votre **ID de mesure**.

## 🔑 Étape 1 : Obtenir votre ID de mesure Google Analytics

1. **Créer un compte Google Analytics** (si vous n'en avez pas) :
   - Allez sur https://analytics.google.com/
   - Connectez-vous avec votre compte Google
   - Cliquez sur **"Commencer à mesurer"**

2. **Créer une propriété** :
   - Nom du compte : `iTech-Company`
   - Nom de la propriété : `iTech-Company Website`
   - Fuseau horaire : `(UTC+03:00) Antananarivo` ou `(UTC+01:00) Paris`
   - Devise : `EUR` ou `MGA`

3. **Configurer un flux de données** :
   - Sélectionnez **"Web"**
   - URL du site : `https://itech-company.com`
   - Nom du flux : `Site Web iTech-Company`

4. **Récupérer l'ID de mesure** :
   - Après la création, vous verrez un **ID de mesure** au format : `G-XXXXXXXXXX`
   - **Copiez cet ID**, vous en aurez besoin à l'étape suivante

## ⚙️ Étape 2 : Configurer l'ID dans votre code

1. Ouvrez le fichier `src/utils/analytics.ts`

2. Remplacez la ligne 6 :

```typescript
// ❌ AVANT (valeur par défaut)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

// ✅ APRÈS (votre véritable ID)
const GA_MEASUREMENT_ID = 'G-1A2B3C4D5E'  // Exemple, utilisez votre vrai ID
```

3. Sauvegardez le fichier

## 🧪 Étape 3 : Tester le tracking

1. **Lancez le serveur de développement** :
```bash
npm run dev
```

2. **Ouvrez votre navigateur** sur `http://localhost:5174`

3. **Ouvrez la console du navigateur** (F12) :
   - Allez dans l'onglet "Réseau" (Network)
   - Filtrez par "analytics" ou "google-analytics"
   - Naviguez sur le site
   - Vous devriez voir des requêtes vers `google-analytics.com`

4. **Vérifiez dans Google Analytics** :
   - Retournez sur https://analytics.google.com/
   - Allez dans **Rapports > Temps réel**
   - Vous devriez voir votre visite en temps réel

## 📊 Événements trackés automatiquement

### 1. Pages vues
Chaque changement de page est automatiquement tracké.

### 2. Formulaire de contact
Quand un utilisateur soumet le formulaire de contact sur `/contact`

### 3. Vue de projet
Quand un utilisateur consulte un projet dans `/portfolio/:id`

## 🎯 Événements disponibles (à implémenter)

Vous pouvez ajouter ces événements dans votre code :

```typescript
import {
  trackServiceView,
  trackJobApplication,
  trackDownload,
  trackOutboundLink,
  trackSocialClick,
  trackBlogArticleView,
  trackCTAClick
} from './utils/analytics'

// Exemple : Tracker la vue d'un service
trackServiceView('Développement Web')

// Exemple : Tracker une candidature
trackJobApplication('Développeur Odoo')

// Exemple : Tracker un téléchargement
trackDownload('brochure.pdf')

// Exemple : Tracker un clic sur un lien externe
trackOutboundLink('https://example.com')

// Exemple : Tracker un clic sur un réseau social
trackSocialClick('Facebook')

// Exemple : Tracker la lecture d'un article de blog
trackBlogArticleView('Les tendances du développement web en 2024')

// Exemple : Tracker un clic sur un CTA
trackCTAClick('Demander un devis')
```

## 🔒 Conformité RGPD

Le code est configuré par défaut pour être conforme au RGPD :
- **Anonymisation des IP** activée
- Pas de tracking si l'ID n'est pas configuré

### Ajouter un bandeau de cookies (recommandé)

Pour une conformité totale au RGPD, vous devriez ajouter un bandeau de consentement aux cookies.

Vous pouvez utiliser des bibliothèques comme :
- [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)
- [cookiebot](https://www.cookiebot.com/)
- [tarteaucitron](https://tarteaucitron.io/)

## 🚀 Déploiement en production

1. **Vérifiez que l'ID est configuré** dans `src/utils/analytics.ts`

2. **Buildez le projet** :
```bash
npm run build
```

3. **Déployez** le dossier `dist/` sur votre serveur

4. **Vérifiez que le tracking fonctionne** :
   - Visitez votre site en production
   - Vérifiez dans Google Analytics > Temps réel

## 📈 Rapports utiles dans Google Analytics

### Rapports en temps réel
- **Utilisateurs actifs** : Voir qui est sur votre site en ce moment
- **Pages consultées** : Pages actuellement visitées
- **Sources de trafic** : D'où viennent vos visiteurs

### Rapports d'acquisition
- **Vue d'ensemble** : D'où viennent vos utilisateurs (Google, direct, réseaux sociaux, etc.)
- **Trafic de recherche organique** : Performances SEO

### Rapports d'engagement
- **Pages et écrans** : Pages les plus visitées
- **Événements** : Vos événements personnalisés (formulaire, projets, etc.)
- **Conversions** : Objectifs atteints

### Rapports démographiques
- **Données démographiques** : Âge, genre, centres d'intérêt
- **Technologie** : Navigateurs, systèmes d'exploitation, appareils
- **Localisation** : Pays, villes

## 🔧 Dépannage

### Le tracking ne fonctionne pas

1. **Vérifiez l'ID de mesure** :
   - L'ID doit commencer par `G-`
   - Vérifiez qu'il n'y a pas d'espaces

2. **Vérifiez la console du navigateur** :
   - Ouvrez F12 > Console
   - Cherchez des erreurs liées à Google Analytics

3. **Vérifiez les requêtes réseau** :
   - F12 > Réseau (Network)
   - Filtrez par "analytics"
   - Vous devriez voir des requêtes vers `google-analytics.com`

4. **Utilisez l'extension Google Analytics Debugger** :
   - Installez l'extension Chrome [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - Activez-la et rechargez la page
   - Vérifiez la console pour les messages de debug

### Les événements ne s'affichent pas

- Les événements peuvent prendre **24-48h** pour apparaître dans les rapports standards
- Utilisez les **Rapports en temps réel** pour voir les événements immédiatement

### Plusieurs propriétés GA4

Si vous avez plusieurs sites, assurez-vous d'utiliser le bon ID de mesure pour chaque site.

## 📚 Ressources

- [Documentation Google Analytics 4](https://support.google.com/analytics/answer/10089681)
- [Guide de migration vers GA4](https://support.google.com/analytics/answer/10759417)
- [react-ga4 Documentation](https://github.com/PriceRunner/react-ga4)

---

**Besoin d'aide ?** Consultez le fichier `ANALYTICS-SETUP.md` pour un guide complet de configuration.
