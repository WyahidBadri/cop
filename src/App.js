import React, { useState, useEffect} from 'react';
import SubTotal from './components/Subtotal/Subtotal';
import TaxFees from './components/TaxFees/TaxFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ShippingPrice from './components/ShippingPrice/ShippingPrice';
import ItemDetail from './components/ItemDetail/ItemDetail'
import './App.css';

export default function App(){
  
    const [total, setTotal] = useState(0);
    useEffect(()=> {
     setTotal(100) //updates to added subtotoal of all items in cart
    },[]
    ) 

    let taxes = total * 0.0875; // Set to what taxes are applied
    let shipping = total / 20; //Set to Whatever the shipping formula is 
    let estimatedTotal = total + taxes + shipping;
       
    return (
      <div className="container">
      <h3>Order Summary</h3>
      {/* <ItemDetail />      */}
      <SubTotal price={total.toFixed(2)} />
      <TaxFees taxes={taxes.toFixed(2)} />
      <ShippingPrice ship={shipping.toFixed(2)}/>
      <EstimatedTotal price={estimatedTotal.toFixed(2)}/>
      
      </div>
    )
}