import { Routes, Route } from 'react-router-dom';
import Destinations from './routes/destination/destination.component';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="destination/" element={<Destinations />}>
          <Route index path="moon" />
          <Route path="mars" />
          <Route path="europe" />
          <Route path="titan" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
