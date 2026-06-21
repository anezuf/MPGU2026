import { useEffect, useRef, useState } from 'react'
import AIToolsPage from './AIToolsPage/AIToolsPage'
import AIRecommendationsPage from './AIRecommendationsPage/AIRecommendationsPage'
import AboutPage from './AboutPage/AboutPage'
import ToolsPage from './ToolsPage/ToolsPage'
import BlockInteractive from './BlockInteractive'
import SubjectsPage from './SubjectsPage/SubjectsPage'
import BlockTemplates from './BlockTemplates'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import Sidebar from '../ui/Sidebar/Sidebar'
import { HUB_NAV_ITEMS } from '../../data/navHub'
import { HUB_PAGE_STORAGE_KEY } from '../../constants'
import OverviewPage from '../../pages/OverviewPage/OverviewPage'

const HUB_PAGES = new Set([
  'home',
  'feedback',
  'about',
  'ai-guide',
  ...HUB_NAV_ITEMS.map(({ page }) => page),
])

function getInitialHubPage() {
  const savedPage = sessionStorage.getItem(HUB_PAGE_STORAGE_KEY)
  return HUB_PAGES.has(savedPage) ? savedPage : 'home'
}

function Hub({ onLogout }) {
  const [activePage, setActivePage] = useState(getInitialHubPage)
  const hubMainRef = useRef(null)
  const sidebarActivePage = activePage === 'ai-guide' ? 'tips' : activePage

  useEffect(() => {
    sessionStorage.setItem(HUB_PAGE_STORAGE_KEY, activePage)
  }, [activePage])

  function handleNavigate(pageKey) {
    hubMainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActivePage(pageKey)
  }

  function renderActivePage() {
    if (activePage === 'home') {
      return <OverviewPage onNavigate={handleNavigate} />
    }
    if (activePage === 'tools') {
      return <ToolsPage />
    }
    if (activePage === 'ai') {
      return <AIToolsPage />
    }
    if (activePage === 'tips' || activePage === 'ai-guide') {
      return <AIRecommendationsPage />
    }
    if (activePage === 'templates') {
      return <BlockTemplates />
    }
    if (activePage === 'interactive') {
      return <BlockInteractive />
    }
    if (activePage === 'subjects') {
      return <SubjectsPage />
    }
    if (activePage === 'feedback') {
      return <FeedbackForm />
    }
    if (activePage === 'about') {
      return <AboutPage />
    }
    return <OverviewPage onNavigate={handleNavigate} />
  }

  return (
    <div className="hub-layout">
      <Sidebar
        onLogout={onLogout}
        onNavigate={handleNavigate}
        activePage={sidebarActivePage}
      />
      <main className="hub-main" ref={hubMainRef}>
        {renderActivePage()}
      </main>
    </div>
  )
}

export default Hub
