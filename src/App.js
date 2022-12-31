import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accounts from './pages/Accounts';
import Analytics from './pages/Analytics';
import Dashboard from "./pages/Dashboard";
import Files from './pages/Files';
import Inbox from "./pages/Inbox";
import Schedule from './pages/Schedule';
import Search from './pages/Search';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {["/", "/dashboard", "/home"].map(path => <Route path={path} element={<Dashboard />} />)}
        <Route exact path='/accounts' element={<Accounts />} />
        <Route exact path='/analytics' element={<Analytics />} />
        <Route exact path='/files' element={<Files />} />
        <Route exact path='/inbox' element={<Inbox />} />
        <Route exact path='/schedule' element={<Schedule />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
