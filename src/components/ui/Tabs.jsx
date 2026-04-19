function Tabs({ tabs, activeTab, onTabChange, children }) {
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label="Предметные вкладки">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tabs__trigger ${activeTab === tab.id ? 'tabs__trigger--active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel">{children}</div>
    </div>
  )
}

export default Tabs
