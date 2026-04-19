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
      <div className="landing-hero__right" aria-hidden="true">
        <div className="landing-hero__deco-circle">
          MPGU
          <br />
          2026
        </div>
      </div>
    </section>
  )
}

export default Landing
