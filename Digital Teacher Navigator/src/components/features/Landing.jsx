function Landing({ onOpenPassword }) {
  return (
    <section className="landing-hero">
      <div className="landing-hero__content">
        <h1 className="landing-hero__title">Цифровой навигатор педагога</h1>
        <p className="landing-hero__subtitle">
          Закрытая база знаний для будущих учителей-гуманитариев
        </p>
        <button className="btn-primary landing-hero__cta" onClick={onOpenPassword}>
          Войти в навигатор
        </button>
      </div>
    </section>
  )
}

export default Landing
