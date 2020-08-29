import styled from 'styled-components'
import { WIDTH_SIDEBAR } from '../../../styled/variables'

export const Container = styled.div`
	width: ${WIDTH_SIDEBAR}px;
	height: 100%;
	background: #040404;
	position: fixed;
	padding-top: 50px;
`
export const MenuList = styled.ul`
	margin-bottom: 25px;
`

export const MenuItem = styled.li`
	color: #ccc;
	padding: 5px 10px 5px 30px;
	font-weight: 600;
	font-size: 14px;
	display: flex;
	align-items: center;
	border-left: 4px solid ${({ active }) => (active ? '#1db954' : '#040404')};
	svg {
		margin-right: 10px;
	}
	&:hover {
		color: #fff;
		cursor: pointer;
	}
`

export const WrapperList = styled.div`
	overflow-y: auto;
	height: calc(100% - 140px);
`

export const ContainerList = styled.ul`
	padding: 10px 0 10px 30px;
	list-style: none;
`

export const TitleList = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 300;
	color: #ccc;
	margin-bottom: 5px;
`

export const ItemList = styled.li`
	color: #ccc;
	font-weight: 600;
	font-size: 14px;
	padding: 7.5px 0;
`
