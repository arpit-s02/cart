import React from "react";

class CartItem extends React.Component{


    // increaseQuantity = () => {
    //     setState form 1
    //     this.setState({
    //         qty: this.state.qty + 1
    //     });

    //     setstate Form 2 - if prev state required use this
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;

    //     if(qty === 0){
    //         return;
    //     }

    //     this.setState((prevState) => {
    //        return{
    //         qty: prevState.qty - 1
    //        } 
    //     });
    // }

    render(){
        const {price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}> {title} </div>
                    <div style={{color: "#777"}}> Rs {price} </div>                    
                    <div style={{color: "#777"}}> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                            alt = "increase"
                            className="action-icons" 
                            src = "https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={() => this.props.handleIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt = "decrease"  
                            className="action-icons" 
                            src = "https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={() => this.props.handleDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt = "delete" 
                            className="action-icons" 
                            src = "https://cdn-icons-png.flaticon.com/512/484/484611.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;