import React from 'react';
import InformationBox from '../InformationBox';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

const informationBoxes = () => (
    <div>
        <InformationBox
            icon={'star'}
            firstTitle={'Guaranteed'}
            secondTitle={'Satisfaction'}
            info={'Most of our products come with a full 30 day return policy.'}
        />
        <InformationBox
            icon={'shipping-fast'}
            firstTitle={'Fast'}
            secondTitle={'Delivery'}
            info={'Depending on time of order, some products may be shipped within the same day. For products ordered late, they will be guaranteed top of queue for shipment.'}
        />
        <InformationBox
            icon={'smile'}
            firstTitle={'Quality'}
            secondTitle={'Laptop'}
            info={'Right from the box, you can tell what you get is nothing but the best quality product.'}
        />
    </div>
)

export default informationBoxes;