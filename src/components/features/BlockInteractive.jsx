import { useMemo, useState } from 'react'
import { INTERACTIVE_TOOLS } from '../../data/resources'

const CATEGORIES = [
  { label: 'Все инструменты', value: '', count: 13, icon: '✨', note: 'полный каталог' },
  { label: 'Тесты и опросы', value: 'Тесты и опросы', count: 3, icon: '📝', note: 'проверка и фидбек' },
  { label: 'Квизы и игры', value: 'Квизы и игры', count: 3, icon: '🎮', note: 'соревнования' },
  { label: 'Упражнения и тренажеры', value: 'Упражнения и тренажеры', count: 3, icon: '🧩', note: 'закрепление' },
  { label: 'Доски и вебинары', value: 'Доски и вебинары', count: 2, icon: '🖊️', note: 'онлайн-занятия' },
  { label: 'Курсы и LMS', value: 'Курсы и LMS', count: 3, icon: '🎓', note: 'модули и уроки' },
]

const RECOMMENDATIONS = [
  {
    icon: '🎯',
    title: 'Определите цель урока',
    text: 'Выберите инструмент под конкретную задачу: проверка знаний, вовлечение, рефлексия и др.',
  },
  {
    icon: '👤',
    title: 'Учитывайте возраст',
    text: 'Для младших школьников выбирайте простые и наглядные сервисы, старшим — более сложные.',
  },
  {
    icon: '🚀',
    title: 'Начинайте с малого',
    text: 'Попробуйте один инструмент на небольшом этапе урока, постепенно расширяйте использование.',
  },
  {
    icon: '💬',
    title: 'Получайте обратную связь',
    text: 'Анализируйте результаты и отзывы учеников, корректируйте подход и инструменты.',
  },
]

function BlockInteractive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredTools = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase('ru-RU')

    return INTERACTIVE_TOOLS
      .filter((tool) => {
        if (!selectedCategory) {
          return true
        }

        return tool.categories.includes(selectedCategory)
      })
      .filter((tool) => {
        if (!normalizedQuery) {
          return true
        }

        const searchableText = [
          tool.title,
          tool.description,
          tool.price,
          ...tool.tags,
        ].join(' ').toLocaleLowerCase('ru-RU')

        return searchableText.includes(normalizedQuery)
      })
  }, [searchQuery, selectedCategory])

  return (
    <section id="interactive-tools" className="page-wrapper">
      <header className="catalog-header">
        <div className="catalog-header__content">
          <p className="breadcrumb">ИНСТРУМЕНТЫ ИНТЕРАКТИВА</p>
          <h1>Цифровые инструменты для уроков</h1>
          <p className="subtitle">
            Подборка проверенных сервисов и платформ для создания интерактивных
            заданий, тестов, квизов, опросов и презентаций. Инструменты помогут
            сделать уроки более вовлекающими и продуктивными.
          </p>
        </div>

        <div className="tip-card">
          <div className="tip-icon">💡</div>
          <div>
            <strong>Как выбрать инструмент?</strong>
            <p>
              Ориентируйтесь на цели урока, возраст учеников и доступные
              устройства. В карточках указаны ключевые особенности и идеи
              применения.
            </p>
          </div>
        </div>
      </header>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Поиск инструментов..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="page-layout">
        <aside className="sidebar">
          <p className="sidebar-label">КАТЕГОРИИ</p>
          <ul className="category-list">
            {CATEGORIES.map((category) => (
              <li key={category.label}>
                <label className="category-chip">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category.value}
                    onChange={() => {
                      setSelectedCategory((currentCategory) => (
                        currentCategory === category.value ? '' : category.value
                      ))
                    }}
                  />
                  <span className="category-icon" aria-hidden="true">{category.icon}</span>
                  <span className="category-copy">
                    <span className="category-name">{category.label}</span>
                    <span className="category-note">{category.note}</span>
                  </span>
                  <span className="count">{category.count}</span>
                </label>
              </li>
            ))}
          </ul>

        </aside>

        <main className="catalog-content">
          {filteredTools.length > 0 ? (
            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <article key={tool.id} className="tool-card">
                  <div className="card-top">
                    <div
                      className={`tool-icon${tool.logoUrl ? ' tool-icon--logo' : ''}`}
                      style={tool.logoUrl ? undefined : { background: tool.iconBg }}
                    >
                      {tool.logoUrl && (
                        <img
                          className="tool-logo"
                          src={tool.logoUrl}
                          alt=""
                          loading="lazy"
                          aria-hidden="true"
                          onError={(event) => {
                            event.currentTarget.hidden = true
                            event.currentTarget.nextElementSibling.hidden = false
                          }}
                        />
                      )}
                      <span hidden={Boolean(tool.logoUrl)} style={{ fontSize: 22 }}>{tool.emoji}</span>
                    </div>
                    <div>
                      <h3 className="tool-name">{tool.title}</h3>
                      <div className="tool-tags">
                        {tool.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="tool-desc">{tool.description}</p>
                  <p className="tool-subject">Предметы: <span>все</span></p>
                  <div className="tool-footer">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener"
                      className="btn-open"
                    >
                      Открыть
                    </a>
                    <span className="pricing">{tool.price}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="catalog-empty">По выбранным фильтрам ничего не найдено.</p>
          )}
        </main>
      </div>

      <section className="recommendations">
        <p className="sidebar-label">РЕКОМЕНДАЦИИ ПО ВНЕДРЕНИЮ</p>
        <div className="rec-grid">
          {RECOMMENDATIONS.map((recommendation) => (
            <article key={recommendation.title} className="rec-card">
              <div className="rec-icon">{recommendation.icon}</div>
              <strong>{recommendation.title}</strong>
              <p>{recommendation.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default BlockInteractive
