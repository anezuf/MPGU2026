import { useCallback, useMemo, useState } from 'react'
import {
  MATERIAL_SIDEBAR_ITEMS,
  SOCIETY_MATERIALS,
  SUBJECTS_INFO_BLOCKS,
} from '../../../data/subjectMaterials'
import MaterialCard from './MaterialCard'
import './SubjectsPage.css'

function SubjectsPageHeader() {
  return (
    <header className="subp-header">
      <h1 className="hub-page-title">Предметные копилки</h1>
      <p className="hub-page-subtitle">
        Подборка учебных материалов по обществознанию: рабочие листы, презентации,
        квизы, видеоуроки и методические рекомендации для уроков в школе.
      </p>
    </header>
  )
}

function SubjectsInfoPanel() {
  return (
    <section className="subp-info-panel" aria-label="Справка о материалах">
      {SUBJECTS_INFO_BLOCKS.map((block) => (
        <article key={block.id} className="subp-info-panel__item">
          <span className="subp-info-panel__icon" aria-hidden="true">{block.icon}</span>
          <div>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

function SubjectsPage() {
  const [activeType, setActiveType] = useState('all')

  const filteredMaterials = useMemo(() => {
    if (activeType === 'all') return SOCIETY_MATERIALS
    return SOCIETY_MATERIALS.filter((item) => item.type === activeType)
  }, [activeType])

  const handleTypeSelect = useCallback((typeId) => {
    setActiveType(typeId)
  }, [])

  return (
    <section className="subjects-page" aria-label="Предметные копилки">
      <SubjectsPageHeader />

      <div className="subp-subject-tabs" role="tablist" aria-label="Предметы">
        <button type="button" className="subp-subject-tab subp-subject-tab--active" role="tab" aria-selected="true">
          Обществознание
        </button>
      </div>

      <div className="subp-layout">
        <aside className="subp-sidebar" aria-label="Типы материалов">
          <p className="subp-sidebar__label">ТИПЫ МАТЕРИАЛОВ</p>
          <ul className="subp-sidebar__list">
            {MATERIAL_SIDEBAR_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`subp-sidebar__item${activeType === item.id ? ' subp-sidebar__item--active' : ''}`}
                  onClick={() => handleTypeSelect(item.id)}
                  aria-current={activeType === item.id ? 'true' : undefined}
                >
                  <span className="subp-sidebar__icon" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="subp-sidebar__highlight">
            <p className="subp-sidebar__highlight-title">АКТУАЛЬНО</p>
            <p className="subp-sidebar__highlight-text">
              Скоро появятся новые материалы по темам курса обществознания для 5–11 классов.
            </p>
            <button type="button" className="subp-sidebar__highlight-btn" disabled>
              Подробнее →
            </button>
          </div>
        </aside>

        <div className="subp-grid" aria-label="Материалы по обществознанию">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))
          ) : (
            <p className="subp-grid__empty">Материалы этого типа появятся позже.</p>
          )}
        </div>
      </div>

      <SubjectsInfoPanel />
    </section>
  )
}

export default SubjectsPage
