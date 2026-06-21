const TYPE_STYLE = {
  presentation: { emoji: '🖥️', iconBg: '#FDE8E8' },
  memo: { emoji: '📝', iconBg: '#CCFBF1' },
  outline: { emoji: '📑', iconBg: '#EDE9FE' },
  matching: { emoji: '✏️', iconBg: '#E0F2FF' },
  worksheet: { emoji: '📄', iconBg: '#CCFBF1' },
  quiz: { emoji: '❓', iconBg: '#F3E8FF' },
  guide: { emoji: '📖', iconBg: '#EDE9FE' },
  infographic: { emoji: '📊', iconBg: '#F3E8FF' },
}

const VARIANT_STYLE = {
  pink: { emoji: '🖥️', iconBg: '#FDE8E8' },
  teal: { emoji: '📄', iconBg: '#CCFBF1' },
  purple: { emoji: '📊', iconBg: '#EDE9FE' },
}

function getMaterialStyle(material) {
  return TYPE_STYLE[material.type] || VARIANT_STYLE[material.variant] || { emoji: '📚', iconBg: '#E0F2F0' }
}

function formatTypeTag(typeLabel) {
  return typeLabel.charAt(0) + typeLabel.slice(1).toLowerCase()
}

function getMaterialTags(material) {
  const tags = [formatTypeTag(material.typeLabel), material.grades]

  if (material.tag || material.hasFgos) {
    tags.push(material.tag || 'ФГОС')
  }

  return tags
}

function MaterialCard({ material }) {
  const files = material.files?.length
    ? material.files
    : material.url
      ? [{ label: 'Открыть', url: material.url }]
      : []

  const isStub = files.length === 0
  const { emoji, iconBg } = getMaterialStyle(material)
  const tags = getMaterialTags(material)

  return (
    <article className="tool-card">
      <div className="card-top">
        <div className="tool-icon" style={{ background: iconBg }}>
          <span className="subp-material-emoji">{emoji}</span>
        </div>
        <div>
          <h3 className="tool-name">{material.title}</h3>
          <div className="tool-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="tool-desc">{material.description}</p>
      <div className="tool-footer">
        {isStub ? (
          <button type="button" className="btn-open subp-material-btn--stub" disabled>
            Скоро
          </button>
        ) : (
          files.map((file) => (
            <a
              key={file.url}
              className="btn-open"
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.label}
            </a>
          ))
        )}
      </div>
    </article>
  )
}

export default MaterialCard
