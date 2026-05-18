# Guide d'Automatisation - Publication Réseaux Sociaux

## Outils d'Automatisation Recommandés

### 1. Meta Business Suite (GRATUIT) - Facebook & Instagram
**URL**: https://business.facebook.com

**Fonctionnalités**:
- Planification de posts Facebook/Instagram
- Statistiques détaillées
- Gestion des messages
- Bibliothèque de médias

**Configuration**:
1. Connecter la page Facebook iTech-Company
2. Aller dans "Planificateur"
3. Créer un post → Sélectionner date/heure
4. Ajouter média + texte
5. Planifier

**Limites**: Pas de TikTok, pas de LinkedIn

---

### 2. Buffer (GRATUIT jusqu'à 3 comptes)
**URL**: https://buffer.com

**Fonctionnalités**:
- Facebook, LinkedIn, Twitter, Instagram
- Interface simple
- Analytics basiques
- Queue de posts

**Plan gratuit**: 3 comptes, 10 posts en queue/compte

**Configuration**:
1. Créer compte Buffer
2. Connecter Facebook, LinkedIn
3. Créer posts avec média
4. Définir horaires de publication
5. Ajouter à la queue

---

### 3. Hootsuite (GRATUIT 30 jours, puis payant)
**URL**: https://hootsuite.com

**Fonctionnalités**:
- Tous les réseaux (sauf TikTok direct)
- Calendrier visuel
- Analytics avancées
- Collaboration équipe

**Prix**: ~99$/mois pour plan Pro

---

### 4. Later (GRATUIT limité)
**URL**: https://later.com

**Fonctionnalités**:
- Instagram, Facebook, TikTok, Pinterest
- Calendrier visuel drag & drop
- Suggestions d'horaires
- Preview du feed

**Plan gratuit**: 1 profil social, 30 posts/mois

---

### 5. Publer (Recommandé - Bon rapport qualité/prix)
**URL**: https://publer.io

**Fonctionnalités**:
- Facebook, LinkedIn, Twitter, TikTok, Google My Business
- Recyclage de posts
- Watermark automatique
- Analytics

**Prix**: ~12$/mois pour 5 comptes

---

## Configuration Recommandée pour iTech-Company

### Option 1: Budget Zéro
```
Facebook/Instagram → Meta Business Suite (gratuit)
LinkedIn → Publication manuelle ou Buffer gratuit
TikTok → Publication manuelle (app uniquement)
```

### Option 2: Budget Minimal (~15$/mois)
```
Tous les réseaux → Publer (~12$/mois)
+ Meta Business Suite en backup
```

### Option 3: Budget Confortable (~50$/mois)
```
Tous les réseaux → Hootsuite ou Buffer Pro
+ Analytics avancées
+ Collaboration équipe
```

---

## Script Node.js pour Export CSV

Créez ce script pour exporter vos posts en format CSV importable dans les outils:

```javascript
// scripts/export-posts-csv.js

const fs = require('fs');
const path = require('path');

const posts = require('../calendrier-30-jours.json');

// Format pour Buffer/Hootsuite
function generateCSV(platform) {
  const header = 'Date,Time,Post,Link,Image';
  const rows = [];

  posts.days.forEach(day => {
    // Adapter selon le contenu de chaque plateforme
    rows.push(`${day.date},09:00,"Post du jour ${day.day}: ${day.theme}",https://www.itech-company.com,`);
  });

  return header + '\n' + rows.join('\n');
}

// Générer CSV pour chaque plateforme
['facebook', 'linkedin', 'tiktok'].forEach(platform => {
  const csv = generateCSV(platform);
  const outputPath = path.join(__dirname, '..', platform, `posts-export.csv`);
  fs.writeFileSync(outputPath, csv);
  console.log(`CSV généré: ${outputPath}`);
});

console.log('Export terminé!');
```

---

## Workflow Hebdomadaire Recommandé

### Dimanche (Préparation)
1. Revoir le contenu de la semaine
2. Créer/finaliser les visuels
3. Planifier tous les posts de la semaine

### Quotidien (15 min)
1. Vérifier les publications du jour
2. Répondre aux commentaires
3. Engager avec la communauté

### Vendredi (Analyse)
1. Revoir les stats de la semaine
2. Identifier les posts performants
3. Ajuster la stratégie si nécessaire

---

## Automatisation TikTok (Spécifique)

TikTok ne permet pas la publication automatique via API pour les comptes non-business.

**Solutions**:
1. **Later** - Envoi de rappels + preview
2. **Loomly** - Planification avec notification
3. **Publication manuelle** - Mais avec rappels calendrier

**Workflow TikTok**:
1. Créer les vidéos à l'avance
2. Les stocker dans un dossier organisé (Jour1, Jour2...)
3. Configurer des rappels (Google Calendar)
4. Publier manuellement à l'heure prévue

---

## Calendrier Google (Rappels Gratuits)

Créez un calendrier dédié "Social Media iTech":

```
Événement répétitif:
- 09:00 - Publier Facebook (lien vers le contenu)
- 12:00 - Publier LinkedIn (lien vers le contenu)
- 19:00 - Publier TikTok (lien vers la vidéo)
```

**Export ICS disponible** pour import dans Google Calendar.

---

## Checklist Avant Publication

### Pour chaque post:
- [ ] Texte relu et corrigé
- [ ] Hashtags ajoutés (3-5 pertinents)
- [ ] Lien fonctionnel
- [ ] Image/Vidéo de bonne qualité
- [ ] Dimensions correctes
- [ ] CTA présent
- [ ] Heure de publication optimale

### Pour les vidéos:
- [ ] Sous-titres ajoutés
- [ ] Son correct
- [ ] Durée appropriée
- [ ] Thumbnail attractive
- [ ] Description complète

---

## Métriques à Suivre

### Hebdomadaire:
| Métrique | Facebook | LinkedIn | TikTok |
|----------|----------|----------|--------|
| Portée | | | |
| Engagement | | | |
| Clics liens | | | |
| Nouveaux abonnés | | | |

### Mensuel:
- Meilleur post par plateforme
- Meilleur jour/heure
- Taux de croissance abonnés
- Leads générés

---

## Templates de Posts Réutilisables

### Template Témoignage:
```
Ce que nos clients disent de nous...

"[Citation du client]"

- [Nom], [Entreprise]

[Emoji étoiles] Merci pour votre confiance!

Vous aussi, confiez-nous votre projet.
[Lien]

#Témoignage #ClientSatisfait #[Hashtags pertinents]
```

### Template Tips:
```
[Nombre] [conseils/erreurs/astuces] pour [sujet]

[Emoji] [Point 1]
[Emoji] [Point 2]
[Emoji] [Point 3]

Sauvegarde ce post pour plus tard!

#Tips #[Sujet] #[Hashtags]
```

### Template Annonce:
```
[Emoji attention] NOUVEAU!

[Description de l'annonce]

Ce que ça change pour vous:
→ [Avantage 1]
→ [Avantage 2]
→ [Avantage 3]

Plus d'infos: [Lien]

#Annonce #Nouveau #[Hashtags]
```
