import { DIGITAL_LESSON_TOOLS } from '../../data/resources'

const ExternalLinkIcon = () => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function BlockDigitalTools() {
  return (
    <section id="digital-lesson-tools" className="hub-section">
      <div className="section-header">
        <h2 className="section-title">Цифровые инструменты для уроков</h2>
        <p className="section-subtitle">
          Сервисы для объяснения нового материала, создания заданий, опросов, тестирования и визуализации информации.
        </p>
      </div>

      <div className="ai-grid">
        {DIGITAL_LESSON_TOOLS.map((tool, index) => {
          const isPink = index % 2 === 1

          return (
            <article
              key={tool.id}
              className={isPink ? 'pcp-card pcp-card--service' : 'pcp-card'}
            >
              <div className={isPink ? 'pcp-header pcp-header--service' : 'pcp-header'}>
                <div className="pcp-header__left">
                  <div className="pcp-header__icon">
                    <ExternalLinkIcon />
                  </div>
                  <span className="pcp-header__label">{tool.tag}</span>
                </div>
                <svg className="pcp-header__curve" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M-2 30 C 220 4 780 4 1002 30 L1002 66 L-2 66 Z" />
                </svg>
              </div>

              <div className="pcp-body">
                <h3 className="pcp-title">{tool.title}</h3>
                <div className={isPink ? 'pcp-content pcp-content--service' : 'pcp-content'}>
                  <p className="pcp-content__text">{tool.description}</p>
                </div>
                <a
                  className={isPink ? 'pcp-btn pcp-btn--pink' : 'pcp-btn'}
                  href={tool.url}
                  target="_blank"
                  rel="noopener"
                >
                  Открыть платформу
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlockDigitalTools
