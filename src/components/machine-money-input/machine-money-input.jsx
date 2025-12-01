/**
 * External dependencies.
 */
import { useRef, useState } from 'react';

/**
 * Internal dependencies.
 */
import Btn from '@/components/btn/btn';
import ValidCoins from '@/enums/validCoins';

const MachineMoneyInput = ({ setBalance }) => {
    const inputRef = useRef(null);
    const [leftover, setLeftover] = useState(0);

    const calculateInsertable = (value) => {
        let remaining = Math.round(value * 100);
        let inserted = 0;

        for (let coin of ValidCoins) {
            const coinCents = Math.round(coin * 100);
            while (remaining >= coinCents) {
                inserted += coinCents;
                remaining -= coinCents;
            }
        }

        return {
            inserted: inserted / 100,
            leftover: remaining / 100
        };
    };

    const handleInput = (e) => {
        e.preventDefault();

        const rawValue = parseFloat(inputRef.current.value);
        if (isNaN(rawValue)) return;

        const { inserted, leftover } = calculateInsertable(rawValue);

        setBalance(prev => ({
            ...prev,
            total: prev.total + inserted,
            leftover: prev.leftover + leftover
        }));

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

                {leftover > 0 && (
                    <span className="machine__money-leftover">
                        Leftover: €{leftover.toFixed(2)} cannot be inserted
                    </span>
                )}
            </div>
        </form>
    );
};

export default MachineMoneyInput;
