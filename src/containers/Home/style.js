import styled from 'styled-components'
import { WIDTH_SIDEBAR } from '../../styled/variables'

export const Container = styled.div`
	background: #131313;
	width: calc(100% - ${WIDTH_SIDEBAR}px);
	height: 100%;
	overflow-x: auto;
	margin-left: ${WIDTH_SIDEBAR}px;
	padding-left: 20px;
`
