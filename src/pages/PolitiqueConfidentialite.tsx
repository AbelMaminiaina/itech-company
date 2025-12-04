import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, AlertCircle, UserCheck } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import SEO from '../components/SEO'

const PolitiqueConfidentialite = () => {
  const sections = [
    {
      icon: Shield,
      title: '1. Introduction',
      content: (
        <>
          <p className="mb-4">
            La présente politique de confidentialité décrit comment iTech-Company ("nous", "notre", "nos")
            collecte, utilise, partage et protège vos données personnelles conformément au Règlement Général
            sur la Protection des Données (RGPD) et à la Loi n° 2014-038 relative à la protection des données
            à caractère personnel de Madagascar.
          </p>
          <p className="mb-4">
            En utilisant notre site web www.itech-company.com et nos services, vous acceptez les pratiques
            décrites dans cette politique de confidentialité.
          </p>
          <div className="bg-electric-500/10 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Date de dernière mise à jour :</strong> 4 décembre 2025
            </p>
          </div>
        </>
      ),
    },
    {
      icon: FileText,
      title: '2. Responsable du traitement',
      content: (
        <>
          <p className="mb-4">
            Le responsable du traitement de vos données personnelles est :
          </p>
          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg space-y-2">
            <p><strong>Raison sociale :</strong> iTech-Company</p>
            <p><strong>Siège social :</strong> Madagascar</p>
            <p><strong>Email :</strong> <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">contact@itech-company.com</a></p>
            <p><strong>Numéro de téléphone :</strong> [À compléter]</p>
          </div>
        </>
      ),
    },
    {
      icon: Eye,
      title: '3. Données collectées',
      content: (
        <>
          <p className="mb-4">
            Nous collectons différentes catégories de données personnelles en fonction de votre interaction
            avec nos services :
          </p>

          <h4 className="font-semibold mb-3 text-lg">3.1. Données collectées directement</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
            <li><strong>Données de contact :</strong> numéro de téléphone, adresse postale</li>
            <li><strong>Données professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité</li>
            <li><strong>Données de communication :</strong> messages envoyés via nos formulaires de contact</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">3.2. Données collectées automatiquement</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
            <li><strong>Cookies et traceurs :</strong> identifiants de session, préférences utilisateur</li>
            <li><strong>Données analytiques :</strong> données collectées via Google Analytics (interactions avec le site, parcours utilisateur)</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">3.3. Données de recrutement</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>CV et lettre de motivation</strong></li>
            <li><strong>Parcours professionnel et diplômes</strong></li>
            <li><strong>Coordonnées personnelles</strong></li>
          </ul>
        </>
      ),
    },
    {
      icon: UserCheck,
      title: '4. Finalités et bases légales du traitement',
      content: (
        <>
          <p className="mb-4">
            Vos données personnelles sont traitées pour les finalités suivantes :
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Gestion des demandes de contact</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Intérêt légitime / Exécution de mesures précontractuelles
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Répondre à vos demandes d'information, établir des devis, gérer nos relations commerciales.
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Fourniture de services</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Exécution du contrat
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Développement web et mobile, maintenance, support technique.
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Amélioration de nos services</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Intérêt légitime
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Analyse des statistiques de navigation, amélioration de l'expérience utilisateur.
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Communication marketing</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Consentement
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Envoi de newsletters et informations sur nos services (uniquement avec votre accord préalable).
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Recrutement</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Exécution de mesures précontractuelles
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestion des candidatures et processus de recrutement.
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Obligations légales</h4>
              <p className="text-sm mb-2">
                <strong>Base légale :</strong> Obligation légale
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Respect des obligations comptables, fiscales et légales.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Lock,
      title: '5. Durée de conservation',
      content: (
        <>
          <p className="mb-4">
            Vos données personnelles sont conservées pendant une durée n'excédant pas celle nécessaire
            aux finalités pour lesquelles elles sont traitées :
          </p>

          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-dark-800 p-3 rounded">
              <p><strong>Prospects et contacts commerciaux :</strong> 3 ans à compter du dernier contact</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-3 rounded">
              <p><strong>Clients :</strong> 10 ans à compter de la fin de la relation contractuelle (obligations comptables)</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-3 rounded">
              <p><strong>Candidatures :</strong> 2 ans à compter du dernier contact</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-3 rounded">
              <p><strong>Cookies et traceurs :</strong> 13 mois maximum</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-3 rounded">
              <p><strong>Données de navigation :</strong> 25 mois (Google Analytics)</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            À l'issue de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
          </p>
        </>
      ),
    },
    {
      icon: AlertCircle,
      title: '6. Partage des données',
      content: (
        <>
          <p className="mb-4">
            Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent être
            partagées uniquement dans les cas suivants :
          </p>

          <h4 className="font-semibold mb-3">6.1. Prestataires de services</h4>
          <p className="mb-2">
            Nous faisons appel à des prestataires de confiance pour nous aider à fournir nos services :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Hébergement web :</strong> [Nom du prestataire d'hébergement]</li>
            <li><strong>Analytique :</strong> Google Analytics (avec anonymisation IP)</li>
            <li><strong>Email :</strong> Services de messagerie professionnelle</li>
            <li><strong>Infrastructure cloud :</strong> Services cloud sécurisés</li>
          </ul>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Ces prestataires sont contractuellement tenus de respecter la confidentialité et la sécurité
            de vos données et ne peuvent les utiliser qu'aux fins pour lesquelles nous les avons engagés.
          </p>

          <h4 className="font-semibold mb-3">6.2. Transferts internationaux</h4>
          <p className="mb-4">
            Certains de nos prestataires peuvent être situés en dehors de Madagascar ou de l'Union Européenne.
            Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place (clauses
            contractuelles types de la Commission européenne, Privacy Shield, etc.).
          </p>

          <h4 className="font-semibold mb-3">6.3. Obligations légales</h4>
          <p>
            Nous pouvons divulguer vos données si la loi l'exige ou en réponse à une demande légale
            des autorités compétentes.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '7. Sécurité des données',
      content: (
        <>
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
            vos données personnelles contre la destruction accidentelle ou illicite, la perte, l'altération,
            la divulgation ou l'accès non autorisés.
          </p>

          <h4 className="font-semibold mb-3">Mesures de sécurité mises en place :</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chiffrement SSL/TLS pour les transmissions de données</li>
            <li>Authentification sécurisée et contrôle d'accès</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Mise à jour régulière des systèmes de sécurité</li>
            <li>Formation du personnel aux bonnes pratiques de sécurité</li>
            <li>Limitation de l'accès aux données aux seuls personnels autorisés</li>
            <li>Audits de sécurité réguliers</li>
          </ul>

          <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>⚠️ Important :</strong> Malgré nos efforts, aucune transmission de données via Internet
              n'est totalement sécurisée. Nous vous encourageons à prendre vos propres mesures de sécurité.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: UserCheck,
      title: '8. Vos droits',
      content: (
        <>
          <p className="mb-4">
            Conformément au RGPD et à la loi malgache n° 2014-038, vous disposez des droits suivants
            concernant vos données personnelles :
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit d'accès</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Obtenir une copie de vos données personnelles et des informations sur leur traitement.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit de rectification</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demander la correction de données inexactes ou incomplètes.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit à l'effacement ("droit à l'oubli")</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demander la suppression de vos données dans certains cas (sous réserve de nos obligations légales).
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit à la limitation du traitement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demander la suspension temporaire du traitement de vos données.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit à la portabilité</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recevoir vos données dans un format structuré et couramment utilisé, ou demander leur
                transfert direct à un autre responsable de traitement.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit d'opposition</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vous opposer au traitement de vos données, notamment à des fins de prospection commerciale.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit de retirer votre consentement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Retirer à tout moment votre consentement pour les traitements basés sur celui-ci.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-dark-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✓ Droit de définir des directives post-mortem</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Définir des directives concernant la conservation, l'effacement et la communication de
                vos données après votre décès.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-electric-500/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-lg">Comment exercer vos droits ?</h4>
            <p className="mb-3">
              Pour exercer l'un de ces droits, vous pouvez nous contacter :
            </p>
            <ul className="space-y-2 text-sm">
              <li>📧 <strong>Par email :</strong> <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">contact@itech-company.com</a></li>
              <li>✉️ <strong>Par courrier :</strong> iTech-Company, [Adresse complète], Madagascar</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Nous répondrons à votre demande dans un délai d'un mois à compter de sa réception.
              Ce délai peut être prolongé de deux mois si nécessaire, compte tenu de la complexité
              et du nombre de demandes.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: FileText,
      title: '9. Cookies et traceurs',
      content: (
        <>
          <p className="mb-4">
            Notre site utilise des cookies et autres technologies de suivi pour améliorer votre expérience
            de navigation et analyser l'utilisation du site.
          </p>

          <h4 className="font-semibold mb-3">Types de cookies utilisés :</h4>

          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Cookies strictement nécessaires</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Essentiels au fonctionnement du site (session, sécurité). Ces cookies ne nécessitent
                pas votre consentement.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Cookies analytiques</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Google Analytics : nous utilisons ces cookies pour comprendre comment les visiteurs
                utilisent notre site (pages visitées, durée, etc.).
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Durée de conservation :</strong> 25 mois
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Cookies de préférence</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mémorisent vos préférences (langue, mode sombre, etc.).
              </p>
            </div>
          </div>

          <h4 className="font-semibold mb-3">Gestion des cookies</h4>
          <p className="mb-3">
            Vous pouvez gérer vos préférences de cookies à tout moment :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Via le bandeau de consentement lors de votre première visite</li>
            <li>En configurant votre navigateur pour refuser les cookies</li>
            <li>En utilisant des outils comme la navigation privée</li>
          </ul>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Note :</strong> Le refus de certains cookies peut affecter votre expérience de navigation.
          </p>
        </>
      ),
    },
    {
      icon: AlertCircle,
      title: '10. Mineurs',
      content: (
        <>
          <p className="mb-4">
            Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas
            sciemment de données personnelles auprès de mineurs.
          </p>
          <p>
            Si vous êtes parent ou tuteur et que vous découvrez que votre enfant nous a fourni des
            données personnelles, veuillez nous contacter afin que nous puissions prendre les mesures
            nécessaires pour supprimer ces informations.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: '11. Réclamations',
      content: (
        <>
          <p className="mb-4">
            Si vous estimez que le traitement de vos données personnelles constitue une violation de
            la réglementation applicable, vous avez le droit d'introduire une réclamation auprès des
            autorités compétentes :
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">À Madagascar :</h5>
              <p className="text-sm">
                <strong>Bureau du Commissaire Général à la Protection des Données Personnelles (CGPDP)</strong><br />
                [Adresse à compléter]<br />
                Madagascar
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Pour les résidents de l'Union Européenne :</h5>
              <p className="text-sm">
                <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
                3 Place de Fontenoy<br />
                TSA 80715<br />
                75334 Paris Cedex 07<br />
                France<br />
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-electric-500 hover:text-electric-400">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Nous vous encourageons néanmoins à nous contacter en premier lieu afin que nous puissions
            répondre à vos préoccupations.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '12. Modifications de la politique',
      content: (
        <>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment
            afin de refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles,
            légales ou réglementaires.
          </p>
          <p className="mb-4">
            En cas de modification substantielle, nous vous en informerons par email ou via une notification
            sur notre site web.
          </p>
          <p>
            Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques
            en matière de protection des données.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: '13. Contact',
      content: (
        <>
          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos
            données personnelles, vous pouvez nous contacter :
          </p>

          <div className="bg-electric-500/10 p-6 rounded-lg space-y-3">
            <p>
              <strong>iTech-Company</strong>
            </p>
            <p>
              📧 <strong>Email :</strong>{' '}
              <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">
                contact@itech-company.com
              </a>
            </p>
            <p>
              📧 <strong>Pour les questions RGPD :</strong>{' '}
              <a href="mailto:dpo@itech-company.com" className="text-electric-500 hover:text-electric-400">
                dpo@itech-company.com
              </a>
            </p>
            <p>
              ✉️ <strong>Adresse postale :</strong> [Adresse complète à compléter], Madagascar
            </p>
            <p>
              📞 <strong>Téléphone :</strong> [Numéro à compléter]
            </p>
          </div>

          <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>✓ Engagement de réponse :</strong> Nous nous engageons à répondre à toutes vos demandes
              dans un délai maximum d'un mois à compter de leur réception.
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Politique de Confidentialité RGPD - iTech-Company"
        description="Politique de confidentialité d'iTech-Company conforme au RGPD et à la loi malgache n° 2014-038. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles."
        keywords="politique de confidentialité, RGPD, protection des données, loi malgache, données personnelles, cookies, sécurité, confidentialité"
        url="/politique-confidentialite"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-electric-500/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-electric-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Politique de <span className="text-gradient">Confidentialité</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Conforme au RGPD et à la loi malgache n° 2014-038
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Votre vie privée est importante pour nous. Cette politique explique comment nous collectons,
              utilisons et protégeons vos données personnelles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Navigation rapide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="text-sm text-electric-500 hover:text-electric-400 hover:underline transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Card>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={`section-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-electric-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-electric-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.content}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-electric-500/10 to-electric-600/5 border-electric-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Des questions sur vos données ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant
                  la protection de vos données personnelles.
                </p>
                <a
                  href="mailto:contact@itech-company.com"
                  className="inline-flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default PolitiqueConfidentialite
