/**
 * External dependencies.
*/

/**
 * Internal dependencies.
 */
import MachineBalance from '@/components/machine-balance/machine-balance';
import MachineMoneyInput from '@/components/machine-money-input/machine-money-input';
import CardProducts from '@/components/cards-product/card-product';
import Grid from '@/components/grid/grid';

const VendingMachine = ({productsData, balance, setBalance}) => {
	return (
		<div className="vending-machine">
            <div className="vending-machine__balance">
                <MachineBalance balance={balance.total} />

                <MachineMoneyInput setBalance={setBalance}/>
            </div>


            <Grid>
                {productsData.map((productData) => {
                    return (
                        <Grid.Col 
                            key={productData.id} 
                            columnCount={5}
                        >
                            <CardProducts productData={productData}/>
                        </Grid.Col>
                    )
                })}
            </Grid>
        </div>
	);
};

export default VendingMachine;