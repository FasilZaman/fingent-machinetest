import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage';
import Listproductpage from './Pages/Listproductpage';
import Products from './Context/Productcontext';

function App() {
  return (
    <div className="App">
      <Products >
        <Router>
          <Routes>
            <Route path='/' element={<Landingpage type='add' />} />
            <Route path='/removeproduct' element={<Landingpage type='remove' />} />
            <Route path='/productlist' element={<Listproductpage />} />
          </Routes>
        </Router>
      </Products>
    </div>
  );
}

export default App;
