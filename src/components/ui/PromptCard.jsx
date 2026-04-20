const LightbulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
)

function PromptCard({ prompt, isCopied, onCopy }) {
  return (
    <article className="pcp-card">
      <div className="pcp-header">
        <div className="pcp-header__left">
          <div className="pcp-header__icon">
            <LightbulbIcon />
          </div>
          <span className="pcp-header__label">Промпт</span>
        </div>
        <div className="pcp-header__right">
          <div className="pcp-header__line" />
        </div>
      </div>

      <div className="pcp-body">
        <h3 className="pcp-title">{prompt.title}</h3>
        <div className="pcp-content">
          <pre className="pcp-content__text">{prompt.text}</pre>
        </div>
        <button
          type="button"
          className="pcp-btn"
          onClick={() => onCopy(prompt.id, prompt.text)}
        >
          {isCopied ? 'Скопировано ✓' : 'Скопировать'}
        </button>
      </div>
    </article>
  )
}

export default PromptCard
