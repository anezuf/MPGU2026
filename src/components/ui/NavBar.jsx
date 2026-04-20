import { useEffect, useRef, useState } from 'react'
import { HUB_NAV_ITEMS } from '../../data/navHub'

function NavBar({ onLogout, onNavigate, activePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const avatarWrapperRef = useRef(null)

  useEffect(() => {
    function handleDocumentClick(event) {
      if (!avatarWrapperRef.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  function handleAvatarClick(event) {
    event.stopPropagation()
    setIsDropdownOpen((prev) => !prev)
  }

  function handleLogoutClick() {
    setIsDropdownOpen(false)
    onLogout()
  }

  function handleHomeClick() {
    setIsDropdownOpen(false)
    onNavigate('home')
  }

  return (
    <div className="navbar-wrapper" data-no-print>
      <nav className="navbar" aria-label="Навигация по разделам">
        <div className="header-bar">
          <button type="button" className="header-title-btn" onClick={handleHomeClick}>
            Навигатор педагога
          </button>
          <div className="avatar-wrapper" ref={avatarWrapperRef}>
            <button
              type="button"
              className="avatar-btn"
              id="avatarBtn"
              aria-expanded={isDropdownOpen}
              aria-controls="avatarDropdown"
              onClick={handleAvatarClick}
            >
              ТП
            </button>
            <div
              className={`avatar-dropdown${isDropdownOpen ? ' open' : ''}`}
              id="avatarDropdown"
            >
              <span className="author-label">Автор</span>
              <span className="author-name">Трофимова Полина</span>
              <hr className="dropdown-divider" />
              <button type="button" className="logout-btn" onClick={handleLogoutClick}>
                Выйти
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-top">
          <button type="button" className="navbar-title" onClick={handleHomeClick}>
            Цифровой навигатор педагога
          </button>
          <button type="button" className="btn-outline-pink btn-logout" onClick={onLogout}>
            Выйти
          </button>
        </div>
        <div className="navbar-links" aria-label="Разделы хаба">
          {HUB_NAV_ITEMS.map(({ page, label }) => {
            const isActive = activePage === page
            return (
              <button
                key={page}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                className={`navbar-tab${isActive ? ' navbar-tab--active' : ''}`}
                onClick={() => onNavigate(page)}
              >
                {label}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
