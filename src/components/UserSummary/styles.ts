import styled from "styled-components";

export const UserSummaryHeader = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 13.25rem;

  margin-top: -5.8125rem;

  display: flex;

  background: ${(props) => props.theme["base-profile"]};
  border: none;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  padding: 2rem 2.5rem;

  gap: 2rem;

  img {
    width: 148px;
    height: 148px;

    border-radius: 8px;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 38.25rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
  }

  button {
    background: transparent;
    display: flex;
    align-items: center;
    border: none;

    color: ${(props) => props.theme["blue"]};
    cursor: pointer;

    border-bottom: 1px solid transparent;

    font-size: 12px;
    font-weight: bold;
    line-height: 160%;

    svg {
      margin-left: 8px;
    }
  }

  button:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;

export const IconesContainer = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    svg {
      margin-right: 8px;
      color: ${(props) => props.theme["base-label"]};
    }

    p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      line-height: 160%;
    }
  }
`;
