import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={ <Pages.LandingPage />} />
          <Route path='/station' element={ <Pages.StationPage isDeveloper={false} /> } />
          <Route path='/developers' element={ <Pages.StationPage isDeveloper={true} /> } />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
