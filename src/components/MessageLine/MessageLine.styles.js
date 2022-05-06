import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	border: 1px solid black;
	padding: 0.2rem;
	background-color: ${(props) => props.read && "#c8c7c7"};
	${
		"" /* width: 100%;
	flex-direction: row;
	justify-content: space-between;
	width: 100%; */
	}

	:hover {
		background-color: #007bff;
		border-color: #007bff;
		color: #fff;
	}
`;
export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;

	div {
		min-width: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.sender {
		font-weight: 500;
		max-width: 30em;
		min-width: 10em;
	}

	.subject {
		text-align: left;
		justify-content: flex-start;
		width: auto;
	}

	@media screen and (max-width: 600px) {
		.timestamp {
			display: none;
		}

		.subject {
			text-align: left;
			justify-content: flex-start;
			width: 100%;
		}
	}
`;
