import { INTERACTIVE_TOOLS } from '../../data/resources'

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

function BlockInteractive() {
  return (
    <section id="interactive-tools" className="hub-section">
      <div className="section-header">
        <h2 className="section-title">Инструменты интерактива</h2>
        <p className="section-subtitle">Сервисы для создания квизов и интерактивных заданий</p>
      </div>
      <div className="ai-grid">
        {INTERACTIVE_TOOLS.map((tool) => {
          const hasInstructions = Boolean(tool.pdfUrl || tool.videoUrl)

          return (
            <article key={tool.id} className="pcp-card pcp-card--service">
              <div className="pcp-header pcp-header--service">
                <div className="pcp-header__left">
                  <div className="pcp-header__icon">
                    <ExternalLinkIcon />
                  </div>
                  <span className="pcp-header__label">Сервис</span>
                </div>
                <svg className="pcp-header__curve" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M-2 30 C 220 4 780 4 1002 30 L1002 66 L-2 66 Z" />
                </svg>
              </div>
              <div className="pcp-body">
                <h3 className="pcp-title">{tool.title}</h3>
                <div className="pcp-content pcp-content--service">
                  <p className="pcp-content__text">{tool.description}</p>
                </div>
                <a
                  className="pcp-btn pcp-btn--pink"
                  href={tool.url}
                  target="_blank"
                  rel="noopener"
                >
                  Открыть сервис
                </a>
                {hasInstructions ? (
                  <div className="service-card__instructions">
                    {tool.pdfUrl ? (
                      <a
                        className="service-card__instruction-link"
                        href={tool.pdfUrl}
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          className="service-card__instruction-icon service-card__instruction-icon--pdf"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M4 1.5h5l3 3V14a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 14V1.5Zm5 .7v2.3h2.3L9 2.2ZM5 7h6v1H5V7Zm0 2h6v1H5V9Zm0 2h4v1H5v-1Z" />
                        </svg>
                        Инструкция PDF
                      </a>
                    ) : null}
                    {tool.videoUrl ? (
                      <a
                        className="service-card__instruction-link"
                        href={tool.videoUrl}
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          className="service-card__instruction-icon service-card__instruction-icon--video"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M3.5 2.5A1.5 1.5 0 0 0 2 4v8a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 12V4a1.5 1.5 0 0 0-1.5-1.5h-9Zm3.2 3.1 4.1 2.4-4.1 2.4V5.6Z" />
                        </svg>
                        Видео-инструкция
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlockInteractive
