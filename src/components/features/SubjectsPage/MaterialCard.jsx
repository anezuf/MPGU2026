function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V20l-6-3.5L6 20V4.5Z" />
    </svg>
  )
}

function MaterialCard({ material }) {
  const isStub = !material.url

  return (
    <article className={`subp-card subp-card--${material.variant}`}>
      <div className="subp-card__head">
        <span className="subp-card__type">{material.typeLabel}</span>
      </div>
      <h3 className="subp-card__title">{material.title}</h3>
      <p className="subp-card__desc">{material.description}</p>
      <div className="subp-card__meta">
        <span>{material.grades}</span>
        {material.hasFgos && <span className="subp-card__tag">ФГОС</span>}
      </div>
      <div className="subp-card__footer">
        {isStub ? (
          <button type="button" className="subp-card__btn" disabled>
            Скоро
          </button>
        ) : (
          <a
            className="subp-card__btn"
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть
          </a>
        )}
        <button type="button" className="subp-card__bookmark" aria-label="В избранное" disabled>
          <BookmarkIcon />
        </button>
      </div>
    </article>
  )
}

export default MaterialCard
