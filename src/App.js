import { Routes, Route } from 'react-router-dom';
import Crew from './routes/crew/crew.component';
import Destinations from './routes/destination/destination.component';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Technology from './routes/technology/technology.styles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destinations />}/>
        <Route path="crew" element={<Crew/>}/>
        <Route path="technology" element={<Technology/>}/>
      </Route>
    </Routes>
  );
}

export default App;
