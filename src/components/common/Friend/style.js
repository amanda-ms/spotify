import styled from 'styled-components'
import { WIDTH_FRIEND } from '../../../styled/variables'

export const Container = styled.div`
	width: ${WIDTH_FRIEND}px;
	height: 100%;
	background: #040404;
	position: fixed;
	right: 0;
	top: 0;
	padding: 20px;
`

export const Title = styled.h2`
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border-bottom: 1px solid #212121;
	padding-bottom: 10px;
`

export const ContainerItem = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	margin-bottom: 35px;
`

export const FigureItem = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #fff;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Content = styled.div`
	width: calc(100% - 40px);
	padding-left: 10px;
`

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
	strong {
		color: #fff;
		font-size: 13px;
	}
	span {
		color: #ccc;
		font-size: 12px;
	}
`

export const DescContent = styled.div`
	display: flex;
	flex-direction: column;
	span {
		color: #ccc;
		font-size: 12px;
		line-height: 1.8;
	}
`
