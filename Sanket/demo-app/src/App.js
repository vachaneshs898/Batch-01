import './App.css';
import Leftside from './Components/Leftside/leftside';
import Middle from './Components/Middle/Middle';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className='main_content'>
      <Nav />
      <div className='content'>
        <Leftside />
        <Middle />
      </div>
    </div>

  );
}

export default App;
