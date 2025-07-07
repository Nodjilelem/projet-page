import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">À propos</h3>
          <p className="text-sm leading-relaxed">
            Chez <strong>Global Info Digital</strong>, nous propulsons la transformation digitale des entreprises au Tchad en leur offrant des solutions innovantes, accessibles et durablement efficaces. Nos partenaires révèlent leur potentiel numérique avec impact.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Accueil</a></li>
            <li><a href="#" className="hover:text-white transition">Blog </a></li>
            <li><a href="#" className="hover:text-white transition">Formations</a></li>
            <li><a href="#" className="hover:text-white transition">Nos services</a></li>
            <li><a href="#" className="hover:text-white transition">Équipe</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Nos services</h3>
          <ul className="space-y-2 text-sm">
            <li>Transformation digitale</li>
            <li>Hébergement & maintenance</li>
            <li>Consulting & formation</li>
            <li>Design UX/UI</li>
            <li>Développement web sur mesure</li>
            <li>Marketing digital & SEO</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>contact@globalinfodigital.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+235 94 05 73 13</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Moundou, Tchad</span>
            </li>
            <li className="flex gap-3 mt-4">
              <a href="#" className="hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <strong>Global Info Digital</strong>. Tous droits réservés.
        <p className="mt-2">
          <a href="#" className="hover:text-gray-300">Mentions légales</a> ·{' '}
          <a href="#" className="hover:text-gray-300">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
