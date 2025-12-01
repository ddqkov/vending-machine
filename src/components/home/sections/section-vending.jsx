/**
 * External dependencies.
 */
import { useState } from 'react';

/**
 * Internal dependencies.
 */
import machineProductsData from '@/data/products.json';

import Section from '@/components/section/section';
import Shell from '@/components/shell/shell';
import Heading from '@/components/heading/heading';
import VendingMachine from '@/components/vending-machine/vending-machine';

const SectionVending = () => {
	const [productsData, setProductsData] = useState(machineProductsData);
	const [balance, setBalance] = useState({
		total: 0,
		leftOver: 0,
	});
				
	return (
		<Section className='section-vending'>
			<Shell>
				<Section.Head>
					<Heading level={1}>Vending Machine</Heading>
				</Section.Head>

				<VendingMachine productsData={productsData} balance={balance} setBalance={setBalance}/>
			</Shell>
		</Section>
	);
};

export default SectionVending;
