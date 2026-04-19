import { HUB_NAV_ITEMS } from '../../data/navHub'

function NavBar({ onLogout, onNavigate, activePage }) {
  return (
    <nav className="navbar" data-no-print aria-label="Навигация по разделам">
      <div className="navbar-top">
        <button type="button" className="navbar-title" onClick={() => onNavigate('home')}>
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
  )
}

export default NavBar
