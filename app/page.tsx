export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users: string[] = await res.json();
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </div>
  );
}
