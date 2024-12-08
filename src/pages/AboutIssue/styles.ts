import styled from "styled-components";

export const AboutIssueContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IssueContent = styled.div`
  width: 54rem;
  padding: 40px 32px;

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${(props) => props.theme["base-text"]};
    margin: 1em 0;
    padding: 0;
  }

  h3 {
    margin: 1rem 0;
    padding: 0;
  }

  ol,
  ul {
    padding: 20px;
  }
`;
