import { useCallback, useMemo, useState } from 'react'
import { AI_TOOLS } from '../../../data/aiTools'
import './AIToolsPage.css'

const HOW_STEPS = [
  { icon: '🎯', title: '1. Определите цель', desc: 'Чётко сформулируйте, что нужно получить от нейросети.' },
  { icon: '💬', title: '2. Составьте промпт', desc: 'Опишите задачу подробно: тема, класс, формат, стиль.' },
  { icon: '📋', title: '3. Проверьте результат', desc: 'Всегда проверяйте факты и адаптируйте под урок.' },
  { icon: '🔖', title: '4. Сохраните лучшее', desc: 'Сохраняйте удачные промпты и результаты в копилку.' },
]

const REC_CARDS = [
  { icon: '✍️', title: 'Пишите чёткий промпт', desc: 'Укажите предмет, класс, цель задания и желаемый формат ответа.' },
  { icon: '🔍', title: 'Проверяйте факты', desc: 'ИИ может ошибаться. Всегда перепроверяйте исторические данные и цитаты.' },
  { icon: '🔄', title: 'Уточняйте и переспрашивайте', desc: 'Если ответ не подходит — уточните промпт, добавьте контекст или задайте вопрос иначе.' },
  { icon: '📁', title: 'Собирайте копилку промптов', desc: 'Сохраняйте удачные запросы в отдельный документ — они сэкономят время в будущем.' },
]

const TYPE_OPTIONS = [
  'Текстовый ИИ',
  'Генерация изображений',
  'Чат-ассистент',
  'Распознавание речи',
  'Инфографика',
  'Видео и аудио',
]

const SUBJECT_OPTIONS = ['Любые предметы', 'Обществознание', 'История', 'Русский язык']

const GRADE_OPTIONS = ['5–7 классы', '8–9 классы', '10–11 классы']

function AIPageHeader() {
  return (
    <div className="aitp-header">
      <div className="aitp-header__left">
        <p className="aitp-breadcrumb">НЕЙРОСЕТИ</p>
        <h1 className="aitp-title">Нейросети для учителя</h1>
        <p className="aitp-subtitle">
          Подборка ИИ-инструментов для подготовки уроков, создания материалов,
          генерации изображений и работы с текстом. Все сервисы проверены
          и адаптированы для использования в образовании.
        </p>
      </div>
      <div className="aitp-tip-card">
        <span className="aitp-tip-card__icon">🤖</span>
        <div>
          <strong>Как использовать ИИ на уроке?</strong>
          <p>
            Начните с простых задач: конспект, тест, сценарий урока.
            Всегда проверяйте результат перед использованием с учениками.
          </p>
        </div>
      </div>
    </div>
  )
}

function AIFilterBar({ search, onSearch, type, onType, subject, onSubject, grade, onGrade }) {
  return (
    <div className="aitp-filter-bar">
      <input
        type="text"
        placeholder="Поиск нейросетей..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select value={type} onChange={(e) => onType(e.target.value)}>
        <option value="">Все типы</option>
        {TYPE_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <select value={subject} onChange={(e) => onSubject(e.target.value)}>
        <option value="">Все предметы</option>
        {SUBJECT_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <select value={grade} onChange={(e) => onGrade(e.target.value)}>
        <option value="">Все классы</option>
        {GRADE_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

function AIHowBanner() {
  return (
    <div className="aitp-how-banner">
      <p className="aitp-how-title">КАК ЭФФЕКТИВНО РАБОТАТЬ С НЕЙРОСЕТЯМИ</p>
      <div className="aitp-how-steps">
        {HOW_STEPS.map((step, idx) => (
          <div key={step.title} style={{ display: 'contents' }}>
            <div className="aitp-how-step">
              <div className="aitp-how-icon">{step.icon}</div>
              <div>
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </div>
            </div>
            {idx < HOW_STEPS.length - 1 && (
              <span className="aitp-how-arrow">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AIToolCard({ tool, bookmarked, onBookmark }) {
  const handleBookmark = useCallback(() => onBookmark(tool.id), [tool.id, onBookmark])

  return (
    <div className="aitp-card">
      <div className="aitp-card__header">
        <div
          className="aitp-card__icon"
          style={{ background: tool.iconBg }}
        >
          <span style={{ fontSize: '22px', fontWeight: 700, color: tool.iconColor }}>
            {tool.letter}
          </span>
        </div>
        <div className="aitp-card__meta">
          <h3 className="aitp-card__name">{tool.name}</h3>
          <span
            className="aitp-card__tag"
            style={{ background: tool.tagBg, color: tool.tagColor }}
          >
            {tool.category}
          </span>
        </div>
      </div>

      <p className="aitp-card__desc">{tool.description}</p>

      <div className="aitp-card__details">
        <p><span className="aitp-detail-label">Предметы: </span>{tool.subjects}</p>
        <p><span className="aitp-detail-label">Классы: </span>{tool.grades}</p>
      </div>

      <div className="aitp-card__footer">
        <a href={tool.url} target="_blank" rel="noreferrer" className="aitp-btn-open">
          Открыть
        </a>
        <a href="#prompts" className="aitp-btn-secondary">
          {tool.secondaryLabel}
        </a>
        <button
          type="button"
          className={`aitp-btn-bookmark${bookmarked ? ' aitp-btn-bookmark--active' : ''}`}
          aria-label="Сохранить"
          onClick={handleBookmark}
        >
          🔖
        </button>
      </div>
    </div>
  )
}

function AIRecommendations() {
  return (
    <section className="aitp-recommendations">
      <p className="aitp-rec-label">СОВЕТЫ ПО РАБОТЕ С ИИ</p>
      <div className="aitp-rec-grid">
        {REC_CARDS.map((card) => (
          <div key={card.title} className="aitp-rec-card">
            <div className="aitp-rec-icon">{card.icon}</div>
            <strong>{card.title}</strong>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function filterTools(tools, search, type, subject, grade) {
  const q = search.toLowerCase()
  return tools.filter((t) => {
    if (q && !t.name.toLowerCase().includes(q) && !t.description.toLowerCase().includes(q)) {
      return false
    }
    if (type && t.category !== type) return false
    if (subject && subject !== 'Любые предметы' && !t.subjectKeys.includes(subject)) return false
    if (grade && !t.gradeKeys.includes(grade)) return false
    return true
  })
}

function AIToolsPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')
  const [bookmarks, setBookmarks] = useState(new Set())

  const filtered = useMemo(
    () => filterTools(AI_TOOLS, search, type, subject, grade),
    [search, type, subject, grade],
  )

  const handleBookmark = useCallback((id) => {
    setBookmarks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  return (
    <div className="ai-tools-page">
      <AIPageHeader />
      <AIFilterBar
        search={search}
        onSearch={setSearch}
        type={type}
        onType={setType}
        subject={subject}
        onSubject={setSubject}
        grade={grade}
        onGrade={setGrade}
      />
      <AIHowBanner />
      <div className="aitp-tools-grid">
        {filtered.length === 0 ? (
          <p className="aitp-empty">Нет инструментов, соответствующих выбранным фильтрам.</p>
        ) : (
          filtered.map((tool) => (
            <AIToolCard
              key={tool.id}
              tool={tool}
              bookmarked={bookmarks.has(tool.id)}
              onBookmark={handleBookmark}
            />
          ))
        )}
      </div>
      <AIRecommendations />
    </div>
  )
}

export default AIToolsPage
