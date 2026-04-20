import { useLayoutEffect, useRef, useState } from 'react'
import { isMobileTouchDevice } from '../../utils/isMobileTouchDevice'

function PasswordModal({ isOpen, onClose, onSubmit }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const viewportMeta = document.querySelector('meta[name="viewport"]')
    const shouldLockViewport = viewportMeta && isMobileTouchDevice()
    const previousViewport = shouldLockViewport
      ? viewportMeta.getAttribute('content') ?? ''
      : null

    if (shouldLockViewport) {
      viewportMeta.setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      )
    }

    inputRef.current?.focus()

    return () => {
      if (shouldLockViewport && previousViewport !== null) {
        viewportMeta.setAttribute('content', previousViewport)
      }
    }
  }, [isOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = onSubmit(password)

    if (!isValid) {
      setError('Неверный пароль')
      return
    }

    setPassword('')
    setError('')
  }

  const handleClose = () => {
    setPassword('')
    setError('')
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="password-modal-title">
        <h2 id="password-modal-title">Введите пароль</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
          />
          {error && <p className="error-text">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="btn-outline-pink password-modal__close" onClick={handleClose}>
              Закрыть
            </button>
            <button type="submit" className="password-modal__submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordModal
