import React from 'react'
import { MenuList, MenuItem } from './style'
import { Icon } from '../'

const Menu = () => {
	return (
		<MenuList>
			<MenuItem>
				<Icon />
				Home
			</MenuItem>
			<MenuItem>
				<Icon />
				Browse
			</MenuItem>
			<MenuItem>
				<Icon />
				Radio
			</MenuItem>
		</MenuList>
	)
}

export default Menu
