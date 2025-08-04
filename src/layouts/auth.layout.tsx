import { Navigate, Outlet } from 'react-router';
import { useSigninCheck } from 'reactfire';

export const AuthLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  if (status === 'loading' || !hasEmitted) {
    return <div>Loading...</div>;
  }

  if (status === 'success' && signInCheckResult.signedIn) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
