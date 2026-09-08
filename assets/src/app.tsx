import React from 'react'
import { createRoot } from 'react-dom/client'
import Teams from './components/Teams'
import Teams2023 from './components/Teams2023'
import Teams2024 from './components/Teams2024'
import Teams2025 from './components/Teams2025'
import Teams2026 from './components/Teams2026'
import Members from './components/Members'
import App from './components/Navbar'
import Footer from './components/footer'

const mount = (id: string, element: React.ReactElement) => {
  const dom = document.getElementById(id)
  if (dom) createRoot(dom).render(element)
}

mount('teams', <Teams />)
mount('teams2023', <Teams2023 />)
mount('teams2024', <Teams2024 />)
mount('teams2025', <Teams2025 />)
mount('teams2026', <Teams2026 />)
mount('members', <Members />)
mount('navbar', <App />)
mount('footer', <Footer />)
