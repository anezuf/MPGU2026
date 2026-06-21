function MaterialCard({ material }) {
  const files = material.files?.length
    ? material.files
    : material.url
      ? [{ label: 'Открыть', url: material.url }]
      : []

  const isStub = files.length === 0

  return (
    <article className={`subp-card subp-card--${material.variant}`}>
      <div className="subp-card__head">
        <span className="subp-card__type">{material.typeLabel}</span>
      </div>
      <h3 className="subp-card__title">{material.title}</h3>
      <p className="subp-card__desc">{material.description}</p>
      <div className="subp-card__meta">
        <span>{material.grades}</span>
        {(material.tag || material.hasFgos) && (
          <span className="subp-card__tag">{material.tag || 'ФГОС'}</span>
        )}
      </div>
      <div className="subp-card__footer">
        {isStub ? (
          <button type="button" className="subp-card__btn" disabled>
            Скоро
          </button>
        ) : (
          <div className="subp-card__actions">
            {files.map((file) => (
              <a
                key={file.url}
                className="subp-card__btn"
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default MaterialCard
