import type { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Header />

    
      <main className="flex-grow">
        {children}
      </main>

    
      <Footer />
    </div>
  )
}

export default MainLayout
