import { useCallback, useMemo, useState } from 'react'
import {
  LESSON_TOOLS,
  TOOL_SIDEBAR_ITEMS,
  TOOLS_INFO_BLOCKS,
} from '../../../data/lessonTools'
import ToolCard from './ToolCard'
import '../SubjectsPage/SubjectsPage.css'

function ToolsPageHeader() {
  return (
    <header className="subp-header">
      <h1 className="hub-page-title">Цифровые инструменты для уроков</h1>
      <p className="hub-page-subtitle">
        Сервисы для объяснения нового материала, создания заданий, опросов,
        тестирования и визуализации информации на уроках обществознания.
      </p>
    </header>
  )
}

function ToolsInfoPanel() {
  return (
    <section className="subp-info-panel" aria-label="Справка об инструментах">
      {TOOLS_INFO_BLOCKS.map((block) => (
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

function ToolsPage() {
  const [activeType, setActiveType] = useState('all')

  const filteredTools = useMemo(() => {
    if (activeType === 'all') return LESSON_TOOLS
    return LESSON_TOOLS.filter((item) => item.type === activeType)
  }, [activeType])

  const handleTypeSelect = useCallback((typeId) => {
    setActiveType(typeId)
  }, [])

  return (
    <section className="subjects-page" aria-label="Цифровые инструменты для уроков">
      <ToolsPageHeader />

      <div className="subp-subject-tabs" role="tablist" aria-label="Направления">
        <button type="button" className="subp-subject-tab subp-subject-tab--active" role="tab" aria-selected="true">
          Обществознание
        </button>
      </div>

      <div className="subp-layout">
        <aside className="subp-sidebar" aria-label="Типы инструментов">
          <p className="subp-sidebar__label">ТИПЫ ИНСТРУМЕНТОВ</p>
          <ul className="subp-sidebar__list">
            {TOOL_SIDEBAR_ITEMS.map((item) => (
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
              Подборка сервисов регулярно обновляется — добавляем проверенные платформы для уроков.
            </p>
            <button type="button" className="subp-sidebar__highlight-btn" disabled>
              Подробнее →
            </button>
          </div>
        </aside>

        <div className="subp-grid tools-grid" aria-label="Цифровые инструменты">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          ) : (
            <p className="subp-grid__empty">Инструменты этого типа появятся позже.</p>
          )}
        </div>
      </div>

      <ToolsInfoPanel />
    </section>
  )
}

export default ToolsPage
