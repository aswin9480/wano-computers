import React from 'react'
import cat from './lauf.jpg'
export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                  <h1>Your cart is currently empty!!</h1> 
                  <img src={cat} alt='cat'></img>
                  </div>
            </div>
            {/* <center>
            <iframe width="300" height="280" src="https://www.youtube.com/embed/-UzXojkIAM0?si=MtotTl0nSlnW6EI5&amp;controls=0&amp;start=0" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center> */}
        </div>
    );
}
