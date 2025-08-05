import { useAuthActions } from '@/hooks';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Link } from 'react-router';

interface Props {
  loading: boolean;
  type: 'login' | 'register';
}

const AuthFooter = ({ loading, type }: Props) => {
  const isLogin = type === 'login';

  const { loginWithGoogle } = useAuthActions();

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      console.log('Login successful');
    } else {
      console.error('Login failed:', result.error);
    }
  };

  return (
    <CardFooter className="flex flex-col items-center gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={handleLoginWithGoogle}
        disabled={loading}
      >
        <Mail className="mr-2" />
        {isLogin ? 'Login with Google' : 'Register with Google'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link to={isLogin ? '/auth/register' : '/auth/login'}>
          <Button variant="link" className="p-0 h-auto font-normal">
            {isLogin ? 'Register' : 'Sign in'}
          </Button>
        </Link>
      </p>
    </CardFooter>
  );
};
export default AuthFooter;
