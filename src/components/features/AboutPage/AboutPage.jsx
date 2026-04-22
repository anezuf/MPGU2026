import './AboutPage.css'

function AboutPage() {
  return (
    <section className="about-page" aria-label="О проекте">
      <article className="about-page__card">
        <span className="about-page__eyebrow">О проекте</span>
        <h2 className="about-page__title">Цифровой навигатор педагога</h2>
        <p className="about-page__description">
          Закрытая база знаний для будущих учителей-гуманитариев
        </p>

        <dl className="about-page__facts">
          <div className="about-page__fact">
            <dt>Автор</dt>
            <dd>Трофимова Полина</dd>
          </div>
        </dl>
      </article>
    </section>
  )
}

export default AboutPage
