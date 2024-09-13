import pgp from "pg-promise";

const pgpInstance = pgp();
const db = pgpInstance(process.env.DATABASE_URL ?? 'unknown');

export const dynamic = 'force-dynamic';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  hobby: string;
}

export default async function Home() {
  // Fetch users from the database
  const users = await db.query<User[]>('SELECT * FROM "User"');

  return (
    <div className="container">
      <div className='anon' />
      <div>This is going to be anonymized</div>
      <table border={1}> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.hobby}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
