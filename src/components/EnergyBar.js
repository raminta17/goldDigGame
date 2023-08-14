import React from 'react';

const EnergyBar = ({info, energy}) => {
    return (
        <div className="box energyBar">
            <div className="energy" style={{width: energy+'%' }}>
                <img className="mx-2" src={info[1].photo} alt=""/>
                <b>{energy}%</b>
            </div>
        </div>
    );
};

export default EnergyBar;