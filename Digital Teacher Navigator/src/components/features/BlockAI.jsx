import { useEffect, useRef, useState } from 'react'

import { AI_PROMPTS, AI_SERVICES } from '../../data/resources'

function BlockAI() {
  const [copiedPromptId, setCopiedPromptId] = useState(null)
  const copyResetTimerRef = useRef(null)

  const handleCopyPrompt = async (promptId, promptText) => {
    await navigator.clipboard.writeText(promptText)
    setCopiedPromptId(promptId)

    if (copyResetTimerRef.current) {
      clearTimeout(copyResetTimerRef.current)
    }

    copyResetTimerRef.current = setTimeout(() => {
      setCopiedPromptId(null)
    }, 2000)
  }

  useEffect(
    () => () => {
      if (copyResetTimerRef.current) {
        clearTimeout(copyResetTimerRef.current)
      }
    },
    [],
  )

  return (
    <section id="ai-tools" className="hub-section">
      <h2 className="hub-section__title">Нейросети для учителя</h2>
      <div className="ai-grid">
        {AI_PROMPTS.map((prompt) => (
          <article key={prompt.id} className="ai-card">
            <span className="ai-card__badge">Промпт</span>
            <h3 className="ai-card__title">{prompt.title}</h3>
            <pre className="ai-card__prompt">{prompt.text}</pre>
            <button
              type="button"
              className="btn-primary ai-card__action"
              onClick={() => handleCopyPrompt(prompt.id, prompt.text)}
            >
              {copiedPromptId === prompt.id ? 'Скопировано ✓' : 'Скопировать'}
            </button>
          </article>
        ))}

        {AI_SERVICES.map((service) => (
          <article key={service.id} className="ai-card">
            <h3 className="ai-card__title">{service.title}</h3>
            <p className="ai-card__description">{service.description}</p>
            <a
              className="btn-primary ai-card__action ai-card__service-link"
              href={service.url}
              target="_blank"
              rel="noopener"
            >
              Открыть сервис
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlockAI
