import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function GitHub({shouldRender}) {
  if(shouldRender) {
    return (
      <h2>add username as param in url after /github/</h2>
    );
  }

  // const data = useLoaderData();
  const {username} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
  }, []);


  return (
    <div className="flex text-3xl bg-gray-700 text-white">
      <img src={data.avatar_url} alt={data.username} style={{height: 300}} />
      <div>
      <div>Name: {username}</div>
      <br />
      <div>Followers: {data.followers}</div>
      </div>
    </div>
  );
}

// export const githubDataLoader = async () => {
//   const res = await fetch(`https://api.github.com/users/torvalds`);
//   return res.json();
// }