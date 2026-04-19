const LANDING_PREVIEW_CARDS = [
  { num: '01 —', title: 'Нейросети', hint: 'Промпты и AI-сервисы' },
  { num: '02 —', title: 'Шаблоны', hint: 'Презентации и рабочие листы' },
  { num: '03 —', title: 'Интерактив', hint: 'Сервисы для уроков' },
  { num: '04 —', title: 'Копилки', hint: 'Источники по предметам' },
]

function Landing({ onOpenPassword }) {
  return (
    <section className="landing-hero">
      <div className="landing-hero__left">
        <span className="landing-hero__badge">Для будущих педагогов-гуманитариев</span>
        <h1 className="landing-hero__title">Цифровой навигатор педагога</h1>
        <p className="landing-hero__subtitle">
          Закрытая база знаний — промпты, шаблоны, сервисы и предметные ссылки в одном месте.
        </p>
        <div className="landing-hero__features">
          <div className="landing-hero__feature-row">
            <span className="landing-hero__feature-icon" aria-hidden="true">
              <span className="landing-hero__feature-icon-dot" />
            </span>
            <span className="landing-hero__feature-text">Готовые промпты для нейросетей</span>
          </div>
          <div className="landing-hero__feature-row">
            <span className="landing-hero__feature-icon" aria-hidden="true">
              <span className="landing-hero__feature-icon-dot" />
            </span>
            <span className="landing-hero__feature-text">Шаблоны презентаций и рабочих листов</span>
          </div>
          <div className="landing-hero__feature-row">
            <span className="landing-hero__feature-icon" aria-hidden="true">
              <span className="landing-hero__feature-icon-dot" />
            </span>
            <span className="landing-hero__feature-text">Сервисы для интерактивных уроков</span>
          </div>
          <div className="landing-hero__feature-row">
            <span className="landing-hero__feature-icon" aria-hidden="true">
              <span className="landing-hero__feature-icon-dot" />
            </span>
            <span className="landing-hero__feature-text">Предметные ссылки по 4 дисциплинам</span>
          </div>
        </div>
        <button className="btn-primary landing-hero__cta" onClick={onOpenPassword}>
          Получить доступ
        </button>
      </div>
      <div className="landing-hero__right">
        <div className="landing-hero__right-inner">
          {LANDING_PREVIEW_CARDS.map((card) => (
            <div key={card.num} className="landing-hero__preview-card">
              <div className="landing-hero__preview-card-head">
                <span className="landing-hero__preview-num">{card.num}</span>
                <span className="landing-hero__preview-title">{card.title}</span>
              </div>
              <p className="landing-hero__preview-hint">{card.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Landing
