import { useState } from 'react';
import './App.css';

// import pages
import HomePage from './pages/HomePage';

function App() {
  const [view, setView] = useState(HomePage);
  
  return (
    <div className="App">
      <Navbar changeView={setView}/>
      <view />
    </div>
  );
}

export default App;
