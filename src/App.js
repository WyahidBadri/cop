import React, {Component, useState} from 'react';
import './App.css';
import SubTotal from './components/Subtotal/Subtotal';
import TaxFees from './components/TaxFees/TaxFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ShippingPrice from './components/ShippingPrice/ShippingPrice';
import ItemDetail from './components/ItemDetail/ItemDetail'

class  App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100,
      taxes: 0,
      estimatedTotal: 0,
      shipping: 0
    }

    
  }
  
    // const [total, setTotal] = useState();
    // const [taxes, SetTaxes] = useState();
    // const [estimatedTotal, setEstimatedTotal] = useState();
    // const [shipping, setShipping] = useState();
  
 

  componentDidMount = () => {
     this.setState({
       taxes: (this.state.total) * 0.0875
     },
     function(){
       this.setState({
         shipping: this.state.total / 20
       })
       this.setState({
        estimatedTotal: this.state.total + this.state.taxes + this.state.shipping
      })
     },
     )
  }
  render(){
    return (
      <div className="container">

      <SubTotal price={this.state.total.toFixed(2)} />
      <TaxFees taxes={this.state.taxes.toFixed(2)} />
      <ShippingPrice ship={this.state.shipping.toFixed(2)}/>
      <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
      <ItemDetail price={this.state.estimatedTotal.toFixed(2)}/>
      
      </div>
    )
  }
}

export default App;
