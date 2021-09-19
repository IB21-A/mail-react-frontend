import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { screen } from "@testing-library/react";

export const Wrapper = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 1em 0;
	text-align: left;

	button {
		margin-right: 1em;
		padding: 0.3em 0.6em;
	}

	.active {
		color: #fff;
		background-color: #007bff;
		border-color: #007bff;
	}

	.inactive {
		color: #007bff;
		background-color: transparent;
		background-image: none;
		border-color: #007bff;
	}

	.inactive:hover {
		color: #fff;
		background-color: #007bff;
		border-color: #007bff;
	}
`;
