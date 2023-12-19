import {useParams} from "react-router-dom";

export default function UserGitHubInfo() {
  const {username} = useParams();
  console.log(username);
  return (
    <div>{username}</div>
  );
}
