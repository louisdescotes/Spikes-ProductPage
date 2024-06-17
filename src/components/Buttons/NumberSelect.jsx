import React, { useState } from 'react';

function NumberSelect() {
    const [number, setNumber] = useState(1);

    const handleClick = (operation) => {
        if (operation === 'minus' && number > 0) {
            setNumber(number - 1);
        } else if (operation === 'plus') {
            setNumber(number + 1);
        }
    };
    
    return (
        <div className="inline-block w-full gap-10 border border-CoolGrey p-4 rounded text-SpaceCadet label-large font-poppins">
            <div className="flex items-center justify-between h-full">
            <button onClick={() => handleClick('minus')}>-</button>
            <span className="items-center justify-center flex">{number}</span>
            <button onClick={() => handleClick('plus')}>+</button>
            </div>
        </div>
    );
}

export default NumberSelect;
