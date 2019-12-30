import React, { Component } from 'react'
import Title from "./Title";

export default class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
            index: props.index,
            title: this.props.title,
            price: this.props.price,
            inCart: false
        }
    }

    addToCart = () => {
        this.props.add(this.state.index, this.state.title, this.state.price, this.state.inCart);
    }

    render() {
        return (
            <div className="product">
                <h3 className="productTitle">{this.props.title}</h3>
                <h4 className="price">${this.props.price}</h4>
                <button onClick={this.addToCart} className="add-to-cart">add to cart</button>
            </div>
        )
    }
}
