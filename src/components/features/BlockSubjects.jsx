import { useState } from 'react'

import { SUBJECTS } from '../../data/resources'
import Tabs from '../ui/Tabs'

const SUBJECT_TABS = [
  { id: 'society', label: 'Обществознание' },
  { id: 'orkse', label: 'ОРКСЭ' },
  { id: 'history', label: 'История' },
  { id: 'russian', label: 'Русский язык и литература' },
]

function BlockSubjects() {
  const [activeTab, setActiveTab] = useState('society')
  const activeResources = SUBJECTS[activeTab] ?? []

  return (
    <section id="subject-resources" className="hub-section">
      <h2 className="hub-section__title">
        <span className="block-heading-fill">Предметные копилки</span>
      </h2>
      <Tabs tabs={SUBJECT_TABS} activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="ai-grid">
          {activeResources.map((resource) => (
            <article key={resource.id} className="ai-card">
              {resource.tag ? <span className="pill-teal">{resource.tag}</span> : null}
              <h3 className="ai-card__title">{resource.title}</h3>
              <p className="ai-card__description">{resource.description}</p>
              <a
                className="ai-card__service-link ai-card__action btn-outline-teal"
                href={resource.url}
                target="_blank"
                rel="noopener"
              >
                Открыть
              </a>
            </article>
          ))}
        </div>
      </Tabs>
    </section>
  )
}

export default BlockSubjects
