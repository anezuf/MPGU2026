function Hub({ onLogout }) {
  return (
    <section className="screen hub">
      <h1>Hub</h1>
      <button className="btn-ghost" onClick={onLogout}>
        Logout
      </button>
    </section>
  )
}

export default Hub
