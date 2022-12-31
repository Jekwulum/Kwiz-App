import './App.css';
import Dashboard from "./pages/Dashboard";
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <div className='flex'>
      <SideMenu />
      <Dashboard />
    </div>
  );
}

export default App;
