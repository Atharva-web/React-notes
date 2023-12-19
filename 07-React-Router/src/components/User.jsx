import {useParams} from "react-router-dom";

export default function User() {
  const {userId} = useParams();
  return (
    <h1 className="bg-gray-500 text-white text-center text-3xl">User: {userId} </h1>
  );
}