import { Auth } from './pages/Routes/AuthRoutes';
import { Layout } from './pages/Routes/LayoutRoutes';
import { useAuth } from './providers/useAuth';
import Loader from './components/Loader/index';

export const App = () => {
  const { user, loading } = useAuth()

  if(loading) return <Loader />

  return user ? <Layout /> : <Auth />
}