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

	getOption(product, i){
		return <option key={i} value={product.id}>{product.name}</option>;
	}

	render() {
		return (
			<section className="shoping-basket-container">
                
                <h1>Title</h1>

                <form onSubmit={this.addNewProduct}>
                    <select name="products" onChange={this.editNewProduct}>
                        <option value=""></option>
                        {productsData.map((product, i) => this.getOption(product, i))}
                    </select>

                    <input className="submit-message" type="submit" value="Add" />
                </form>

                <ShoppingBasket productIds={this.props.products}/>

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