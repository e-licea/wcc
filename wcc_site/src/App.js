import './App.css';
import { BrowserRouter } from 'react-router-dom';

//Imported Components 
import Header from './Components/Header'
import Render from './Components/Render';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Render/>
      </BrowserRouter>
    </div>
  );
}

export default App;
