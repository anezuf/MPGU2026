import { useEffect, useRef, useState } from 'react'
import './PromptCard.css'

function LightbulbIcon() {
  return (
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
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function buildPlaceholderPattern(placeholders) {
  if (!placeholders.length) {
    return null
  }

  return new RegExp(
    `(${placeholders.map(({ key }) => escapeRegExp(key)).join('|')})`,
    'g',
  )
}

function PromptCard({ title, content, placeholders }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(placeholders.map(({ key }) => [key, ''])),
  )
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const resetTimerRef = useRef(null)

  const placeholderPattern = buildPlaceholderPattern(placeholders)
  const previewParts = placeholderPattern ? content.split(placeholderPattern).filter(Boolean) : [content]
  const resolvedContent = placeholderPattern
    ? content.replace(placeholderPattern, (match) => values[match]?.trim() || match)
    : content

  useEffect(
    () => () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
    },
    [],
  )

  function handleChange(key, nextValue) {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: nextValue,
    }))
  }

  function handleReset() {
    setValues(Object.fromEntries(placeholders.map(({ key }) => [key, ''])))
    setIsCopied(false)

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current)
    }
  }

  async function handleCopy() {
    let copied = false

    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(resolvedContent)
        copied = true
      } catch {
        copied = false
      }
    }

    if (!copied) {
      const textarea = document.createElement('textarea')
      textarea.value = resolvedContent
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.top = '-9999px'
      textarea.style.left = '-9999px'

      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, textarea.value.length)

      try {
        copied = document.execCommand('copy')
      } catch {
        copied = false
      }

      document.body.removeChild(textarea)
    }

    if (!copied) {
      return
    }

    setIsCopied(true)

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current)
    }

    resetTimerRef.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <article className={`pcp-card prompt-card${isExpanded ? ' prompt-card--expanded' : ' prompt-card--collapsed'}`}>
      <div className="pcp-header">
        <div className="pcp-header__left">
          <div className="pcp-header__icon">
            <LightbulbIcon />
          </div>
          <span className="pcp-header__label">Промпт</span>
        </div>

        <button
          type="button"
          className="prompt-card__toggle"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Свернуть промпт' : 'Развернуть промпт'}
          onClick={() => setIsExpanded((prevValue) => !prevValue)}
        >
          <ChevronIcon />
        </button>

        <svg className="pcp-header__curve" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-2 30 C 220 4 780 4 1002 30 L1002 66 L-2 66 Z" />
        </svg>
      </div>

      <div className="pcp-body prompt-card__body">
        <h3 className="pcp-title prompt-card__title">{title}</h3>

        {isExpanded ? (
          <>
            <div className="prompt-card__section">
              <p className="prompt-card__section-label">Заполни поля — получи готовый промпт</p>
              <div className="prompt-card__fields">
                {placeholders.map((field) => (
                  <label
                    key={field.key}
                    className="prompt-card__field"
                    style={field.label.length > 8 ? { gridColumn: '1 / -1' } : undefined}
                  >
                    <span className="prompt-card__field-label">{field.label}</span>
                    <input
                      type="text"
                      value={values[field.key] ?? ''}
                      placeholder={field.placeholder}
                      onInput={(event) => handleChange(field.key, event.currentTarget.value)}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="prompt-card__divider" />

            <div className="prompt-card__section">
              <p className="prompt-card__section-label">Готовый промпт</p>
              <div className={`pcp-content prompt-card__preview${isCopied ? ' pcp-content--copied' : ''}`}>
                {previewParts.map((part, index) => {
                  const matchingPlaceholder = placeholders.find(({ key }) => key === part)

                  if (!matchingPlaceholder) {
                    return <span key={`${part}-${index}`}>{part}</span>
                  }

                  const filledValue = values[matchingPlaceholder.key]?.trim()

                  return (
                    <em
                      key={`${matchingPlaceholder.key}-${index}`}
                      className={filledValue ? 'prompt-placeholder prompt-placeholder--filled' : 'prompt-placeholder'}
                    >
                      {filledValue || matchingPlaceholder.key}
                    </em>
                  )
                })}
              </div>
            </div>

            <div className="prompt-card__actions">
              <button type="button" className="pcp-btn prompt-card__copy" onClick={handleCopy}>
                Скопировать
              </button>
              <button type="button" className="pcp-btn prompt-card__reset" onClick={handleReset}>
                Сбросить
              </button>
            </div>
          </>
        ) : null}
      </div>
    </article>
  )
}

export default PromptCard
