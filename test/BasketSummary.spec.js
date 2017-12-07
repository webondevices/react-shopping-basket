import {expect} from 'chai';
import sinon from 'sinon';
import {shallow, mount, configure} from 'enzyme';
import React from 'react';
import productData from './../src/js/data/products';
import BasketSummary from './../src/js/components/BasketSummary';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Test given results', function() {

    it('Should return 37.85 with S01, B01', function () {

        const products = [
            {
                name: 'Blouse',
                id: 'B01',
                price: 24.95,
                halfPriceOffer: false
            },
            {
                name: 'Socks',
                id: 'S01',
                price: 7.95,
                halfPriceOffer: false
            }
        ];

        const wrapper = shallow(<BasketSummary products={[]} />);
        wrapper.instance().calculatePrice(products);

        expect(wrapper.state('totalPrice')).to.equal(37.85);
    });


    it('Should return 54.37 with J01, J01', function () {
        
        const products = [
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            },
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            }
        ];

        const wrapper = shallow(<BasketSummary products={[]} />);
        wrapper.instance().calculatePrice(products);

        expect(wrapper.state('totalPrice')).to.equal(54.37);
    });


    it('Should return 60.85 with J01, B01', function () {
        
        const products = [
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            },
            {
                name: 'Blouse',
                id: 'B01',
                price: 24.95,
                halfPriceOffer: false
            }
        ];

        const wrapper = shallow(<BasketSummary products={[]} />);
        wrapper.instance().calculatePrice(products);

        expect(wrapper.state('totalPrice')).to.equal(60.85);
    });



    it('Should return 98.27 with S01, S01, J01, J01, J01', function () {
        
        const products = [
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            },
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            },
            {
                name: 'Jeans',
                id: 'J01',
                price: 32.95,
                halfPriceOffer: true
            },
            {
                name: 'Socks',
                id: 'S01',
                price: 7.95,
                halfPriceOffer: false
            },
            {
                name: 'Socks',
                id: 'S01',
                price: 7.95,
                halfPriceOffer: false
            }
        ];

        const wrapper = shallow(<BasketSummary products={[]} />);
        wrapper.instance().calculatePrice(products);

        expect(wrapper.state('totalPrice')).to.equal(98.27);
    });

});