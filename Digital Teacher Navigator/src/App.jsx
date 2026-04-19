import { useState } from 'react'
import Landing from './components/features/Landing'
import Hub from './components/features/Hub'
import PasswordModal from './components/ui/PasswordModal'
import useAuth from './hooks/useAuth'

function App() {
  const [view, setView] = useState('landing')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { checkPassword, login, logout, isAuthed } = useAuth()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleNavigate = (nextView) => {
    if (nextView === 'hub' && !isAuthed()) {
      setView('landing')
      handleOpenModal()
      return
    }

    setView(nextView)
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

      <div className="view-controls">
        <button className="btn-ghost" onClick={() => handleNavigate('landing')}>
          Landing
        </button>
        <button className="btn-primary" onClick={() => handleNavigate('hub')}>
          Hub
        </button>
      </div>
    </div>
  )
}

export default App
