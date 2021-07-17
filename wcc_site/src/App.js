import './App.css';
import { BrowserRouter } from 'react-router-dom';

//Imported Components 
import Header from './Components/Header'
import Render from './Components/Render';
import UnderMaint from './Components/UnderMaint';

function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
        <Header/>
        <Render/>
      </BrowserRouter>
      */}
      <UnderMaint/>
      </div>
  );
}

export default App;
