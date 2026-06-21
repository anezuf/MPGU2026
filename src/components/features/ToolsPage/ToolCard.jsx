function ToolCard({ tool }) {
  return (
    <article className={`subp-card subp-card--${tool.variant}`}>
      <div className="subp-card__head">
        <span className="subp-card__type">{tool.typeLabel}</span>
      </div>
      <h3 className="subp-card__title">{tool.title}</h3>
      <p className="subp-card__desc">{tool.description}</p>
      <div className="subp-card__meta">
        <span>{tool.usageNote}</span>
      </div>
      <div className="subp-card__footer">
        <a
          className="subp-card__btn"
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть
        </a>
      </div>
    </article>
  )
}

export default ToolCard
