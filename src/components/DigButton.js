import React from 'react';

const DigButton = ({addInventory}) => {
    return (
        <button onClick={addInventory} className="box digGoldBtn">DIG GOLD</button>
    );
};

export default DigButton;