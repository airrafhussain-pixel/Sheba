import React from 'react'

export default function Testimonials(){
  return (
    <section className="testimonials">
      <h2 style={{fontSize:44, margin:0}}>What <span style={{color:'var(--blue)'}}>Our Member's</span> Saying About Us</h2>
      <p style={{color:'var(--muted)', marginTop:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
      <div style={{height:18}} />
      <div className="test-grid">
        <div>
          <div className="avatars">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/68.jpg" alt="a" />
            <img className="avatar" src="https://randomuser.me/api/portraits/men/45.jpg" alt="b" />
            <img className="avatar" src="https://randomuser.me/api/portraits/women/52.jpg" alt="c" />
          </div>
          <div style={{color:'var(--muted)', marginTop:12}}>100+ Reviews</div>
        </div>
        <div className="test-card">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:12}}>
              <img src="https://randomuser.me/api/portraits/women/65.jpg" style={{width:56,height:56,borderRadius:28}} alt="jane" />
              <div>
                <strong>Jane Cooper</strong>
                <div style={{color:'var(--muted)', fontSize:13}}>12/4/21</div>
              </div>
            </div>
            <div style={{color:'#ffbf00'}}>★★★★★</div>
          </div>
          <p style={{color:'var(--muted)', marginTop:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Sem velit viverra amet faucibus.</p>
        </div>
      </div>
    </section>
  )
}
