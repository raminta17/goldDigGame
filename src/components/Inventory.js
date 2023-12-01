import React from 'react'

const Inventory = ({ info, inventory, slots, sell }) => {
	return (
		<div className='f1 inventory'>
			<div>
				<div className='d-flex justify-content-end h-25'>
					<b className='mx-2'>slots available: {slots}</b>
					<img src={info[2].photo} alt='' />
				</div>
				<div className='inventoryItems d-flex flex-wrap'>
					{inventory.map((goldFound, index) => (
						<div
							key={index}
							className='box diggedGold d-flex flex-column align-items-center'
						>
							<b>{goldFound}g</b>
							<img src={info[0].photo} alt='' />
						</div>
					))}
				</div>
			</div>

			<button onClick={sell} className='box sellBtn'>
				SELL ALL GOLD
			</button>
		</div>
	)
}

export default Inventory
