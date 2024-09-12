import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <h1>User List</h1>
      <table border="1">
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

