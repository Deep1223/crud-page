import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddPage from './component/AddPage';
import EditPage from './component/EditPage';
import Home from './component/Home';
import ViewPage from './component/ViewPage';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addpage' element={<AddPage />} />
          <Route path='/editpage' element={<EditPage />} />
          <Route path='/viewpage' element={<ViewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
