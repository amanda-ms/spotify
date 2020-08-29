import styled from 'styled-components'
import { WIDTH_SIDEBAR } from '../../../styled/variables'

export const Container = styled.div`
	width: ${WIDTH_SIDEBAR}px;
	height: 100%;
	background: #040404;
	position: fixed;
`
export const MenuList = styled.ul``

export const MenuItem = styled.li`
	color: #ccc;
	padding: 10px;
	font-weight: 600;
	font-size: 14px;
	&:hover {
		color: #fff;
		cursor: pointer;
	}
`
