import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/sonner';

export const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};
