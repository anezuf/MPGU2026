import { useEffect, useState } from 'react'
import BlockAI from './BlockAI'
import BlockInteractive from './BlockInteractive'
import BlockSubjects from './BlockSubjects'
import BlockTemplates from './BlockTemplates'
import HubHome from './HubHome'
import NavBar from '../ui/NavBar'
import { HUB_NAV_ITEMS } from '../../data/navHub'
import { HUB_PAGE_STORAGE_KEY } from '../../constants'

const HUB_PAGES = new Set(['home', ...HUB_NAV_ITEMS.map(({ page }) => page)])

function getInitialHubPage() {
  const savedPage = sessionStorage.getItem(HUB_PAGE_STORAGE_KEY)
  return HUB_PAGES.has(savedPage) ? savedPage : 'home'
}

function Hub({ onLogout }) {
  const [activePage, setActivePage] = useState(getInitialHubPage)

  useEffect(() => {
    sessionStorage.setItem(HUB_PAGE_STORAGE_KEY, activePage)
  }, [activePage])

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
      <div className="hub-body">
        <main className="hub-content">
          {renderActivePage()}
        </main>
      </div>
    </div>
  )
}

export default Hub
