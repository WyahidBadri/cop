import React, { useState } from 'react';
import './Subtotal.css';

export default function SubTotal(props) {

    const[price, setPrice] = useState(0)

    

        return(
           
            <div className="flex-grid">

                <div className="col">
                    <p>Subtotal</p>
                </div>

                <div className="col">
                    <p>{`$${props.price}`}</p>
                </div>

            </div>
        )
    }

