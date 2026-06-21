import './AboutPage.css'

function AboutPage() {
  return (
    <section className="about-page" aria-label="О проекте">
      <article className="about-page__card">
        <h2 className="hub-page-title">Цифровой навигатор будущего учителя обществознания</h2>
        <div className="about-page__description">
          <p>
            Практико-ориентированная база знаний для будущих учителей обществознания,
            объединяющая цифровые инструменты, методические рекомендации, шаблоны,
            учебные материалы и предметные разработки для подготовки современных уроков.
          </p>
          <p>
            Ресурс помогает быстро подбирать сервисы под цели занятия, создавать
            интерактивные задания, использовать ИИ в педагогической практике,
            оформлять материалы и развивать цифровые компетенции будущего педагога.
          </p>
        </div>

        <div className="about-page__facts">
          <div className="about-page__fact">
            <p className="about-page__fact-label">Автор</p>
            <p className="about-page__fact-value">Трофимова Полина Владиславна</p>
          </div>

          <a
            href="https://t.me/pi_ncha"
            target="_blank"
            rel="noopener noreferrer"
            className="about-page__tg-link"
            aria-label="Telegram автора: @pi_ncha"
          >
            <span className="about-page__tg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 3 10 13" />
                <path d="M22 3 15 21l-5-8-8-5 20-5Z" />
              </svg>
            </span>
            <span className="about-page__tg-copy">
              <span className="about-page__tg-label">Telegram</span>
              <span className="about-page__tg-handle">@pi_ncha</span>
            </span>
            <span className="about-page__tg-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  )
}

export default AboutPage
