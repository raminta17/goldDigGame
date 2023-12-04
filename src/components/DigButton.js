import React from 'react'

const DigButton = ({ addInventory }) => {
	return (
		<div style={{ padding: '10px' }}>
			<button onClick={addInventory} className='box digGoldBtn'>
				DIG GOLD
			</button>
		</div>
	)
}

export default DigButton
