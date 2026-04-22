import { useEffect, useRef, useState } from 'react'
import BlockAI from './BlockAI'
import AboutPage from './AboutPage/AboutPage'
import BlockInteractive from './BlockInteractive'
import BlockSubjects from './BlockSubjects'
import BlockTemplates from './BlockTemplates'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import HubHome from './HubHome'
import Sidebar from '../ui/Sidebar/Sidebar'
import { HUB_NAV_ITEMS } from '../../data/navHub'
import { HUB_PAGE_STORAGE_KEY } from '../../constants'

const HUB_PAGES = new Set([
  'home',
  'feedback',
  'about',
  ...HUB_NAV_ITEMS.map(({ page }) => page),
])

function getInitialHubPage() {
  const savedPage = sessionStorage.getItem(HUB_PAGE_STORAGE_KEY)
  return HUB_PAGES.has(savedPage) ? savedPage : 'home'
}

function Hub({ onLogout }) {
  const [activePage, setActivePage] = useState(getInitialHubPage)
  const hubMainRef = useRef(null)

  useEffect(() => {
    sessionStorage.setItem(HUB_PAGE_STORAGE_KEY, activePage)
  }, [activePage])

  function handleNavigate(pageKey) {
    hubMainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
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
    if (activePage === 'feedback') {
      return <FeedbackForm />
    }
    if (activePage === 'about') {
      return <AboutPage />
    }
    return <HubHome onNavigate={handleNavigate} />
  }

  return (
    <div className="hub-layout">
      <Sidebar
        onLogout={onLogout}
        onNavigate={handleNavigate}
        activePage={activePage}
      />
      <main className="hub-main" ref={hubMainRef}>
        {renderActivePage()}
      </main>
    </div>
  )
}

export default Hub
