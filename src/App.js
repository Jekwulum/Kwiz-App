import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accounts from './pages/Accounts';
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
// import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <Router>
      <Routes>
        {["/", "/dashboard", "/home"].map(path => <Route path={path} element={<Dashboard />} />)}
        <Route exact path='/inbox' element={<Inbox />} />
        <Route exact path='/accounts' element={<Accounts />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
