import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type AuthError,
} from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from 'reactfire';

interface AuthActionResult {
  success: boolean;
  error?: AuthError | null | undefined;
}

export const useAuthActions = () => {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  const login = async (data: {
    email: string;
    password: string;
  }): Promise<AuthActionResult> => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);

      return { success: true };
    } catch (e) {
      const authError = e as AuthError;
      return { success: false, error: authError };
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<AuthActionResult> => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      return { success: true };
    } catch (e) {
      const authError = e as AuthError;
      return { success: false, error: authError };
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: {
    email: string;
    password: string;
    displayName?: string;
  }): Promise<AuthActionResult> => {
    try {
      setLoading(true);

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (userCredentials.user && data.displayName) {
        await updateProfile(userCredentials.user, {
          displayName: data.displayName,
        });
      }

      return { success: true };
    } catch (e) {
      const authError = e as AuthError;
      return { success: false, error: authError };
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<AuthActionResult> => {
    try {
      setLoading(true);

      await signOut(auth);

      return { success: true };
    } catch (e) {
      const authError = e as AuthError;
      return { success: false, error: authError };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
    logout,
    register,
    loginWithGoogle,
  };
};
