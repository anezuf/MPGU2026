import { useCallback, useEffect, useState } from 'react'
import { AI_TOOLS } from '../../../data/aiTools'
import './AIToolsPage.css'

const HOW_STEPS = [
  { icon: '🎯', title: '1. Определите цель', desc: 'Чётко сформулируйте, что нужно получить от нейросети.' },
  { icon: '💬', title: '2. Составьте промпт', desc: 'Опишите задачу подробно: тема, класс, формат, стиль.' },
  { icon: '📋', title: '3. Проверьте результат', desc: 'Всегда проверяйте факты и адаптируйте под урок.' },
]

const REC_CARDS = [
  { icon: '✍️', title: 'Пишите чёткий промпт', desc: 'Укажите предмет, класс, цель задания и желаемый формат ответа.' },
  { icon: '🔍', title: 'Проверяйте факты', desc: 'ИИ может ошибаться. Всегда перепроверяйте исторические данные и цитаты.' },
  { icon: '🔄', title: 'Уточняйте и переспрашивайте', desc: 'Если ответ не подходит — уточните промпт, добавьте контекст или задайте вопрос иначе.' },
  { icon: '📁', title: 'Собирайте копилку промптов', desc: 'Сохраняйте удачные запросы в отдельный документ — они сэкономят время в будущем.' },
]

function AIPageHeader() {
  return (
    <div className="aitp-header">
      <div className="aitp-header__left">
        <h1 className="hub-page-title">Нейросети для учителя</h1>
        <p className="hub-page-subtitle">
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

function PromptItem({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [text])

  return (
    <div className="aitp-prompt-item">
      <p className="aitp-prompt-text">{text}</p>
      <button
        type="button"
        className={`aitp-prompt-copy${copied ? ' aitp-prompt-copy--done' : ''}`}
        onClick={handleCopy}
        aria-label="Скопировать промпт"
      >
        {copied ? '✓' : 'Копировать'}
      </button>
    </div>
  )
}

function PromptsModal({ tool, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="aitp-modal-overlay" onClick={onClose}>
      <div className="aitp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="aitp-modal__head">
          <div className="aitp-modal__title-row">
            <div className="aitp-card__icon" style={{ background: tool.iconBg, width: 36, height: 36, flexShrink: 0 }}>
              <span style={{ fontSize: '18px', fontWeight: 700, color: tool.iconColor }}>
                {tool.letter}
              </span>
            </div>
            <div>
              <h2 className="aitp-modal__title">{tool.name}</h2>
              <p className="aitp-modal__subtitle">Готовые промпты для урока</p>
            </div>
          </div>
          <button type="button" className="aitp-modal__close" onClick={onClose} aria-label="Закрыть">
            ✕
          </button>
        </div>
        <div className="aitp-modal__body">
          {tool.prompts.map((prompt, idx) => (
            <PromptItem key={idx} text={prompt} />
          ))}
        </div>
      </div>
    </div>
  )
}

function AIToolCard({ tool, onOpenPrompts }) {
  const hasPrompts = tool.prompts && tool.prompts.length > 0

  const handlePrompts = useCallback(() => {
    onOpenPrompts(tool)
  }, [tool, onOpenPrompts])

  return (
    <div className="aitp-card">
      <div className="aitp-card__header">
        <div className="aitp-card__icon" style={{ background: tool.iconBg }}>
          <span style={{ fontSize: '22px', fontWeight: 700, color: tool.iconColor }}>
            {tool.letter}
          </span>
        </div>
        <div className="aitp-card__meta">
          <h3 className="aitp-card__name">{tool.name}</h3>
          <span className="aitp-card__tag" style={{ background: tool.tagBg, color: tool.tagColor }}>
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
        {hasPrompts ? (
          <button type="button" className="aitp-btn-secondary" onClick={handlePrompts}>
            {tool.secondaryLabel}
          </button>
        ) : (
          <a href={tool.url} target="_blank" rel="noreferrer" className="aitp-btn-secondary">
            {tool.secondaryLabel}
          </a>
        )}
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

function AIToolsPage() {
  const [activeTool, setActiveTool] = useState(null)

  const handleOpenPrompts = useCallback((tool) => setActiveTool(tool), [])
  const handleClosePrompts = useCallback(() => setActiveTool(null), [])

  return (
    <div className="ai-tools-page">
      <AIPageHeader />
      <AIHowBanner />
      <div className="aitp-tools-grid">
        {AI_TOOLS.map((tool) => (
          <AIToolCard key={tool.id} tool={tool} onOpenPrompts={handleOpenPrompts} />
        ))}
      </div>
      <AIRecommendations />
      {activeTool && (
        <PromptsModal tool={activeTool} onClose={handleClosePrompts} />
      )}
    </div>
  )
}

export default AIToolsPage
