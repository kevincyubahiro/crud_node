import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Insert from './Insert'
import Select from './Select'
import Notfund from './notfund';
import Update from './update';
import Navigation from './navigation';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Navigation/>} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/select" element={<Select />} />
        <Route path="*" element={<Notfund />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </Router>
  );
}
export default App;
