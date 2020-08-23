import React from 'react'
import { Container, Title, Content } from './style'
import { CardPlay } from '../'

const List = ({ title, items }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Content>
				{items.map((item) => (
					<CardPlay data={item} />
				))}
			</Content>
		</Container>
	)
}

export { List }
