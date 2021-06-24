import './App.scss';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
import Sidebars from './components/Sidebars';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Carousal />
        <Trending />
        <Sidebars />
    </div>
  );
}

export default App;