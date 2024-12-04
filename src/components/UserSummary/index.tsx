import {
  UserImage,
  UserSummaryHeader,
  UserStatsDisplay,
  FontAwesomeIcons,
  IconRedirectUser,
} from "./styles";

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
      <UserImage>
        <img src={user.avatar_url} alt="" />
      </UserImage>

      <UserStatsDisplay>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>

        <FontAwesomeIcons>
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
            <p>{user.followers}</p>
          </div>
        </FontAwesomeIcons>
      </UserStatsDisplay>

      <IconRedirectUser onClick={() => redirectUser()}>
        <a>
          <p>GITHUB</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </IconRedirectUser>
    </UserSummaryHeader>
  );
}
