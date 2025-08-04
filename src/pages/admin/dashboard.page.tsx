import { useAuth, useUser } from 'reactfire';

export const DashboardPage = () => {
  const auth = useAuth();
  const { data: user } = useUser();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};
