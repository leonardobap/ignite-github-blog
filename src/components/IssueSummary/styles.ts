import styled from "styled-components";

export const IssueSummaryHeader = styled.div`
  width: 100%;
  max-width: 864px;
  height: 168px;

  margin-top: -5.8125rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme["base-profile"]};
  border: none;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  padding: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 1.25rem;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    font-size: 0.75rem;
    font-family: Nunito;
    line-height: 160%;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    svg {
      margin-left: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    font-size: 0.75rem;
    line-height: 160%;
  }

  svg {
    margin-right: 0.5rem;
  }

  a,
  svg,
  button {
    color: ${(props) => props.theme["blue"]};
  }

  a:hover,
  button:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;

export const IssueContainer = styled.div`
  margin-top: 1.25rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};
  }
`;

export const IssueInfos = styled.div`
  display: flex;

  margin-top: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    margin-right: 8px;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
  }

  div {
    display: flex;
    align-items: center;
    margin-right: 32px;
  }
`;
