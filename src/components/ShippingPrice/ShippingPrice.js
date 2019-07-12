import React, { useState } from 'react';
import './ShippingPrice.css';

 export default function ShippingPrice(props){
    const[ship, setShip] = useState(0)

   
    return(
            
                    <div className="flex-grid">
        
                        <div className="col">
                            <p>Estimated Shipping & Delivery </p>
                        </div>
        
                        <div className="col">
                            <p>{`$${props.ship}`}</p>
                        </div>
        
                    </div>
               )
 }