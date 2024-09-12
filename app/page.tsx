import { PrismaClient } from '@prisma/client';

// Define the Prisma Client
const prisma = new PrismaClient();

// Define the User type to match your Prisma model
interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  // Fetch users from the database
  const users: User[] = await prisma.user.findMany();

  return (
    <div>
      <h1>User List</h1>
      <table border={1}> {/* Fix the border attribute */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
