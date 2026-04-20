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

function ServiceCard({ service }) {
  return (
    <article className="pcp-card pcp-card--service">
      <div className="pcp-header pcp-header--service">
        <div className="pcp-header__left">
          <div className="pcp-header__icon">
            <ExternalLinkIcon />
          </div>
          <span className="pcp-header__label">Сервис</span>
        </div>
        <div className="pcp-header__right">
          <div className="pcp-header__line" />
        </div>
      </div>

      <div className="pcp-body">
        <h3 className="pcp-title">{service.title}</h3>
        <div className="pcp-content pcp-content--service">
          <p className="pcp-content__text">{service.description}</p>
        </div>
        <a
          className="pcp-btn pcp-btn--pink"
          href={service.url}
          target="_blank"
          rel="noopener"
        >
          Открыть сервис
        </a>
      </div>
    </article>
  )
}

export default ServiceCard
