import { Route, Routes } from 'react-router';
import { RootLayout, PublicLayout, AdminLayout, AuthLayout } from './layouts';
import { DashboardPage, ProfilePage, ChatPage } from './pages/admin';
import { LoginPage, RegisterPage } from './pages/auth';
import { HomePage, NotFoundPage } from './pages/public';
// ... imports de layouts y páginas

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Rutas Públicas */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Rutas Protegidas/Privadas */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>

        {/* Rutas de Autenticación */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
