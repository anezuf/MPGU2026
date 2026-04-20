import { useCallback, useEffect, useRef, useState } from 'react'

import { AI_PROMPTS, AI_SERVICES } from '../../data/resources'
import PromptCard from '../ui/PromptCard'
import ServiceCard from '../ui/ServiceCard'

function BlockAI() {
  const [copiedPromptId, setCopiedPromptId] = useState(null)
  const copyResetTimerRef = useRef(null)

  const handleCopyPrompt = useCallback(async (promptId, promptText) => {
    await navigator.clipboard.writeText(promptText)
    setCopiedPromptId(promptId)

    if (copyResetTimerRef.current) {
      clearTimeout(copyResetTimerRef.current)
    }

    copyResetTimerRef.current = setTimeout(() => {
      setCopiedPromptId(null)
    }, 2000)
  }, [])

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
      <div className="section-header">
        <h2 className="section-title">Нейросети для учителя</h2>
        <p className="section-subtitle">Готовые промпты и российские AI-сервисы для педагога</p>
      </div>
      <div className="ai-grid">
        {AI_PROMPTS.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            isCopied={copiedPromptId === prompt.id}
            onCopy={handleCopyPrompt}
          />
        ))}

        {AI_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default BlockAI
