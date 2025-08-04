import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth } from 'reactfire';

export const RegisterPage = () => {
  const auth = useAuth();

  const handleClickGoogle = async () => {
    console.log('Clicked Google');

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      console.log('Signed in with Google');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleClickGoogle}>Sign in Google</button>
    </div>
  );
};
