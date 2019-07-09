import React,{ Component} from 'react';

export default class TaxFees extends Component {
    render(){
        return(
            <div className="flex-grid">

            <div className="col">
                <p>Tax</p>
            </div>

            <div className="col">
                <p>{`$${this.props.taxes}`}</p>
            </div>

        </div>
        )
    }
}