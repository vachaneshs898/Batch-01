
import './App.css';
import Leftsidelink from './Leftside/Leftsidelink';
import Middle from './Middle/Middle';
import Navbar from './Navbar';
import Rightside from './Rightside/Rightside';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-section'>
        <Leftsidelink />
        <Middle />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
