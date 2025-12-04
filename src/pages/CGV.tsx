import { motion } from 'framer-motion'
import { FileText, CheckCircle, DollarSign, Clock, Shield, AlertCircle, Scale, Package } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import SEO from '../components/SEO'

const CGV = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Objet et champ d\'application',
      content: (
        <>
          <p className="mb-4">
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à l'ensemble des prestations
            de services proposées par iTech-Company à ses clients professionnels et particuliers.
          </p>

          <h4 className="font-semibold mb-3 text-lg">Services concernés</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Développement web (sites vitrine, e-commerce, applications web)</li>
            <li>Développement mobile (iOS, Android, cross-platform)</li>
            <li>Design UI/UX et identité visuelle</li>
            <li>Maintenance et support technique</li>
            <li>Hébergement et infogérance</li>
            <li>Consulting et audit technique</li>
            <li>DevOps et Cloud</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Important :</strong> Toute commande de prestations implique l'acceptation sans
              réserve des présentes conditions générales de vente qui prévalent sur tout autre document,
              sauf accord écrit préalable.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: CheckCircle,
      title: '2. Commande et devis',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">2.1. Processus de commande</h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-electric-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-electric-500 font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold">Demande de devis</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Le client contacte iTech-Company via le formulaire de contact ou par email
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-electric-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-electric-500 font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold">Étude du projet</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Analyse des besoins et rédaction d'un cahier des charges
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-electric-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-electric-500 font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold">Proposition commerciale</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Envoi d'un devis détaillé avec planning prévisionnel
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-electric-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-electric-500 font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold">Acceptation</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Signature du devis par le client (valeur de bon de commande)
                </p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold mb-3 text-lg">2.2. Validité du devis</h4>
          <p className="mb-4">
            Sauf mention contraire, les devis sont valables 30 jours à compter de leur date d'émission.
            Passé ce délai, iTech-Company se réserve le droit de réviser les conditions tarifaires
            et les délais de réalisation.
          </p>

          <h4 className="font-semibold mb-3 text-lg">2.3. Acceptation du devis</h4>
          <p>
            Le devis signé et daté par le client, accompagné du règlement de l'acompte le cas échéant,
            vaut acceptation des présentes CGV et commande ferme. Aucune prestation ne sera engagée
            avant réception du devis signé et de l'acompte.
          </p>
        </>
      ),
    },
    {
      icon: DollarSign,
      title: '3. Tarifs et modalités de paiement',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">3.1. Prix</h4>
          <p className="mb-4">
            Les prix de nos prestations sont indiqués en Ariary malgache (MGA) et/ou en Euro (EUR),
            hors taxes. La TVA est applicable selon la législation en vigueur à Madagascar.
          </p>

          <p className="mb-4">
            Les prix peuvent varier en fonction de :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>La complexité du projet</li>
            <li>Les technologies utilisées</li>
            <li>Les délais de réalisation souhaités</li>
            <li>Le volume de prestations commandées</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">3.2. Modalités de paiement</h4>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Pour les projets &lt; 2 000 000 MGA</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>50% à la commande (acompte)</li>
                <li>50% à la livraison</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Pour les projets &gt; 2 000 000 MGA</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>30% à la commande</li>
                <li>30% à mi-projet (validation maquettes/développement)</li>
                <li>40% à la livraison finale</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Forfaits de maintenance</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Paiement mensuel ou annuel selon la formule choisie
              </p>
            </div>
          </div>

          <h4 className="font-semibold mb-3 text-lg">3.3. Moyens de paiement acceptés</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Virement bancaire</li>
            <li>Mobile Money (Orange Money, MVola, Airtel Money)</li>
            <li>Carte bancaire (via plateforme de paiement sécurisée)</li>
            <li>Espèces (pour les montants inférieurs à 500 000 MGA)</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">3.4. Retard de paiement</h4>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="text-sm mb-2">
              <strong>⚠️ Pénalités :</strong> En cas de retard de paiement, iTech-Company se réserve
              le droit d'appliquer des pénalités de retard au taux de 1,5% par mois de retard.
            </p>
            <p className="text-sm">
              Un retard de paiement entraînera également la suspension immédiate des prestations en cours,
              sans que la responsabilité d'iTech-Company ne puisse être engagée.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Clock,
      title: '4. Délais de réalisation',
      content: (
        <>
          <p className="mb-4">
            Les délais de réalisation sont communiqués à titre indicatif et peuvent varier en fonction
            de la complexité du projet et des éléments fournis par le client.
          </p>

          <h4 className="font-semibold mb-3 text-lg">4.1. Délais indicatifs</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Site vitrine</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">2 à 4 semaines</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Site e-commerce</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">4 à 8 semaines</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Application web</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">6 à 12 semaines</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">Application mobile</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">8 à 16 semaines</p>
            </div>
          </div>

          <h4 className="font-semibold mb-3 text-lg">4.2. Report de délais</h4>
          <p className="mb-4">
            Les délais peuvent être reportés en cas de :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Retard dans la fourniture des éléments nécessaires par le client (contenus, images, logos, etc.)</li>
            <li>Modifications du cahier des charges en cours de réalisation</li>
            <li>Force majeure</li>
            <li>Retard de paiement</li>
          </ul>
        </>
      ),
    },
    {
      icon: Package,
      title: '5. Livraison et réception',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">5.1. Modalités de livraison</h4>
          <p className="mb-4">
            La livraison s'effectue selon les modalités suivantes :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Sites web :</strong> Mise en ligne sur le serveur de production</li>
            <li><strong>Applications :</strong> Livraison du code source et/ou publication sur les stores</li>
            <li><strong>Designs :</strong> Transfert des fichiers sources (PSD, Figma, etc.)</li>
            <li><strong>Documentation :</strong> Remise de la documentation technique et utilisateur</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">5.2. Validation et recette</h4>
          <p className="mb-4">
            Le client dispose d'un délai de <strong>7 jours ouvrés</strong> à compter de la livraison
            pour effectuer la recette du projet et signaler d'éventuelles anomalies.
          </p>

          <div className="bg-electric-500/10 p-4 rounded-lg mb-4">
            <p className="text-sm">
              <strong>Recette tacite :</strong> À défaut de réserves émises dans ce délai, la prestation
              sera considérée comme validée et conforme aux spécifications du devis.
            </p>
          </div>

          <h4 className="font-semibold mb-3 text-lg">5.3. Corrections</h4>
          <p>
            Les corrections d'éventuelles anomalies constatées pendant la période de recette sont
            incluses dans la prestation. Les demandes de modifications ou d'ajouts de fonctionnalités
            feront l'objet d'un devis complémentaire.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '6. Propriété intellectuelle',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">6.1. Droits du client</h4>
          <p className="mb-4">
            À l'issue du paiement intégral de la prestation, le client acquiert les droits d'utilisation
            et d'exploitation des éléments développés spécifiquement pour son projet :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Code source personnalisé</li>
            <li>Designs et maquettes créés sur mesure</li>
            <li>Contenus rédigés par iTech-Company</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">6.2. Droits d'iTech-Company</h4>
          <p className="mb-4">
            iTech-Company conserve l'entière propriété :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Des frameworks et bibliothèques open-source utilisés</li>
            <li>Des outils et méthodes de développement propriétaires</li>
            <li>Du savoir-faire et de l'expérience acquise</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">6.3. Droit de référence</h4>
          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sauf mention contraire, iTech-Company se réserve le droit de mentionner la réalisation
              dans son portfolio et ses supports de communication (avec lien vers le site réalisé).
              Le client peut s'y opposer par écrit.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: AlertCircle,
      title: '7. Obligations du client',
      content: (
        <>
          <p className="mb-4">
            Pour la bonne exécution de la prestation, le client s'engage à :
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Fourniture des éléments</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fournir dans les délais convenus tous les éléments nécessaires à la réalisation
                (textes, images, logos, accès serveur, etc.)
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Validation des livrables</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Valider les livrables intermédiaires dans les délais impartis
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Respect des droits</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Garantir qu'il dispose des droits nécessaires sur les contenus fournis
              </p>
            </div>

            <div className="border-l-4 border-electric-500 pl-4">
              <h4 className="font-semibold mb-2">Disponibilité</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Se rendre disponible pour les échanges et validations nécessaires au projet
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>⚠️ Important :</strong> Le non-respect de ces obligations par le client peut
              entraîner des retards dans la réalisation du projet, sans que la responsabilité
              d'iTech-Company puisse être engagée.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Shield,
      title: '8. Garanties et responsabilités',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">8.1. Garantie de conformité</h4>
          <p className="mb-4">
            iTech-Company garantit que les prestations réalisées sont conformes aux spécifications
            définies dans le devis et le cahier des charges validé par le client.
          </p>

          <h4 className="font-semibold mb-3 text-lg">8.2. Garantie de bon fonctionnement</h4>
          <p className="mb-4">
            Une garantie de bon fonctionnement de <strong>3 mois</strong> est offerte à compter de
            la livraison finale. Cette garantie couvre :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>La correction des bugs et erreurs de fonctionnement</li>
            <li>Les dysfonctionnements liés au code développé par iTech-Company</li>
          </ul>

          <p className="mb-4">
            <strong>Exclusions de garantie :</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Modifications effectuées par le client ou un tiers après la livraison</li>
            <li>Problèmes liés à l'hébergement non géré par iTech-Company</li>
            <li>Incompatibilités dues à des mises à jour système/navigateur</li>
            <li>Utilisation non conforme aux recommandations d'iTech-Company</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">8.3. Limitation de responsabilité</h4>
          <p className="mb-4">
            La responsabilité d'iTech-Company ne peut être engagée qu'en cas de faute prouvée et
            est limitée au montant de la prestation facturée.
          </p>

          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              iTech-Company ne pourra en aucun cas être tenue responsable des dommages indirects
              (perte de chiffre d'affaires, perte de données, perte d'exploitation, etc.) subis
              par le client.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Clock,
      title: '9. Maintenance et support',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">9.1. Maintenance corrective</h4>
          <p className="mb-4">
            Incluse pendant la période de garantie (3 mois). Au-delà, la maintenance corrective
            peut faire l'objet d'un contrat de maintenance ou être facturée à l'heure.
          </p>

          <h4 className="font-semibold mb-3 text-lg">9.2. Maintenance évolutive</h4>
          <p className="mb-4">
            Les demandes d'évolution (nouvelles fonctionnalités, améliorations) font l'objet
            de devis séparés.
          </p>

          <h4 className="font-semibold mb-3 text-lg">9.3. Contrats de maintenance</h4>
          <p className="mb-4">
            iTech-Company propose différentes formules de maintenance incluant :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Support technique prioritaire</li>
            <li>Mises à jour de sécurité</li>
            <li>Sauvegardes régulières</li>
            <li>Monitoring et surveillance</li>
            <li>Corrections illimitées</li>
          </ul>
        </>
      ),
    },
    {
      icon: AlertCircle,
      title: '10. Résiliation et annulation',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">10.1. Résiliation par le client</h4>
          <p className="mb-4">
            Le client peut résilier le contrat moyennant un préavis de <strong>15 jours</strong>
            par lettre recommandée avec accusé de réception.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mb-4">
            <p className="text-sm">
              <strong>⚠️ Pénalités :</strong> En cas de résiliation anticipée, le client devra
              s'acquitter de 50% du montant total du devis à titre d'indemnité forfaitaire,
              en plus des sommes déjà facturées pour les prestations réalisées.
            </p>
          </div>

          <h4 className="font-semibold mb-3 text-lg">10.2. Résiliation par iTech-Company</h4>
          <p className="mb-4">
            iTech-Company peut résilier le contrat de plein droit en cas de :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Non-paiement malgré relance</li>
            <li>Fourniture tardive ou incomplète des éléments nécessaires</li>
            <li>Comportement inapproprié du client</li>
            <li>Violation des présentes CGV</li>
          </ul>
        </>
      ),
    },
    {
      icon: Scale,
      title: '11. Droit applicable et litiges',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">11.1. Droit applicable</h4>
          <p className="mb-4">
            Les présentes CGV sont régies par le droit malgache.
          </p>

          <h4 className="font-semibold mb-3 text-lg">11.2. Règlement amiable</h4>
          <p className="mb-4">
            En cas de différend, les parties s'engagent à rechercher une solution amiable avant
            toute action judiciaire.
          </p>

          <h4 className="font-semibold mb-3 text-lg">11.3. Juridiction compétente</h4>
          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              En cas de litige et à défaut d'accord amiable, le litige sera porté devant les
              tribunaux compétents de Madagascar, nonobstant pluralité de défendeurs ou appel
              en garantie.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: FileText,
      title: '12. Dispositions générales',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">12.1. Force majeure</h4>
          <p className="mb-4">
            iTech-Company ne pourra être tenue responsable en cas de force majeure ou de circonstances
            indépendantes de sa volonté (catastrophes naturelles, grèves, pannes internet généralisées, etc.).
          </p>

          <h4 className="font-semibold mb-3 text-lg">12.2. Nullité partielle</h4>
          <p className="mb-4">
            Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou
            déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision
            définitive d'une juridiction compétente, les autres stipulations garderont toute leur
            force et leur portée.
          </p>

          <h4 className="font-semibold mb-3 text-lg">12.3. Modification des CGV</h4>
          <p className="mb-4">
            iTech-Company se réserve le droit de modifier les présentes CGV à tout moment. Les CGV
            applicables sont celles en vigueur à la date de la commande.
          </p>

          <div className="bg-electric-500/10 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Dernière mise à jour :</strong> 4 décembre 2025
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Conditions Générales de Vente - iTech-Company"
        description="Consultez les conditions générales de vente d'iTech-Company : tarifs, modalités de paiement, délais, garanties et responsabilités pour nos prestations de développement web et mobile."
        keywords="CGV, conditions générales de vente, tarifs, paiement, garanties, développement web, développement mobile, Madagascar"
        url="/cgv"
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
                <FileText className="w-10 h-10 text-electric-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Conditions Générales <span className="text-gradient">de Vente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Cadre contractuel de nos prestations
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Découvrez les conditions applicables à l'ensemble de nos services de développement
              web, mobile et design.
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

          <div className="mb-12">
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Information importante</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Toute commande de prestations auprès d'iTech-Company implique l'acceptation
                    pleine et entière des présentes Conditions Générales de Vente. Nous vous
                    recommandons de les lire attentivement avant toute commande.
                  </p>
                </div>
              </div>
            </Card>
          </div>

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
                <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Demander un devis
                  </a>
                  <a
                    href="mailto:contact@itech-company.com"
                    className="inline-flex items-center justify-center gap-2 border-2 border-electric-500 hover:bg-electric-500 text-electric-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default CGV
