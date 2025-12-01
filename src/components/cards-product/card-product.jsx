/**
 * External dependencies.
*/

/**
 * Internal dependencies.
*/
import Heading from '@/components/heading/heading';
import Btn from '@/components/btn/btn';

const CardProducts = ({productData}) => {
    return (
        <div className="card-product">
            <span className="card__quantity">{productData.quantity}</span>
            
            <div className="product-logo">
                <img src={productData.logo} alt="" />
            </div>

            <div className="card__content">
                <Heading level={6}>{productData.name}</Heading>

                <p>€{productData.price.toFixed(2)}</p>

                <Btn className="btn--full">Buy</Btn>
            </div>

        </div>
    );
}

export default CardProducts;