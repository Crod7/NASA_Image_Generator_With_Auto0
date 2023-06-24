import './css/App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
