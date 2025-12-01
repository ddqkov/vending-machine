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
import Btn from '@/components/btn/btn';

const VendingMachine = ({productsData, balance, setBalance, setProductsData}) => {
    const [insufficientFunds, setInsufficientFunds] = useState({ show: false, amount: 0 });
    
    const getRemainingBalance = (product) => {
        return balance.total - product.price;
    }

    const showInsufficientFunds = (amount) => {
        setInsufficientFunds({ show: true, amount });
        setTimeout(() => setInsufficientFunds(prev => ({ ...prev, show: false })), 3000);
    }

    const handleRefund = () => {
        setBalance({ total: 0, leftover: 0 });
        setInsufficientFunds({ show: false, amount: 0 });
        setProductsData(productsData)
    }

    
	return (
		<div className="vending-machine">
            <div className="vending-machine__balance">  
                <MachineBalance balance={balance} />

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

            <div className="vending-machine__foot">
                {insufficientFunds.show && (
                    <div className="error-message">
                        Not enough money! You need ${insufficientFunds.amount.toFixed(2)} more.
                    </div>
                )}

                <Btn onClick={handleRefund}>Refund</Btn>
            </div>
        </div>
	);
};

export default VendingMachine;