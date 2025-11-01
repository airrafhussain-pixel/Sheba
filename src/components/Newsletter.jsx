import React from 'react'

export default function Newsletter(){
  return (
    <section className="newsletter">
      <h3>Subscribe To Our Newsletter</h3>
      <div className="news-input" style={{marginTop:18}}>
        <input placeholder="Enter your email" />
        <div className="send">→</div>
      </div>
    </section>
  )
}
