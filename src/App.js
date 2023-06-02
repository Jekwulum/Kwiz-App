import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import tokenHelper from './utils/helpers/tokenHelper';

import Accounts from './pages/Accounts';
import Analytics from './pages/Analytics';
import Files from './pages/Files';
import Home from './pages/Home';
import Inbox from "./pages/Inbox";

import Schedule from './pages/Schedule';
import Search from './pages/Search';
import Settings from './pages/Settings';

import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import QuizPage from './pages/QuizPage';
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
        <Route exact path='/quiz-page' element={<QuizPage />} />
        {["/", "/home"].map((path, index) => <Route exact path={path} element={<Home />} key={index} />)}

        {/* Secure routes */}
        <Route exact path='/dashboard' element={<ProtectedRoute Component={Dashboard} />} />
        <Route exact path='/accounts' element={<ProtectedRoute Component={Accounts} />} />
        <Route exact path='/analytics' element={<ProtectedRoute Component={Analytics} />} />
        <Route exact path='/files' element={<ProtectedRoute Component={Files} />} />
        <Route exact path='/inbox' element={<ProtectedRoute Component={Inbox} />} />
        <Route exact path='/schedule' element={<ProtectedRoute Component={Schedule} />} />
        <Route exact path='/search' element={<ProtectedRoute Component={Search} />} />
        <Route exact path='/settings' element={<ProtectedRoute Component={Settings} />} />
      </Routes>
    </Router>
  );
}

export default App;
