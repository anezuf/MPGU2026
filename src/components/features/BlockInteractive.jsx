import { INTERACTIVE_TOOLS } from '../../data/resources'

function BlockInteractive() {
  return (
    <section id="interactive-tools" className="hub-section">
      <h2 className="hub-section__title">
        <span className="section-number">03 —</span> Инструменты интерактива
      </h2>
      <div className="ai-grid">
        {INTERACTIVE_TOOLS.map((tool) => {
          const hasInstructions = Boolean(tool.pdfUrl || tool.videoUrl)

          return (
            <article key={tool.id} className="ai-card">
              <span className="pill-pink ai-card__badge">Сервис</span>
              <h3 className="ai-card__title">{tool.title}</h3>
              <p className="ai-card__description">{tool.description}</p>
              <a
                className="btn-outline-pink ai-card__action ai-card__service-link"
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
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlockInteractive
