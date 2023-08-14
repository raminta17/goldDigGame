import React from 'react';

const GoldPrice = ({sellingPrice}) => {
    return (
        <div className="box goldPrice">
            Gold price for 1g: {sellingPrice}$
        </div>
    );
};

export default GoldPrice;