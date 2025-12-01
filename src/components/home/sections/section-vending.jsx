/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import Section from '@/components/section/section';
import Shell from '@/components/shell/shell';
import Heading from '@/components/heading/heading';
import MachineBalance from '@/components/machine-balance/machine-balance';
import MachineMoneyInput from '@/components/machine-money-input/machine-money-input';
import CardProducts from '@/components/cards-product/card-product';
import Grid from '@/components/grid/grid';

const SectionVending = () => {
	return (
		<Section className='section-vending'>
			<Shell>
				<Section.Head>
					<Heading level={1}>Vending Machine</Heading>
				</Section.Head>

				<Section.Body>
					<MachineBalance />

					<MachineMoneyInput />

					<Grid>
						<Grid.Col columnCount={5}>
							<CardProducts/>
						</Grid.Col>
					</Grid>

				</Section.Body>
			</Shell>
		</Section>
	);
};

export default SectionVending;
