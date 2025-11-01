import React from 'react'

export default function Future(){
  return (
    <section className="section future">
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <img className="future-front" src="/images/front.jpg" alt="front" onError={(e)=>{e.target.style.display='none'}} />
      </div>
      <div className="future-grid">
        <div className="future-left">
          <h3>The Future of <span className="accent">Quality Health</span></h3>
          <p style={{color:'var(--muted)'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
          </p>
          <p style={{color:'var(--muted)'}}>
            Learn more about our mission and how we build patient-first healthcare solutions.
          </p>
        </div>
        <div className="future-right">
          <img
            src="/Rectangle 15.png"
            alt="doctor with patient"
            style={{width:'100%', borderRadius:28, boxShadow:'0 20px 40px rgba(11,38,73,0.08)'}}
            onError={(e)=>{
              const parent = e.target.parentNode;
              parent.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" rx="28" fill="#f6fbff"/>
                  <g transform="translate(40,40)" fill="#dbeeff">
                    <rect x="0" y="40" width="420" height="220" rx="12" />
                  </g>
                </svg>`
            }}
          />
        </div>
      </div>
    </section>
  )
}
