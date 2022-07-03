import { Auth } from './pages/Routes/AuthRoutes';
import { Layout } from './pages/Routes/LayoutRoutes';
import { useAuth } from './providers/useAuth';
import './App.css'



export const App: React.FunctionComponent = () => {
  const { token  } = useAuth()

  return token ? <Layout /> : <Auth />
}