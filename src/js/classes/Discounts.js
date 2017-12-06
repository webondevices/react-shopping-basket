class Discounts {
    static getHalfPrice(products, minimumRequired) {
        let totalDiscount = 0;
        let eligibleProduct = 0;
        
        products.forEach(product => {
            if (product.halfPriceOffer) {
                eligibleProduct++;
            }

            if (eligibleProduct === minimumRequired) {
                totalDiscount += product.price / 2;
                eligibleProduct = 0;
            }
        });

        return totalDiscount;
    }
}

export default Discounts;