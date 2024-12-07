import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  body: string;
  comments: number;
  created_at: string;
  id: number;
  title: string;
  url: string;
}

interface IssueContextType {
  issues: Issue[];
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues() {
    await api
      .get("/search/issues", {
        params: {
          q: "repo:leonardobap/ignite-github-blog is:issue",
        },
      })
      .then((result) => {
        const { items } = result.data;

        setIssues(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
}
