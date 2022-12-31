import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";
// import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
