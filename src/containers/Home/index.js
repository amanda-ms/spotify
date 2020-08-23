import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { List } from '../../components/common'
import request from '../../utils/request'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const { data } = await request.get('home')
		setData(data)
	}

	return (
		<Container>
			{data.map((item) => (
				<List title={item.title} items={item.items} />
			))}
		</Container>
	)
}

export default Home
