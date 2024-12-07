import styled from "styled-components";

export const UserSummaryHeader = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 864px;
  height: 212px;

  margin-top: -5.8125rem;

  display: flex;

  background: ${(props) => props.theme["base-profile"]};
  border: none;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const UserImage = styled.div`
  padding: 32px 32px 32px 40px;

  img {
    width: 148px;
    height: 148px;

    border: none;
    border-radius: 8px;
  }
`;

export const UserStatsDisplay = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FontAwesomeIcons = styled.div`
  display: flex;
  align-items: center;

  margin-top: 17%;

  div {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;

    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    svg {
      margin-right: 8px;
      color: ${(props) => props.theme["base-label"]};

      width: 1.0625rem;
      height: 1.0625rem;
    }
  }
`;

export const IconRedirectUser = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  margin-right: 2rem;
  height: 1.25rem;

  a {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }

  P {
    font-size: 0.75rem;
    font-family: Nunito;
    line-height: 160%;
    font-weight: bold;
  }

  p,
  svg {
    color: ${(props) => props.theme["blue"]};
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;
