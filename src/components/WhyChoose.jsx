import React from 'react'

export default function WhyChoose(){
  return (
    <section className="section">
      <div className="why">
        <div className="why-left">
          <h3>Why You Choose Us?</h3>
          <ul style={{color:'var(--muted)', marginTop:18, lineHeight:1.9}}>
            <li>Experienced specialists in many fields</li>
            <li>Fast response and 24/7 support</li>
            <li>Trusted by 1M+ patients</li>
            <li>Modern equipment and care</li>
            <li>Modern equipment and caring staff</li>
            <li>Personalized care plans for every patient</li>
          </ul>
        </div>
        <div className="why-right">
          <img
            src="/Rectangle 11.png"
            alt="nurse in hospital"
            onError={(e)=>{
              const p = e.target.parentNode;
              p.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" rx="28" fill="#fff"/>
                  <g fill="#eef6ff" transform="translate(40,40)">
                    <rect x="0" y="0" width="420" height="300" rx="18" />
                  </g>
                </svg>`
            }}
          />
        </div>
      </div>
      <a className="learn-more" href="#">Learn More →</a>
    </section>
  )
}
