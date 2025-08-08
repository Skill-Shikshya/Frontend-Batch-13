import { useDataFetch } from "../../hooks/useDataFetch";

function Users() {
  const [users] = useDataFetch({ needsAuth: true, url: "kasjdnkdas" });

  return <div>Users</div>;
}

export default Users;
