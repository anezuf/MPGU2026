function NavBar({ onLogout, onNavigate, activePage }) {
  function getLinkClassName(pageKey) {
    const isActive = activePage === pageKey
    return isActive ? 'active' : ''
  }

  return (
    <nav className="navbar" data-no-print aria-label="Навигация по разделам">
      <div className="navbar-top">
        <span className="navbar-title" onClick={() => onNavigate('home')}>
          Цифровой навигатор педагога
        </span>
        <button type="button" className="btn-outline-pink btn-logout" onClick={onLogout}>
          Выйти
        </button>
      </div>
      <div className="navbar-links">
        <span className={getLinkClassName('ai')} onClick={() => onNavigate('ai')}>
          Нейросети для учителя
        </span>
        <span className={getLinkClassName('templates')} onClick={() => onNavigate('templates')}>
          Шаблоны и визуал
        </span>
        <span className={getLinkClassName('interactive')} onClick={() => onNavigate('interactive')}>
          Инструменты интерактива
        </span>
        <span className={getLinkClassName('subjects')} onClick={() => onNavigate('subjects')}>
          Предметные копилки
        </span>
      </div>
    </nav>
  )
}

export default NavBar
