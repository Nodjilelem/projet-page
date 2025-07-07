import { Search } from 'lucide-react'
import im1 from '../assets/logo.jpeg'
import im2 from '../assets/img.png'

const Header = () => {
  return (
    <>
      <div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <a href="#" className="flex items-center">
                  <img className="w-28 h-28" src={im1} alt="logo" />
                </a>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Global Info Digital</h1>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <a href="#" className="text-base text-black hover:text-blue-600 transition">Accueil</a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition">À propos</a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition">Services</a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition">Contacts</a>
              </div>

              <div className="hidden lg:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-40 lg:w-64"
                />
              </div>

              <button type="button" className="inline-flex p-2 text-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section className="bg-[#FCF8F1] bg-opacity-30 py-12 sm:py-20 lg:py-28">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Une Entreprise Digitale pour les solutions Numériques</p>
              <h1 className="mt-4 text-3xl sm:text-5xl xl:text-6xl font-bold text-black">Connectez-vous pour l'innovation de vos Entreprises</h1>
              <p className="mt-4 text-lg sm:text-xl text-black">Développez votre carrière rapidement avec Global Info Digital</p>

              <a
                href="#"
                className="inline-flex items-center px-6 py-3 mt-8 font-semibold bg-blue-100 text-black rounded-full hover:bg-blue-200 transition"
              >
                Nous joindre
                <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

              <p className="mt-4 text-gray-600">
                <a href="#" className="text-black hover:underline">Se connecter</a>
              </p>
            </div>

            <div>
              <img className="w-full h-auto" src={im2} alt="presentation" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header
