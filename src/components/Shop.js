import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import '../components/Shop.css'
import Cart from './Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newcart = [...cart, product];
        setCart(newcart);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-contaiainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;