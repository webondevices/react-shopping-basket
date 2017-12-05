import React from "react";
import productsData from './../data/products';
import ProductList from './ProductList';
import BasketSummary from './BasketSummary';

class ShoppingBasket extends React.Component {

	constructor() {
        super();
        
        this.state = {
            products: []
        };

        this.populateProducts = this.populateProducts.bind(this);
    }

    populateProducts(ids){
        let products = [];
        
        ids.forEach(productId => {
            let product = productsData.find(product => product.id === productId);

            if (product !== undefined) {
                products.push(product);
            }
        });

        this.setState({products});
    }

    componentWillMount() {
        this.populateProducts(this.props.productIds);
    }

    componentWillReceiveProps(nextProps) {
        this.populateProducts(nextProps.productIds);
    }

	render() {
		return (
            <div>
                <ProductList products={this.state.products}/>
                <BasketSummary products={this.state.products}/>
            </div>
		);
	}
}

export default ShoppingBasket;