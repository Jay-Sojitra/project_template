import './App.css';
import Card1 from './components/Card1';
import Marketplace from './components/Marketplace';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Card1 />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
