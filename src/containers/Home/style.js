import styled from 'styled-components'
import { WIDTH_SIDEBAR, WIDTH_FRIEND } from '../../styled/variables'

export const Container = styled.div`
	background: #131313;
	width: calc(100% - ${WIDTH_SIDEBAR + WIDTH_FRIEND}px);
	height: 100%;
	overflow-x: auto;
	margin-left: ${WIDTH_SIDEBAR}px;
	padding: 20px;
`
