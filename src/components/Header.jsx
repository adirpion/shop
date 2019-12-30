import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            showProducts: false,
            showCart: true
        }
    }

    cartPage = () =>{
        this.props.showCart(this.state.showCart);
    }
    productsPage = () => {
        this.props.showProducts(this.state.showProducts);
    }

    render() {
        return (
            <div className="header">
                 <div onClick={this.productsPage} className="menu">MY SHOP</div> 
                 <div onClick={this.cartPage} className="menu"><span>🛒</span>CART</div>   
            </div>
        )
    }
}
