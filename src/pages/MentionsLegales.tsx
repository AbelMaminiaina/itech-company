import { motion } from 'framer-motion'
import { Scale, Building2, Server, Shield, Mail, Phone, MapPin } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import SEO from '../components/SEO'

const MentionsLegales = () => {
  const sections = [
    {
      icon: Building2,
      title: '1. Éditeur du site',
      content: (
        <>
          <p className="mb-4">
            Le site web <strong>www.itech-company.com</strong> est édité par :
          </p>
          <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg space-y-3">
            <p><strong>Raison sociale :</strong> iTech-Company</p>
            <p><strong>Forme juridique :</strong> [À compléter - SARL, SAS, etc.]</p>
            <p><strong>Capital social :</strong> [À compléter]</p>
            <p><strong>Numéro d'immatriculation :</strong> [NIF à compléter]</p>
            <p><strong>Siège social :</strong> [Adresse complète à Madagascar]</p>
            <p className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span><strong>Téléphone :</strong> [Numéro à compléter]</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">
                  contact@itech-company.com
                </a>
              </span>
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Directeur de la publication</h4>
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <p><strong>Nom :</strong> RAZANADRASOA Hanitra</p>
              <p><strong>Qualité :</strong> CEO & Founder</p>
              <p>
                <strong>Contact :</strong>{' '}
                <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">
                  contact@itech-company.com
                </a>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Server,
      title: '2. Hébergement',
      content: (
        <>
          <p className="mb-4">
            Le site www.itech-company.com est hébergé par :
          </p>
          <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg space-y-3">
            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur - ex: Vercel, Netlify, OVH, etc.]</p>
            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
            <p><strong>Site web :</strong> [URL de l'hébergeur]</p>
            <p><strong>Téléphone :</strong> [Numéro de l'hébergeur]</p>
          </div>

          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Note :</strong> Ces informations sont fournies conformément à la législation en vigueur
              concernant l'hébergement de sites web.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Shield,
      title: '3. Propriété intellectuelle',
      content: (
        <>
          <p className="mb-4">
            L'ensemble du contenu du site www.itech-company.com (structure, textes, logos, images, vidéos,
            graphismes, animations, sons, etc.) est la propriété exclusive d'iTech-Company, à l'exception
            des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
          </p>

          <h4 className="font-semibold mb-3 text-lg">Droits d'auteur</h4>
          <p className="mb-4">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
            même partielle, de ces différents éléments est strictement interdite sans l'accord exprès
            par écrit d'iTech-Company.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mb-4">
            <p className="text-sm">
              <strong>⚖️ Sanctions :</strong> Toute utilisation non autorisée du site ou de l'un quelconque
              des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie
              conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </div>

          <h4 className="font-semibold mb-3 text-lg">Marques</h4>
          <p className="mb-4">
            "iTech-Company" ainsi que tous les logos et visuels figurant sur le site sont des marques
            déposées ou en cours de dépôt. Toute reproduction totale ou partielle de ces marques ou de
            ces logos effectuée à partir des éléments du site sans l'autorisation expresse d'iTech-Company
            est prohibée.
          </p>

          <h4 className="font-semibold mb-3 text-lg">Contenus tiers</h4>
          <p>
            Les éléments présentés sur le site provenant de tiers (images d'illustration, icônes, etc.)
            sont utilisés avec autorisation ou sous licence appropriée (licence libre, Creative Commons, etc.).
          </p>
        </>
      ),
    },
    {
      icon: Scale,
      title: '4. Limitation de responsabilité',
      content: (
        <>
          <h4 className="font-semibold mb-3 text-lg">Informations du site</h4>
          <p className="mb-4">
            iTech-Company s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
            sur ce site. Toutefois, iTech-Company ne peut garantir l'exactitude, la précision ou
            l'exhaustivité des informations mises à disposition sur ce site.
          </p>

          <p className="mb-4">
            En conséquence, iTech-Company décline toute responsabilité pour :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
            <li>Tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations</li>
            <li>Les éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'internaute</li>
            <li>L'indisponibilité temporaire ou totale du site</li>
          </ul>

          <h4 className="font-semibold mb-3 text-lg">Liens hypertextes</h4>
          <p className="mb-4">
            Le site www.itech-company.com peut contenir des liens hypertextes vers d'autres sites.
            iTech-Company n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant
            à leur contenu ou à leur accessibilité.
          </p>

          <p className="mb-4">
            La mise en place d'un lien hypertexte en direction du site www.itech-company.com nécessite
            une autorisation préalable et écrite d'iTech-Company. Cette autorisation peut être demandée
            par email à contact@itech-company.com.
          </p>

          <h4 className="font-semibold mb-3 text-lg">Force majeure</h4>
          <p>
            iTech-Company ne pourra être tenue responsable en cas de force majeure ou de faits indépendants
            de sa volonté.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '5. Protection des données personnelles',
      content: (
        <>
          <p className="mb-4">
            Pour toute information concernant la protection de vos données personnelles, nous vous
            invitons à consulter notre{' '}
            <a href="/politique-confidentialite" className="text-electric-500 hover:text-electric-400 underline">
              Politique de Confidentialité
            </a>
            .
          </p>

          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg space-y-2">
            <p><strong>Responsable du traitement des données :</strong> iTech-Company</p>
            <p>
              <strong>Contact DPO :</strong>{' '}
              <a href="mailto:dpo@itech-company.com" className="text-electric-500 hover:text-electric-400">
                dpo@itech-company.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi malgache
            n° 2014-038, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
            aux données personnelles vous concernant.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '6. Cookies',
      content: (
        <>
          <p className="mb-4">
            Le site www.itech-company.com utilise des cookies pour améliorer l'expérience utilisateur
            et analyser le trafic.
          </p>

          <p className="mb-4">
            Pour en savoir plus sur notre utilisation des cookies et gérer vos préférences, consultez
            notre{' '}
            <a href="/cookies" className="text-electric-500 hover:text-electric-400 underline">
              Politique de Cookies
            </a>
            .
          </p>

          <div className="bg-electric-500/10 p-4 rounded-lg">
            <p className="text-sm">
              Vous pouvez à tout moment modifier vos préférences de cookies en vous rendant sur la
              page de gestion des cookies.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Scale,
      title: '7. Droit applicable et juridiction',
      content: (
        <>
          <p className="mb-4">
            Les présentes mentions légales sont régies par le droit malgache.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pour Madagascar</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les
                tribunaux compétents de Madagascar, conformément aux règles de procédure en vigueur.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pour l'Union Européenne</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Conformément à la réglementation européenne, les consommateurs résidant dans l'UE
                disposent également du droit de recourir à une procédure de médiation ou de saisir
                une juridiction compétente dans leur pays de résidence.
              </p>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Médiation :</strong> Conformément aux dispositions du Code de la consommation
              concernant le règlement amiable des litiges, iTech-Company adhère à [Nom du service
              de médiation - à compléter].
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Mail,
      title: '8. Contact',
      content: (
        <>
          <p className="mb-4">
            Pour toute question concernant les mentions légales ou le site www.itech-company.com,
            vous pouvez nous contacter :
          </p>

          <div className="bg-electric-500/10 p-6 rounded-lg space-y-3">
            <p className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@itech-company.com" className="text-electric-500 hover:text-electric-400">
                  contact@itech-company.com
                </a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span><strong>Téléphone :</strong> [Numéro à compléter]</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <span><strong>Adresse :</strong> [Adresse complète à compléter], Madagascar</span>
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Nous nous engageons à vous répondre dans les meilleurs délais.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '9. Modifications',
      content: (
        <>
          <p className="mb-4">
            iTech-Company se réserve le droit de modifier les présentes mentions légales à tout moment.
            Il est donc conseillé de les consulter régulièrement.
          </p>

          <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Dernière mise à jour :</strong> 4 décembre 2025
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Les présentes mentions légales ont été mises à jour pour la dernière fois à la date
            indiquée ci-dessus. Toute modification prendra effet immédiatement après sa publication
            sur le site.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="pt-20">
      <SEO
        title="Mentions Légales - iTech-Company"
        description="Mentions légales d'iTech-Company : informations sur l'éditeur du site, hébergement, propriété intellectuelle, protection des données et responsabilité."
        keywords="mentions légales, éditeur, hébergeur, propriété intellectuelle, droits d'auteur, RGPD, juridiction"
        url="/mentions-legales"
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
                <Scale className="w-10 h-10 text-electric-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Mentions <span className="text-gradient">Légales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Informations légales et réglementaires
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Conformément aux dispositions légales en vigueur, découvrez les informations
              relatives à l'éditeur et à l'hébergeur du site.
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
                <h3 className="text-2xl font-bold mb-4">Des questions ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Si vous avez des questions concernant ces mentions légales, n'hésitez pas
                  à nous contacter.
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

export default MentionsLegales
