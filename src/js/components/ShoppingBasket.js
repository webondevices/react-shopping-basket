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

    populateProducts(productObject){
        let productList = [];
        
        productObject.forEach(productEntry => {

            let product = productsData.find(product => product.id === productEntry.productId);

            if (product !== undefined) {
                product.recordId = productEntry.recordId;
                productList.push(product);
            }
        });

        this.setState({products: productList});
    }

    componentWillMount() {
        this.populateProducts(this.props.products);
    }

    componentWillReceiveProps(nextProps) {
        this.populateProducts(nextProps.products);
    }

	render() {
		return (
            <div>
                <ProductList products={this.state.products} removeProduct={this.props.removeProduct}/>
                <BasketSummary products={this.state.products}/>
            </div>
		);
	}
}

export default ShoppingBasket;