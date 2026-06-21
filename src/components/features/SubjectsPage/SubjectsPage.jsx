import { useCallback, useMemo, useState } from 'react'
import {
  getMaterialsBySidebarType,
  MATERIAL_SIDEBAR_ITEMS,
  SUBJECTS_INFO_BLOCKS,
} from '../../../data/subjectMaterials'
import MaterialCard from './MaterialCard'
import './SubjectsPage.css'

function SubjectsPageHeader() {
  return (
    <header className="subp-header">
      <h1 className="hub-page-title">Предметная копилка</h1>
      <p className="hub-page-subtitle">
        Подборка учебных материалов по обществознанию: презентации, рабочие листы,
        квизы, инфографики и методические рекомендации для уроков в школе.
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
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMaterials = useMemo(() => {
    const materials = getMaterialsBySidebarType(activeType)
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase('ru-RU')

    if (!normalizedQuery) {
      return materials
    }

    return materials.filter((material) => {
      const searchableText = [
        material.title,
        material.description,
        material.typeLabel,
        material.grades,
        material.tag,
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('ru-RU')

      return searchableText.includes(normalizedQuery)
    })
  }, [activeType, searchQuery])

  const handleTypeSelect = useCallback((typeId) => {
    setActiveType(typeId)
  }, [])

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value)
  }, [])

  const emptyMessage = searchQuery.trim()
    ? 'По выбранным фильтрам ничего не найдено.'
    : 'Материалы этого типа появятся позже.'

  return (
    <section className="subjects-page" aria-label="Предметная копилка">
      <SubjectsPageHeader />

      <div className="subp-subject-tabs" role="tablist" aria-label="Предметы">
        <button type="button" className="subp-subject-tab subp-subject-tab--active" role="tab" aria-selected="true">
          Обществознание
        </button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Поиск материалов..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="subp-layout">
        <aside className="subp-sidebar" aria-label="Типы материалов">
          <p className="subp-sidebar__label">ТИПЫ МАТЕРИАЛОВ</p>
          <ul className="subp-sidebar__list">
            {MATERIAL_SIDEBAR_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`subp-sidebar__chip${activeType === item.id ? ' subp-sidebar__chip--active' : ''}`}
                  onClick={() => handleTypeSelect(item.id)}
                  aria-current={activeType === item.id ? 'true' : undefined}
                >
                  <span className="subp-sidebar__chip-icon" aria-hidden="true">{item.icon}</span>
                  <span className="subp-sidebar__chip-copy">
                    <span className="subp-sidebar__chip-name">{item.title}</span>
                    <span className="subp-sidebar__chip-note">{item.note}</span>
                  </span>
                  <span className="subp-sidebar__chip-count">{item.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="subp-sidebar__highlight">
            <p className="subp-sidebar__highlight-title">АКТУАЛЬНО</p>
            <p className="subp-sidebar__highlight-text">
              Скоро появятся новые материалы по темам курса обществознания для 8–11 классов.
            </p>
            <button type="button" className="subp-sidebar__highlight-btn" disabled>
              Подробнее →
            </button>
          </div>
        </aside>

        <div className="subp-grid tools-grid" aria-label="Материалы по обществознанию">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))
          ) : (
            <p className="subp-grid__empty">{emptyMessage}</p>
          )}
        </div>
      </div>

      <SubjectsInfoPanel />
    </section>
  )
}

export default SubjectsPage
