const HOME_BLOCKS = [
  {
    key: 'ai',
    number: '01',
    title: 'Нейросети для учителя',
    description: 'Готовые промпты для планирования уроков и российские AI-сервисы для педагога.',
  },
  {
    key: 'templates',
    number: '02',
    title: 'Шаблоны и визуал',
    description: 'Презентации и рабочие листы для скачивания — бери и используй на уроке.',
  },
  {
    key: 'interactive',
    number: '03',
    title: 'Инструменты интерактива',
    description: 'Сервисы для создания квизов, опросов и интерактивных заданий с инструкциями.',
  },
  {
    key: 'subjects',
    number: '04',
    title: 'Предметные копилки',
    description: 'Ссылки на источники по обществознанию, ОРКСЭ, истории и русскому языку.',
  },
]

function HubHome({ onNavigate }) {
  return (
    <section className="hub-home" aria-label="Обзор разделов навигатора">
      <div className="hub-home__grid">
        {HOME_BLOCKS.map((block) => (
          <article key={block.key} className="hub-home-card">
            <p className="hub-home-card__number">{block.number} —</p>
            <h2 className="hub-home-card__title">{block.title}</h2>
            <p className="hub-home-card__description">{block.description}</p>
            <button
              type="button"
              className="btn-outline-teal hub-home-card__action"
              onClick={() => onNavigate(block.key)}
            >
              Перейти →
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HubHome
