/**
 * External dependencies.
*/

/**
 * Internal dependencies.
*/
import Heading from '@/components/heading/heading';
import Btn from '@/components/btn/btn';

const CardProducts = () => {
    return (
        <div className="card-product">
            <div className="product-logo">
                <img src="public/assets/images/temp/shopping-bag.png" alt="" />
            </div>

            <Heading level={6}>Chips</Heading>

            <p>€1.00</p>

            <Btn>Buy</Btn>
        </div>
    );
}

export default CardProducts;