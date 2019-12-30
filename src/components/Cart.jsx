import React, { Component } from 'react'
export default class Cart extends Component {
    constructor(props){
        super(props)

        this.state = {
            cart: this.props.cart,
            emptyCart:""
        }
    }
    showTheCart = () =>{
        this.props.showCart(this.state.cart);
    }

    totalCart = () =>{
        let totalPrice = 0;
        this.props.cart.map((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    }

    checkOut = () =>{
        this.props.checkout(this.state.emptyCart)
    }

    render() {
        return (
            <div>
                <div className="cart">
                    <table>
                        <tbody>
                            <tr>
                                <th>SKU</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                            {this.props.cart.map((product, i)=>{
                                return (
                                    <tr key={i}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })}   
                        </tbody>
                    </table>    
                </div>
                <span>Total : ${this.totalCart()} </span> <br/>
                <button onClick={this.checkOut} style={{marginTop:'30px'}} className="add-to-cart">checkout</button>
            </div>
        )
    }
}
