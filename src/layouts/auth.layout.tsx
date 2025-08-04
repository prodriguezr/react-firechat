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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full">
        <Outlet />
      </div>
    </div>
  );
};
