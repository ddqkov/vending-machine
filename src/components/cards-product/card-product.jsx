/**
 * External dependencies.
*/

/**
 * Internal dependencies.
*/
import Heading from '@/components/heading/heading';
import Btn from '@/components/btn/btn';

const CardProducts = ({productData, setBalance, setProductsData, getRemainingBalance, showInsufficientFunds}) => {
    const handleBuy = () => {
        const remaining = getRemainingBalance(productData);
        
        if (remaining < 0) {
            showInsufficientFunds(Math.abs(remaining));
            return;
        }

        if (productData.quantity <= 0) {
            return; 
        }

        setProductsData((prevProductsData) => 
            prevProductsData.map((product) => 
                product.id === productData.id 
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
        
        setBalance(prevBalance => ({
            total:  prevBalance.total - productData.price,
            leftover:  prevBalance.total - productData.price
        }));
    }
    return (
        <div className="card-product">
            <span className="card__quantity">{productData.quantity}</span>
            
            <div className="product-logo">
                <img src={productData.logo} alt="" />
            </div>

            <div className="card__content">
                <Heading level={6}>{productData.name}</Heading>

                <p>€{productData.price.toFixed(2)}</p>

                <Btn className="btn--full" onClick={handleBuy}>Buy</Btn>
            </div>

        </div>
    );
}

export default CardProducts;