import React, { Component } from 'react';
import './ShippingPrice.css';

export default class ShippingPrice extends Component {
    render(){
        return(
            
            <div className="flex-grid">

                <div className="col">
                    <p>Shipping: </p>
                </div>

                <div className="col">
                    <p>{`$${this.props.ship}`}</p>
                </div>

            </div>
        )
    }

}