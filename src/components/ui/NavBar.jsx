function NavBar({ onLogout, onNavigate, activePage }) {
  function getLinkClassName(pageKey) {
    const isActive = activePage === pageKey
    return `hub-nav__anchor hub-nav__anchor-button${isActive ? ' hub-nav__anchor--active' : ''}`
  }

  return (
    <header className="hub-nav" data-no-print>
      <div className="hub-nav__inner">
        <h1 className="hub-nav__title" onClick={() => onNavigate('home')}>
          Цифровой навигатор педагога
        </h1>
        <nav className="hub-nav__anchors" aria-label="Навигация по разделам">
          <button
            type="button"
            className={getLinkClassName('ai')}
            onClick={() => onNavigate('ai')}
          >
            Нейросети для учителя
          </button>
          <button
            type="button"
            className={getLinkClassName('templates')}
            onClick={() => onNavigate('templates')}
          >
            Шаблоны и визуал
          </button>
          <button
            type="button"
            className={getLinkClassName('interactive')}
            onClick={() => onNavigate('interactive')}
          >
            Инструменты интерактива
          </button>
          <button
            type="button"
            className={getLinkClassName('subjects')}
            onClick={() => onNavigate('subjects')}
          >
            Предметные копилки
          </button>
        </nav>
        <button className="btn-outline-pink hub-nav__logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default NavBar
