import './App.css';
import { BrowserRouter } from 'react-router-dom';

//Imported Components 
import Header from './Components/Header'
import Render from './Components/Render';
import UnderMaint from './Components/UnderMaint';

//Imported CSS
import 'animate.css';

function App() {
  return (
    <div className="App">
     {/* 
      <UnderMaint/>
      */}
      <BrowserRouter>
        <Header/>
        <Render/>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
