import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import tokenHelper from './utils/helpers/tokenHelper';

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

  const ProtectedRoute = ({ Component }) => {
    if (tokenHelper.checkIfLoggedIn()) return <Component />
    return <Navigate to='/login' />
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        {["/", "/home"].map(path => <Route exact path={path} element={<Home/>} />)}

        {/* Secure routes */}
        <Route exact path='/dashboard' element={<ProtectedRoute Component={Dashboard} />} />
        <Route exact path='/accounts' element={<ProtectedRoute Component={Accounts} />} />

        {/* <IsLoggedInRoute exact path='/accounts' element={<Accounts />} />
        <IsLoggedInRoute exact path='/analytics' element={<Analytics />} />
        <IsLoggedInRoute exact path='/files' element={<Files />} />
        <IsLoggedInRoute exact path='/inbox' element={<Inbox />} />
        <IsLoggedInRoute exact path='/schedule' element={<Schedule />} />
        <IsLoggedInRoute exact path='/search' element={<Search />} />
        <IsLoggedInRoute exact path='/settings' element={<Settings />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
