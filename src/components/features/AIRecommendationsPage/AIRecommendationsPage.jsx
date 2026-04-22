import './AIRecommendationsPage.css'

const RECOMMENDATION_SECTIONS = [
  {
    id: 'prompting',
    title: 'Как формулировать промпты',
    description: 'Чтобы ответ был полезным для урока, задавайте модели понятную педагогическую рамку.',
    points: [
      'Сразу указывайте роль: “Ты методист”, “Ты учитель истории”, “Ты редактор учебных материалов”.',
      'Добавляйте контекст: предмет, класс, тема урока, цель задания и желаемый формат ответа.',
      'Просите структуру результата: план, таблицу, карточки, задания с критериями или этапы урока.',
    ],
  },
  {
    id: 'adaptation',
    title: 'Как адаптировать ответы под класс',
    description: 'Ответ ИИ почти всегда требует небольшой педагогической доработки перед использованием.',
    points: [
      'Проверяйте лексику и объем текста, чтобы материал соответствовал возрасту и уровню подготовки учеников.',
      'Уточняйте у ИИ: упростить, сократить, добавить примеры, сделать вариант для сильной или базовой группы.',
      'Сверяйте содержание с целью урока, программой и временем занятия, чтобы не перегружать сценарий.',
    ],
  },
  {
    id: 'services',
    title: 'Особенности российских AI-сервисов',
    description: 'У разных сервисов отличаются ограничения, удобство и набор функций, поэтому лучше учитывать это заранее.',
    points: [
      'Проверяйте, поддерживает ли сервис длинные запросы, ссылки, загрузку файлов и повторную доработку ответа.',
      'Не передавайте персональные данные учеников и служебную информацию: лучше использовать обезличенные формулировки.',
      'Сравнивайте ответы в двух сервисах, если нужен более надежный или методически точный вариант материала.',
    ],
  },
]

function AIRecommendationsPage({ onNavigate }) {
  return (
    <section className="ai-guide-page" aria-label="Лайфхаки и рекомендации по работе с ИИ">
      <article className="ai-guide-page__card">
        <div className="ai-guide-page__header">
          <div className="ai-guide-page__intro">
            <span className="ai-guide-page__eyebrow">Лайфхаки и рекомендации</span>
            <h2 className="ai-guide-page__title">Как работать с ИИ в учебной практике осознанно</h2>
            <p className="ai-guide-page__description">
              Короткие ориентиры, которые помогут получать более точные ответы, адаптировать результат под конкретный
              класс и учитывать особенности российских сервисов.
            </p>
          </div>

          <button
            type="button"
            className="ai-guide-page__back"
            onClick={() => onNavigate('ai')}
          >
            К промптам
          </button>
        </div>

        <div className="ai-guide-page__grid">
          {RECOMMENDATION_SECTIONS.map((section, index) => (
            <article key={section.id} className="ai-guide-page__section">
              <span className="ai-guide-page__section-index">{`0${index + 1}`}</span>
              <h3 className="ai-guide-page__section-title">{section.title}</h3>
              <p className="ai-guide-page__section-description">{section.description}</p>
              <ul className="ai-guide-page__points">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}

export default AIRecommendationsPage
