import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';

function App() {
  const [allRoutes, setAllroutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllroutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
