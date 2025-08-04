import { Button } from '@/components/ui/button';
import { useAuthActions } from '../../hooks';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';

export const LoginPage = () => {
  const { loginWithGoogle } = useAuthActions();

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle();

    if (!result.success) {
      toast.error(result.error?.message || 'Login failed');
    }
  };

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
      <CardFooter>
        <Button className="w-full" onClick={handleLoginWithGoogle}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};
