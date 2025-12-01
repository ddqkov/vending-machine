/**
 * External dependencies.
*/
import { useState } from 'react';

/**
 * Internal dependencies.
 */
import MachineBalance from '@/components/machine-balance/machine-balance';
import MachineMoneyInput from '@/components/machine-money-input/machine-money-input';
import CardProducts from '@/components/cards-product/card-product';
import Grid from '@/components/grid/grid';

const VendingMachine = ({productsData, balance, setBalance, setProductsData}) => {
    const [insufficientFunds, setInsufficientFunds] = useState({ show: false, amount: 0 });
    
    const getRemainingBalance = (product) => {
        return balance.total - product.price;
    }

    const showInsufficientFunds = (amount) => {
        console.log(amount);
        
        setInsufficientFunds({ show: true, amount });
        setTimeout(() => setInsufficientFunds(prev => ({ ...prev, show: false })), 3000);
    }

    
	return (
		<div className="vending-machine">
            <div className="vending-machine__balance">  
                <MachineBalance balance={balance} />
                {insufficientFunds.show && (
                    <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
                        Not enough money! You need ${insufficientFunds.amount.toFixed(2)} more.
                    </div>
                )}
                <MachineMoneyInput setBalance={setBalance}/>
            </div>

            <Grid>
                {productsData.map((productData) => {
                    return (
                        <Grid.Col 
                            key={productData.id} 
                            columnCount={5}
                        >
                            <CardProducts 
                            balance={balance}
                            productData={productData}
                            setBalance={setBalance}
                            setProductsData={setProductsData}
                            getRemainingBalance={getRemainingBalance}
                            showInsufficientFunds={showInsufficientFunds}
                            />
                        </Grid.Col>
                    )
                })}
            </Grid>
        </div>
	);
};

export default VendingMachine;