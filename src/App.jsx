import { useState } from 'react'
import Landing from './components/features/Landing'
import Hub from './components/features/Hub'
import PasswordModal from './components/ui/PasswordModal'
import useAuth from './hooks/useAuth'

function App() {
  const [view, setView] = useState('landing')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { checkPassword, login, logout } = useAuth()

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
