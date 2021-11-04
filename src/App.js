import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import Navbar from './component/Navbar';

const App = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
  );
}

export default App;
