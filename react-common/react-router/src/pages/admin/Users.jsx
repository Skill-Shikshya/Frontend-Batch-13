import { useDataFetch } from "../../hooks/useDataFetch";

function Users() {
  const [users] = useDataFetch("users", []);

  return <div>Users</div>;
}

export default Users;
