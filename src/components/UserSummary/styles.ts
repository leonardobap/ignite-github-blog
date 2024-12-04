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

  padding-top: 32px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};

    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FontAwesomeIcons = styled.div`
  display: flex;
  align-items: center;

  margin-top: 17%;

  div {
    margin-right: 24px;
    display: flex;
    align-items: center;

    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    svg {
      margin-right: 8px;
      color: ${(props) => props.theme["base-label"]};

      width: 17px;
      height: 17px;
    }
  }
`;

export const IconRedirectUser = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  margin-right: 32px;
  height: 20px;

  a {
    display: flex;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
  }

  P {
    font-size: 12px;
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
