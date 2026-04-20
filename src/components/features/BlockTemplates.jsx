import { TEMPLATES } from '../../data/resources'

const TEMPLATE_TYPE_LABELS = {
  presentation: 'Презентация',
  worksheet: 'Рабочий лист',
}

const TEMPLATE_BUTTON_LABELS = {
  presentation: 'Скачать презентацию',
  worksheet: 'Скачать рабочий лист',
}

const DownloadIcon = () => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function BlockTemplates() {
  return (
    <section id="templates-visuals" className="hub-section">
      <div className="section-header">
        <h2 className="section-title">Шаблоны и визуал</h2>
        <p className="section-subtitle">Готовые презентации и рабочие листы для скачивания</p>
      </div>
      <div className="ai-grid">
        {TEMPLATES.map((template) => {
          const isWorksheet = template.type === 'worksheet'
          return (
            <article
              key={template.id}
              className={isWorksheet ? 'pcp-card pcp-card--service' : 'pcp-card'}
            >
              <div className={isWorksheet ? 'pcp-header pcp-header--service' : 'pcp-header'}>
                <div className="pcp-header__left">
                  <div className="pcp-header__icon">
                    <DownloadIcon />
                  </div>
                  <span className="pcp-header__label">{TEMPLATE_TYPE_LABELS[template.type]}</span>
                </div>
              </div>
              <div className="pcp-body">
                <h3 className="pcp-title">{template.title}</h3>
                <div className={isWorksheet ? 'pcp-content pcp-content--service' : 'pcp-content'}>
                  <p className="pcp-content__text">{template.description}</p>
                </div>
                <a
                  className={isWorksheet ? 'pcp-btn pcp-btn--pink' : 'pcp-btn'}
                  href={template.url}
                  target="_blank"
                  rel="noopener"
                >
                  {TEMPLATE_BUTTON_LABELS[template.type]}
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlockTemplates
