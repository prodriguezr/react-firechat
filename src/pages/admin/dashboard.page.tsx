import { Button } from '@/components/ui/button';
import { useAuthActions } from '@/hooks';
import { useUser } from 'reactfire';

export const DashboardPage = () => {
  const { data: user } = useUser();
  const { logout } = useAuthActions();

  return (
    <div className="container mx-auto p-4">
      <h1>Dashboard Page</h1>
      <p>Welcome {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <Button variant="destructive" onClick={() => logout()}>
        Sign out
      </Button>
    </div>
  );
};
