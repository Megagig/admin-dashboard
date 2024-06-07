import { useState } from 'react';
import Router from './router/Router';

function App() {
  const [allRoutes, setAllroutes] = useState([]);
  return <Router allRoutes={allRoutes} />;
}

export default App;
