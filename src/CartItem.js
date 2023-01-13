import React from "react";

const CartItem = (props) => {
    
    const {price, title, qty, id} = props.product;
    const {product, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteProduct} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img alt="" style={styles.image} src = {product.img} />
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
                        onClick={() => handleIncreaseQuantity(product)}
                    />
                    <img
                        alt = "decrease"  
                        className="action-icons" 
                        src = "https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        onClick={() => handleDecreaseQuantity(product)}
                    />
                    <img 
                        alt = "delete" 
                        className="action-icons" 
                        src = "https://cdn-icons-png.flaticon.com/512/484/484611.png" 
                        onClick={() => handleDeleteProduct(id)}
                    />
                </div>
            </div>
        </div>
    );
    
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