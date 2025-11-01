import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="footer-grid">
        <div className="col" style={{flex:1}}>
          <div style={{fontWeight:700, fontSize:18}}>E-sheba</div>
          <div style={{color:'rgba(255,255,255,0.9)', marginTop:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper.</div>
        </div>
        <div className="col" style={{flex:1}}>
          <h4>Useful Links</h4>
          <ul style={{color:'rgba(255,255,255,0.95)', listStyle:'none', padding:0}}>
            <li style={{marginBottom:8}}>About Us</li>
            <li style={{marginBottom:8}}>Privacy Policy</li>
            <li style={{marginBottom:8}}>Our Mission</li>
            <li style={{marginBottom:8}}>Our Team</li>
          </ul>
        </div>
        <div className="col" style={{flex:1}}>
          <h4>Address</h4>
          <img src="/Rectangle 18.png"/>
        </div>
      </div>
      <div style={{height:1, background:'rgba(255,255,255,0.12)', margin:'24px 0'}}></div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>©2022 All Right Reserved</div>
        <div className="footer-credit">Made by ranamahabatkhan</div>
      </div>
    </footer>
  )
}
