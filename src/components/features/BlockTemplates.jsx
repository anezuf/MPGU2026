import { TEMPLATES } from '../../data/resources'

const TEMPLATE_TYPE_LABELS = {
  presentation: 'Презентация',
  worksheet: 'Рабочий лист',
}

const TEMPLATE_BUTTON_LABELS = {
  presentation: 'Скачать презентацию',
  worksheet: 'Скачать рабочий лист',
}

function BlockTemplates() {
  return (
    <section id="templates-visuals" className="hub-section">
      <h2 className="hub-section__title">
        <span className="block-heading-fill">Шаблоны и визуал</span>
      </h2>
      <div className="ai-grid">
        {TEMPLATES.map((template) => (
          <article key={template.id} className="ai-card">
            <span className="pill-pink ai-card__badge">{TEMPLATE_TYPE_LABELS[template.type]}</span>
            <h3 className="ai-card__title">{template.title}</h3>
            <p className="ai-card__description">{template.description}</p>
            <a
              className="btn-outline-pink ai-card__action ai-card__service-link"
              href={template.url}
              target="_blank"
              rel="noopener"
            >
              {TEMPLATE_BUTTON_LABELS[template.type]}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlockTemplates
