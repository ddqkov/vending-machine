/**
 * External dependencies.
*/

/**
 * Internal dependencies.
*/
import Heading from '@/components/heading/heading';

const MachineBalance = ({ balance }) => {
    return (
        <div className="machine-balance">
            <Heading level={2}>Balance: €{balance.total.toFixed(2)}</Heading>
            <Heading level={4}>Change: €{balance.leftover.toFixed(2)}</Heading>
        </div>
    );
}

export default MachineBalance;