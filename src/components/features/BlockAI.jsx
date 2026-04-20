import { useCallback, useEffect, useRef, useState } from 'react'

import { AI_PROMPTS, AI_SERVICES } from '../../data/resources'
import PromptCard from '../ui/PromptCard'
import ServiceCard from '../ui/ServiceCard'

function copyTextWithFallback(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  textarea.style.left = '-9999px'

  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  let copied = false

  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }

  document.body.removeChild(textarea)
  return copied
}

function BlockAI() {
  const [copiedPromptId, setCopiedPromptId] = useState(null)
  const copyResetTimerRef = useRef(null)

  const handleCopyPrompt = useCallback(async (promptId, promptText) => {
    let copied = false

    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(promptText)
        copied = true
      } catch {
        copied = false
      }
    }

    if (!copied) {
      copied = copyTextWithFallback(promptText)
    }

    if (!copied) {
      return
    }

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
