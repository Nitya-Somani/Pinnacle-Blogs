import { useLoaderData } from "react-router-dom";


const Github = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
    <div className="bg-orange-500 p-8 rounded-lg shadow-md max-w-xl w-full mx-auto mb-4">
      <img
        src={data.avatar_url}
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-white mb-2 text-center">
        {data.name || data.login}
      </h1>
      <p className="text-white text-center">{data.bio}</p>
    </div>
    <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Followers</h2>
          <p className="text-gray-600">{data.followers}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Following</h2>
          <p className="text-gray-600">{data.following}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Public Repositories</h2>
        <p className="text-gray-600">{data.public_repos}</p>
      </div>
    </div>
  </div>
  );
};

export default Github;


export const githubLoader = async function () {
  const dataFetched = await fetch("https://api.github.com/users/Nitya-Somani");

  return await dataFetched.json();
};
