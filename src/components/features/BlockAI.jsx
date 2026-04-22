import { AI_PROMPTS, AI_SERVICES } from '../../data/resources'
import PromptCard from '../ui/PromptCard/PromptCard'
import ServiceCard from '../ui/ServiceCard'

function BlockAI() {
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
            title={prompt.title}
            content={prompt.content}
            placeholders={prompt.placeholders}
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
