import Link from "next/link";
const Users = () => {
  const usuarios = [
    {id:1,name:'paco1'},
    {id:2,name:'paco2'},
    {id:3,name:'paco3'},
    {id:4,name:'paco4'},
  ]
  return (
    <div>
      <h1>Users</h1>
      <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    </div>
  );
};
export default Users;
