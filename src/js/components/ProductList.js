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
        let markup = <div className="empty-basket">Your basket is empty</div>;

        if (this.props.products.length > 0) {
            markup = <ul className="product-box">
                {this.props.products.map((product, i) => this.getListItem(product, i))}
            </ul>
        }
		return markup;
	}
}

export default ProductList;