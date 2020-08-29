import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 30px;
`

export const Title = styled.h3`
	color: #fff;
	border-bottom: 1px solid #242424;
	padding-bottom: 5px;
`
export const Content = styled.div`
	display: flex;
	overflow-x: auto;
	div:first-child {
		padding-left: 0;
	}
	div:last-child {
		padding-right: 0;
	}
	&::-webkit-scrollbar {
		display: none;
	}
`
