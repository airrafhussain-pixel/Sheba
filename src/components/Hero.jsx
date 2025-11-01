import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Find & Search Your <span className="accent">Favourite</span> Doctor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>

        <div className="search">
          <div className="pill">
            <div className="field">👤 <span>Doctor's Name</span></div>
            <div className="field">📍 <span>Location</span></div>
          </div>
          <div className="action">🔍</div>
        </div>
      </div>
      <div className="hero-right" aria-hidden>
      
      </div>
    </section>
  )
}
