import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home';
import Sidebar from './Components/Pages/Sidebar';

function App() {
  return (
    <div className="App">
    
      <div className="navbar">
        <Navbar />
      </div>

      <div className='main-sections'>
      <Home />
      </div>
    
      <div className='sidebar'>
      <Sidebar />
      </div>
    
    </div>
  );
}

export default App;
