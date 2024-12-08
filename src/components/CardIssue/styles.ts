import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardIssueContainer = styled.div`
  width: 54rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Card = styled(NavLink)`
  width: 26rem;
  height: 16.25rem;
  text-decoration: none;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;

  cursor: pointer;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme["base-label"]};
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 20px;
      font-weight: bold;
      line-height: 160%;

      max-width: 283px;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.9375rem;
      line-height: 160%;
    }
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 16px;
    font-weight: bold;
    line-height: 160%;
  }

  div {
    max-height: 172px;

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 16px;
      line-height: 160%;
    }
  }
`;
