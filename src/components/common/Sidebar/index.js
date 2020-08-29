import React from 'react'
import { Container, WrapperList } from './style'
import Menu from './Menu'
import List from './List'

const Sidebar = () => {
	return (
		<Container>
			<Menu />
			<WrapperList>
				<List title="Your Library" />
				<List title="Playlists" />
			</WrapperList>
		</Container>
	)
}

export { Sidebar }
