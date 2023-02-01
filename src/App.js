import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
// import * as firebase from 'firebase';
import firebase from './index';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    };
  }
  
  componentDidMount(){
    const db = getFirestore(firebase);
    async function getProducts(db){
      const productsCol = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCol);
      const productsList = productsSnapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      return productsList;

    }
    const products = getProducts(db);
    products.then((products) => {
      this.setState({
        products: products,
        loading: false
      })
    });
    
  }

  increaseQuantity = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products,
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
    const {products, loading} = this.state;
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
        {loading && (
          <h1> Loading the products...</h1>
        )}
        <div style = {{fontSize: 18, padding: 10}}>
          TOTAL: {this.getCartTotal()}
        </div>
        
      </div>
    );
  }
}

export default App;
