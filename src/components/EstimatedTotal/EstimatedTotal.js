import React, { useState } from 'react';
import './EstimatedTotal.css';

export default function EstimatedTotal(props) {
    const[price, setPrice] = useState(0)

        return(
            
            <div className="flex-grid">

                <div className="col">
                    <h2>Est. Grand Total </h2>
                </div>

                <div className="col">
                    <h2>{`$${props.price}`}</h2>
                </div>

            </div>
        )
    }

