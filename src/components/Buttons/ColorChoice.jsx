import React, { useState } from 'react';
import objects from '../../json/objects.json';

function ColorChoice() {
    const [selected, setSelected] = useState(0);

    const colorSelection = objects.flatMap(item => [item.variantColor1, item.variantColor2, item.variantColor3, item.variantColor4]);

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <div className="flex gap-10">
            {colorSelection.map((color, index) => (
                <div key={index} className="relative flex items-center justify-center">
                    <button 
                        onClick={() => handleClick(index)}
                        className="absolute flex items-center h-5 w-5 rounded-full"
                        style={{ backgroundColor: color }}
                    ></button>
                    {selected === index && (
                        <div
                            style={{
                                content: '""',
                                position: 'absolute',
                                zIndex: '-10',
                                backgroundColor: '#2C3E50',
                                height: '2rem',
                                width: '2rem',
                                borderRadius: '100%',
                                opacity: '0.1',
                                textAlign: 'center'
                            }}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ColorChoice;
