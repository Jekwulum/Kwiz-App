import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accounts from './pages/Accounts';
import Analytics from './pages/Analytics';
import Dashboard from "./pages/Dashboard";
import Files from './pages/Files';
import Home from './pages/Home';
import Inbox from "./pages/Inbox";
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import Search from './pages/Search';
import Settings from './pages/Settings';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        {["/", "/home"].map(path => <Route path={path} element={<Home />} />)}
        {["/dashboard"].map(path => <Route path={path} element={<Dashboard />} />)}
        {/* implement secure routes and dashboard and home page */}
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
