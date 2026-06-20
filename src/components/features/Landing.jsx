function Landing({ onOpenPassword }) {
  return (
    <section className="landing-hero">
      <div className="landing-hero__inner">
        <span className="landing-hero__badge">Для будущих педагогов</span>
        <h1 className="landing-hero__title">
          <span>Цифровой навигатор</span>
          <span>будущего учителя обществознания</span>
        </h1>
        <p className="landing-hero__subtitle">
          Закрытая база знаний — промпты, шаблоны, сервисы и предметные ссылки в одном месте.
        </p>
        <button className="btn-primary landing-hero__cta" type="button" onClick={onOpenPassword}>
          Получить доступ
        </button>
      </div>
    </section>
  )
}

export default Landing
