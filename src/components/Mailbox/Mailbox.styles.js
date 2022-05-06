import styled from "styled-components";
import { Wrapper as MessageLine } from "../MessageLine/MessageLine.styles.js";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  ${MessageLine} + ${MessageLine} {
    margin-top: -1px;
  }
`;
