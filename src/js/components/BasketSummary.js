import React from "react";
import deliveryPrices from './../data/deliveryPrices';

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
        return Math.round(price * 100) / 100;
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
        const deliveryOption = this.getDelivery(subTotal);

        this.setState({
            subTotal: this.formatPrice(subTotal),
            deliveryOption
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
                <div>Price: £{this.state.subTotal}</div>
                <div>Delivery option: {this.state.deliveryOption.name}</div>
                <div>Delivery price: £{this.state.deliveryOption.price}</div>
            </section>
		);
	}
}

export default BasketSummary;