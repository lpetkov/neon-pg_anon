import { PrismaClient } from '@prisma/client';

// Define the Prisma Client
const prisma = new PrismaClient();

// Define the User type to match your Prisma model
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  hobby: string;
}

export default async function Home() {
  // Fetch users from the database
  const users: User[] = await prisma.user.findMany();

  return (
    <div>
      <h1>User List</h1>
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
