class Discounts {
    static getSecondHalfPrice(products) {
        let totalDiscount = 0;
        let eligibleProduct = 0;
        
        products.forEach(product => {
            if (product.halfPriceOffer) {
                eligibleProduct++;
            }

            if (eligibleProduct === 2) {
                totalDiscount += product.price / 2;
                eligibleProduct = 0;
            }
        });

        return totalDiscount;
    }
}

export default Discounts;