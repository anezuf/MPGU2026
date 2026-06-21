import { HUB_NAV_ITEMS } from '../../data/navHub'
import './OverviewPage.css'

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="1.8" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  )
}

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

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 3 11 11" />
      <path d="m5 3 4 14 3.5-5.5L18 8 5 3Z" />
      <path d="m13 13 4 8" />
      <path d="m16 14.5 3-1.5" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  )
}

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.5A2.5 2.5 0 0 1 5 4h5.5A3.5 3.5 0 0 1 14 7.5V20a3.5 3.5 0 0 0-3.5-3.5H5A2.5 2.5 0 0 0 2.5 19V6.5Z" />
      <path d="M21.5 6.5A2.5 2.5 0 0 0 19 4h-5.5A3.5 3.5 0 0 0 10 7.5V20a3.5 3.5 0 0 1 3.5-3.5H19a2.5 2.5 0 0 1 2.5 2.5V6.5Z" />
    </svg>
  )
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
      <path d="M7 11v4.2c0 1.4 2.2 2.8 5 2.8s5-1.4 5-2.8V11" />
      <path d="M21 9v5" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9.4a2.4 2.4 0 1 1 3.6 2.1c-.9.5-1.4 1.1-1.4 2" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
      <circle cx="12" cy="9" r="3" />
      <path d="M4 18c0-1.6 1.1-3 2.6-3.4" />
      <path d="M20 18c0-1.6-1.1-3-2.6-3.4" />
      <path d="M6.5 11.5a2.2 2.2 0 1 1 1.1-4.1" />
      <path d="M17.5 11.5a2.2 2.2 0 1 0-1.1-4.1" />
    </svg>
  )
}

const ICONS_BY_PAGE = {
  tools: MonitorIcon,
  ai: BrainIcon,
  templates: LayersIcon,
  interactive: CursorIcon,
  subjects: BookOpenIcon,
  tips: HelpIcon,
}

const SECTION_META = {
  tools: { label: 'Инструменты', variant: 'teal' },
  ai: { label: 'Нейросети', variant: 'teal' },
  templates: { label: 'Шаблоны', variant: 'pink' },
  interactive: { label: 'Интерактив', variant: 'teal' },
  subjects: { label: 'Предметы', variant: 'pink' },
  tips: { label: 'Лайфхаки', variant: 'teal' },
}

const CARD_COPY = {
  tools: 'Сервисы и платформы для объяснения материала, организации взаимодействия, заданий, опросов и визуализации.',
  ai: 'Инструменты и промпты для идей уроков, заданий, адаптации текста, вопросов, планов и критериев оценивания.',
  templates: 'Шаблоны презентаций, рабочих листов, схем, таблиц, чек-листов, карточек и инфографики.',
  interactive: 'Викторины, опросы, интерактивные доски, игровые упражнения и задания на закрепление материала.',
  subjects: 'Материалы по праву, экономике, политике, социальной сфере, культуре, семье и гражданской идентичности.',
  tips: 'Практические советы по выбору инструментов, проверке источников, безопасности, промптам и оцениванию.',
}

const GUIDE_STEPS = [
  'Определите тему урока или учебную задачу.',
  'Выберите один из разделов в верхней панели.',
  'Подберите цифровой инструмент, шаблон или ресурс.',
  'Адаптируйте материал под класс и цель урока.',
  'Проверьте достоверность информации.',
  'Оцените, как ресурс помогает ученикам разобраться в теме.',
]

function OverviewPage({ onNavigate }) {
  return (
    <section className="overview-page" aria-label="Обзор разделов навигатора">
      <header className="overview-hero">
        <div className="overview-hero__content">
          <h1 className="overview-hero__title">
            Цифровой навигатор будущего учителя обществознания
          </h1>
          <p className="overview-hero__text">
            Помогаем будущим педагогам уверенно ориентироваться в цифровых инструментах,
            подбирать надежные ресурсы по обществознанию, использовать нейросети,
            создавать учебные материалы, проектировать интерактивные задания и применять методические рекомендации.
          </p>
          <div className="overview-hero__actions">
            <button type="button" className="overview-button overview-button--primary" onClick={() => onNavigate('tools')}>
              Начать работу
            </button>
            <button type="button" className="overview-button overview-button--secondary" onClick={() => onNavigate('about')}>
              О проекте
            </button>
          </div>
        </div>

        <aside className="overview-hero-card" aria-label="Методическая поддержка">
          <div className="overview-icon-bubble overview-icon-bubble--large">
            <CapIcon />
          </div>
          <div>
            <h2 className="overview-hero-card__title">Методическая поддержка цифровой компетентности</h2>
            <p className="overview-hero-card__text">
              Сайт создан как средство методической поддержки развития цифровых компетенций будущих учителей обществознания.
            </p>
          </div>
        </aside>
      </header>

      <div className="overview-content-grid">
        <div className="overview-card-grid" aria-label="Разделы навигатора">
          {HUB_NAV_ITEMS.map((item) => {
            const Icon = ICONS_BY_PAGE[item.page] || MonitorIcon
            const meta = SECTION_META[item.page] || { label: 'Раздел', variant: 'teal' }
            const isPink = meta.variant === 'pink'

            return (
              <article
                key={item.page}
                className={`overview-section-card pcp-card${isPink ? ' pcp-card--service' : ''}`}
              >
                <div className={`pcp-header overview-section-card__header${isPink ? ' pcp-header--service' : ''}`}>
                  <div className="pcp-header__left">
                    <div className="pcp-header__icon">
                      <Icon />
                    </div>
                    <span className="pcp-header__label">{meta.label}</span>
                  </div>
                  <svg className="pcp-header__curve" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M-2 30 C 220 4 780 4 1002 30 L1002 66 L-2 66 Z" />
                  </svg>
                </div>
                <div className="pcp-body overview-section-card__body">
                  <h2 className="pcp-title overview-section-card__title">{item.label}</h2>
                  <div className={`pcp-content${isPink ? ' pcp-content--service' : ''}`}>
                    <p className="pcp-content__text overview-section-card__text">{CARD_COPY[item.page]}</p>
                  </div>
                  <button
                    type="button"
                    className={`pcp-btn overview-section-card__button${isPink ? ' pcp-btn--pink' : ''}`}
                    onClick={() => onNavigate(item.page)}
                  >
                    Открыть
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <aside className="overview-side" aria-label="Подсказки по работе с сайтом">
          <article className="overview-guide-card">
            <div className="overview-guide-card__heading">
              <span className="overview-guide-card__mark">
                <HelpIcon />
              </span>
              <h2>Как пользоваться сайтом</h2>
            </div>
            <ol className="overview-guide-list">
              {GUIDE_STEPS.map((step, index) => (
                <li key={step} className="overview-guide-list__item">
                  <span className="overview-guide-list__number">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="overview-note-card">
            <div className="overview-icon-bubble">
              <UsersIcon />
            </div>
            <div>
              <h2>Универсальный характер</h2>
              <p>
                Логика работы с ресурсами полезна не только для обществознания, но и для истории и других социально-гуманитарных дисциплин.
              </p>
            </div>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default OverviewPage
