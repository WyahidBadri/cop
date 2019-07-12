import React, { Component } from 'react';
import './ItemDetail.css'

export default class ItemDetail extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
              Items: []
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       
       };
       
       showDropdownMenu(event) {
           event.preventDefault();
           this.setState({ displayMenu: true }, () => {
           document.addEventListener('click', this.hideDropdownMenu);
           
           });
         }
       
         hideDropdownMenu() {
           this.setState({ displayMenu: false }, () => {
             document.removeEventListener('click', this.hideDropdownMenu);
           });
       
         }
    render() {
        var Items = this.state.Items
        return (
         
            <div  className="dropdown" style = {{background:"red",width:"200px"}} >
            <div className="button" onClick={this.showDropdownMenu}> Item Detail</div>
   
             { this.state.displayMenu ? (
             <ul>

                <div className="col">
                    {this.state.Items.map((item, index) =>(
                        <p>Item:{Items.name} Quantity: {Items.quantity} Price per Unit: {Items.price}</p>
                    ))}
                </div>
             
             </ul>
           ):
           (
             null
           )
           }
          </div>  
        );
    }
}