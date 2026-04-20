const LightbulbIcon = () => (
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
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
)

const DownloadIcon = () => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const ZapIcon = () => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const BookIcon = () => (
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
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const HOME_BLOCKS = [
  {
    key: 'ai',
    label: 'Нейросети',
    variant: 'teal',
    Icon: LightbulbIcon,
    title: 'Нейросети для учителя',
    description: 'Готовые промпты для планирования уроков и российские AI-сервисы для педагога.',
  },
  {
    key: 'templates',
    label: 'Шаблоны',
    variant: 'pink',
    Icon: DownloadIcon,
    title: 'Шаблоны и визуал',
    description: 'Презентации и рабочие листы для скачивания — бери и используй на уроке.',
  },
  {
    key: 'interactive',
    label: 'Интерактив',
    variant: 'teal',
    Icon: ZapIcon,
    title: 'Инструменты интерактива',
    description: 'Сервисы для создания квизов, опросов и интерактивных заданий с инструкциями.',
  },
  {
    key: 'subjects',
    label: 'Предметы',
    variant: 'pink',
    Icon: BookIcon,
    title: 'Предметные копилки',
    description: 'Ссылки на источники по обществознанию, ОРКСЭ, истории и русскому языку.',
  },
]

function HubHome({ onNavigate }) {
  return (
    <section className="hub-home" aria-label="Обзор разделов навигатора">
      <div className="hub-home__grid">
        {HOME_BLOCKS.map(({ key, label, variant, Icon, title, description }) => {
          const isService = variant === 'pink'
          return (
            <article
              key={key}
              className={isService ? 'pcp-card pcp-card--service' : 'pcp-card'}
            >
              <div className={isService ? 'pcp-header pcp-header--service' : 'pcp-header'}>
                <div className="pcp-header__left">
                  <div className="pcp-header__icon">
                    <Icon />
                  </div>
                  <span className="pcp-header__label">{label}</span>
                </div>
              </div>
              <div className="pcp-body">
                <h3 className="pcp-title">{title}</h3>
                <div className={isService ? 'pcp-content pcp-content--service' : 'pcp-content'}>
                  <p className="pcp-content__text">{description}</p>
                </div>
                <button
                  type="button"
                  className={isService ? 'pcp-btn pcp-btn--pink' : 'pcp-btn'}
                  onClick={() => onNavigate(key)}
                >
                  Перейти
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HubHome
