import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const BackgroundVideo = styled.video`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	opacity: 0.9;
`
export const TituloHome = styled.h1`
	align-self: flex-start;
	font-weight: bold;
	font-style: italic;
	font-size: 36px;
`
export const BotaoIrParaPerfis = styled.button`
	width: 30%;
	font-size: 26px;
	font-weight: bold;
	font-style: italic;
	border: none;
	padding: 16px;
	margin-top: 30%;
	margin-bottom: 16px;
	background: transparent;
	color: black;
	transition-duration:0.4s;
	letter-spacing: 4px;
	&:hover{
		cursor: pointer;
		background-color: #e06d9d;
		color: white;
		border: none;
	}
	@media(max-width: 767px){
		
		width: 80%;
	}
`

