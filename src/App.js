
import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      products: [
        {
            price: 99,
            title: 'Watch',
            qty: 2,
            img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 1
        },
        {
            price: 999,
            title: 'Phone',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 2
        },
        {
            price: 9999,
            title: 'TV',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
            id: 3
        }
      ]
    }
  }

  increaseQuantity = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
  }

  decreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products: products
      })
  }

  deleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      });
  }

  getCount = (products) => {
    let total = 0;

    products.forEach((product) => {
      total += product.qty;
    });

    return total;
  }

  getCartTotal = () => {
    let cartTotal = 0;

    const {products} = this.state;

    products.forEach((product) => {
      cartTotal += product.qty * product.price;
    });

    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCount(products)}
        />
        <Cart
          handleIncreaseQuantity = {this.increaseQuantity}
          handleDecreaseQuantity = {this.decreaseQuantity}
          handleDeleteProduct = {this.deleteProduct} 
          products = {products}
        />
        <div style = {{fontSize: 18, padding: 10}}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
