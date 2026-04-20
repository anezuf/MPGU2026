import { useState } from 'react'

import { SUBJECTS } from '../../data/resources'
import Tabs from '../ui/Tabs'

const SUBJECT_TABS = [
  { id: 'society', label: 'Обществознание' },
  { id: 'orkse', label: 'ОРКСЭ' },
  { id: 'history', label: 'История' },
  { id: 'russian', label: 'Русский язык и литература' },
]

const PINK_TABS = new Set(['orkse', 'russian'])

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function BlockSubjects() {
  const [activeTab, setActiveTab] = useState('society')
  const activeResources = SUBJECTS[activeTab] ?? []
  const isPink = PINK_TABS.has(activeTab)

  return (
    <section id="subject-resources" className="hub-section">
      <div className="section-header">
        <h2 className="section-title">Предметные копилки</h2>
        <p className="section-subtitle">Ссылки на источники по четырём дисциплинам</p>
      </div>
      <Tabs tabs={SUBJECT_TABS} activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="ai-grid">
          {activeResources.map((resource) => (
            <article
              key={resource.id}
              className={isPink ? 'pcp-card pcp-card--service' : 'pcp-card'}
            >
              <div className={isPink ? 'pcp-header pcp-header--service' : 'pcp-header'}>
                <div className="pcp-header__left">
                  <div className="pcp-header__icon">
                    <ExternalLinkIcon />
                  </div>
                  <span className="pcp-header__label">{resource.tag ?? 'Ресурс'}</span>
                </div>
              </div>
              <div className="pcp-body">
                <h3 className="pcp-title">{resource.title}</h3>
                <div className={isPink ? 'pcp-content pcp-content--service' : 'pcp-content'}>
                  <p className="pcp-content__text">{resource.description}</p>
                </div>
                <a
                  className={isPink ? 'pcp-btn pcp-btn--pink' : 'pcp-btn'}
                  href={resource.url}
                  target="_blank"
                  rel="noopener"
                >
                  Открыть
                </a>
              </div>
            </article>
          ))}
        </div>
      </Tabs>
    </section>
  )
}

export default BlockSubjects
