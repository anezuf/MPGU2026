function Landing({ onOpenPassword }) {
  return (
    <section className="landing-hero">
      <div
        className="landing-hero__content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100svh',
          padding: '0 80px',
        }}
      >
        <h1
          className="landing-hero__title"
          style={{ fontSize: '80px', lineHeight: '1.05', maxWidth: '560px' }}
        >
          Цифровой навигатор педагога
        </h1>
        <p className="landing-hero__subtitle">
          Закрытая база знаний для будущих учителей-гуманитариев
        </p>
        <svg
          className="landing-hero__arrow"
          viewBox="0 0 200 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 45C45 10 94 10 127 42C143 57 157 73 189 75" />
          <path d="M172 62L189 75L169 84" />
        </svg>
        <button className="btn-primary landing-hero__cta" onClick={onOpenPassword}>
          Получить доступ
        </button>
      </div>
      <div className="landing-hero__stripe" aria-hidden="true" />
    </section>
  )
}

export default Landing
