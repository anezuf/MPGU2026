const TYPE_STYLE = {
  explanation: { emoji: '📖', iconBg: '#CCFBF1' },
  practice: { emoji: '✏️', iconBg: '#E0F2FF' },
  testing: { emoji: '📝', iconBg: '#F3E8FF' },
  surveys: { emoji: '📋', iconBg: '#EDE9FE' },
}

const VARIANT_STYLE = {
  teal: { emoji: '🔗', iconBg: '#CCFBF1' },
  pink: { emoji: '🔗', iconBg: '#FDE8E8' },
  purple: { emoji: '🔗', iconBg: '#EDE9FE' },
}

function getToolStyle(tool) {
  return TYPE_STYLE[tool.type] || VARIANT_STYLE[tool.variant] || { emoji: '🔗', iconBg: '#E0F2F0' }
}

function formatTypeTag(typeLabel) {
  return typeLabel.charAt(0) + typeLabel.slice(1).toLowerCase()
}

function ToolCard({ tool }) {
  const { emoji, iconBg } = getToolStyle(tool)
  const tags = [formatTypeTag(tool.typeLabel), tool.usageNote]

  return (
    <article className="tool-card">
      <div className="card-top">
        <div className="tool-icon" style={{ background: iconBg }}>
          <span className="subp-material-emoji">{emoji}</span>
        </div>
        <div>
          <h3 className="tool-name">{tool.title}</h3>
          <div className="tool-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="tool-desc">{tool.description}</p>
      <div className="tool-footer">
        <a
          className="btn-open"
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
