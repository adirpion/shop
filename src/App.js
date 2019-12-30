import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Product from './components/Product';
import Cart from './components/Cart';

class App extends Component {

  state = {
      products: [
          {id:"SED454G", title: "Trek Bike Fuel EX 30", price: 129},
          {id:"FRF234G", title: "Bianchi Bike ZR 217", price: 299},
          {id:"GHT564G", title: "Spacialized Bike TW 7", price: 99},
          {id:"KLD856G", title: "Nixon Bike R152565", price: 179}
      ]
  ,
    historyCart:[],
    cart:[],
    flag:false
  }

  addProductToCart = (i,title,price) => {
      this.setState({cart:[{title:title, price:price, id:i, inCart:true},...this.state.cart]});
      alert("Product has been add to your cart");
  }

  checkOut = () => {
    this.setState({historyCart:[...this.state.cart]});
    this.setState({cart:[]});
  }  
  showPage = () =>{
    if (this.state.flag == true){
        return(
          <div>
            <Title title="Cart" />
            <Cart cart={this.state.cart} checkout={this.checkOut} />
          </div>       
        )
    }
    else {
      return (
        <div>
        <Title title="Our Products" />
          <div className="products-wrapper">
            
            {this.state.products.map((item, i) => {
              return <Product title={item.title} price={item.price} index={item.id} add={this.addProductToCart} />
            })}
          </div>
        </div>
     )

    }
  }
  
  showCart = () =>{
    this.setState({flag: true});
  }

  showProducts = () =>{
    this.setState({flag: false});
  }

  render(){
    return (
      <div className="App">
        <Header showProducts={this.showProducts} showCart={this.showCart}/>
          {this.showPage()}
        </div>
    );
  }
}

export default App;
