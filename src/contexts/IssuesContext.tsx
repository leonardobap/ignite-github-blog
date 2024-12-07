import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  body: string;
  comments: number;
  created_at: string;
  number: number;
  title: string;
  url: string;
}

interface IssueContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues(query?: string) {
    let baseUrl = 'repo:leonardobap/ignite-github-blog is:issue';

    if (query) baseUrl = `repo:leonardobap/ignite-github-blog is:issue ${query}`

    await api
      .get("/search/issues", {
        params: {
          q: baseUrl,
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
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}
