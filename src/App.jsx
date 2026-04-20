import { useEffect, useState } from 'react'
import Landing from './components/features/Landing'
import Hub from './components/features/Hub'
import PasswordModal from './components/ui/PasswordModal'
import useAuth from './hooks/useAuth'
import { isMobileTouchDevice } from './utils/isMobileTouchDevice'

const MOBILE_BUTTON_LIKE_SELECTOR = [
  'button',
  'a.btn-primary',
  'a.btn-navigate',
  'a.btn-outline-teal',
  'a.btn-teal',
  'a.btn-copy',
  'a.btn-link',
  'a.btn-outline-pink',
  'a.btn-pink',
  'a.pcp-btn',
].join(', ')

function App() {
  const [view, setView] = useState('landing')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { checkPassword, login, logout, isAuthed } = useAuth()

  useEffect(() => {
    setView(isAuthed() ? 'hub' : 'landing')
  }, [isAuthed])

  useEffect(() => {
    if (!isMobileTouchDevice()) {
      return undefined
    }

    const handleContextMenu = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const interactiveTarget = event.target.closest(MOBILE_BUTTON_LIKE_SELECTOR)

      if (!interactiveTarget) {
        return
      }

      event.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handlePasswordSubmit = (password) => {
    if (!checkPassword(password)) {
      return false
    }

    login()
    setView('hub')
    handleCloseModal()
    return true
  }

  const handleLogout = () => {
    logout()
    setView('landing')
  }

  return (
    <div className="app-shell">
      {view === 'landing' ? (
        <Landing onOpenPassword={handleOpenModal} />
      ) : (
        <Hub onLogout={handleLogout} />
      )}

      <PasswordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handlePasswordSubmit}
      />
    </div>
  )
}

export default App
