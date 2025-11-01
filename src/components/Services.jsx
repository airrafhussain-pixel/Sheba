import React from 'react'

function ServiceCard({title,desc,primary}){
  return (
    <div className={"card" + (primary? ' primary':'')}>
      <div className="icon">🩺</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default function Services(){
  const items = [
    {title:'Covid-19 Test', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title:'Heart Lungs', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', primary:true},
    {title:'Supplement', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {title:'Mental Health', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ]
  return (
    <section className="section">
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <h2 style={{textAlign:'left', marginBottom:28, fontSize:48, fontWeight:800}}>Our Consulting Specialists</h2>
        <div className="services">
          {items.map((it,idx)=> <ServiceCard key={idx} {...it} />)}
        </div>
      </div>
    </section>
  )
}
