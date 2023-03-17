import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Characters/>} />
    </Routes>
  );
}

export default App;
