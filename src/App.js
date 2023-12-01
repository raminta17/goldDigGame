import './bootstrap.min.css'
import './App.css'
import Upgrades from './components/Upgrades'
import Inventory from './components/Inventory'
import GoldPrice from './components/GoldPrice'
import EnergyBar from './components/EnergyBar'
import DigButton from './components/DigButton'
import { useState } from 'react'

function App() {
	const upgrades = [
		{
			description: '+0.3g',
			photo:
				'https://icon-library.com/images/gold-bar-icon/gold-bar-icon-3.jpg',
			upgrade: 0.3,
			price: 50,
		},
		{
			description: '+ 20%',
			photo: 'https://img.freepik.com/free-icon/flash_318-221304.jpg?w=2000',
			upgrade: 20,
			price: 50,
		},
		{
			description: '+1 slot',
			photo:
				'https://static.vecteezy.com/system/resources/thumbnails/024/684/179/small/carton-box-3d-rendering-object-icon-illustration-png.png',
			upgrade: 1,
			price: 100,
		},
	]

	const [inventory, updateInventory] = useState([])
	const [money, updateMoney] = useState(100)
	const [energy, updateEnergy] = useState(100)
	const [slotsAvailable, increaseSlots] = useState(3)
	const [maxSlots, increaseMaxSlots] = useState(3)
	const [goldPrice, updateGoldPrice] = useState(13)
	const [firstUpgradePrice, updateUpgradePrice] = useState(upgrades[0].price)
	const [randomDig, increaseRandomDig] = useState(0)
	const [errorMessage, newErrorMessage] = useState('')

	function digGold() {
		let randomGoldFound = Number((Math.random() + randomDig).toFixed(2))
		let randomEnergyCost = Math.floor(Math.random() * 10) + 1
		if (energy < randomEnergyCost) {
			newErrorMessage('Not enough energy')
			return
		}

		if (inventory.length === maxSlots) {
			newErrorMessage('Inventory is full, sell your gold')
		} else {
			newErrorMessage('')
			updateInventory([...inventory, randomGoldFound])
			increaseSlots(slotsAvailable - 1)
			updateEnergy(energy - randomEnergyCost)
		}
	}

	function sellGold() {
		if (inventory.length === 0) {
			newErrorMessage('You have nothing to sell')
			return
		}

		newErrorMessage('')
		let randomGoldPrice = Math.floor(Math.random() * 20) + 10

		let totalGold = 0
		inventory.map(goldFound => {
			totalGold += goldFound * goldPrice
		})

		updateMoney(Number((money + totalGold).toFixed(2)))
		updateGoldPrice(randomGoldPrice)
		increaseSlots(maxSlots)
		updateInventory([])
	}

	function applyUpgrade(index) {
		if (money < upgrades[index].price) {
			newErrorMessage('Not enough money')
			return
		}
		if (index === 0) {
			updateUpgradePrice(firstUpgradePrice + 50)
			increaseRandomDig(randomDig + upgrades[index].upgrade)
		}
		if (index === 1) {
			if (energy + upgrades[index].upgrade > 100) {
				updateEnergy(100)
			} else {
				updateEnergy(energy + upgrades[index].upgrade)
			}
		}
		if (index === 2) {
			increaseMaxSlots(maxSlots + upgrades[index].upgrade)
			increaseSlots(slotsAvailable + upgrades[index].upgrade)
		}
		updateMoney(Number((money - upgrades[index].price).toFixed(2)))
	}

	return (
		<div className='gameBoard'>
			<div className='d-flex upgradesCont box'>
				{upgrades.map((upgrade, index) => (
					<Upgrades
						key={index}
						index={index}
						upgrade={upgrades[index]}
						firstUpgradePrice={firstUpgradePrice}
						applyUpgrade={applyUpgrade}
					/>
				))}
			</div>
			<div className='d-flex md-col'>
				<Inventory
					info={upgrades}
					inventory={inventory}
					slots={slotsAvailable}
					sell={sellGold}
				/>
				<div className='f1 d-flex flex-column align-items-center justify-content-between'>
					<div className='w-100 text-center'>
						<GoldPrice sellingPrice={goldPrice} />
						<h4>Money: {money}$</h4>
					</div>
					<b className='error'>{errorMessage}</b>
					<div className='w-100'>
						<EnergyBar info={upgrades} energy={energy} />
						<DigButton addInventory={digGold} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
