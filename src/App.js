import { Container } from '@material-ui/core';
import './App.scss';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousal />
      <Trending />
    </div>
  );
}

export default App;
