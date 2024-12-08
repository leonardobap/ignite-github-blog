import { UserSummaryHeader, UserInfos, IconesContainer } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "../../fontAwesome";

import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface User {
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
  name: string;
  html_url: string;
}

export function UserSummary() {
  const [user, setUser] = useState<User>({
    avatar_url: "",
    bio: "",
    company: "",
    followers: 0,
    login: "",
    name: "",
    html_url: "",
  });

  async function fetchUser() {
    await api.get("/users/leonardobap").then((result) => {
      const { data } = result;

      setUser(data);
    });
  }

  const redirectUser = () => {
    window.open(user.html_url, "_blank");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserSummaryHeader>
      <img src={user.avatar_url} />

      <UserInfos>
        <header>
          <h1>{user.name}</h1>

          <button onClick={redirectUser}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </header>

        <div>{user.bio}</div>

        <IconesContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{user.login}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{user.company}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{user.followers} seguidores</p>
          </div>
        </IconesContainer>
      </UserInfos>
    </UserSummaryHeader>
  );
}
