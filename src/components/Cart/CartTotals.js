import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const notify = () =>{
        window.alert("Sucessfully purchased!!!")   
    }
    const {cartSubTotal, cartTax, cartTotal,clearCart} = value;
    return <React.Fragment>
       <div className="container">
           <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button
                            className="btn btn-outline-danger text-uppercase mb-3 px-5 m-2"
                            type="button"
                            onClick={() => {
                                clearCart();
                            }}>
                            clear cart
                        </button> 
                        <button className="btn btn-outline-success text-uppercase mb-3 px-5 m-2"
                            type="button" onClick={() => { notify()
                                clearCart();
                            }}>
                            Purchase
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">subtotal :</span>
                        {cartSubTotal}
                    </h5>
                    <h5>
                        <span className="text-title">tax :</span>
                        {cartTax}
                    </h5>
                    <h5>
                        <span className="text-title">TOTAL AMOUNT :</span>
                        <b>{cartTotal}</b>
                    </h5>
               </div>
           </div>
       </div>

       </React.Fragment>;
    
}
