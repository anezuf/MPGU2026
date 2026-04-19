import { useState } from 'react'
import BlockAI from './BlockAI'
import BlockInteractive from './BlockInteractive'
import BlockSubjects from './BlockSubjects'
import BlockTemplates from './BlockTemplates'
import HubHome from './HubHome'
import NavBar from '../ui/NavBar'

function Hub({ onLogout }) {
  const [activePage, setActivePage] = useState('home')

  function handleNavigate(pageKey) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActivePage(pageKey)
  }

  function renderActivePage() {
    if (activePage === 'home') {
      return <HubHome onNavigate={handleNavigate} />
    }
    if (activePage === 'ai') {
      return <BlockAI />
    }
    if (activePage === 'templates') {
      return <BlockTemplates />
    }
    if (activePage === 'interactive') {
      return <BlockInteractive />
    }
    if (activePage === 'subjects') {
      return <BlockSubjects />
    }
    return <HubHome onNavigate={handleNavigate} />
  }

  return (
    <div className="hub">
      <NavBar onLogout={onLogout} onNavigate={handleNavigate} activePage={activePage} />

      <main className="hub-content">
        {renderActivePage()}
      </main>
    </div>
  )
}

export default Hub
