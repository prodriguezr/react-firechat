import {
  AuthProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

interface Props {
  children?: React.ReactNode;
}

export const FirebaseServices = ({ children }: Props) => {
  const app = useFirebaseApp();

  // Configuring Firebase Services
  const auth = getAuth(app);
  const db = getFirestore(app);
  const store = getStorage(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={db}>
        <StorageProvider sdk={store}>{children}</StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
};
