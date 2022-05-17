import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './Pages/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage  type='add' />} />
          <Route path='/removeproduct' element={<Landingpage type='remove' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
