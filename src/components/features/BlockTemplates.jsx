import { TEMPLATES } from '../../data/resources'

const RECOMMENDATIONS = [
  {
    icon: '🎯',
    title: 'Подберите тему',
    text: 'Выберите шаблон под тему урока: культура и искусство, право или правонарушения.',
  },
  {
    icon: '🎨',
    title: 'Сохраните стиль',
    text: 'Используйте цветовую гамму шаблона как основу для своих слайдов и иллюстраций.',
  },
  {
    icon: '📋',
    title: 'Адаптируйте содержание',
    text: 'Замените заголовки и тексты, сохранив структуру слайдов и визуальное оформление.',
  },
  {
    icon: '💾',
    title: 'Сделайте копию',
    text: 'Скачайте шаблон на Яндекс.Диске и работайте с собственной копией, не изменяя оригинал.',
  },
]

function BlockTemplates() {
  return (
    <section id="templates-visuals" className="page-wrapper">
      <header className="catalog-header">
        <div className="catalog-header__content">
          <h1 className="hub-page-title">Шаблоны и визуал</h1>
          <p className="hub-page-subtitle">
            Готовые шаблоны презентаций для уроков обществознания и смежных тем.
            Каждый шаблон оформлен в тематической цветовой гамме и готов к
            адаптации под ваш материал.
          </p>
        </div>

        <div className="tip-card">
          <div className="tip-icon">💡</div>
          <div>
            <strong>Как использовать шаблон?</strong>
            <p>
              Откройте ссылку, скачайте презентацию и замените тексты под свою
              тему. Цветовая гамма и оформление уже согласованы между слайдами.
            </p>
          </div>
        </div>
      </header>

      <div className="templates-grid tools-grid">
        {TEMPLATES.map((template) => (
          <article key={template.id} className="tool-card">
            <div className="card-top">
              <div
                className="tool-icon"
                style={{ background: template.iconBg }}
              >
                <span className="templates-card-emoji">{template.emoji}</span>
              </div>
              <div>
                <h3 className="tool-name">{template.title}</h3>
                <div className="tool-tags">
                  {template.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="tool-desc">{template.description}</p>
            <div className="tool-footer">
              <a
                href={template.url}
                target="_blank"
                rel="noopener"
                className="btn-open"
              >
                Открыть
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="recommendations">
        <p className="sidebar-label">РЕКОМЕНДАЦИИ ПО ИСПОЛЬЗОВАНИЮ</p>
        <div className="rec-grid">
          {RECOMMENDATIONS.map((recommendation) => (
            <article key={recommendation.title} className="rec-card">
              <div className="rec-icon">{recommendation.icon}</div>
              <strong>{recommendation.title}</strong>
              <p>{recommendation.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default BlockTemplates
