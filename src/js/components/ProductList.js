import React from "react";

class ProductList extends React.Component {
	getListItem(product, i){
		return <li key={i}>{product.name} , £{product.price}</li>;
	}

	render() {
		return (
            <ul className="message-box">
                {this.props.products.map((product, i) => this.getListItem(product, i))}
            </ul>
		);
	}
}

export default ProductList;