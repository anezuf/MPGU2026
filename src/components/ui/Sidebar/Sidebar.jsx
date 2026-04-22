import './Sidebar.css'
import { HUB_NAV_ITEMS } from '../../../data/navHub'

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.6" />
      <rect x="14" y="4" width="6" height="6" rx="1.6" />
      <rect x="4" y="14" width="6" height="6" rx="1.6" />
      <rect x="14" y="14" width="6" height="6" rx="1.6" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.8 8.2 14 14l-5.8 1.8L10 10l5.8-1.8Z" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 6a3.5 3.5 0 0 1 7 0v.3a3 3 0 0 1 2.5 2.95 3 3 0 0 1-1.2 2.4 3 3 0 0 1 .2 4.8 3.5 3.5 0 0 1-3.5 5.54H12" />
      <path d="M14.5 9.5a2.5 2.5 0 0 1 0 5" />
      <path d="M9.5 6a3.5 3.5 0 0 0-7 0v.3A3 3 0 0 0 0 9.25a3 3 0 0 0 1.2 2.4 3 3 0 0 0-.2 4.8 3.5 3.5 0 0 0 3.5 5.54H12" />
      <path d="M9.5 9.5a2.5 2.5 0 0 0 0 5" />
      <path d="M12 6v12" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  )
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 3 11 11" />
      <path d="m5 3 4 14 3.5-5.5L18 8 5 3Z" />
      <path d="m13 13 4 8" />
      <path d="m16 14.5 3-1.5" />
    </svg>
  )
}

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.5A2.5 2.5 0 0 1 5 4h5.5A3.5 3.5 0 0 1 14 7.5V20a3.5 3.5 0 0 0-3.5-3.5H5A2.5 2.5 0 0 0 2.5 19V6.5Z" />
      <path d="M21.5 6.5A2.5 2.5 0 0 0 19 4h-5.5A3.5 3.5 0 0 0 10 7.5V20a3.5 3.5 0 0 1 3.5-3.5H19a2.5 2.5 0 0 1 2.5 2.5V6.5Z" />
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10.5v5" />
      <path d="M12 7.5h.01" />
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

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

const NAV_ICONS = {
  ai: BrainIcon,
  templates: LayersIcon,
  interactive: CursorIcon,
  subjects: BookOpenIcon,
}

const PRIMARY_NAV_ITEMS = [
  { page: 'home', label: 'Обзор', icon: GridIcon },
]

const SECONDARY_NAV_ITEMS = [
  { page: 'feedback', label: 'Обратная связь', icon: MessageSquareIcon },
  { page: 'about', label: 'О проекте', icon: InfoIcon },
]

function SidebarNavItem({ activePage, item, onNavigate }) {
  const isActive = activePage === item.page
  const Icon = item.icon

  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
      onClick={() => onNavigate(item.page)}
    >
      <Icon />
      <span className="sidebar__item-label">{item.label}</span>
    </button>
  )
}

function Sidebar({ activePage, onNavigate, onLogout }) {
  return (
    <aside className="sidebar" aria-label="Навигация по хабу" data-no-print>
      <button type="button" className="sidebar__logo" onClick={() => onNavigate('home')}>
        <span className="sidebar__logo-icon">
          <CompassIcon />
        </span>
        <span className="sidebar__logo-copy">
          <span className="sidebar__logo-title">Цифровой навигатор</span>
          <span className="sidebar__logo-subtitle">педагога</span>
        </span>
      </button>

      <div className="sidebar__nav">
        <p className="sidebar__section-label">Главное</p>
        <div className="sidebar__nav-group">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.page}
              activePage={activePage}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <p className="sidebar__section-label">Разделы</p>
        <div className="sidebar__nav-group">
          {HUB_NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.page}
              activePage={activePage}
              item={{ ...item, icon: NAV_ICONS[item.page] }}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <p className="sidebar__section-label">Прочее</p>
        <div className="sidebar__nav-group">
          {SECONDARY_NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.page}
              activePage={activePage}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__bottom">
        <a
          className="sidebar__author"
          href="https://t.me/+MIIV8OFboBY1ZjA6"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sidebar__avatar" aria-hidden="true">ТП</span>
          <div className="sidebar__author-copy">
            <span className="sidebar__author-name">Трофимова Полина</span>
            <span className="sidebar__author-role">Автор проекта</span>
          </div>
          <span className="sidebar__author-arrow" aria-hidden="true">
            <ChevronRightIcon />
          </span>
        </a>

        <button type="button" className="sidebar__logout" onClick={onLogout}>
          <LogOutIcon />
          <span className="sidebar__logout-text">Выйти</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
