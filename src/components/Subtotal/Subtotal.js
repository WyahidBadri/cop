import React, { Component } from 'react';
import './Subtotal.css';
// import {Row, Col} from 'react-bootstrap';

export default class subTotal extends Component {
    render(){
        return(
            // <Row className="show-grid">
            //     <Col md={6}>Subtotal</Col>
            //     <Col md={6}>{`$${this.props.price}`}</Col>
            // </Row>
            <div className="flex-grid">

                <div className="col">
                    <p>Subtotal</p>
                </div>

                <div className="col">
                    <p>{`$${this.props.price}`}</p>
                </div>

            </div>
        )
    }

}