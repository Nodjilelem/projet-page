import {
  Palette,
  MonitorSmartphone,
  Megaphone,
  BarChart4,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Stratégie créative',
    description:
      'Création de chartes graphiques personnalisées;Plans de communication adaptés à chaque cible;Conseils en branding et storytelling.',
    color: 'text-pink-500',
  },
  {
    icon: MonitorSmartphone,
    title: 'Conception digitale',
    description:
      'Sites web modernes et responsifs;Applications interactives pour la gestion métier;Design cohérent avec votre identité visuelle.',
    color: 'text-blue-500',
  },
  {
    icon: Megaphone,
    title: 'Visibilité & publicité',
    description:
      'Promotion sur réseaux sociaux et magazines francophones;Diffusion sur blogs, newsletters et pages événementielles;Optimisation SEO pour une présence renforcée.',
    color: 'text-yellow-500',
  },
  {
    icon: BarChart4,
    title: 'Outils de gestion',
    description:
      'Logiciels de comptabilité et de facturation sur mesure;Centralisation des données;Conformité aux normes fiscales (TVA, réglementations locales).',
    color: 'text-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'Formation & renforcement',
    description:
      'Formations numériques certifiantes en présentiel ou à distance;Ateliers pour entreprises et jeunes talents;Montée en compétences accompagnée et personnalisée.',
    color: 'text-green-500',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement humain',
    description:
      'Suivi des plans de carrière;Engagement envers la satisfaction client;Relations professionnelles durables et éthiques.',
    color: 'text-purple-500',
  },
]

const stats = [
  { label: 'Entreprises accompagnées', value: '250+' },
  { label: 'Participants formés', value: '1,200+' },
  { label: 'Projets créatifs livrés', value: '180+' },
  { label: 'Taux de satisfaction', value: '98%' },
]

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Nos Fonctionnalités
        </h2>
        <p className="text-gray-600">
          Chez Global Info Digital, nous façonnons l’impact numérique avec des solutions stratégiques, créatives et humaines.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <Icon className={`w-6 h-6 mb-3 ${feature.color}`} />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">{feature.description}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
