"use client";

import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GET {
    getUsers {
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  console.log(data);

  return (
    <main className="grid grid-cols-5 gap-3 m-5">
      {data.getUsers.map((user: any) => (
        <div className="bg-green-300 p-5 rounded-lg mt-4">
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}
