import styled from "styled-components";

export const SearchIssuesContainer = styled.form`
  width: 54rem;

  margin-top: 4.5625rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1rem;
      font-weight: bold;
      line-height: 160%;

      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  input {
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 0.75rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    width: 100%;
    height: 3.125rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      font-size: 1rem;
      line-height: 160%;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["base-label"]};
    }
  }
`;
