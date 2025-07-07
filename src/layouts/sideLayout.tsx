import type { ReactNode } from 'react'
import Sidebar from '../components/sidebar'

type SidebarLayoutProps = {
  children: ReactNode
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar />

    
      <main className="ml-64 w-full p-6">
        {children}
      </main>
    </div>
  )
}

export default SidebarLayout
