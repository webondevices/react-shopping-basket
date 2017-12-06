import React from "react";

class ProductList extends React.Component {

    constructor() {
        super();
        this.getListItem = this.getListItem.bind(this);
    }

	getListItem(product, i){
		return (
            <li className="product-item" key={i}>
                <span>{product.name} , £{product.price}</span>
                <button onClick={this.props.removeProduct.bind(this, product.recordId)}>Remove</button>
            </li>
        );
	}

	render() {
		return (
            <ul className="product-box">
                {this.props.products.map((product, i) => this.getListItem(product, i))}
            </ul>
		);
	}
}

export default ProductList;