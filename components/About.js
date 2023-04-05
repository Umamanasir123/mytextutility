import React from 'react'

export default function About(props) {
  return (

    <div className="card mx-5 my-3" >
        <img src={props.im} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{color:'black'}}>{props.cardheading}</h5>
            <p className="card-text" style={{color:'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  
  )
}
