import { IssueSummary } from "../../components/IssueSummary";
import { AboutIssueContainer, IssueContent } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useLocation } from "react-router-dom";

import ReactMarkdown from "react-markdown";

type IssueType = {
  user: {
    login: string;
  };
  html_url: string;
  title: string;
  created_at: string;
  comments: number;
  body: string;
};

export function AboutIssue() {
  const location = useLocation();
  const { id } = location.state;

  const [issue, setIssue] = useState<IssueType>({
    user: {
      login: "",
    },
    html_url: "",
    title: "",
    created_at: "",
    comments: 0,
    body: "",
  });

  useEffect(() => {
    const fetchIssue = async () => {
      await api
        .get(`/repos/leonardobap/ignite-github-blog/issues/${id}`)
        .then((result) => {
          const { data } = result;

          setIssue(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (id) fetchIssue();
  }, [id]);

  return (
    <AboutIssueContainer>
      <IssueSummary
        user={issue.user}
        html_url={issue.html_url}
        title={issue.title}
        created_at={issue.created_at}
        comments={issue.comments}
      />

      <IssueContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueContent>
    </AboutIssueContainer>
  );
}
