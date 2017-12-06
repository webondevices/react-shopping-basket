import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as basketActions from './../actions/basketActions';

import ShoppingBasket from './ShoppingBasket';
import productsData from './../data/products';

class Application extends React.Component {

	constructor() {
		super();

		this.state = {
			newProduct: ''
        };

		this.editNewProduct = this.editNewProduct.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
	}

	editNewProduct(event) {
		this.setState({
			newProduct: event.target.value
		});
	}

	addNewProduct(event) {
        event.preventDefault();
        
		if (this.state.newProduct.length > 0) {
			this.props.actions.addProduct(this.state.newProduct);
		}		
    }
    
    removeProduct(productId) {
        this.props.actions.removeProduct(productId);
    }

	getOption(product, i){
		return <option key={i} value={product.id}>{product.name}</option>;
	}

	render() {
		return (
			<section className="shopping-basket-container">
                
                <h1>Your Basket</h1>

                <form onSubmit={this.addNewProduct}>
                    <select className="product-selector" name="products" onChange={this.editNewProduct}>
                        <option value=""></option>
                        {productsData.map((product, i) => this.getOption(product, i))}
                    </select>

                    <input className="add-product" type="submit" value="Add" />
                </form>

                <ShoppingBasket products={this.props.products} removeProduct={this.removeProduct}/>

			</section>
		);
	}
}

function mapsStateToProps(state, ownProps) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(basketActions, dispatch)
	}
}

export default connect(mapsStateToProps, mapDispatchToProps)(Application);