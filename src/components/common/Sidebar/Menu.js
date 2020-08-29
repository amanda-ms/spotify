import React from 'react'
import { MenuList, MenuItem } from './style'
import { Icon } from '../'

const Menu = () => {
	return (
		<MenuList>
			<MenuItem active>
				<Icon name="home" />
				Home
			</MenuItem>
			<MenuItem>
				<Icon name="search" />
				Browse
			</MenuItem>
			<MenuItem>
				<Icon name="lib" />
				Radio
			</MenuItem>
		</MenuList>
	)
}

export default Menu
