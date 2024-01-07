import React from 'react'

export default function Product(props) {
    //props or properties
    //props are incoming values 
    console.log(props);
  return (
    <div>
        <img src={props.path} className='img-fluid' />
        <h2> &#8377;{props.price} </h2>
        <p>{props.name}</p>
        <p>
            <button className='btn btn-dark'>Add To Cart</button>
        </p>
    </div>
  )
}