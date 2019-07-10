import React,{  useState} from 'react';

export default function TaxFees(props){
    const[taxes,setTaxes] = useState(0)   
        return(
            <div className="flex-grid">

            <div className="col">
                <p>Tax</p>
            </div>

            <div className="col">
                <p>{`$${props.taxes}`}</p>
            </div>

        </div>
        )
    }
