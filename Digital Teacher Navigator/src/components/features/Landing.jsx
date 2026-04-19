function Landing({ onEnter }) {
  return (
    <section className="screen landing">
      <h1>Digital Teacher Navigator</h1>
      <button className="btn-primary" onClick={onEnter}>
        Enter
      </button>
    </section>
  )
}

export default Landing
