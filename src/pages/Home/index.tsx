import { CardIssue } from "../../components/CardIssue";
import { SearchIssues } from "../../components/SearchIssues";
import { UserSummary } from "../../components/UserSummary";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <UserSummary />
      <SearchIssues />
      <CardIssue />
    </HomeContainer>
  );
}
