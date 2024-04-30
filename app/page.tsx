"use client";

import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query user {
    users {
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;

  console.log(data);

  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}
