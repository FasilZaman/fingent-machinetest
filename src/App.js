import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './Pages/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listproductpage from './Pages/Listproductpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage  type='add' />} />
          <Route path='/removeproduct' element={<Landingpage type='remove' />} />
          <Route path='/productlist' element={<Listproductpage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
