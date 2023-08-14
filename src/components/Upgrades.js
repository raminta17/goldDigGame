import React from 'react';

const Upgrades = ({upgrade, applyUpgrade,index, firstUpgradePrice}) => {
    return (
        <div className="upgrade" onClick={() => applyUpgrade(index)}>
            <b className='f1'>
                {upgrade.description}
            </b>
            <div className="f1">
                <img src={upgrade.photo} alt=""/>
            </div>
            <b>Price: {upgrade.description=== '+0.3g' ? firstUpgradePrice : upgrade.price}$</b>

        </div>
    );
};

export default Upgrades;