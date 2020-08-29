import React from 'react'
import { ContainerList, TitleList, ItemList } from './style'

const List = ({ title }) => {
	return (
		<ContainerList>
			<TitleList>{title}</TitleList>
			<ItemList>Made For You</ItemList>
			<ItemList>Recently Played</ItemList>
			<ItemList>Liked Songs</ItemList>
			<ItemList>Albums</ItemList>
			<ItemList>Artists</ItemList>
			<ItemList>Podcasts</ItemList>
		</ContainerList>
	)
}

export default List
