import React from 'react'
import {
	ContainerItem,
	FigureItem,
	Content,
	HeaderContent,
	DescContent,
} from './style'

const Item = () => {
	return (
		<ContainerItem>
			<FigureItem>
				<img src="https://avatars3.githubusercontent.com/u/5261655?s=460&u=fa7674434b3fbe78aabc0eb4514212191e102d0a&v=4" />
			</FigureItem>
			<Content>
				<HeaderContent>
					<strong>Rafael</strong>
					<span>5h</span>
				</HeaderContent>
				<DescContent>
					<span>Asma</span>
					<span>Visconde</span>
				</DescContent>
			</Content>
		</ContainerItem>
	)
}

export default Item
