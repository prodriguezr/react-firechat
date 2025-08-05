import AuthFooter from '@/components/auth-footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuthActions } from '@/hooks';

export const LoginPage = () => {
  const { loading } = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Login</CardTitle>
        <CardDescription className="text-sm">
          Login to your account using your email and password or your Google
          account
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <AuthFooter type="login" loading={loading} />
    </Card>
  );
};
