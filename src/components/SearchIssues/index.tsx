import { useContext } from "react";
import { SearchIssuesContainer } from "./styled";
import { IssuesContext } from "../../contexts/IssuesContext";

export function SearchIssues() {
  const { issues, fetchIssues } = useContext(IssuesContext);

  const handleSearchIssue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.target as HTMLFormElement;
    const search = input.querySelector("input")?.value;

    fetchIssues(search);
  };

  return (
    <SearchIssuesContainer onSubmit={handleSearchIssue}>
      <div>
        <h1>Publicações</h1>
        <span>{issues.length} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchIssuesContainer>
  );
}
