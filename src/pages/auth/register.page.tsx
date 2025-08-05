import CardFooterAuth from '@/components/auth-footer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { useAuthActions } from '@/hooks';

export const RegisterPage = () => {
  const { loading } = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Register</CardTitle>
        <CardDescription className="text-sm">
          Register to your account using your email and password or your Google
          account
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth type="register" loading={loading} />
    </Card>
  );
};
