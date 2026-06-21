import './Sidebar.css'

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.8 8.2 14 14l-5.8 1.8L10 10l5.8-1.8Z" />
    </svg>
  )
}

function MessageSquareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 18.5c-2.8 0-5-2.2-5-5v-5C2 5.7 4.2 3.5 7 3.5h10c2.8 0 5 2.2 5 5v5c0 2.8-2.2 5-5 5H9l-5 3v-3H7Z" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 11v6" />
      <path d="M12 7h.01" />
    </svg>
  )
}

function LogOutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  )
}

const TOP_NAV_ITEMS = [
  { page: 'tools', label: 'Инструменты' },
  { page: 'ai', label: 'Нейросети' },
  { page: 'subjects', label: 'Материалы' },
  { page: 'templates', label: 'Шаблоны' },
  { page: 'interactive', label: 'Интерактив' },
  { page: 'tips', label: 'Рекомендации' },
]

function SidebarNavItem({ activePage, item, onNavigate }) {
  const isActive = activePage === item.page

  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
      onClick={() => onNavigate(item.page)}
    >
      <span className="sidebar__item-label">{item.label}</span>
    </button>
  )
}

function Sidebar({ activePage, onNavigate, onLogout }) {
  return (
    <header className="sidebar" aria-label="Навигация по хабу" data-no-print>
      <button
        type="button"
        className="sidebar__logo"
        onClick={() => onNavigate('home')}
        aria-label="На главную — Цифровой навигатор"
      >
        <span className="sidebar__logo-icon">
          <CompassIcon />
        </span>
        <span className="sidebar__logo-copy">
          <span className="sidebar__logo-title">Цифровой навигатор</span>
        </span>
      </button>

      <nav className="sidebar__nav" aria-label="Основные разделы">
        <div className="sidebar__nav-group">
          {TOP_NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.page}
              activePage={activePage}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </nav>

      <div className="sidebar__actions">
        <a
          className="sidebar__feedback"
          href="https://forms.yandex.ru/u/69e6483ce010db13929ca978"
          target="_blank"
          rel="noreferrer"
        >
          <span>Обратная связь</span>
          <MessageSquareIcon />
        </a>

        <button
          type="button"
          className={`sidebar__info${activePage === 'about' ? ' sidebar__info--active' : ''}`}
          onClick={() => onNavigate('about')}
          aria-label="О проекте"
          aria-current={activePage === 'about' ? 'page' : undefined}
        >
          <InfoIcon />
        </button>

        <button
          type="button"
          className="sidebar__logout"
          onClick={onLogout}
          aria-label="Выйти"
        >
          <LogOutIcon />
        </button>
      </div>
    </header>
  )
}

export default Sidebar
