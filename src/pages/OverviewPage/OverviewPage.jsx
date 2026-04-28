import './OverviewPage.css'

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 6a3.5 3.5 0 0 1 7 0v.3a3 3 0 0 1 2.5 2.95 3 3 0 0 1-1.2 2.4 3 3 0 0 1 .2 4.8 3.5 3.5 0 0 1-3.5 5.54H12" />
      <path d="M14.5 9.5a2.5 2.5 0 0 1 0 5" />
      <path d="M9.5 6a3.5 3.5 0 0 0-7 0v.3A3 3 0 0 0 0 9.25a3 3 0 0 0 1.2 2.4 3 3 0 0 0-.2 4.8 3.5 3.5 0 0 0 3.5 5.54H12" />
      <path d="M9.5 9.5a2.5 2.5 0 0 0 0 5" />
      <path d="M12 6v12" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

const SUBJECT_LABELS = ['Обществознание', 'История', 'ОРКСЭ', 'Русский язык']
const FEATURED_STATS = [
  'Количество предмета',
  'Количество источников',
  'Количество проверено',
]
const AI_PILL_LABELS = [
  'Поурочный план',
  'Мотивационный крючок',
  'Адаптация текста',
  'Дебаты',
]

function OverviewPage({ onNavigate }) {
  return (
    <section className="overview-page" aria-label="Обзор разделов навигатора">
      <div className="overview-bento">
        <article className="overview-bento__cell overview-bento__cell--featured">
          <div className="overview-bento__featured-content">
            <span className="overview-bento__badge overview-bento__badge--featured">Предметные копилки</span>
            <h2 className="overview-bento__featured-title">Предметные копилки</h2>
            <p className="overview-bento__featured-description">
              Проверенные ресурсы, готовые рабочие листы, презентации и задания для уроков по обществознанию,
              ОРКСЭ, истории, русскому языку и литературе. Всё собрано по предметам — выбирайте нужную вкладку и
              пользуйтесь.
            </p>

            <div className="overview-bento__subjects">
              {SUBJECT_LABELS.map((subject) => (
                <span key={subject} className="overview-bento__subject-pill">
                  {subject}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="overview-bento__featured-cta"
              onClick={() => onNavigate('subjects')}
            >
              Открыть раздел
            </button>
          </div>

          <div className="overview-bento__stats">
            {FEATURED_STATS.map((stat) => (
              <div key={stat} className="overview-bento__stat-chip">
                <span className="overview-bento__stat-label">{stat}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="overview-bento__cell overview-bento__cell--ai">
          <div className="overview-bento__icon-wrap overview-bento__icon-wrap--ai">
            <BrainIcon />
          </div>
          <span className="overview-bento__badge overview-bento__badge--ai">Нейросети</span>
          <h3 className="overview-bento__title">Нейросети для учителя</h3>
          <p className="overview-bento__description">
            Готовые промпты для российских нейросетей, которые помогут быстро подготовить план урока, сценарий или
            идеи для занятий. Смотрите примеры, копируйте запросы и пробуйте сами.
          </p>
          <div className="overview-bento__pill-list overview-bento__pill-list--stack">
            {AI_PILL_LABELS.map((item) => (
              <span key={item} className="overview-bento__mini-pill overview-bento__mini-pill--ai">
                {item}
              </span>
            ))}
          </div>
          <button type="button" className="overview-bento__link" onClick={() => onNavigate('ai')}>
            Открыть
          </button>
        </article>

        <article className="overview-bento__cell overview-bento__cell--templates">
          <div className="overview-bento__icon-wrap overview-bento__icon-wrap--templates">
            <DownloadIcon />
          </div>
          <span className="overview-bento__badge overview-bento__badge--templates">Шаблоны</span>
          <h3 className="overview-bento__title">Шаблоны и визуал</h3>
          <p className="overview-bento__description">
            Красивые презентации и удобные рабочие листы, которые уже готовы к уроку. Скачивайте, вдохновляйтесь и
            создавайте свои материалы на основе готовых дизайнов.
          </p>
          <button type="button" className="overview-bento__link" onClick={() => onNavigate('templates')}>
            Открыть
          </button>
        </article>

        <article className="overview-bento__cell overview-bento__cell--interactive">
          <div className="overview-bento__icon-wrap overview-bento__icon-wrap--interactive">
            <ZapIcon />
          </div>
          <span className="overview-bento__badge overview-bento__badge--interactive">Интерактив</span>
          <h3 className="overview-bento__title">Инструменты интерактива</h3>
          <p className="overview-bento__description">
            Короткие видеоинструкции по созданию квизов, викторин и игр, а также ссылки на проверенные российские
            сервисы для вовлечения учеников на уроке.
          </p>
          <button type="button" className="overview-bento__link" onClick={() => onNavigate('interactive')}>
            Открыть
          </button>
        </article>
      </div>
    </section>
  )
}

export default OverviewPage
