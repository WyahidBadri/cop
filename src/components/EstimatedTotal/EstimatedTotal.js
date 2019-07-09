import React, { Component } from 'react';
import './EstimatedTotal.css';

export default class EstimatedTotal extends Component {
    render(){
        return(
            
            <div className="flex-grid">

                <div className="col">
                    <h2>Est. Total: </h2>
                </div>

                <div className="col">
                    <h2>{`$${this.props.price}`}</h2>
                </div>

            </div>
        )
    }

}