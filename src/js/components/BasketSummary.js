import React from "react";
import deliveryPrices from './../data/deliveryPrices';
import Discounts from './../classes/Discounts';

class BasketSummary extends React.Component {

    constructor() {
        super();

        this.state = {
            deliveryOption: {
                name: '',
                price: 0
            },
            subTotal: 0,
            discounts: 0,
            total: 0
        }

        this.calculatePrice = this.calculatePrice.bind(this);
    }

    formatPrice(price) {
        return Math.trunc(price * 100) / 100;
    }

    getDelivery(subTotal) {
        return deliveryPrices.find(delivery => {
            const from = delivery.from === null ? Number.NEGATIVE_INFINITY : delivery.from;
            const to = delivery.to === null ? Number.POSITIVE_INFINITY : delivery.to;
            
            return subTotal > from && subTotal < to;
        });
    }

    calculatePrice(products) {
        const subTotal = products.reduce((previousSum, product) => previousSum + product.price, 0);
        const discounts = Discounts.getSecondHalfPrice(products);
        const deliveryOption = this.getDelivery(subTotal - discounts);

        this.setState({
            subTotal: this.formatPrice(subTotal),
            deliveryOption,
            discounts: this.formatPrice(discounts),
            totalPrice: this.formatPrice(subTotal - discounts + deliveryOption.price)
        });
    }

    componentWillMount() {
        this.calculatePrice(this.props.products);
    }

    componentWillReceiveProps(nextProps) {
        this.calculatePrice(nextProps.products);
    }

	render() {
		return (
            <section>
                <div className="sub-total">Sub total: <span className="amount">£{this.state.subTotal}</span></div>
                <div className="discounts">Discounts: <span className="amount">-£{this.state.discounts}</span></div>
                <div className="delivery-option">Delivery option: <span className="amount">{this.state.deliveryOption.name}</span></div>
                <div className="delivery-price">Delivery price: <span className="amount">£{this.state.deliveryOption.price}</span></div>
                <div className="total-price">Total price: <span className="amount">£{this.state.totalPrice}</span></div>
            </section>
		);
	}
}

export default BasketSummary;