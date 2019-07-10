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
     setTotal(100)
    },[]
    ) 

    let taxes = total * 0.0875;
    let shipping = total / 20;
    let estimatedTotal = total + taxes + shipping;
       
    return (
      <div className="container">
      <SubTotal price={total} />
      <TaxFees taxes={taxes} />
      <ShippingPrice ship={shipping}/>
      <EstimatedTotal price={estimatedTotal}/>
      <ItemDetail price={estimatedTotal}/>     
      </div>
    )
}