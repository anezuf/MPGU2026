import { useState } from 'react'

import BlockAI from './BlockAI'
import BlockInteractive from './BlockInteractive'
import BlockSubjects from './BlockSubjects'
import BlockTemplates from './BlockTemplates'

function Hub({ onLogout }) {
  const [activeTab, setActiveTab] = useState('social-studies')

  return (
    <div className="hub">
      <header className="hub-nav" data-no-print>
        <div className="hub-nav__inner">
          <h1 className="hub-nav__title">Цифровой навигатор педагога</h1>
          <nav className="hub-nav__anchors" aria-label="Навигация по разделам">
            <a className="hub-nav__anchor" href="#ai-tools">
              Нейросети для учителя
            </a>
            <a className="hub-nav__anchor" href="#templates-visuals">
              Шаблоны и визуал
            </a>
            <a className="hub-nav__anchor" href="#interactive-tools">
              Инструменты интерактива
            </a>
            <a className="hub-nav__anchor" href="#subject-resources">
              Предметные копилки
            </a>
          </nav>
          <button className="btn-outline-pink hub-nav__logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="hub-content">
        <BlockAI />
        <BlockTemplates />
        <BlockInteractive />
        <BlockSubjects activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
    </div>
  )
}

export default Hub
