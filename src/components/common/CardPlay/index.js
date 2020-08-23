import React from 'react'
import { Container, Figure, Image, Title, Span } from './style'

const CardPlay = ({ data }) => {
	return (
		<Container>
			<Figure>
				<Image src={data.img} />
			</Figure>
			<Title>{data.title}</Title>
			<Span>{data.desc}</Span>
		</Container>
	)
}

export { CardPlay }
