import { useState } from 'react'
import './FeedbackForm.css'

const FEEDBACK_STORAGE_KEY = 'nav_feedback_submissions'

const INITIAL_FORM_STATE = {
  name: '',
  contact: '',
  message: '',
}

function getStoredSubmissions() {
  try {
    const storedValue = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) ?? '[]')
    return Array.isArray(storedValue) ? storedValue : []
  } catch {
    return []
  }
}

function FeedbackForm() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextSubmissions = [
      {
        ...formState,
        createdAt: new Date().toISOString(),
      },
      ...getStoredSubmissions(),
    ].slice(0, 50)

    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(nextSubmissions))
    setFormState(INITIAL_FORM_STATE)
    setIsSubmitted(true)
  }

  return (
    <section className="feedback-page" aria-label="Обратная связь">
      <article className="feedback-page__card">
        <span className="feedback-page__eyebrow">Обратная связь</span>
        <h2 className="feedback-page__title">Поделитесь идеей или замечанием</h2>
        <p className="feedback-page__description">
          Сообщение сохранится локально в браузере и поможет собирать предложения по
          развитию проекта.
        </p>

        <form className="feedback-page__form" onSubmit={handleSubmit}>
          <label className="feedback-page__field">
            <span>Имя</span>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Как к вам обращаться"
              required
            />
          </label>

          <label className="feedback-page__field">
            <span>Контакт</span>
            <input
              type="text"
              name="contact"
              value={formState.contact}
              onChange={handleChange}
              placeholder="Почта, Telegram или другая связь"
              required
            />
          </label>

          <label className="feedback-page__field">
            <span>Сообщение</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Что стоит улучшить или добавить"
              rows="6"
              required
            />
          </label>

          <button type="submit" className="feedback-page__submit">
            Отправить
          </button>

          {isSubmitted ? (
            <p className="feedback-page__success" role="status">
              Спасибо! Сообщение сохранено.
            </p>
          ) : null}
        </form>
      </article>
    </section>
  )
}

export default FeedbackForm
