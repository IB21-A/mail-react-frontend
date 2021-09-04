import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
`;

export const Content = styled.div`
	#message-body {
		white-space: pre-wrap;
	}

	#option-buttons {
		margin: 1rem 0;
		display: flex;
		justify-content: space-between;

		Button + Button {
			margin-left: 1rem;
		}
	}
`;
