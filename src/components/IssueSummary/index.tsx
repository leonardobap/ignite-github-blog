import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  IssueSummaryHeader,
  ButtonsContainer,
  IssueContainer,
  IssueInfos,
} from "./styles";

import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faGithub,
  faCalendarDay,
  faComment,
} from "../../fontAwesome";
import { dateFormatter } from "../../utils/formatter";

interface IssuePropsType {
  user: {
    login: string;
  };
  html_url: string;
  title: string;
  created_at: string;
  comments: number;
}

export function IssueSummary({
  user,
  html_url,
  title,
  created_at,
  comments,
}: IssuePropsType) {
  const redirectUser = () => {
    window.open(html_url, "_blank");
  };

  return (
    <IssueSummaryHeader>
      <ButtonsContainer>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>

        <button onClick={redirectUser}>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
      </ButtonsContainer>

      <IssueContainer>
        <h1>{title}</h1>

        <IssueInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{dateFormatter(created_at)}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentários</span>
          </div>
        </IssueInfos>
      </IssueContainer>
    </IssueSummaryHeader>
  );
}
