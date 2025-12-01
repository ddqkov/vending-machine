/**
 * External dependencies.
 */
import { useRef } from 'react';

/**
 * Internal dependencies.
 */
import Btn from '@/components/btn/btn';

const MachineMoneyInput = ({ setBalance }) => {
    const inputRef = useRef(null);

    const handleInput = (e) => {
        e.preventDefault();

        const value = parseFloat(inputRef.current.value);

        if (isNaN(value)) return;

        setBalance(prev => {
            return {...prev, total: prev.total + value};
        });

        inputRef.current.value = "";
    };

    return (
        <form onSubmit={handleInput}>
            <div className="machine-money-input">
                <div className="machine-field">
                    <label htmlFor="money-input">Insert Money:</label>

                    <input
                        ref={inputRef}
                        type="number"
                        placeholder="Insert your money here"
                        id="money-input"
                        name="money-input"
                        step="0.01"
                    />

                    <Btn type="submit">Insert</Btn>
                </div>

                <span className="machine__money-info">
                    Please insert only: €0.05 • €0.10 • €0.20 • €0.50 • €1 • €2
                </span>
            </div>
        </form>
    );
};

export default MachineMoneyInput;
