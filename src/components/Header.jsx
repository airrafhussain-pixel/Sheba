import React from 'react'

export default function Header(){
  return (
    <header>
      <div className="header-left">
        <div className="brand">E-sheba</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Application</a>
          <a href="#">History</a>
        </nav>
      </div>
      <div className="header-right">
        <a className="btn-outline" href="#">Log in</a>
        <button className="cta">Sign up</button>
      </div>
    </header>
  )
}
