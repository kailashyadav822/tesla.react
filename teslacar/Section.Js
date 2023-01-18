import React from 'react'

function Section(props) {
  return (
    <section className='content' style={{backgroundImage:`url('tesla images/${props.backgroundImage}')`}}>

    
        <section className='heading'>
            <h1>{props.carName}</h1>
            <p>{props.text}</p>
        </section>
        <section className='ctn'>

            <a href ="">{props.right}</a>
               { props.left &&<a href ="">{props.left}</a>}
           
           
           <div className='arrow'>
            {props.icon && <img src ="tesla images/down-arrow.svg"></img>}
           
            </div>
        </section>

    </section>
  )
}

export default Section;