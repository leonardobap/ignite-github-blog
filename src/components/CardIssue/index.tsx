import { useContext } from "react";
import { Card, CardIssueContainer } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";
import { dateFormatter } from "../../utils/formatter";

import ReactMarkdown from "react-markdown";

export function CardIssue() {
  const { issues } = useContext(IssuesContext);

  const truncate = (text: string) => {
    return text.length > 280 ? text.substring(0, 262) + "..." : text;
  };

  return (
    <CardIssueContainer>
      {issues.map((issue) => (
        <Card to="/about-issue" state={{ id: issue.number }} key={issue.number}>
          <header>
            <h1>{issue.title}</h1>
            <span>{dateFormatter(issue.created_at)}</span>
          </header>

          <div>
            <ReactMarkdown>{truncate(issue.body)}</ReactMarkdown>
          </div>
        </Card>
      ))}
    </CardIssueContainer>
  );
}
